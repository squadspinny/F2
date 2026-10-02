import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../../types';
import { getCalculatorPath, getCalculatorSlug } from '../../utils/slugs';

export interface BreadcrumbItem {
  label: string;
  page?: PageRoute;
  calcId?: string;
  path?: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (page: PageRoute, calcId?: string) => void;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  // Prevent duplicate Home item if passed by caller
  const normalizedItems = items.filter(
    (item, index) => !(index === 0 && item.label.trim().toLowerCase() === 'home')
  );

  const getItemHref = (item: BreadcrumbItem): string => {
    if (item.path) return item.path;
    if (item.href) return item.href;
    if (item.calcId) return getCalculatorPath(item.calcId);
    if (!item.page || item.page === 'home') return '/';
    return `/${item.page}`;
  };

  const getItemCanonicalUrl = (item: BreadcrumbItem): string => {
    if (item.path) {
      const clean = item.path.replace(/^\//, '');
      return `https://scorecalculator.net/${clean}`;
    }
    if (item.href) {
      const clean = item.href.replace(/^\//, '');
      return `https://scorecalculator.net/${clean}`;
    }
    if (item.calcId) return `https://scorecalculator.net/${getCalculatorSlug(item.calcId)}`;
    if (!item.page || item.page === 'home') return 'https://scorecalculator.net/';
    return `https://scorecalculator.net/${item.page}`;
  };

  // Generate JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://scorecalculator.net/'
      },
      ...normalizedItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: getItemCanonicalUrl(item)
      }))
    ]
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 sm:mb-6 bg-white border border-gray-200 rounded-[1px] px-3 py-2.5 sm:px-6 sm:py-3 text-[11px] text-gray-500 uppercase tracking-wider overflow-x-auto no-scrollbar"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center flex-nowrap sm:flex-wrap gap-1.5 sm:gap-2 whitespace-nowrap sm:whitespace-normal min-w-max sm:min-w-0">
        <li className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            to="/"
            onClick={() => onNavigate?.('home')}
            className="hover:text-blue-600 transition-colors font-medium cursor-pointer py-0.5"
          >
            Home
          </Link>
        </li>

        {normalizedItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5 sm:gap-2 shrink-0 sm:shrink">
            <span className="text-gray-300 select-none">/</span>
            {item.isCurrent || (!item.page && !item.calcId && !item.path && !item.href) ? (
              <span 
                className="text-gray-900 font-bold max-w-[200px] sm:max-w-xs md:max-w-none truncate sm:overflow-visible block py-0.5" 
                aria-current="page"
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={getItemHref(item)}
                onClick={() => onNavigate?.(item.page || 'calculator', item.calcId)}
                className="hover:text-blue-600 transition-colors font-medium cursor-pointer max-w-[150px] sm:max-w-xs md:max-w-none truncate sm:overflow-visible block py-0.5"
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

