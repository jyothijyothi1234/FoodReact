import React from "react";
import Layout from "../components/Layout";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography,Grid} from '@mui/material';


function Menu() {
  const ArrayList = [
    {
      image:
        "https://www.shutterstock.com/image-photo/homemade-dosa-dhosa-masala-plain-260nw-1597787986.jpg",

      name: "dosa",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "200",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/idli-sambhar-idly-sambar-popular-260nw-1527060110.jpg",

      name: "idile",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "300",
    },
    {
      image:
        "https://media.istockphoto.com/id/1488738018/photo/medu-vada-or-medu-vada-with-sambhar-and-coconut-chutney-red-chutney-green-chutney-popular.jpg?s=612x612&w=0&k=20&c=dvWgKhQuw1lfOBxDpR6YFMLSZnWdyqYGV1pvcBt7mZw=",

      name: "vada",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "400",
    },
    {
      image:
        "https://media.istockphoto.com/id/533645537/photo/breakfast-with-bacon-eggs-pancakes-and-toast.jpg?s=612x612&w=0&k=20&c=TumrEwImmLi4TIVeirgynvTpHhyvt9LeiDXLci45NWg=",

      name: "omlet",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "500",
    },
    {
     
      image:
        "https://thumbs.dreamstime.com/b/breakfast-buffet-full-continental-english-coffee-orange-juice-salad-croissant-fruit-77238300.jpg",

      name: "fullbreakfast",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "100",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/indian-breakfast-260nw-83993173.jpg",

      name: "puri",
      description:
        " Lorem liseum are the totam autem culpa cum eveniem dolorum quaism",
      price: "250",
    },
  ];

  return (
    <Layout>
    
        <Grid container item xs={12}   >
        {ArrayList.map((item) => (
                    <Grid container item xs={12}  md={4}>

                       <CardList     image={item.image} name={item.name}   description={item.description}  price={item.price}/>
                       </Grid>
              ))}
                      </Grid>
                      </Layout>
  );
}


function CardList(Props){

    return(

<Grid container  item xs={10} sx={{m:8}} > 

<Grid container item xs={12}  md={10}  >

        <Card sx={{ Width:" 500px"}}>
        <CardMedia
          sx={{ height:{xs:"150px",md:"200px" }}}

        image={Props.image}
  
        alt="not found"
        title="green iguana"
        />
 

        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  sx={{fontSize:{xs:"32px",md:"40"}}}>
          {Props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"   sx={{fontSize:{xs:"20px",md:"25px"}}}>
          {Props.description}

          </Typography>
          <Typography   sx={{fontSize:{xs:"25px",md:"35"}}} >
    {Props.price}
    </Typography>   

        </CardContent>
      
      </Card>
      </Grid>

      </Grid>
       

    );
}

export default Menu;
