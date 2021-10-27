import "./style.css"

const Button = (props) => {
    return (
        <button onClick={props.updateCount}>{props.children}</button>
    )
}
export default Button