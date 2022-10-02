import WithCounter from "./HOC/WithCounter";
const ClickCounter = (props) => {
    const {name, incrementCount, counter} = props
    return (
        <div>
            <p>Data from HOC Component {name}</p>
            <button onClick={incrementCount}>Button click {counter} time</button>
        </div>
    );
};

export default WithCounter(ClickCounter);