const squares = [1, 4, 16, 25, 36];

function JSONStringify(){
    return (
        <div>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
        </div>
    )
}
export default JSONStringify;
