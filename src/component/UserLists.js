import useFetch from "./customHooks/useFetch";
import useLogger from "./customHooks/useLogger";

const UserLists = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/users')
    useLogger(data)
    return (
        <div>
            {data && data.map((value, index)=>(
                <div key={value.id}>
                    <p><b>ID: </b> {value.id}</p>
                    <p><b>Name: </b> {value.name}</p>
                    <p><b>Email: </b> {value.email}</p>
                </div>
            ))}

        </div>
    );
};

export default UserLists;