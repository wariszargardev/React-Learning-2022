const SingleStudent =(props) =>{

    const {id, name, email, phone} = props.value

    return(
        <li>{`id: ${id} - name: ${name} - email: ${email} - phone: ${phone}`}</li>
    )

}

export default SingleStudent