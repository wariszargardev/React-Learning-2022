import React, {Component} from 'react';

class RefsWithClassComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state={
            name: "Muhammad Waris"
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    changeHandler = (e) =>{
        this.setState({
            name: this.inputRef.current.value
        })
    }

    render() {
        return (
            <div>
                <h1>Refs with class component set state using ref </h1>
                <input ref={this.inputRef} name={"name"} onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default RefsWithClassComponent;