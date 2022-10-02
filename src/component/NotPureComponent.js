import React, {Component} from 'react';

class NotPureComponent extends Component {
    render() {
        console.log("*-*-*-*-*- Simple component")
        return (
            <div>
                <h1>Name from simple component: {this.props.name}</h1>
            </div>
        );
    }
}

export default NotPureComponent;