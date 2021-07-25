import React from "react";
import { useDispatch } from "react-redux";
import { actionType } from "../../../redux/actions/index";

const CounterButtons: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="counter-nav">
            <button
                onClick={() => {
                    dispatch({
                        type: actionType.INCREASE
                    });
                }}
            >Incrementar</button>

            <button
                onClick={() => {
                    dispatch({
                        type: actionType.DECREASE
                    });
                }}>Decrementar</button>

            <button
                onClick={() => {
                    dispatch({
                        type: actionType.RESET
                    });
                }}
            >Resetar</button>
        </div>
    );
};

export default CounterButtons;
