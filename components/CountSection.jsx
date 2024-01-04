import { useState } from "react";
import { StandardButton } from "./Buttons";

export const CountSection = () => {
    const [count, setCount] = useState(0);
    const randomNumber = Math.round(Math.random() * 10 + 1);
  
    const increment = () => {
      setCount(count + 1);
    };
    const divide = () => {
      setCount(count / 2);
    };

    const incrementRandom = () => {
      setCount(count + randomNumber);
    };
    return (
        <>
        <section className="bg-orange-500 p-8 rounded-md flex flex-col items-center gap-8">
        <p>{count}</p>
        <div className="grid grid-col gap-2 border-2 border-orange-300 p-8">
        <StandardButton onclick={increment}>Increase</StandardButton>
        <StandardButton onclick={divide}>Divide</StandardButton>
        <StandardButton onclick={incrementRandom}>Random</StandardButton>
        </div>
        </section>
        </>
    )
}