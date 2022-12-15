import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLossGame } from "../../redux/quizSlice";

function Timer() {
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const lockTimer = useSelector((state) => state.quiz.lockTimer);

  const dispatch = useDispatch();

  const [timer, setTimer] = useState(30);

  const idRef = useRef();
  const desTimer = idRef.current;

  if (lockTimer) {
    clearTimeout(desTimer);
  }

  useEffect(() => {
    if (timer === 0) {
      dispatch(setLossGame(true));
    }

    const desTimerRef = setTimeout(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    idRef.current = desTimerRef;
    return () => clearTimeout(desTimerRef);
    // eslint-disable-next-line
  }, [timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}

export default Timer;
