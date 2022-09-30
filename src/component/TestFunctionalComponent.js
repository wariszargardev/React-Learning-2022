const TestFunctionalComponent = (props) =>{
    const {name} = props
    return(
        <div>
            <h1>Test functional component</h1>
            <p>Props: {name}</p>
        </div>
    )
}
export default TestFunctionalComponent