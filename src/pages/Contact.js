import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Message sent. Will contact you soon!!")

    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Container maxWidth="sm" sx={{ ml: 8 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ my: 3 }}
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
