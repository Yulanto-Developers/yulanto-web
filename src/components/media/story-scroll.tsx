'use client';

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function cx(
  ...parts: Array<string | undefined | false | null>
): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => {
  return (
    <section
      data-flow-section
      aria-label={ariaLabel}
      className={cx(
        'relative w-full min-h-screen',
        className
      )}
      style={{
        ...style,
        backgroundColor:
          style.backgroundColor || '#f5f5f5',
        position: 'relative',
        overflow: 'visible',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <div
        data-flow-inner
        className="flow-art-container relative flex min-h-screen w-full flex-col justify-between"
      >
        {children}
      </div>
    </section>
  );
};

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const childCount = (
  children: React.ReactNode
) => React.Children.count(children);

/*
 * Below this width, the pin/stack scroll effect is
 * disabled entirely. Sections flow normally, one after
 * another, like a regular page.
 */
const MOBILE_BREAKPOINT = 992;

/*
 * Read the viewport width synchronously so the very
 * first render already knows whether we're on mobile.
 * This avoids a "flash" where GSAP briefly pins a
 * section on mobile before the effect corrects it —
 * that flash was leaving a stale pin-spacer behind and
 * breaking scroll to the final section.
 */
function getIsMobile(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.innerWidth < MOBILE_BREAKPOINT;
}

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  const [isMobile, setIsMobile] = useState(getIsMobile);

  /*
   * Reduced motion
   */
  useEffect(() => {
    const mq = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const update = () => {
      setReducedMotion(mq.matches);
    };

    update();

    mq.addEventListener('change', update);

    return () => {
      mq.removeEventListener('change', update);
    };
  }, []);

  /*
   * Mobile / narrow viewport detection.
   * useLayoutEffect so this resolves BEFORE useGSAP
   * (also a layout effect) runs on the same commit,
   * preventing any pin from ever being created on
   * mobile in the first place.
   */
  useLayoutEffect(() => {
    const mq = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const update = () => {
      setIsMobile(mq.matches);
    };

    update();

    mq.addEventListener('change', update);

    return () => {
      mq.removeEventListener('change', update);
    };
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
          '[data-flow-section]'
        )
      );

      /*
       * MOBILE / REDUCED MOTION:
       * Make 100% sure no pin, spacer, inline transform,
       * or z-index survives from a previous state. This
       * is what was silently eating the scroll height
       * and hiding the last section.
       */
      if (reducedMotion || isMobile) {
        ScrollTrigger.getAll().forEach((t) => t.kill());

        sections.forEach((section) => {
          gsap.set(section, { clearProps: 'all' });
        });

        // Force the browser to recompute document height.
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return;
      }

      if (sections.length === 0) {
        return;
      }

      const triggers: ScrollTrigger[] = [];

      sections.forEach((section, index) => {
        gsap.set(section, {
          position: 'relative',
          zIndex: index + 1,
        });
      });

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];

        if (!nextSection) {
          return;
        }

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          endTrigger: nextSection,
          end: 'top top',
          pin: section,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            gsap.set(section, {
              zIndex: index + 1,
            });
          },
        });

        triggers.push(trigger);
      });

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('load', refresh);

      const timer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      let resizeObserver: ResizeObserver | null = null;

      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          ScrollTrigger.refresh();
        });

        sections.forEach((section) => {
          resizeObserver?.observe(section);
        });
      }

      return () => {
        window.removeEventListener('load', refresh);
        window.clearTimeout(timer);
        resizeObserver?.disconnect();
        triggers.forEach((trigger) => {
          trigger.kill();
        });
        ScrollTrigger.refresh();
      };
    },
    {
      scope: containerRef,
      dependencies: [
        childCount(children),
        reducedMotion,
        isMobile,
      ],
    }
  );

  return (
    <main
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx(
        'w-full overflow-x-hidden',
        className
      )}
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {children}
    </main>
  );
};

export default FlowArt;