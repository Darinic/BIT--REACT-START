import React from 'react'

const Exercise5 = () => {
    const array= ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    const fixedArray= array.map((arr) => <li>{arr}</li> )

    return (  
        <>
        <div className='central'>
            {fixedArray}
        </div>
        </>
    );
}
 
export default Exercise5 ;