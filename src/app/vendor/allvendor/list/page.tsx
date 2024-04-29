
// "use client";
// import React, { useState } from "react";
// import styles from "./../../../changepassword/style.module.css";
// const ListPage=()=>{
// const [value,setValue]=useState({
//     EventName:"",
//     Description:"",
// })

// const handleChange=(e: { target: { name: any; value: any; }; })=>{
//     const{name,value}=e.target;
//     setValue(prestate=>({
//         ...prestate,
//         [name]:value
//     }));
// }
  
//     return(
//         <div>
//                 <div className={styles["change-password-container"]}>
//       <div className={styles["card-container"]}>
//         <div className={styles["input-container"]}>

//           <h2 className={styles.head}>EventList</h2>
//           <input
//             type="text"
//             name="EventName"
//             value={value.EventName}
//             onChange={handleChange}
//             placeholder="EventName"
//           /> 
//           </div>
//           <div className={styles["input-container"]}>

//           <input
//             type="text"
//             name="Description"
//             value={value.Description}
//             onChange={handleChange}
//             placeholder="Description"
//           />
//         </div>
//         {/* <div className={styles["input-container"]}>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Price"
//           />
//         </div>
//         <div className={styles["input-container"]}>
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Location"
//           />
//         </div> */}
//         {/* <div className={styles["input-container"]}>
//           <input
//             type="text"
//             name="token"
//             value={token}
//             onChange={(e) => setToken(e.target.value)}
//             placeholder="OTP"
//           /> */}
//           <button className={styles.b1}>Edit</button>
//           <button className={styles.b1}>Cancel</button>
//         </div>
//       </div>
//         </div>
//     )
// }

// export default ListPage;


"use client"
import React, { useEffect, useState } from "react";
//import styles from "./../../../forgotpassword/style.module.css"
import styles from "./../../../vendor/allvendor/list/style.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation";
interface event{
  eventName:string,
  description:string
}
const ListPage=()=>{
  const[events,setevents]=useState<event[]>([]);
  const[loading,setLoading]=useState(true);
  const route=useRouter();
  useEffect(()=>{

    const fetchevents=async()=>{
      try{
        debugger
          const res=await fetch("https://localhost:44340/Api/Event/AllEvent");
          console.log(res)
          if(res.ok){
            const data=await res.json();
            setevents(data);
          }
          else{
            console.error("Failed to fetch events:", res.statusText);
          }
      
      }catch(error)
      {
        console.log("Error fetching events:", error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchevents();
  },[])
  return(
    <div className={styles["change-password-container"]}>
    <div className={styles["card-container"]}>
      <div className={styles["input-container"]}>
        <h2 className={styles.head2}>EventList</h2>
        <div className={styles["table-container"]}>
          <table className="table1"> {/* Apply table1 class */}
            <thead>
              <tr>
                <th className={`${styles.th} th1`}>Event Name</th> {/* Apply th1 and th classes */}
                <th className={`${styles.th} th1`}>Description</th> {/* Apply th1 and th classes */}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={2} className={`${styles.td1} td1`}>Loading events...</td> {/* Apply td1 class */}
                </tr>
              ) : (
                events.map((event, index) => (
                  <tr key={index}>
                    <td className={`${styles.td1} td1`}>{event.eventName}</td> {/* Apply td1 class */}
                    <td className={`${styles.td1} td1`}>{event.description}</td> {/* Apply td1 class */}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className={styles.link1}><Link href={"/vendor/allvendor"}>Go to VendorPage</Link></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListPage;