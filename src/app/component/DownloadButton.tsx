"use client"
import React from "react";

const DownloadButton=()=>{
    const handleDownload=()=>{
        const pdfPath="/high_courtsyllubus.pdf"
        const link = document.createElement('a');
        link.href = pdfPath;
        link.setAttribute('download', 'highcortsyllbus.pdf'); // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <div>
            <button onClick={()=>handleDownload()}>Download PDF</button>
        </div>
    )
}
export default DownloadButton;
