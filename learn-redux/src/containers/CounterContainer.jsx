import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  //상태를 가져오는 훅

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  );
};

export default CounterContainer;
