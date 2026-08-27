'use client';

import React, {
  useEffect,
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

        /*
         * IMPORTANT
         * Every section must have an opaque background.
         * Otherwise the previous pinned section will be
         * visible underneath it.
         */
      backgroundColor:
        style.backgroundColor || '#f5f5f5',

        /*
         * Make sure each section is above the previous one.
         * This is also reset dynamically by GSAP.
         */
        position: 'relative',

        /*
         * Do NOT use overflow:hidden here.
         * Section 3 can be taller than the viewport.
         */
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

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const [reducedMotion, setReducedMotion] =
    useState(false);

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

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        reducedMotion
      ) {
        return;
      }

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
          '[data-flow-section]'
        )
      );

      if (sections.length === 0) {
        return;
      }

      const triggers: ScrollTrigger[] = [];

      /*
       * --------------------------------------------------
       * INITIAL SECTION STACK
       * --------------------------------------------------
       *
       * Section 1 = z-index 1
       * Section 2 = z-index 2
       * Section 3 = z-index 3
       * Section 4 = z-index 4
       *
       * Therefore:
       *
       * Section 4 covers Section 3
       * Section 3 covers Section 2
       * Section 2 covers Section 1
       */
      sections.forEach((section, index) => {
        gsap.set(section, {
          position: 'relative',
          zIndex: index + 1,
        });
      });

      /*
       * --------------------------------------------------
       * PIN SECTIONS
       * --------------------------------------------------
       *
       * Every section except the last one is pinned.
       *
       * The next section comes normally from below.
       *
       * When the next section reaches the top,
       * it covers the previous section.
       */
      sections.forEach((section, index) => {
        const nextSection =
          sections[index + 1];

        /*
         * Last section must NOT be pinned.
         *
         * It should scroll normally so the user can
         * see all of its content.
         */
        if (!nextSection) {
          return;
        }

        const trigger =
          ScrollTrigger.create({
            trigger: section,

            /*
             * Start when this section reaches
             * the top of the viewport.
             */
            start: 'top top',

            /*
             * Stop pinning when the NEXT section
             * reaches the top.
             */
            endTrigger: nextSection,
            end: 'top top',

            /*
             * Pin the current section.
             */
            pin: section,

            /*
             * IMPORTANT:
             *
             * false gives the stacked/card effect.
             *
             * Section 2 covers Section 1.
             * Section 3 covers Section 2.
             * Section 4 covers Section 3.
             */
            pinSpacing: false,

            /*
             * Helps prevent a visible jump when
             * the section becomes pinned.
             */
            anticipatePin: 1,

            /*
             * Recalculate when the page layout changes.
             */
            invalidateOnRefresh: true,

            /*
             * Make sure z-index remains correct
             * after ScrollTrigger refresh.
             */
            onRefresh: () => {
              gsap.set(section, {
                zIndex: index + 1,
              });
            },
          });

        triggers.push(trigger);
      });

      /*
       * --------------------------------------------------
       * REFRESH
       * --------------------------------------------------
       *
       * Section 3 has a card grid and may be taller
       * than one viewport, so refresh after layout settles.
       */
      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener(
        'load',
        refresh
      );

      /*
       * Initial refresh after React/browser layout.
       */
      const timer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      /*
       * --------------------------------------------------
       * RESIZE OBSERVER
       * --------------------------------------------------
       *
       * If card height changes, refresh ScrollTrigger.
       */
      let resizeObserver:
        | ResizeObserver
        | null = null;

      if (
        typeof ResizeObserver !==
        'undefined'
      ) {
        resizeObserver =
          new ResizeObserver(() => {
            ScrollTrigger.refresh();
          });

        sections.forEach((section) => {
          resizeObserver?.observe(
            section
          );
        });
      }

      /*
       * --------------------------------------------------
       * CLEANUP
       * --------------------------------------------------
       */
      return () => {
        window.removeEventListener(
          'load',
          refresh
        );

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
