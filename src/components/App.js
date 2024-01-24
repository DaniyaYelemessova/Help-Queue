import React from "react";
import Header from "./Header";
import Ticketlist from "./Ticketlist";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <Ticketlist />
    </React.Fragment>
  );
}

export default App;