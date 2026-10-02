import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PageRoute } from '../types';
import { allCalculators } from '../data';
import { getCalculatorPath } from '../utils/slugs';
import { ArrowRight } from 'lucide-react';

interface SitemapPageProps {
  onNavigate?: (page: PageRoute, calcId?: string) => void;
}

export const SitemapPage: FC<SitemapPageProps> = ({ onNavigate }) => {
  const apCalculatorsList = allCalculators.filter((c) => c.category === 'ap');
  const academicCalculatorsList = allCalculators.filter((c) => c.category === 'academic');
  const gradCalculatorsList = allCalculators.filter((c) => c.category === 'grad');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs
        items={[{ label: 'HTML Sitemap', isCurrent: true }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-gray-200 pb-5 space-y-2 mb-6">
        <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Sitemap
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
          Explore all {allCalculators.length} calculators, exam guides, and helpful pages available on Score Calculator.
        </p>
      </header>

      <div className="-mx-2 sm:mx-0 space-y-6">
        {/* AP Exam Calculators */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              AP Exam Score Calculators ({apCalculatorsList.length})
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
              {apCalculatorsList.map((c) => (
                <li key={c.id}>
                  <Link
                    to={getCalculatorPath(c)}
                    onClick={() => onNavigate?.('calculator', c.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Academic Calculators */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Academic Calculators ({academicCalculatorsList.length})
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
              {academicCalculatorsList.map((c) => (
                <li key={c.id}>
                  <Link
                    to={getCalculatorPath(c)}
                    onClick={() => onNavigate?.('calculator', c.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Graduate Admissions */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Graduate Admissions ({gradCalculatorsList.length})
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
              {gradCalculatorsList.map((c) => (
                <li key={c.id}>
                  <Link
                    to={getCalculatorPath(c)}
                    onClick={() => onNavigate?.('calculator', c.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Primary Site Pages */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Platform & Legal Pages
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  onClick={() => onNavigate?.('home')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="/all-calculators"
                  onClick={() => onNavigate?.('all-calculators')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> All Calculators Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => onNavigate?.('about')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => onNavigate?.('contact')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={() => onNavigate?.('privacy')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  onClick={() => onNavigate?.('disclaimer')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> Exam Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={() => onNavigate?.('terms')}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 no-underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
