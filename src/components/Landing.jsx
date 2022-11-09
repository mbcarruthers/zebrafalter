
const Landing = () => {
    const click = () => {
        alert("you clicked the button!");
    }
    return(
        <div className="container-fluid text-center">
            <h1>Landing</h1>
            <button className="btn btn-outline-dark" onClick={click}>oh shit</button>
        </div>
    )
}

export default Landing;