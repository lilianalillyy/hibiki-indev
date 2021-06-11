import { motion } from "framer-motion";
import { ComponentProps, PropsWithChildren } from "react";
import { transition } from "../../tailwind";
import { FadeBox } from "../motion/FadeBox";

const HeroWrapper = ({
  hoverable = false,
  children,
  className = "",
  delayOrder,
  ...props
}: PropsWithChildren<ComponentProps<"a"> & { hoverable?: boolean; delayOrder?: number }>) => (
  <motion.div
    // delayOrder={delayOrder}
    whileHover={hoverable ? { scale: 0.98 } : {}}
    // onViewportBoxUpdate={(e) => console.log(e.x)}
    className={`w-full h-full rounded-3xl py-12 px-16 flex flex-col justify-center cursor-pointer ${className} ${transition}`}
    {...props}
  >
    {children}
  </motion.div>
);

export { HeroWrapper };
export default HeroWrapper;
