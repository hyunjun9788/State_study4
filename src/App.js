import './App.css';
import {useState} from "react";

function App() {

    const [text, setText] = useState(0)

    const noSpace = (e) => {
        setText({
                totalLength:e.target.value.length,
                excludeSpace:e.target.value.replace(/\s/g, '').length
            }
        )
    }


    return (
        <div className="App">
            <textarea className='text-box' onChange={noSpace}></textarea>
            <div>공백 제외:{text.excludeSpace}</div>
            <div>공백 포함:{text.totalLength}</div>
        </div>
    );
}

export default App;
