import React from 'react'

export default function Attendance({ Attendance }) {
   const submitHandlerAttendence = e => {
      e.preventDefault();

      Attendance();
   }


   return (
      <div>
         <form onSubmit={submitHandlerAttendence}>
            <button type="submit"></button>
         </form>
      </div>
   )
}
