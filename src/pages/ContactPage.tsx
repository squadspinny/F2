import type { FC } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate?: (page: PageRoute, calcId?: string) => void;
}

export const ContactPage: FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs
        items={[{ label: 'Contact Us', isCurrent: true }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-gray-200 pb-5 space-y-2 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Contact Us
        </h1>
      </header>

      <div className="-mx-2 sm:mx-0 space-y-6">
        <section className="w-full">
          <div className="w-full bg-white border border-gray-200 px-3 py-4 sm:p-6 lg:p-7 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              We value your questions and feedback regarding our content. Please get in touch with us directly at{' '}
              <a
                href="mailto:contact@scorecalculator.net"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                contact@scorecalculator.net
              </a>{' '}
              for any inquiries or suggestions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
