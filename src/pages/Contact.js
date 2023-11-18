import React from "react";
import Layout from "../component/Layout/Layout";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid
} from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" align="center">Contact My Restaurant</Typography>
        <p align="center">
          To get in touch with us or give your valuable suggestions, fill in this form!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "100%", // Adjust the width as needed
          maxWidth: "600px",
          margin: "auto",
          
        }}
      >
        <Container maxWidth="sm" sx={{ ml:8}}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3} // Adjust the number of rows as needed
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{my: 3}}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;
