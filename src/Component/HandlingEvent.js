const HandlingEvent = () =>{
    const name= "Muhammad Waris";

    const simpleClickEvent = () =>{
        alert("Simple click event")
    }

    const passParameterClick = (e, uname) =>{
        console.log(e.target.id)
        console.log(uname)
    }

    const submitHandler= (e)=> {
        e.preventDefault() // this will prevent not to reload page
        alert("Form submitted")

    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Handling Event</h1>
            <button onClick={simpleClickEvent}>
                Click Event
            </button>

            <button id={"simpleButton"} onClick={(e)=> passParameterClick(e, name)}>
                Pass parameter
            </button>

            <form style={{marginTop: "20px"}} onSubmit={submitHandler}>
                <button type="submit">
                    Form submission
                </button>
            </form>


        </div>
    )
}

export default HandlingEvent