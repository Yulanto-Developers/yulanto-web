"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={`card-swap-card ${customClass ?? ""} ${className ?? ""}`.trim()}
      />
    );
  }
);

Card.displayName = "Card";

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  easing?: "elastic" | "linear";
  onCardClick?: (index: number) => void;
  onSwap?: (index: number) => void;
  children: React.ReactNode;
}

interface CardSlot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): CardSlot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  el: HTMLDivElement | null,
  slot: CardSlot,
  skew: number
) => {
  if (!el) return;

  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: window.innerWidth <= 480 ? -25 : window.innerWidth <= 768 ? -35 : -40,
    yPercent: -70,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

const CardSwap = ({
  width = 800,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  skewAmount = 6,
  easing = "elastic",
  onCardClick,
  onSwap,
  children,
}: CardSwapProps) => {
  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );

  const refs = useMemo(
    () =>
      childArr.map(
        () => React.createRef<HTMLDivElement>()
      ),
    [childArr.length]
  );

  /*
   * order[0] = active/front card
   * order[1] = next card
   * etc.
   */
  const order = useRef<number[]>(
    Array.from(
      { length: childArr.length },
      (_, i) => i
    )
  );

  const container = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const intervalRef = useRef<number | null>(null);

  const isPaused = useRef(false);

  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  /*
   * Click a card and make it active/front.
   */
  const activateCard = (clickedIndex: number) => {
    if (order.current[0] === clickedIndex) {
      return;
    }

    tlRef.current?.kill();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const currentOrder = [...order.current];

    const clickedPosition =
      currentOrder.indexOf(clickedIndex);

    if (clickedPosition === -1) {
      return;
    }

    const newOrder = [
      clickedIndex,
      ...currentOrder.filter(
        (index) => index !== clickedIndex
      ),
    ];

    const clickedCard =
      refs[clickedIndex].current;

    if (!clickedCard) return;

    // Trigger onSwap for the newly activated card
    onSwap?.(clickedIndex);

    const tl = gsap.timeline();

    tlRef.current = tl;

    /*
     * Move clicked card slightly forward.
     */
    tl.to(clickedCard, {
      y: "+=120",
      scale: 1.05,
      duration: 0.35,
      ease: "power2.out",
    });

    /*
     * Re-position all cards.
     */
    newOrder.forEach((index, position) => {
      const el = refs[index].current;

      if (!el) return;

      const slot = makeSlot(
        position,
        cardDistance,
        verticalDistance,
        refs.length
      );

      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          scale: 1,
          zIndex: slot.zIndex,
          duration: 0.7,
          ease: "power2.out",
        },
        position === 0 ? ">" : "<"
      );
    });

    tl.call(() => {
      order.current = newOrder;

      if (!isPaused.current) {
        startAutoSwap();
      }
    });
  };

  /*
   * Automatic card swap.
   */
  const swap = () => {
    if (isPaused.current) return;

    if (order.current.length < 2) {
      return;
    }

    const [front, ...rest] =
      order.current;

    const elFront =
      refs[front].current;

    if (!elFront) return;

    // Notify parent immediately about the card moving to front (rest[0])
    onSwap?.(rest[0]);

    const tl = gsap.timeline();

    tlRef.current = tl;

    /*
     * Move active card down.
     */
    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel(
      "promote",
      `-=${config.durDrop *
      config.promoteOverlap}`
    );

    /*
     * Move remaining cards forward.
     */
    rest.forEach((idx, i) => {
      const el = refs[idx].current;

      if (!el) return;

      const slot = makeSlot(
        i,
        cardDistance,
        verticalDistance,
        refs.length
      );

      tl.set(
        el,
        {
          zIndex: slot.zIndex,
        },
        "promote"
      );

      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.15}`
      );
    });

    /*
     * Put old active card at back.
     */
    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length
    );

    tl.addLabel(
      "return",
      `promote+=${config.durMove *
      config.returnDelay}`
    );

    tl.call(
      () => {
        gsap.set(elFront, {
          zIndex: backSlot.zIndex,
        });
      },
      undefined,
      "return"
    );

    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return"
    );

    tl.call(() => {
      order.current = [
        ...rest,
        front,
      ];
    });
  };

  /*
   * Start auto sliding.
   */
  const startAutoSwap = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current =
      window.setInterval(() => {
        swap();
      }, delay);
  };

  /*
   * Hover = pause.
   */
  const handleMouseEnter = () => {
    if (!pauseOnHover) return;

    isPaused.current = true;

    tlRef.current?.pause();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  /*
   * Mouse leave = continue.
   */
  const handleMouseLeave = () => {
    if (!pauseOnHover) return;

    isPaused.current = false;

    tlRef.current?.play();

    startAutoSwap();
  };

  useEffect(() => {
    const total = refs.length;

    refs.forEach((ref, index) => {
      placeNow(
        ref.current,
        makeSlot(
          index,
          cardDistance,
          verticalDistance,
          total
        ),
        skewAmount
      );
    });

    startAutoSwap();

    return () => {
      if (intervalRef.current) {
        clearInterval(
          intervalRef.current
        );
      }

      tlRef.current?.kill();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    delay,
    skewAmount,
    easing,
  ]);

  /*
   * Render cards.
   */
  const rendered = childArr.map(
    (child, index) => {
      if (!isValidElement(child)) {
        return child;
      }

      return cloneElement(
        child as React.ReactElement<any>,
        {
          key: index,

          ref: refs[index],

          style: {
            width,
            height,
            ...(child.props as any)
              ?.style,
          },

          onClick: () => {
            activateCard(index);

            onCardClick?.(
              index
            );
          },
        }
      );
    }
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{
        width,
        height,
      }}
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
    >
      {rendered}
    </div>
  );
};

export default CardSwap;