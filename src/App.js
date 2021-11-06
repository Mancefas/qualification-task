import Container from "@mui/material/Container";
import ListPage from "./Components/ListPage";

function App() {
  return (
    <div>
      <header>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <h1>Task 1</h1>
        </Container>
      </header>
      <section>
        <ListPage />
      </section>
    </div>
  );
}

export default App;
