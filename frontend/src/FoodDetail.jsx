import React from "react"
import { Box, Card, CardMedia, Container, Typography } from "@mui/material"
import { ArrowBackIosNew, Favorite, Star, LocationOn, Info, Map } from "@mui/icons-material"
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
const FoodButtonsContainer = styled(ButtonsContainer)`
    top: 0;
    left: 0;
`
const LinkButtonsContainer = styled(ButtonsContainer)`
    bottom: 0;
    left: 0;
    justify-content: space-around; 
`
const FoodDetailContainer = styled(Container)`
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
const BackButton = styled.button`
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
const FavButton = styled(BackButton)`
    color: #fff;    
    background-color: #FFC520;
    border-radius: 50%;
`
const LinkButton = styled.button`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFC529;
    color: #FFEFC3;
    height: 50px;
    padding: 20px;
    border-radius: 40px;
    border: none;
    box-shadow: 8px 8px 25px 0px rgba(56, 70, 103, 0.15);
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 2px;
    &:active {
        transform: translate(2px, 2px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
`

const FoodDetail = () => {
  return (
    <Box sx={{height:"98vh", padding: 1}}>
        <Card 
            sx={{
                height:"40vh", 
                borderRadius:"10px"
                }}>
            <FoodButtonsContainer>
                    <BackButton><ArrowBackIosNew /></BackButton>
                    <FavButton><Favorite /></FavButton>
            </FoodButtonsContainer>
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
                <LocationOn style={{color:"FFC529"}}/> Restaurant
            </FoodBusiness>
            <Container sx={{display:"flex", justifyContent:"space-between", padding:0}}>
                <div>
                <FoodRating variant="subtitle4">
                    <Star style={{fontSize:"20", color:"009933"}}/> 4.5
                </FoodRating>
                </div>
                <FoodDistance>2mi</FoodDistance>
            </Container>
            <FoodPrice variant="h4">$10</FoodPrice>
            <FoodDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi id libero facilis facere. Voluptatibus cupiditate distinctio autem in, excepturi placeat culpa? Similique, laudantium aliquam? Ut, est? Iure quibusdam rerum inventore fugiat. Incidunt porro repellendus esse sint dolore deleniti eaque eveniet amet iure, similique tenetur quaerat. Vitae porro dolor dolorum.
            </FoodDescription>
        </FoodDetailContainer>
        
        <LinkButtonsContainer>
            <div>
                <LinkButton><Info /> YELP</LinkButton>
            </div>
            <div>
                <LinkButton><Map />MAPS</LinkButton>
            </div>
        </LinkButtonsContainer>

        
        
    </Box>
  )
}

export default FoodDetail