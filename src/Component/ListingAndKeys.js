import SingleStudent from "./student/SingleStudent";

const ListingAndKeys = () =>{
    const students = [
        {id: 1, name: "Waris", email: "Waris@gmail.com", phone: '03086529241'},
        {id: 2, name: "Haris", email: "Haris@gmail.com", phone: '03086529242'},
        {id: 3, name: "Ali", email: "Ali@gmail.com", phone: '03086529243'},
        {id: 4, name: "Ahsan", email: "Ahsan@gmail.com", phone: '03086529244'},
    ]
    return(
        <div>
            <ul>
            {students.map((value, index)=>(
                <li key={value.id}>{value.name}</li>
            ))}


                {students.map((value, index)=>(
                    <SingleStudent key={index} value={value} />
                ))}
            </ul>
        </div>
    )
}

export default ListingAndKeys