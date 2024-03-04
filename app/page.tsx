"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [file, setfile] = useState();
  //const handle=async
    const handle = async(e) => {
        //to prevent refresh
        e.preventDefault();
        console.log(file);

        //to call api
        let data = new FormData();
        data.set("file", file);
        let res = await fetch("api/upload", {
            method: "POST",
            body: data
        });
        res = await res.json();
        if (res.success) {
            alert("file upload successfully");
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>Image upload</h2>
            <form onSubmit={handle}>
                <input
                    type="file"
                    name="file"
                    onChange={(e) => setfile(e.target.files?.[0])}
                />
                <button type="submit">Upload Image</button>
            </form>
        </main>
    );
}
