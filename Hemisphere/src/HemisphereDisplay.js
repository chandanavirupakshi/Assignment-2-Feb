import React from 'react';
import north from './Images/img1.png';
import south from './Images/img2.png';
const HemisphereDisplay = ({latitude, longitude}) => { 
       console.log(latitude) 

         const hemi = latitude >0 ?'Northern hemisphere' : 'Southern hemisphere';
          const picture = latitude >0 ? north : south; 
        
         return( 
           <center>  
 <img src = {picture} alt=""/>  
       <div>
       {hemi}  
       </div>
       <div>
        latitude : {latitude}
    
       </div>
       <div>
       Longitude :{longitude} <br/>
       </div>
   </center>
      )}
    export default HemisphereDisplay;