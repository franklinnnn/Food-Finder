import React, { useState, useEffect } from "react"
import { Box, Card, CardMedia, Typography } from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"

const FoodCardContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    padding: 0;
    background-color: red;
`
const SwipeCard = styled(TinderCard)`
    position: absolute;
`
// const FoodInfoContainer = styled.div`
//     position: absolute;
//     bottom: 20;
//     margin: 10px;
// `

const FoodName = styled(Typography)`
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const FoodDistance = styled(FoodName)`
    display: flex;
    align-items: center;
    font-weight: 400;
`
const FoodPrice = styled(FoodName)`
    margin-left: 7px;
    color: #009933;
`

const onSwipe = (direction) => {
    console.log("You swiped: " + direction)
}

const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " swiped")
}



const FoodCard = () => {
    const food = [
        {
            name: "Pizza",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg",
            distance: "2 miles away",
            price: "$",
        },
        {
            name: "Ramen",
            url: "http://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760",
            distance: "4 miles away",
            price: "$$",
        },
        {
            name: "Steak",
            url: "https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12.jpg",
            distance: "12 miles away",
            price: "$$$",
        },
    ]


    
    return (
        <Box sx={{ padding: 0, margin: 0 }}>
            
            <FoodCardContainer>
                {food.map((dish) => (
                    // <TinderCard className="swipe" key={dish.name}>
                    //     <Card sx={{ height: "50vh" }}>
                    //         <CardMedia
                    //             component="img"
                    //             image={dish.url}
                    //             width="100%"
                    //             height="100%"
                    //         />
                    //     </Card>
                    // </TinderCard>
                <SwipeCard key={dish.name} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('card')}>
                    <Card  sx={{ width: "95vw", height: "70vh", boxShadow: "2px 2px 10px 0px rgba(154, 159, 174, 1)"}}>
                        <CardMedia
                            component="img"
                            image={dish.url}
                            width="100%"
                            height="100%"
                        />
                        <div style={{ 
                                position: "Absolute", bottom: 20, margin: "10px"
                        }}>
                            <FoodName variant="h3">{dish.name}</FoodName>
                            <FoodDistance variant="subtitle1"><LocationOnOutlinedIcon /> {dish.distance}</FoodDistance>
                            <FoodPrice>{dish.price}</FoodPrice>
                            {/* <h1 style={{ color: "#fff", textShadow: "2px 2px black" }}>{dish.name}</h1>
                            <h3 style={{ color: "#fff", textShadow: "2px 2px black" }}><LocationOnOutlinedIcon /> {dish.distance}</h3> */}
                        </div>
                    </Card>
                    
                </SwipeCard>
                ))}
            </FoodCardContainer>
        </Box>
    )
}

export default FoodCard
