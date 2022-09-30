import React, {useState} from 'react';

const MultipleInputForm = () => {
    const [inputs, setInputs] = useState({
        text1: '',
        text2: '',
        text3: '',
    })

    const changeHandler = (e) =>{
        let name= e.target.name
        let value= e.target.value
        setInputs( inputs=>({...inputs,[name]: value}))
    }

    const {text1, text2, text3} = inputs

    return (
        <div>
            <form>
                <div>
                    <label>Input 1: {text1} </label>
                    <input type={"text"} name={"text1"} value={text1} onChange={changeHandler}  />
                </div>
                <div>
                    <label>Input 2: {text2} </label>
                    <input type={"text"} name={"text2"} value={text2} onChange={changeHandler}  />
                </div>
                <div>
                    <label>Input 3: {text3} </label>
                    <input type={"text"} name={"text3"} value={text3} onChange={changeHandler}  />
                </div>
            </form>

        </div>
    );
};

export default MultipleInputForm;