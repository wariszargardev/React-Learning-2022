import WithCounter from "./HOC/WithCounter";
const ClickCounter = (props) => {
    return (
        <div>
            <p>Data from HOC Component {props.name}</p>
            <button onClick={props.incrementCount}>Button click {props.counter} time</button>
        </div>
    );
};

export default WithCounter(ClickCounter);