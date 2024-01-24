import React from 'react'

export default function Ticket(props) {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <h3><em>{props.issues}</em></h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  )
}
