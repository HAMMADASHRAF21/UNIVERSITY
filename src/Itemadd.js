import React from 'react'
import './Itemadd.css'
 import {Card ,Typography,CardContent } from '@material-ui/core';
import {Container,Row,Col} from 'react-bootstrap';

function Itemadd({price,image,disc,name,id}) {
    return (

<div className="itemadd"  >
 

<Card key={id}  >
        
  <CardContent  >
                   <img  src={image}   alt="ad"/>

                               
                      <Typography variant="h5" color="textPrimary" component="h2"> {name} </Typography>
            
            <Typography   variant="h5" color="textPrimary" component="h2">Price :  {price} </Typography>
           <p style={{fontWeight:'bold'}}> {disc} </p>
            

              </CardContent>
          
         </Card >  
       
      
        </div>
    )
}

export default Itemadd
