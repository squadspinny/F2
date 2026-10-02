import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PageRoute } from '../types';

interface DisclaimerPageProps {
  onNavigate?: (page: PageRoute, calcId?: string) => void;
}

export const DisclaimerPage: FC<DisclaimerPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs
        items={[{ label: 'Disclaimer & Non-Affiliation', isCurrent: true }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-gray-200 pb-5 space-y-2 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Disclaimer &amp; Non-Affiliation
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Last Updated: October 1, 2026
        </p>
      </header>

      <div className="-mx-2 sm:mx-0 space-y-6">
        {/* Section 1: Independent Tool */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Independent Tool
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed space-y-3.5">
            <p>
            Score Calculator is an <strong className="font-semibold text-gray-900">independent educational website.</strong> Our calculators are created independently and are not official tools of any examination board, testing agency, or educational organization.
            </p>
            <p>
              Score Calculator is <strong className="font-semibold text-gray-900">not affiliated with, sponsored by, endorsed by, or officially connected with</strong> the organizations mentioned on this website.
            </p>
          </div>
        </section>

        {/* Section 2: Score Estimates */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Score Estimates
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed space-y-3.5">
            <p>
              All scores provided by Score Calculator are  <strong className="font-semibold text-gray-900">estimates</strong> for informational and self-study purposes only. They may not match the official score given by the relevant examination organization.
            </p>
            <p>
              Exam formats, scoring methods, and score ranges can change over time. We try to keep our calculators updated, but we cannot guarantee that the results will exactly match official scores.
            </p>
            <p>
              For official scores and the latest exam information, please check the relevant examination organization's official website.
            </p>
          </div>
        </section>

        {/* Section 3: Trademark Notices */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Trademark Notices
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed space-y-3.5">
            <p>
              AP®, Advanced Placement®, and College Board® are registered trademarks of the College Board. GRE® is a registered trademark of Educational Testing Service (ETS). These names are used only to identify the exams and do not mean that Score Calculator is affiliated with or endorsed by these organizations.
            </p>
          </div>
        </section>

        {/* Section 4: Accuracy & Updates */}
        <section className="w-full">
          <div className="w-full bg-gray-50 border border-gray-200 border-l-4 border-l-blue-600 px-3 sm:px-6 py-2.5 sm:py-3.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              Accuracy &amp; Updates
            </h2>
          </div>
          <div className="w-full bg-white border border-gray-200 border-t-0 px-3 py-3.5 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed space-y-3.5">
            <p>
              We try to keep the information on ScoreCalculator.net accurate and up to date, but we cannot guarantee that all content or calculations will always be complete, current, or error-free.
            </p>
            <p>
              If you notice an issue with this page, please contact us through our{' '}
              <Link
                to="/contact"
                onClick={() => onNavigate?.('contact')}
                className="text-blue-600 hover:underline font-semibold"
              >
                Contact Us
              </Link>{' '}
              page.
            </p>
            <div className="pt-3 border-t border-gray-100">
              <p className="font-semibold text-gray-900">
                Score Calculator is an independent educational tool and is not affiliated with or endorsed by the organizations whose examinations or trademarks are referenced on this website.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
