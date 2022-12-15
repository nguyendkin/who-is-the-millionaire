import classNames from "classnames/bind";
import style from "./Main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setQuestionNumber,
  setLossGame,
  setLockTimer,
} from "../../redux/quizSlice";
import Timer from "../Timer/Timer";

const cx = classNames.bind(style);

function Main() {
  const data = useSelector((state) => state.quiz.data);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const questionTree = useSelector((state) => state.quiz.questionTree);
  const lossGame = useSelector((state) => state.quiz.lossGame);

  const dispatch = useDispatch();

  const [stateData, setStateData] = useState("");
  const [stateActive, setStateActive] = useState("");
  const [classes, setClasses] = useState("animation");
  const [winGame, setWinGame] = useState(false);
  const [moneyGame, setMoneyGame] = useState(0);
  const [lockActiveAnswer, setLockActiveAnswer] = useState(false);
  const [checkRandomData, setCheckRandomData] = useState([]);
  const [test, setTest] = useState("");

  const handleClickAnswer = (answer) => {
    // LOCK ACTIVE ANSWER MOUSE
    if (lockActiveAnswer) {
      return;
    }
    setLockActiveAnswer(true);
    setStateActive(answer);
    dispatch(setLockTimer(true));

    const delay = (time, classes, action) => {
      setTimeout(() => {
        setClasses(classes);
        if (action === "right") {
          setTimeout(() => {
            // CHECK YOU WIN ALL
            if (questionNumber === questionTree.length) {
              setWinGame(true);
            } else {
              dispatch(setQuestionNumber());
            }
            setClasses("animation");
            setLockActiveAnswer(false);
          }, 1500);
        } else {
          setTimeout(() => {
            setClasses("animation");
            dispatch(setLossGame(true));
          }, 1500);
        }
      }, time);
    };

    // CHECK ANSWER
    if (answer.correct) {
      delay(2000, "right-active", "right");
    } else {
      delay(2000, "wrong-active", "wrong");
    }
  };

  // HANDLE MONEY
  useEffect(() => {
    if (questionNumber > 1) {
      // WIN
      if (questionNumber === questionTree.length) {
        setMoneyGame(
          questionTree.find((money) => money.id === questionNumber).money
        );
        return;
      }
      // LOSE
      setMoneyGame(
        questionTree.find((money) => money.id === questionNumber - 1).money
      );
    }

    // eslint-disable-next-line
  }, [questionNumber]);

  // GET DATA
  useEffect(() => {
    let stop = 0;
    const randomNum = () => {
      let numRandom = Math.floor(Math.random() * data.length);

      console.log(checkRandomData, data[numRandom].id);

      if (!checkRandomData.includes(data[numRandom].id)) {
        if (checkRandomData.length === 0) {
          setCheckRandomData([data[numRandom].id]);
          return setStateData(data[numRandom]);
        } else {
          setCheckRandomData((pre) => [...pre, data[numRandom].id]);
          return setStateData(data[numRandom]);
        }
      } else {
        if (data.length + 1 > stop) {
          stop++;
          randomNum();
          console.log("PASS");
        }
        return;
      }
    };
    // 3 13 4 11 13 15 (15) 6
    randomNum();

    // eslint-disable-next-line
  }, [questionNumber]);

  return (
    <div className={cx("wrapper")}>
      {winGame ? (
        <div className={cx("container-quiz")}>
          <h1>You Win</h1>
          <p>Your money: {moneyGame} $</p>
        </div>
      ) : lossGame ? (
        <div className={cx("container-quiz")}>
          <h1>You Loss</h1>
          <p>Your money: {moneyGame} $</p>
        </div>
      ) : (
        <div className={cx("container-quiz")}>
          <div className={cx("timer")}>
            <Timer />
          </div>
          <div className={cx("question")}>
            <h1>{stateData?.question}</h1>
          </div>
          <div className={cx("answer")}>
            <ul className={cx("answer-list")}>
              {stateData?.answers?.map((answer) => (
                <li
                  className={stateActive === answer ? cx(classes) : {}}
                  key={answer.id}
                  onClick={() => handleClickAnswer(answer)}
                >
                  {answer.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;

// Dừng tại 6
// Do click dung nen ben kia tang len 1/ Log ban ra 3
//
