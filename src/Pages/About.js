import React from "react";
import Layout from "../components/Layout";
import { Grid, Typography, Box } from "@mui/material";
function About() {
  return (
    <Layout>
      <Box sx={{ my: 15,}}>
        <Grid container item xs={12} >
          <Grid item xs={12}>
            <Typography sx={{ fontSize: {xs:"1.5rem",md:"3rem" },fontWeight:"bold"}}>
              Welcome To My Restaurant
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{paddingTop:"10px"}} >
            <Typography sx={{ fontSize: {xs:"1.5rem",md:"2rem"} , textAlign: "left" }}>
              Lorem liseum are the totam autem culpa cum eveniem dolorum quaism
              est persiciantm laborum .Nam recruim temporium maxime resiunt
              aperium undem vertatism labore cupisum incidunt volupnuts officius
              deservnut sint amet esse saepo commodit est persiciantm laborum
              .Nam recruim temporium maxime resiunt aperium undem. vertatism
              labore cupisum incidunt volupnuts officius deservnut sint amet
              esse saepo commodit. undem vertatism labore cupisum incidunt
              volupnuts officius deservnut sint amet esse saepo commodit est
              persiciantm laborum .Nam liseum are the totam autem culpa cum
              eveniem dolorum quaism est persiciantm laborum .Nam recruim
              temporium maxime resiunt
            </Typography>
          </Grid>

          <Grid item xs={12}  sx={{paddingTop:"15px"}}>
            <Typography sx={{ fontSize: {xs:"1.5rem",md:"2rem"}, textAlign: "left" }}>
              Lorem liseum are the totam autem culpa cum eveniem dolorum quaism
              est persiciantm laborum .Nam recruim temporium maxime resiunt
              aperium undem vertatism labore cupisum incidunt volupnuts officius
              deservnut sint amet esse saepo commodit est persiciantm laborum
              .Nam recruim temporium maxime resiunt aperium undem. vertatism
              labore cupisum incidunt volupnuts officius deservnut sint amet
              esse saepo commodit. undem vertatism labore cupisum incidunt
              volupnuts officius deservnut sint amet esse saepo commodit est
              persiciantm laborum .Nam liseum are the totam autem culpa cum
              eveniem dolorum quaism est persiciantm laborum .Nam recruim
              temporium maxime resiunt
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default About;
