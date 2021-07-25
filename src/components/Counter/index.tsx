import React from "react";
import CounterButtons from "./Buttons";
import "./styles.css";
import CounterValue from "./CountValue";

const Counter: React.FC = () => {
    return (
        <section className="counter">
            <CounterValue />
            <CounterButtons />
        </section>
    );
};

export default Counter;
