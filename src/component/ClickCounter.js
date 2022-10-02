import WithCounter from "./HOC/WithCounter";
const ClickCounter = (props) => {
    const {name, incrementCount, counter} = props
    const incrementBy = 10;
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>Data from HOC Component {name}</p>
            <button onClick={incrementCount}>Button click {counter} time</button>
        </div>
    );
};

export default WithCounter(ClickCounter);