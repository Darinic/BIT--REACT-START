function Button(props) {
    function BtnHandler() {
        alert(`You clicked Button ${props.num}`)
    }
    return (  
        <div>
            <button className="btn-primary" onClick={BtnHandler}>Button {props.num}</button>
        </div>
    )
}
 
export default Button;