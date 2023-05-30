const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
console.log(twoSquared);
const threePlusOne = plusOne(3);
console.log(threePlusOne);
function FunctionParenthesisAndParameters(){

    return (
        <div>
            <h3>Parenthesis and parameters</h3>
            twoSquared = { twoSquared}<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = { threePlusOne}<br/>
            plusOne(3) = { plusOne(3)}<br/>
        </div>
    );
}

export default FunctionParenthesisAndParameters;