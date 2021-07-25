import React from "react";

import { useSelector } from "react-redux";
import { IStore } from "../../../redux/store";

const CounterValue: React.FC = () => {
    const count = useSelector((store: IStore) => store.count);
    return <div className="counter-value">{ count }</div>;
};

export default CounterValue;
