import '../scss/MovieList.css'
const MovieList = (props) => {

let YearString = JSON.stringify(props.year)
let Result = YearString.slice(1,5)
    return (   
        <div className="DropDown" onClick={props.handleSelect}>
            <p className="mainText"><strong>{props.title}</strong> <br/>
            <span className="subText">Rating:{props.rating} Release:{Result}</span></p>
        </div> 
    )
}
 
export default MovieList