import {useState} from "react";
import "./App.css"
import Button from "./Button"
import Counter from "./Counter";

const App = () => {
    const [count, setCount] = useState(0)

    const handleCount = (value) => {
        setCount(count + value)
    }
    return (
        <div className='container'>
            <Counter count={count}/>
            <div>
                <Button sign='+' updateCount={() => handleCount(1)}/>
                <Button sign='-' updateCount={() => handleCount(-1)}/>
            </div>
        </div>
    );
}

export default App;