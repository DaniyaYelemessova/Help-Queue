import React from 'react';
import ticketImage from "./../img/tickets.png"

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} width="500px" alt="tickets" />
    </React.Fragment>
    
  )
}

export default Header;
