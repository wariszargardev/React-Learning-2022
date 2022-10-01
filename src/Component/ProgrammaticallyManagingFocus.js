import React, {Component} from 'react';

class ProgrammaticallyManagingFocus extends Component {
    constructor(props) {
        super(props);
        this.nameTextInput = React.createRef();
        this.emailTextInput = React.createRef();

        this.state={
            userName: "",
            email: ""
        }
    }

    focusUserInput = (e) =>{
        e.preventDefault()
        this.nameTextInput.current.focus()
    }

    onChangeHandler = (e) =>{
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name]: value
        })
    }

    submitForm = (e) =>{
        e.preventDefault()
        if(this.state.userName == ""){
            alert("User name is required")
            this.nameTextInput.current.focus();
            return false;
        }

        if(this.state.email == ""){
            alert("Email is required")
            this.emailTextInput.current.focus();
            return false;
        }

        alert("Thanks for registration")
        this.setState({
            userName: "",
            email: ""
        })
    }

    render() {
        const {userName, email} = this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <label htmlFor="userName">User name: </label>
                        <input
                            type="text"
                            onChange={this.onChangeHandler}
                            id={"userName"}
                            name={"userName"}
                            value={userName}
                            ref={this.nameTextInput}
                            />
                    </div>
                    <div>
                        <label htmlFor="userEmail">User email: </label>
                        <input
                            type="text"
                            onChange={this.onChangeHandler}
                            id={"userEmail"}
                            name={"email"}
                            value={email}
                            ref={this.emailTextInput}
                            />
                    </div>
                    <div>
                        <button type={"submit"}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProgrammaticallyManagingFocus;