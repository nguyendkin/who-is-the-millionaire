import classNames from "classnames/bind";
import Main from "../../components/Main/Main";
import QuestionTree from "../../components/QuestionTree/QuestionTree";
import style from "./DefaultLayout.module.scss";

const cx = classNames.bind(style);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <Main />
      </div>
      <div className={cx("question-tree")}>
        <QuestionTree />
      </div>
    </div>
  );
}

export default DefaultLayout;
