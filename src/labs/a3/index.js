import JavaScript from "./java-script";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output"
import TodoItem from "./todo/todo-item"
import TodoList from "./todo/todo-list"

function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <JavaScript/>
        </div>
    );
}

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
];

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
let loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

export {five, result1, result2, username,greeting1,loggedIn, greeting2};
export {functionScoped, blockScoped, constant1, numberArray1, stringArray1,variableArray1};
export default Assignment3;