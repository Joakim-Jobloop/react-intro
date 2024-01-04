import { useState,useEffect } from "react";
import "./App.css";
import Navbar from "../../components/Navigation/Navbar";


function ContactPage() {
  const [count, setCount] = useState(0);
  const boxName = "I am box";
  const randomNumber = Math.round(Math.random() * 10 + 1);

  const increment = () => {
    setCount(count + randomNumber);
  };
  const divide = () => {
    setCount(count / 2);
  };

  return (
    <>
      <Navbar />

      <main>
        <section>
          <h1>Hello world!</h1>
          <p>I am react code</p>
          <div className="box greenBg">
            <p>{boxName}</p>
          </div>
          <div className="box brownBg">
            <p>{randomNumber}</p>
          </div>
          <p>{count}</p>
          <button onClick={increment}>Increase</button>
          <button onClick={divide}>Divide</button>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
