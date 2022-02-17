import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/counter-action";

const CounterAction = () => {



    const dispatch = useDispatch();

    const handlePlus = () => {
        console.log("PLUS");
        /* paramètre ici = le step */
        dispatch(increment(1))
    }
    const handleMoins = () => {
        console.log("MOINS");
    }

    return (
        <div>
            <button onClick={handlePlus}>+++</button>
            {" "}
            <button onClick={() => dispatch(decrement(1))}>---</button>
        </div>
    )
}

export default CounterAction;