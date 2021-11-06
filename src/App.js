import React, { useState } from "react";
import Container from "@mui/material/Container";
import ListPage from "./Components/ListPage";
import DetailsPage from "./Components/DetailsPage";

function App() {
  const [clickedID, setClickedID] = useState();
  return (
    <div>
      <header>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <h1>Task 1</h1>
        </Container>
      </header>
      <section>
        <ListPage setClickedID={setClickedID} />
        <DetailsPage clickedID={clickedID} />
      </section>
    </div>
  );
}

export default App;
