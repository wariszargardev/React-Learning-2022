import React, {Component} from 'react';

class ControlledComponents extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }

    changeFunctionValue = (e) =>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (event) =>{
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <input type={'text'} name={"name"} value={this.state.name} onChange={this.handleChange} />
            </div>
        );
    }
}

export default ControlledComponents;