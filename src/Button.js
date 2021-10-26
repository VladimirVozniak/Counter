import "./App.css"

const Button = (props) => {
    return (
        <>
            <button onClick={() => props.updateCount()}>{props.sign}</button>
        </>
    )
}
export default Button