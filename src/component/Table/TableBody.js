const TableBody = (props) =>{
    const {jobs, removeJobByRecordIndex, removeJobById} = props
    const tableRows = jobs.map((row,index)=>{
        return(
            <tr key={index  }>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={()=> removeJobById(row.id)}>Delete by Id</button></td>
                <td><button onClick={()=> removeJobByRecordIndex(index)}>Delete by Index</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {tableRows}
        </tbody>
    )
}
export default TableBody