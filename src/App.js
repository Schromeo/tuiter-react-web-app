
import HelloWorld from "./labs/a3/hello-world";
import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App(){
    return(
        <BrowserRouter>
            <div className="container">
                <h1>Welcome to Web Dev</h1>
                <Routes>
                    <Route path="/"         element={<Labs/>}/>
                    <Route path="/labs/*"   element={<Labs/>}/>
                    <Route path="/hello"    element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
