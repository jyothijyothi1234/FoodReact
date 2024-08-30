import React from "react";
import Layout from "../components/Layout";
import { Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Banner from "../images/vegfood.jpg";
import "../styles/homestyle.css";

function Home() {
  return (
    <Layout>
      <Grid
        container
        item
        xs={12}
        md={12}
        className="home"
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={12}
          className="headercontainer"
          sx={{
            flexDirection: "column",
            paddingLeft: "40px",
            border: { xs: "5px solid white", md: "0" },
            bgcolor: { xs: "white", md: "0" },
            margin: { xs: "0 40px", md: "0" },
            display: { xs: "flex", md: "none" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "28px" },
              paddingRight: { xs: "40px" },
            }}
          >
            Food Website
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "20px", md: "40px" },

              fontWeight: "lighter",
              marginTop: "15px",
              color: "black",
              paddingRight: { xs: "40px" },
            }}
          >
            Best food in india
          </Typography>

          <Link to="/menu">
            <Button
              variant="contained"
              className="button"
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                marginTop: "10px",
                borderRadius: "5px",
                bgcolor: "black",
                border: "none",
                cursor: "pointer",
                height: "50px",
                width: { xs: "100px", md: "180px" },
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
                ":hover": {
                  bgcolor: "#07090a",
                },
                marginRight: "40px",
              }}
            >
              Order Now
            </Button>
          </Link>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={12}
          className="headercontainer"
          justifyContent="center"
          sx={{
            flexDirection: "column",
            paddingLeft: "40px",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "28px", md: "70px" },
              alignItems: "center",
            }}
          >
            Food Website
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              display: "flex",
              justifyContent: "center",
              fontWeight: "lighter",
              marginTop: "15px",
              padding: 0,
              color: "white",
            }}
          >
            Best food in india
          </Typography>

          <Link
            to="/menu"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              className="button"
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                marginTop: "10px",
                borderRadius: "5px",
                bgcolor: "white",
                border: "none",
                cursor: "pointer",
                height: "50px",
                width: { xs: "100px", md: "180px" },
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
                ":hover": {
                  bgcolor: "green",
                },
              }}
            >
              Order Now
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;
