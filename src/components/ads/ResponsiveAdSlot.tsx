import { useEffect, useRef, useState, type FC } from 'react';

interface ResponsiveAdSlotProps {
  id?: string;
  className?: string;
}

const DESKTOP_KEY = '247d7ad47936dabbb257c0adb9c18b1a';
const MOBILE_KEY = '7ac339688a792265f4f3b9a4cfb08101';

const getAdHtml = (key: string, width: number, height: number): string => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    var atOptions = {
      'key' : '${key}',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/${key}/invoke.js"></script>
</body>
</html>`;

export const ResponsiveAdSlot: FC<ResponsiveAdSlotProps> = ({ id, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  // Responsive device detection without layout thrashing
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const desktop = window.innerWidth >= 768;
        setIsDesktop((prev) => (prev !== desktop ? desktop : prev));
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Safe client-side ad mounting: isolated per-slot execution preventing atOptions collisions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean previous ad to avoid duplicates during Strict Mode / re-renders
    container.innerHTML = '';

    const width = isDesktop ? 728 : 300;
    const height = isDesktop ? 90 : 250;
    const key = isDesktop ? DESKTOP_KEY : MOBILE_KEY;
    const adHtml = getAdHtml(key, width, height);

    // Create an isolated iframe for this ad slot
    const iframe = document.createElement('iframe');
    iframe.title = isDesktop ? 'Desktop Advertisement' : 'Mobile Advertisement';
    iframe.width = String(width);
    iframe.height = String(height);
    iframe.style.width = `${width}px`;
    iframe.style.height = `${height}px`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.maxWidth = '100%';
    iframe.scrolling = 'no';
    iframe.setAttribute('frameBorder', '0');

    container.appendChild(iframe);

    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(adHtml);
        doc.close();
      } else {
        iframe.srcdoc = adHtml;
      }
    } catch {
      iframe.srcdoc = adHtml;
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [isDesktop]);

  return (
    <div
      id={id}
      className={`w-full my-6 flex flex-col items-center justify-center clear-both ${className}`}
    >
      <div className="w-full flex justify-center mb-1 select-none pointer-events-none">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
          Advertisement
        </span>
      </div>
      <div
        ref={containerRef}
        className="flex items-center justify-center bg-gray-50/30 border border-gray-100 rounded overflow-hidden"
        style={{
          width: isDesktop ? 728 : 300,
          height: isDesktop ? 90 : 250,
          minHeight: isDesktop ? 90 : 250,
          maxWidth: '100%'
        }}
      />
    </div>
  );
};

interface CalculatorOverviewAdProps {
  id?: string;
  className?: string;
}

export const CalculatorOverviewAd: FC<CalculatorOverviewAdProps> = ({ id, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (!wrapper) return;

    // 1. Remove any duplicate or orphaned container from the document to guarantee uniqueness
    const existingContainers = document.querySelectorAll('#container-acb66f7e79c5be4b811ca3687a4511bd');
    existingContainers.forEach((el) => el.remove());

    // 2. Remove any existing script tag for this ad to prevent duplicate executions
    const existingScripts = document.querySelectorAll('script[src*="acb66f7e79c5be4b811ca3687a4511bd"]');
    existingScripts.forEach((s) => s.remove());

    wrapper.innerHTML = '';

    // 3. Create the exact container ID expected by the network script
    const adContainer = document.createElement('div');
    adContainer.id = 'container-acb66f7e79c5be4b811ca3687a4511bd';
    wrapper.appendChild(adContainer);

    // 4. Inject the third-party script safely on the client side
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://pl31603338.profitableratecpmnetwork.com/acb66f7e79c5be4b811ca3687a4511bd/invoke.js';

    script.onerror = () => {
      // Gracefully handle ad-blocker or network issues without throwing unhandled exceptions
    };

    wrapper.appendChild(script);

    return () => {
      if (wrapper) {
        wrapper.innerHTML = '';
      }
      const leftovers = document.querySelectorAll('#container-acb66f7e79c5be4b811ca3687a4511bd');
      leftovers.forEach((el) => el.remove());
      const scripts = document.querySelectorAll('script[src*="acb66f7e79c5be4b811ca3687a4511bd"]');
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div
      id={id}
      className={`w-full my-6 flex flex-col items-center justify-center clear-both ${className}`}
    >
      <div className="w-full flex justify-center mb-1 select-none pointer-events-none">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
          Advertisement
        </span>
      </div>
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center min-h-[90px] overflow-hidden"
      />
    </div>
  );
};
