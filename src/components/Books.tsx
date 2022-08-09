import { motion } from "framer-motion";
import { books, booksWrapper } from "variants";

const Books = ({ className, imageUrl, animationSpeed }) => {
  return (
    <motion.div variants={booksWrapper} className={className}>
      <motion.img custom={animationSpeed} variants={books} className="books" src={imageUrl} />
    </motion.div>
  );
};

export default Books;
