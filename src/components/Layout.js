import { Grid, Typography } from "@mui/material";
import React from "react";

function Layout({ children }) {
  return (
    <Grid container item xs={12}>
      <div style={{width:"100%"}}>{children}</div>
    </Grid>
  );
}

export default Layout;
