import { Alert, AlertTitle, Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <h1>Selamat Datang di Aplikasi Data Pasien</h1>
      <hr />
      <Alert severity="info">
        <AlertTitle>INFO</AlertTitle>
        Aplikasi ini masih dalam tahap pengembangan.
      </Alert>
    </Container>
  );
};

export default Home;
