import classNames from "classnames/bind";
import style from "./Main.module.scss";

const cx = classNames.bind(style);

function Main() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container-quiz")}>
        <p>30</p>
        <div className={cx("question")}>
          <h1>Tác phẩm truyện Kiều của ai!</h1>
        </div>
        <div className={cx("answer")}>
          <ul className={cx("answer-list")}>
            <li>Của Nguyễn Du</li>
            <li>Của Nguyễn Ánh</li>
            <li>Của Ngôn Phi</li>
            <li>Của Hoài Tưởng</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
