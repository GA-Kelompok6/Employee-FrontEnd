import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function Attendance({ Attendance }) {
   const submitHandlerAttendence = e => {
      e.preventDefault();

      Attendance();
   }
   // const [loading, setLoading] = useState(true);
   // let [color, setColor] = useState("#000000");

   // useEffect(() => {
   //    setLoading(true)
   //    setTimeout(() => {
   //       setLoading(false)
   //    }, 8000)
   // }, []);


   return (

      <div>

         <form onSubmit={submitHandlerAttendence}>
            <button type="submit"></button>

         </form>
         {/* <ClipLoader color={color} loading={loading} css={override} size={150} /> */}
      </div>
   )
}
