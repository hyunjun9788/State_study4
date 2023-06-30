import './App.css';
import {useState} from "react";
import Input from "./components/Input";
import Content from "./components/Content";

function App() {
    const [text, setText] = useState({
        totalLength: 0,
        excludeSpace: 0,
        word: 0,
        line: 0
    });


    const noSpace = (e) => {
        setText({
                totalLength:e.target.value.length,
                excludeSpace:e.target.value.replace(/\s/g, '').length,
                word:e.target.value.trim().split(/\s+/).length,
                line:e.target.value.split('\n').length
            }
        )
    }


    return (
        <div className="App">
            <Input onChange={noSpace}/>
            <Content text={text}/>
        </div>
    );
}

export default App;
