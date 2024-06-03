"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Users=()=>{
    const searchParams = useSearchParams();
    const successParam = searchParams.get('success');
    const [success, setSuccess] = useState<string | null>(null);
    useEffect(() => {
            if (successParam) {
                setSuccess(successParam);
                const alertTimeout = setTimeout(() => {
                    alert("Your event is booked successfully!");
                }, 1000);
    
                // Cleanup timeout if the component unmounts
                return () => clearTimeout(alertTimeout);
            }
        }, [searchParams]);
    return(
        <div>
            Users
        </div>
    )
}

export default Users;