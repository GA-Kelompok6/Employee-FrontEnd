import React, {useState} from 'react'

export default function ChangeOffice({ ChangeOffice }) {

   const [AddressDetails, SetAddressDetails]= useState({address:''})

   const submitHandlerChange = e => {
      e.preventDefault();

      ChangeOffice(AddressDetails);
   }

   return (
      <div>
         <form onSubmit={submitHandlerChange}>
            <input type="text" placeholder="Address" id="Address" required value={AddressDetails.address} onChange={e => SetAddressDetails({...AddressDetails, address: e.target.value})}/>

            <button type="submit"></button>
         </form>
      </div>
   )
}
