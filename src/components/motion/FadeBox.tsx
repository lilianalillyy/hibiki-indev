import { motion } from "framer-motion";
import { Easing } from "framer-motion/types/types";
import { useMemo, useState, useEffect, PropsWithChildren, ComponentProps, forwardRef } from "react";
import { useInView } from "react-intersection-observer";

type JSXElements = keyof JSX.IntrinsicElements;

// todo: move
interface WithAs {
  as?: React.FC | string;
}

interface FadeBoxProps extends WithAs {
  yOffset?: number;
  easing?: Easing;
  viewDelay?: number;
  viewOffset?: number;
  [key: string]: any;
}

const FadeBox = function ({
  // todo: fix typeerror
  as = "a",
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  viewDelay = 1,
  viewOffset = 0.15,
  ...props
}: PropsWithChildren<FadeBoxProps>) {
  const { inView, ref } = useInView({
    triggerOnce: true,
  });
  const [delay, setDelay] = useState(0.1);

  useEffect(() => {
    if (viewDelay) return setDelay(viewDelay * viewOffset);
  }, [viewDelay, viewOffset]);

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing,
    }),
    [delay, easing],
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  const Element = typeof as === "string" ? (motion as any)[as] : motion(as);

  return (
    // TODO: fix
    // @ts-ignore
    <Element ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={variants} {...props}>
      {children}
    </Element>
  );
};

export { FadeBox };
export default FadeBox;
