import { Component, createSignal } from "solid-js";

import "./styles.css";

interface Props {
  score: number;
}

const Score: Component<Props> = (props) => {
  const [total, setTotal] = createSignal<number>(props.score);

  const increment = () => {
    setTotal((prev) => prev + 1);
  };

  const decrement = () => {
    setTotal((prev) => prev - 1);
  };

  return (
    <div class="score-container">
      <div class="score-button" onclick={increment}>
        <img src="/assets/icon-plus.svg" alt="plus" />
      </div>
      <span>{total}</span>
      <div class="score-button" onclick={decrement}>
        <img src="/assets/icon-minus.svg" alt="minus" />
      </div>
    </div>
  );
};

export default Score;
