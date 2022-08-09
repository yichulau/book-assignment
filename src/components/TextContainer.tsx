import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <>
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="textContainer">

        <div className="textContainer-top">
          <motion.span variants={fadeIn()} className="text-green-600 ">
            Find Your Inner Mantra
          </motion.span>
          <motion.span variants={fadeIn()} className="first-letter:text-5xl">
            "Education is the <br/>Kindling of a Flame"
          </motion.span>
        </div>

        <div className="textContainer-middle">
          <motion.span variants={fadeIn()} initial="initial" animate="animate">
            Books
          </motion.span>
        </div>

        <div className="textContainer-bottom ">
          <motion.p variants={fadeIn()}>
           "Tell Me And I Forget,<br/> Teach Me And <br/> I Remember"
          </motion.p>
          <motion.p variants={fadeIn()}>
            Start <span> Learning </span> <br /> stop the slack!
          </motion.p>
        </div>
      </motion.div>
    </>
   
  );
};

export default TextContainer;
