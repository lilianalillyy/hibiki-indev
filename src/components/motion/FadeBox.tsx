import { motion } from "framer-motion";
import { Easing } from "framer-motion/types/types";
import { useMemo, useState, useEffect, PropsWithChildren, ComponentProps } from "react";
import { useInView } from "react-intersection-observer";

type JSXElements = keyof JSX.IntrinsicElements;

// todo: move
interface WithAs<T extends JSXElements> {
  as?: T;
}

interface FadeBoxProps<T extends JSXElements> extends WithAs<T> {
  yOffset?: number;
  easing?: Easing;
  viewDelay?: number;
  viewOffset?: number;
}

const FadeBox = function <T extends JSXElements>({
  // todo: fix typeerror
  as = "div",
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  viewDelay = 1,
  viewOffset = 0.15,
  ...props
}: PropsWithChildren<ComponentProps<T> & FadeBoxProps<T>>) {
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

  const Element = (motion as any)[as];

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
