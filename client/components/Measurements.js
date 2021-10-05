import React, { useEffect, useState } from "react";


function Measurements(){
    const [data,setData]=useState();
    


  
    
 


    async function fetchMeasurements(){
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
        
        
    }
    return(
        
           
        <section>
            <h1>Measurements by devi  </h1>
            <h1>Measurements by devi  </h1>
            
        <pre>
            {data&&JSON.stringify(data,null,2)}
          
            </pre>
            <button onClick={fetchMeasurements}>Fetch Data</button>
        </section>
    )

    
}

export default Measurements;