import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const List = ({ questions, value, handleClick }) => {
  return (
    <TransitionGroup component="div" className="containing-all">
      {questions.map((item, index) => {
        const { id, title, info } = item;
        return (
          <CSSTransition key={index} timeout={500} classNames="alert">
            <motion.div className="ques-div" key={id} layout>
              <motion.article layout>
                <h1>{title}</h1>
                <button onClick={(e) => handleClick(index)} className="btn">
                  {index === value ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </motion.article>
              {index === value ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {info}
                </motion.p>
              ) : (
                ""
              )}
            </motion.div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
export default List;
