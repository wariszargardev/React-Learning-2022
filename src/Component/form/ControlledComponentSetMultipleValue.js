import React, {Component} from 'react';

class ControlledComponentSetMultipleValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1 : '',
            text2 : '',
            text3 : '',
        }
    }

    changeHandler = (event) => {
        let key = event.target.name
        let value = event.target.value
        this.setState({
            [key]: value
        })
    }

    render() {
        const {text1, text2, text3} = this.state

        return (
            <div>
                <form>
                    <div>
                        <label>Input 1: {text1}</label>
                        <input type={"text"}  name={"text1"} value={text1} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Input 2: {text2}</label>
                        <input type={"text"} name={"text2"} value={text2} onChange={this.changeHandler}  />
                    </div>
                    <div>
                        <label>Input 3: {text3}</label>
                        <input type={"text"} name={"text3"} value={text3} onChange={this.changeHandler}  />
                    </div>
                </form>
            </div>
        );
    }
}

export default ControlledComponentSetMultipleValue;