import { useState, useEffect, useRef, useMemo, type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { allCalculators } from '../../data';
import { getCalculatorPath } from '../../utils/slugs';
import { CalculatorConfig } from '../../types';
import logoImg from '../../assets/images/logo.png';
import logoWebp from '../../assets/images/logo.webp';

interface HeaderProps {
  onOpenSearch: () => void;
}

// Clean title map adhering to student-friendly terminology
const AP_TITLE_MAP: Record<string, string> = {
  'ap-biology': 'AP Biology',
  'ap-chemistry': 'AP Chemistry',
  'ap-computer-science-a': 'AP Computer Science A',
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-physics': 'AP Physics 1',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-statistics': 'AP Statistics',
  'ap-environmental-science': 'AP Environmental Science',
  'ap-human-geography': 'AP Human Geography',
  'ap-world-history': 'AP World History',
  'ap-us-history': 'AP U.S. History',
  'ap-psychology': 'AP Psychology',
  'ap-english-language': 'AP English Language',
  'ap-english-literature': 'AP English Literature',
  'ap-macroeconomics': 'AP Macroeconomics',
  'ap-microeconomics': 'AP Microeconomics',
  'ap-us-government': 'AP U.S. Government',
  'ap-computer-science-principles': 'AP Computer Science Principles',
  'ap-precalculus': 'AP Precalculus',
};

// Priority ordering for prominent AP exams requested
const PRIORITY_AP_IDS = [
  'ap-biology',
  'ap-chemistry',
  'ap-computer-science-a',
  'ap-calculus-ab',
  'ap-physics',
];

const getCleanApTitle = (calc: CalculatorConfig): string => {
  if (AP_TITLE_MAP[calc.id]) {
    return AP_TITLE_MAP[calc.id];
  }
  return calc.title.replace(/\s*Score\s*Calculator/i, '').replace(/\s*Calculator/i, '').trim();
};

export const Header: FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileApExpanded, setMobileApExpanded] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Dynamically obtain all available AP calculators from data, keeping only those that truly exist
  const sortedApCalculators = useMemo(() => {
    const apList = allCalculators.filter((c) => c.category === 'ap');
    return [...apList].sort((a, b) => {
      const aIndex = PRIORITY_AP_IDS.indexOf(a.id);
      const bIndex = PRIORITY_AP_IDS.indexOf(b.id);
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return getCleanApTitle(a).localeCompare(getCleanApTitle(b));
    });
  }, []);

  // Smooth scroll listener to hide/show header without flickering
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Header must remain visible at the very top of the page
          if (currentScrollY <= 10) {
            setVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          // If mobile navigation drawer or dropdown is open, keep header visible
          if (mobileMenuOpen) {
            setVisible(true);
            ticking = false;
            return;
          }

          // When user scrolls DOWN from the top, smoothly hide header
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setVisible(false);
            setDesktopDropdownOpen(false);
          } else if (currentScrollY < lastScrollY.current) {
            // When user scrolls UP even slightly, immediately show header
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close desktop dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  const pathname = location.pathname;
  const searchParams = new URLSearchParams(location.search);

  const isHome = pathname === '/';
  const isAp = pathname.includes('ap-') || (pathname === '/all-calculators' && searchParams.get('category') === 'ap');
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';

  return (
    <header
      id="site-header"
      className={`bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs w-full max-w-full transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* 1. LOGO / BRAND NAME on the left - Links to Home */}
          <Link
            id="brand-logo"
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Score Calculator Home"
            title="Score Calculator"
            className="flex items-center select-none shrink-0 min-h-[44px] no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoImg}
                alt="Score Calculator"
                width="210"
                height="40"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain max-w-[190px] xs:max-w-[220px] sm:max-w-[250px]"
              />
            </picture>
          </Link>

          {/* 2. DESKTOP NAVIGATION: Home | AP Calculators ▾ | About | Contact */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
          >
            {/* Home */}
            <Link
              id="nav-home"
              to="/"
              className={`transition-colors min-h-[44px] flex items-center no-underline relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded ${
                isHome
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
              {isHome && (
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            {/* AP Calculators Dropdown */}
            <div
              ref={desktopDropdownRef}
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                id="nav-ap-dropdown-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopDropdownOpen}
                aria-controls="desktop-ap-calculators-menu"
                onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setDesktopDropdownOpen(true);
                  }
                }}
                className={`transition-colors min-h-[44px] flex items-center gap-1.5 no-underline py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded cursor-pointer ${
                  isAp || desktopDropdownOpen
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span>AP Calculators</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    desktopDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
                {isAp && (
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>

              {/* Dropdown Menu Box */}
              {desktopDropdownOpen && (
                <div
                  id="desktop-ap-calculators-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="nav-ap-dropdown-trigger"
                  className="absolute top-full left-0 mt-0.5 w-[420px] lg:w-[460px] bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 animate-fadeIn"
                >
                  <div className="px-3 py-1.5 border-b border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    <span>AP Exam Score Calculators</span>
                    <span className="text-blue-600 font-semibold lowercase">
                      {sortedApCalculators.length} available
                    </span>
                  </div>

                  {/* 2-column clean grid of calculators */}
                  <div className="p-2 grid grid-cols-2 gap-1 max-h-[360px] overflow-y-auto overscroll-contain">
                    {sortedApCalculators.map((calc) => {
                      const isActive = pathname === getCalculatorPath(calc);
                      const title = getCleanApTitle(calc);
                      return (
                        <Link
                          key={calc.id}
                          to={getCalculatorPath(calc)}
                          role="menuitem"
                          onClick={() => setDesktopDropdownOpen(false)}
                          className={`px-2.5 py-2 rounded text-xs transition-colors flex items-center justify-between no-underline ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 font-bold'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium'
                          }`}
                        >
                          <span className="truncate">{title}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* View All AP Calculators Link */}
                  <div className="border-t border-gray-100 px-2 pt-2 pb-1">
                    <Link
                      id="nav-dropdown-view-all-ap"
                      to="/all-calculators?category=ap"
                      role="menuitem"
                      onClick={() => setDesktopDropdownOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors no-underline group"
                    >
                      <span>View All AP Calculators</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              id="nav-about"
              to="/about"
              className={`transition-colors min-h-[44px] flex items-center no-underline relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded ${
                isAbout
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About
              {isAbout && (
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              id="nav-contact"
              to="/contact"
              className={`transition-colors min-h-[44px] flex items-center no-underline relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded ${
                isContact
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Contact
              {isContact && (
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          </nav>

          {/* 3. RIGHT ACTIONS: Search Modal Trigger + Mobile Menu Toggle */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search Icon Button (Desktop & Mobile) */}
            <button
              id="btn-header-search"
              type="button"
              onClick={onOpenSearch}
              aria-label="Search exam score calculators"
              title="Search calculators"
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-[5px] text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Toggle (ScoreCalculator.net | ☰) */}
            <button
              id="btn-mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[5px] text-gray-700 hover:bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg max-h-[85vh] overflow-y-auto animate-fadeIn"
        >
          {/* Home */}
          <Link
            id="mobile-nav-home"
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left px-3 py-3 rounded-[5px] text-base font-semibold min-h-[44px] flex items-center no-underline transition-colors ${
              isHome
                ? 'bg-blue-50 text-blue-700 font-bold'
                : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
            }`}
          >
            Home
          </Link>

          {/* AP Calculators (Expandable / Collapsible) */}
          <div className="rounded-[5px] overflow-hidden">
            <button
              id="mobile-nav-ap-toggle"
              type="button"
              onClick={() => setMobileApExpanded((prev) => !prev)}
              aria-expanded={mobileApExpanded}
              aria-controls="mobile-ap-calculators-submenu"
              className={`w-full text-left px-3 py-3 rounded-[5px] text-base font-semibold min-h-[44px] flex items-center justify-between no-underline transition-colors cursor-pointer ${
                isAp
                  ? 'bg-blue-50/70 text-blue-700 font-bold'
                  : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              <span>AP Calculators</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  mobileApExpanded ? 'rotate-180 text-blue-600' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Submenu of AP Calculators when expanded */}
            {mobileApExpanded && (
              <div
                id="mobile-ap-calculators-submenu"
                className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-blue-500 ml-3 my-1"
              >
                <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 overscroll-contain">
                  {sortedApCalculators.map((calc) => {
                    const isActive = pathname === getCalculatorPath(calc);
                    const title = getCleanApTitle(calc);
                    return (
                      <Link
                        key={calc.id}
                        to={getCalculatorPath(calc)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-left px-3 py-2.5 rounded-[5px] text-sm font-medium min-h-[42px] flex items-center gap-2 no-underline transition-colors ${
                          isActive
                            ? 'bg-blue-100/70 text-blue-800 font-bold'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <span className="text-blue-500 text-xs font-bold">→</span>
                        <span>{title}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* View All AP Calculators Link */}
                <Link
                  id="mobile-nav-view-all-ap"
                  to="/all-calculators?category=ap"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-3 py-2.5 rounded-[5px] text-sm font-bold text-blue-600 hover:bg-blue-50 hover:text-blue-800 min-h-[44px] flex items-center justify-between no-underline pt-2 border-t border-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    View All AP Calculators
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* About */}
          <Link
            id="mobile-nav-about"
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left px-3 py-3 rounded-[5px] text-base font-semibold min-h-[44px] flex items-center no-underline transition-colors ${
              isAbout
                ? 'bg-blue-50 text-blue-700 font-bold'
                : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
            }`}
          >
            About
          </Link>

          {/* Contact */}
          <Link
            id="mobile-nav-contact"
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left px-3 py-3 rounded-[5px] text-base font-semibold min-h-[44px] flex items-center no-underline transition-colors ${
              isContact
                ? 'bg-blue-50 text-blue-700 font-bold'
                : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
            }`}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};
