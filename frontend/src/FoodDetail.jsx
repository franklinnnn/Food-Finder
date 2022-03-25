import React from "react"
import { Box, Card, CardMedia, Container, Typography, Button } from "@mui/material"
import StarIcon from "@mui/icons-material/Star" 
import styled from "@emotion/styled"

const FoodName = styled(Typography)`
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const FoodDetail = () => {
  return (
    <Box sx={{margin: 0, padding: "10px", backgroundColor:"blue", height:"100vh"}}>
        <Card sx={{height:"40%", borderRadius:"10px", backgroundColor:"red"}}>
            <CardMedia
                component="img"
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg"
                width="100%"
                height="100%"
            />
            <Container sx={{
                position: "absolute",
                top: 20,
                left: 0,
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff"
            }}>
                <button>back</button>
                <button>like</button>
            </Container>
        </Card>
        <Container sx={{height:"50%", backgroundColor:"yellow", padding: 0}}>
           
            <div className="foodname">food name</div>
            <div className="restaurantname">restaurant</div>
            <Container sx={{display:"flex", justifyContent:"space-between", padding:0}}>
                <Card><StarIcon /> 4.5</Card>
                <Card>2mi</Card>
            </Container>
            <div className="price">price</div>
            
            <Card sx={{backgroundColor:"gray", borderRadius:"10px", padding:"5px"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi id libero facilis facere. Voluptatibus cupiditate distinctio autem in, excepturi placeat culpa? Similique, laudantium aliquam? Ut, est? Iure quibusdam rerum inventore fugiat. Incidunt porro repellendus esse sint dolore deleniti eaque eveniet amet iure, similique tenetur quaerat. Vitae porro dolor dolorum.
            </Card>
        
        </Container>
        <Container sx={{position:"absolute", backgroundColor:"orange", bottom: 20}}>
            <div className="buttonscontainerq">
                <div className="toyelp">yelp</div>
                <div className="topmap">map</div>
            </div>
        </Container>
    </Box>
  )
}

export default FoodDetail