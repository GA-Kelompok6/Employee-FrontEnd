import React, { useState } from 'react'
import Location from "./index"

export default function ChangeLocation({ Location }) {

   const [LongLang, setLocation] = useState({ long: "", lang: "" });

   const submitHandlerLocation = e => {
      // e.preventDefault();

      console.log(LongLang);
      Location(LongLang);
      
   }

   return (
      <div>
         {/* <h1>H!</h1> */}

         <form action="#" onSubmit={submitHandlerLocation}>
            <input
               type="text"
               placeholder="Longtitude"
               id="Longtitude"
               required
               value={LongLang.long}
               onChange={(e) =>
                  setLocation({
                     ...LongLang,
                     long: e.target.value,
                  })
               }
            />
            <input
               type="text"
               placeholder="Latitude"
               id="Latitude"
               required
               value={LongLang.lang}
               onChange={(e) =>
                  setLocation({
                     ...LongLang,
                     lang: e.target.value,
                  })
               }
            />
            <button type="submit">Change</button>

         </form>
      </div>
   )
}
