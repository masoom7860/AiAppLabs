// Split into its own module so LazyMotion can code-split the Framer feature
// bundle (gestures, layout animations, etc.) out of the initial chunk.
export { domMax as default } from "framer-motion";
