import './exercise2.css'
const Exercise2 = () => {
    function ClickHandler() {
        alert('Clicked')
    }
    return (  
        <div className="exercise2Div">
        <button className='btn-primary' onClick={ClickHandler}>Click me</button>
        </div>
    );
}
 
export default Exercise2;