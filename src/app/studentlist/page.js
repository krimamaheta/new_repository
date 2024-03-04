import Link from "next/link";
const StudentList=()=>{
    return(
        <div>
            <h2>StudentList</h2>
            <br/>

            <ul>
                <li>
                    <Link href='/studentlist/ram'>Ram</Link>
                </li>
                <li><Link href='/studentlist/sita'>sita</Link></li>
                <li><Link href='/studentlist/radha'>radha</Link></li>
                <li><Link href='/studentlist/krishna'>krishna</Link></li>
                <li><Link href='/studentlist/rukmani'>rukmani</Link></li>
            </ul>
        </div>
    )
}
export default StudentList;