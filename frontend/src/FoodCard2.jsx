import React, { useState, useEffect, useCallback } from "react"
import { Box, Card, CardMedia, Typography } from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import fetchFood from "./fetchFood"
import { ClassNames } from "@emotion/react"

const FoodCardContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    padding: 0;
    background-color: #f5f5f5;
`
const SwipeCard = styled(TinderCard)`
    position: absolute;
`

const FoodName = styled(Typography)`
    color: #fff;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
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

const FoodCard = () => {
    // const food = [
    //     {
    //         name: "Pizza",
    //         url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg",
    //         distance: "2 miles away",
    //         price: "$",
    //     },
    //     {
    //         name: "Ramen",
    //         url: "http://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760",
    //         distance: "4 miles away",
    //         price: "$$",
    //     },
    //     {
    //         name: "Steak",
    //         url: "https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12.jpg",
    //         distance: "12 miles away",
    //         price: "$$$",
    //     },
    // ]

    const [food, setFood] = useState([])

    const getFood = useCallback(async () => {
        const food = await fetchFood()
        setFood(food)
    }, [])

    useEffect(() => {
        getFood()
            .catch(console.error)
    }, [getFood])
    
    const onSwipe = (direction) => {
        console.log("You swiped: " + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + " swiped")
    }

    return (
        <Box sx={{ padding: 0, margin: 0 }}>
            <FoodCardContainer>
                {food.map((dish) => (
                <SwipeCard key={dish.id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('card')}>
                    <Card  sx={{ width: "95vw", height: "70vh", boxShadow: "2px 2px 10px 0px rgba(154, 159, 174, 1)"}}>
                        <CardMedia
                            component="img"
                            image={dish.img}
                            width="100%"
                            height="100%"
                        />
                        <div style={{ 
                                position: "absolute", bottom: 20, margin: "10px"
                        }}>
                            <FoodName variant="h3">{dish.title}</FoodName>
                            <FoodDistance variant="subtitle1"><LocationOnOutlinedIcon /> {dish.distance}</FoodDistance>
                            <FoodPrice>{dish.price}</FoodPrice>
                        </div>
                    </Card>
                    
                </SwipeCard>
                ))}
            </FoodCardContainer>
        </Box>
    )
}

export default FoodCard
