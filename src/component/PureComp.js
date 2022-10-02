import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
    render() {
        console.log("*--*-*-* Pure component render")
        return (
            <div>
                <h1>Name from pure component {this.props.name}</h1>
            </div>
        );
    }
}

export default PureComp;