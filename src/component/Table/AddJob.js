import {useState} from "react";

const AddJob = (props) =>{

    const {jobs, addJob} = props

    const [jobData, setJobData] = useState({id:'', name: '' , job:''})

    const {id, name , job} = jobData

    const onChangeHandler = (event) =>{
        const { name, value } = event.target
        setJobData(jobData=>({...jobData, [name]: value}))
    }

    const [error, setError] = useState('')

    const submitForm = (e) =>{
        e.preventDefault()
        if (id == ""){
            setError("Id field is not empty")
            return false;
        }
        if (name == ""){
            setError("Name is not empty")
            return false;
        }
        if (job == ""){
            setError("Job is not empty")
            return false;
        }

        let info = jobs.filter((val, index)=>{
            return val.id == id
        })
        if (info.length != 0){
            setError("Id already exists")
            return false;
        }
        setError('')
        setJobData({id:"", name:"", job: ""})
        addJob(jobData)
    }

    return(
        <div>
            <p style={{color: "red"}}>
                {error ? error : ""}
            </p>

            <form onSubmit={submitForm}>
                <div>
                    <label>Id: </label>
                    <input name={"id"} onChange={onChangeHandler} value={id} />
                </div>
                <div>
                    <label>Name: </label>
                    <input name={"name"} onChange={onChangeHandler} value={name} />
                </div>
                <div>
                    <label>Job: </label>
                    <input name={"job"} onChange={onChangeHandler} value={job} />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddJob