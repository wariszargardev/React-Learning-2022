import JobTable from "./component/Table/JobTable";
import './App.css'
import {useState} from "react";

function App() {

    const jobData = [
        {
            id: 1,
            name: "Waris",
            job: "PHP"
        },
        {
            id: 2,
            name: "Ali",
            job: "C++"
        },
        {
            id: 3,
            name: "Ahsan",
            job: "OOP"
        },
        {
            id: 4,
            name: "Ahmad",
            job: "React"
        },
    ];

    const [jobs, setJob] = useState(jobData)

    const removeJobByRecordIndex = (deleteRecordIndex) => {
        let filterData = jobs.filter((value, index) => {
            return deleteRecordIndex != index
        });

        setJob(filterData)
    }

    const removeJobById = id => {
        let filterJobs = jobs.filter((value, index) => {
            return id != value.id
        });

        setJob(filterJobs)
    }

    const addJob = (formData) => {
        setJob(jobs=>[...jobs, formData])
    }

    return (
        <div className="App">
            <JobTable jobs={jobs} addJob={addJob} removeJobById={removeJobById} removeJobByRecordIndex={removeJobByRecordIndex}/>
        </div>
    );
}

export default App;
