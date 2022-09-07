import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#F1F1F1",
        }}
      >
        <Container maxWidth="sm">
          <a
            style={{ textDecoration: "none" }}
            href="https://mantvydasportfolio.site/"
          >
            Made by Mantvydas
          </a>
          <Copyright />
        </Container>
      </Box>
    </>
  );
}
