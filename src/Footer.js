import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
          <Typography variant="body1" sx={{ color: "#1976D2" }}>
            Made by Mantvydas
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </>
  );
}
