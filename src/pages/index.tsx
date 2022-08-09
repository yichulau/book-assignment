import Books from "@components/Books";
import SearchBook from "@components/SearchBook";
import TextContainer from "@components/TextContainer";
import { motion } from "framer-motion";
import { Booker, bookerWrapper, bookContainer } from "variants";

export default function Home() {
  return (
    <>
        <div>
          <main>
            <TextContainer />
            
            <motion.div variants={bookerWrapper} initial="initial" animate="animate" className="bookerWrapper">
              <motion.img src="/images/incrediblebook.png" variants={Booker} className="booker" />
            </motion.div>

            <motion.div variants={bookContainer} initial="initial" animate="animate">
              <Books animationSpeed={1.8} className="booksWrapper-1" imageUrl="./images/atom1.png" />
              <Books animationSpeed={1.6} className="booksWrapper-2" imageUrl="./images/atom2.png" />
              <Books animationSpeed={1.5} className="booksWrapper-3" imageUrl="./images/atom3.png" />
              <Books animationSpeed={1.7} className="booksWrapper-4" imageUrl="./images/atom4.png" />
              <Books animationSpeed={1.8} className="booksWrapper-5" imageUrl="./images/atom2.png" />
            </motion.div>
          </main>
          <SearchBook/>
        </div>
    </>
  );
}
