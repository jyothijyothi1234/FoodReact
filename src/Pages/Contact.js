import React from "react";
import Layout from "../components/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Grid, Typography, Box, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody,Table } from "@mui/material";
function Contact() {
  return (
    <Layout>
      <Box sx={{ my: {xs:10,md:15},ml:{xs:6 ,md:10 },mb:2,mr:{xs:3,md:0} }}>
        <Grid container item xs={12} >
          <Grid item xs={12}>
            <Typography sx={{ fontSize: {xs:"1.5rem",md:"2.5rem" },fontWeight:"bold", textAlign: "left"}}>
            Contact My Restaurant
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{paddingTop:"20px"}} >
            <Typography sx={{ fontSize: {xs:"1.2rem",md:"2rem"} , textAlign: "left" }}>
              Lorem liseum are the totam autem culpa cum eveniem dolorum quaism
              est persiciantm laborum .Nam recruim temporium maxime resiunt
              aperium undem vertatism labore cupisum incidunt volupnuts officius
         
            </Typography>
          </Grid>
                  </Grid>

           </Box>
<Box   sx={{m: 3,width:{xs:"300px",md:"600px"},ml:{xs:6 ,md:10} ,mt:5}}>
          <Grid container item xs={12}  >

  <TableContainer  component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell   sx={{bgcolor:"black",color:"white",textAlign:"center",fontSize:{xs:"17px",md:"20px"}}}> Contact Details</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell> 
            <SupportAgentIcon   sx={{color:"red"  ,pt:1 }} />  1800-00-0000 (tollfree)
          </TableCell>
           </TableRow>
             <TableRow>
           <TableCell  > 
            <EmailIcon   sx={{color:"skyblue"  ,pt:1,}}/> help@myrest.com
          </TableCell>
        </TableRow>
         <TableRow>
           <TableCell  > 
<LocalPhoneIcon  /> 1234567890
          </TableCell>
        </TableRow>
       
      </TableBody>
    </Table>
  </TableContainer>
     </Grid>
</Box>
    </Layout>
  );
}

export default Contact;