import { motion } from "motion/react";
import Profile from "../assets/photo_profile.jpg";

const Hero = () => {
  // animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between a childrens
        delayChildren: 0.3, // delay after start the first
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content h-full flex items-center justify-around">
        {/* Text  */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-md"
        >
          <motion.h1 variants={item} className="text-5xl font-bold">
            Hello there
          </motion.h1>
          <motion.p variants={item} className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>
          <motion.button variants={item} className="btn btn-primary">
            Book
          </motion.button>
        </motion.div>

        <div className=" w-1/3 flex items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            src={Profile}
            alt="profile"
            className="w-full h-full rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
