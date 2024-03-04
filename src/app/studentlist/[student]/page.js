
'use client';

const Student=({params})=>{
    console.log(params);
    return(
        <div>
            <h2>student details</h2>
            <h4>Name:{params.student}</h4>
        </div>
    )
}

export default Student;