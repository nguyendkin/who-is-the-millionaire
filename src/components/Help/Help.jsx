import classNames from "classnames/bind";
import style from "./Help.module.scss";

const cx = classNames.bind(style);

function Help() {
  return (
    <div className={cx("wrapper")}>
      <button>50/50</button>
      <button>Bỏ qua câu hỏi này</button>
    </div>
  );
}

export default Help;
