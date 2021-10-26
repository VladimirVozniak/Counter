import {useState} from "react";
import "./App.css"
import Button from "./Button"

const App = () => {
    const [count, setCount] = useState(0)

    const handleCount = (value) => {
        setCount(count + value)
    }
    return (
        <div className='container'>
            Count: {count}
            <div>
                <Button updateCount={(e) => handleCount(e)}/>
            </div>
        </div>
    );
}

export default App;