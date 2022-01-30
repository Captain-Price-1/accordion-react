import questions from "./data";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import List from "./List";

function App() {
  console.log("re-render initialized");
  const [value, setValue] = useState("");
  // const [info, setInfo] = useState(true);
  const handleClick = (index) => {
    if (index === value) setValue("");
    else setValue(index);
    // setInfo(!info);
  };
  return (
    <motion.div
      className={`${value !== "" ? "App" : "App active"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="information">
        Frequent Questions and Answers about the login
      </div>
      <List questions={questions} value={value} handleClick={handleClick} />
    </motion.div>
  );
}

export default App;
