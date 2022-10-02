import React, {Component} from 'react';
import NotPureComponent from "./NotPureComponent";
import PureComp from "./PureComp";
import MemoCompo from "./MemoCompo";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "Muhammad Waris"
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: "Muhammad Waris"
            })
        }, 1000)
    }

    render() {
        console.log("-*-*-*-*--*--*Parent component render")
        return (
            <div>
               <NotPureComponent name={this.state.name} />
                <PureComp name={this.state.name} />
                <MemoCompo name={this.state.name} />
            </div>
        );
    }
}

export default ParentComponent;