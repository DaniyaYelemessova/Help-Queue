import React from 'react';
import Ticket from "./Ticket";


export default function Ticketlist() {
  return (
    <React.Fragment>
      <Ticket
    location="3A"
    names="Thato and Haley"
    issue="Firebase will not save record!" />
    <Ticket
        location="4B"
        names="Sleater and Kinney"
        issue="Prop types are throwing an error."/>
    </React.Fragment>
    
  )
}
