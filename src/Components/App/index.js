import "./style.css"
import Button from "../Button"
import Index from "../Score";
import {useLocalStorage} from "../../Hooks/useLocalStorage";

const App = () => {
    const [count, setCount] = useLocalStorage('count', 0)

    const handleCount = (value) => {
        setCount(count + value)
    }

    return (
        <div className='container'>
            <Index count={count}/>
            <div>
                <Button updateCount={() => handleCount(1)}> + </Button>
                <Button updateCount={() => handleCount(-1)}> - </Button>
            </div>
        </div>
    );
}

export default App;