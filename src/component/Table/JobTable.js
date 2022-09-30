import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import AddJob from "./AddJob";

const JobTable = (props) =>{
    const {jobs, removeJobByRecordIndex} = props
    return(
        <div>
            <table>
                <TableHeader />
                {/* We can pass props seprately as well as complete props to next component */}
                <TableBody {...props} />
                {/* <TableBody jobs={jobs} removeJobByRecordIndex={removeJobByRecordIndex} /> */}
            </table>

            <AddJob {...props} />
        </div>
    )
}
export default JobTable