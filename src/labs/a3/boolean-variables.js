import {numberVariable, floatingPointNumber} from "./variable-types";

let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1; // never use this ==
let notTrue = '1' === 1; // always use this ===
function BooleanVariables() {

    return(
        <div>
            <h2>Boolean Variables</h2>
            true1 = { String(true1) }<br/>
            false1 = { String(false1) }<br/>
            false2 = { String(false2) }<br/>
            true2 = { String(true2) }<br/>
            true3 = { String(true3) }<br/>
            true4 = { String(true4) }<br/>
            true5 = { String(true5) }<br/>
            false3 = { String(false3) }<br/>
            sortaTrue = { String(sortaTrue) }<br/>
            notTrue = { String(notTrue) }<br/>
        </div>
    );
}
export default BooleanVariables;
export {true1,false1};