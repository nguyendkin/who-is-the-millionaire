import classNames from "classnames/bind";
import { useState } from "react";
import { useSelector } from "react-redux";
import Help from "../Help/Help";
import style from "./QuestionTree.module.scss";

const cx = classNames.bind(style);

function QuestionTree() {
  const questionTree = useSelector((state) => state.quiz.questionTree);
  const [state, setState] = useState(1);

  return (
    <div className={cx("wrapper")}>
      <Help />
      <ul className={cx("question-list")}>
        {questionTree.map((ques) => (
          <li key={ques.id} className={state === ques.id ? cx("check") : {}}>
            <p>{ques.id}</p>
            <p>{ques.money}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionTree;
