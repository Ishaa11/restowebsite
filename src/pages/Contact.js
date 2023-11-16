import React from "react";
import Layout from "../component/Layout/Layout";
import {
  Box,
  Typography,TextField, Button, Container, Grid
} from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" align="center">Contact My Resturant</Typography>
        <p align="center">
          To get in touch with us or give your valuable suggestions, fill in this form!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 45,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        
        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={9}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Submit
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