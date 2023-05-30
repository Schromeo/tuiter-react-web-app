import {functionScoped, blockScoped, constant1, numberArray1, stringArray1,variableArray1} from "./index"
import ArrayIndexAndLength from "./array-index-and-length"
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays"
import ForLoops from "./for-loops"
import MapFunction from "./map-function"
import JSONStringify from "./json-stringify"
import FindFunction from "./find-function"
import FindIndex from "./find-index"
import FilterFunction from "./filter-function"

function WorkingWithArrays(){
    console.log("Working with Arrays")
    console.log("numberArray1 = " + numberArray1)
    console.log("stringArray1 = " + stringArray1)
    console.log("variableArray1 = " + variableArray1)
    return(
        <div>
            <h3> Working with Arrays</h3>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JSONStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    )
}

export default WorkingWithArrays;