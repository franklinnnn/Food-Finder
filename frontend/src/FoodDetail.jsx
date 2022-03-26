import React from "react"
import { Box, Card, CardMedia, Container, Typography, Button, Grid } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "@emotion/styled"

const StyledTypography = styled(Typography)`
    color: #1A1D26;
    font-family: "Montserrat", sans-serif;
    margin: 2px;
`
const FoodTitle = styled(StyledTypography)`
    font-weight: bold;
`
const FoodBusiness = styled(StyledTypography)`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const FoodRating = styled(FoodBusiness)`
    font-weight: 700;
    background-color: #EBEBEB;
    margin: 0;
    padding: 2px;
    border-radius: 5px;
`
const FoodDistance = styled(StyledTypography)`
    background-color: #EBEBEB;
    margin: 0;
    padding: 2px;
    border-radius: 5px;
    font-weight: 600;
`
const FoodPrice = styled(StyledTypography)`
    color: #FFC529;
    font-weight: bold;
    margin: 5px;
`

const ButtonsContainer = styled(Container)`
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
const FoodButtons = styled(ButtonsContainer)`
    top: 0;
    left: 0;
`
const LinkButtons = styled(ButtonsContainer)`
    bottom: 0;
    left: 0;
`
const FoodDetailContainer = styled(Container)`
    height: 50vh;
    padding: 0;
`
const FoodDescription = styled(StyledTypography)`
    color: #A8ACB9;    
    background-color: #EBEBEB;
    border-radius: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: 500;
`
const NavButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(2px, 2px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
}`

const LinkButton = styled(Button)`
    background-color: #FFC529;
    border-radius: 10px;
`

const FoodDetail = () => {
  return (
    <Box sx={{height:"100vh", padding: 1}}>
        
        <Card sx={{height:"40vh", borderRadius:"10px", backgroundColor:"red"}}>
            <FoodButtons>
                    <button>back</button>
                    <button>like</button>
            </FoodButtons>
            <CardMedia
                component="img"
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg"
                width="100%"
                height="100%"
            />
        </Card>
        <FoodDetailContainer>
            <FoodTitle variant="h4">Food Name</FoodTitle>
            <FoodBusiness variant="h5">
                <LocationOnIcon style={{color:"FFC529"}}/> Restaurant
            </FoodBusiness>
            <Container sx={{display:"flex", justifyContent:"space-between", padding:0}}>
                <FoodRating variant="subtitle4">
                    <StarIcon style={{fontSize:"20", color:"009933"}}/> 4.5
                </FoodRating>
                <FoodDistance>2mi</FoodDistance>
            </Container>
            <FoodPrice variant="h4">$10</FoodPrice>
            
            <FoodDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi id libero facilis facere. Voluptatibus cupiditate distinctio autem in, excepturi placeat culpa? Similique, laudantium aliquam? Ut, est? Iure quibusdam rerum inventore fugiat. Incidunt porro repellendus esse sint dolore deleniti eaque eveniet amet iure, similique tenetur quaerat. Vitae porro dolor dolorum.
            </FoodDescription>
        
        
        </FoodDetailContainer>
        {/* <LinkButtons>
            <div className="toyelp">yelp</div>
            <div className="topmap">map</div>
        </LinkButtons> */}
        <Grid container 
            direction="row" 
            justifyContent="center" 
            alignItems="center"
        >
                <Grid item xs>
                    <Box textAlign={"center"}>
                        <LinkButton variant="contained" startIcon={<StarIcon />}>YELP</LinkButton>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box textAlign={"center"}>
                        <LinkButton variant="contained" startIcon={<StarIcon />}>MAPS</LinkButton>
                    </Box>
                </Grid>
        </Grid>
        
    </Box>
  )
}

export default FoodDetail