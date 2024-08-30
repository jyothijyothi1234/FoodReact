import { Typography, Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";


function Fotter() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 3,
      }}
    >
      <Box>
        <Box
          sx={{
            my: 3,
            "& svg": { fontSize: "60px", cursor: "pointer", mr: 2 },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
           
          }}
        >
          <InstagramIcon   sx={{ height:{xs:"30px",md:""}}}/>
          <TwitterIcon    sx={{ height:{xs:"30px",md:""}}}/>
          <GitHubIcon    sx={{ height:{xs:"30px",md:""}}}/>
          <YouTubeIcon    sx={{ height:{xs:"30px",md:""}}}/>
        </Box>

        <Typography sx={{ "@media (max-width:600px)": { fontSize: {xs:"13px",md:"1rem"} } }}>
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </Grid>
  );
}

export default Fotter;
