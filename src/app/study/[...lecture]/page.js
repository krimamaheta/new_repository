'use client'
 const  Lectures=({params})=>{
    console.log(params)
    return(
        <div>
            <h2>lecture 1 detail</h2>
            <h2>{params.lecture}</h2>
            <h2>day:{params.lecture[0]}</h2>
            <h2>lec no:{params.lecture[1]}</h2>
        </div>
    )
}

export default Lectures;