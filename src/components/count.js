import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/count/CountAction";

const Count = (props) => {
    const { noOfCount } = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div>Count  {noOfCount}</div>
            <button onClick={() => dispatch(increment(1))}>Increment</button><br />
            <button onClick={() => dispatch(decrement(1))}>Decrement</button><br />
            <button onClick={() => dispatch(reset(0))}>Reset</button>
        </React.Fragment>
    )
}
export default Count;