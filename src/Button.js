import "./App.css"

const Button = (props) => {
    return (
        <>
            <button onClick={() => props.updateCount(1)}>+</button>
            <button onClick={() => props.updateCount(-1)}>-</button>
        </>
    )
}
export default Button