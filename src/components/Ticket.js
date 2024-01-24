import React from 'react';
import PropTypes from "prop-types";

export default function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <h3><em>{props.issue}</em></h3>
      <hr/>
    </React.Fragment>
  )
}

Ticket.prototypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};
