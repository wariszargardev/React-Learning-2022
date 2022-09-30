import {useState} from "react";

const SingleInputForm = () =>{
    const [singleInput, setSingleInput] = useState('')

    const changeHandler = (e) => {
        setSingleInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        alert(singleInput)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Single input</label>
                    <input type={"text"} name={'singleInput'} value={singleInput} onChange={changeHandler}/>
                </div>

                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default SingleInputForm