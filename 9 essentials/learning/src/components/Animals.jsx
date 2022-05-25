import '../exercises/exercise6.css'


const Animals = (props) => {
const fixedArray = props.tag.map((arr) => <li className='liElement'>{arr}</li> )
    return (  
        <>
        <div className='mid'>
            <ol className='olTag'>
            {fixedArray}
            </ol>
        </div>
        </>
    );
}
 
export default Animals;