let numberArray1 = [1, 2, 4, 5, 6];//this is edited to have the same output with the instruction
const square = a => a * a;
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

function MapFunction(){
    return (
        <div>
            <h3>Map</h3>
            squares = {squares}<br/>
            cubes = {cubes}<br/>
        </div>
    )
}
export default MapFunction;