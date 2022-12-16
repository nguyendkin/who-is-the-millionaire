import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import style from "./Help.module.scss";
import { setQuestionNumber, setShowQuestion } from "../../redux/quizSlice.js";

const cx = classNames.bind(style);

function Help() {
  const dispatch = useDispatch();

  const handleSuggestions = () => {
    dispatch(setShowQuestion(true));
  };

  const handlePassQuestion = () => {
    dispatch(setQuestionNumber());
  };

  return (
    <div className={cx("wrapper")}>
      <button onClick={handleSuggestions}>50/50</button>
      <button onClick={handlePassQuestion}>This question dismissing</button>
    </div>
  );
}

export default Help;
