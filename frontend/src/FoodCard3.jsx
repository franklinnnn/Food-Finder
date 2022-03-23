import React, { useState, useEffect, useCallback, useRef } from "react"
import { Box, Card, CardMedia, CardActionArea, Typography } from "@mui/material"
import { LocationOnOutlined as LocationOnOutlinedIcon } from "@mui/icons-material"
import StarIcon from "@mui/icons-material/Star"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import fetchFood from "./fetchFood"

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
    font-family: "Montserrat", sans-serif;
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
    const [food, setFood] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastDirection, setLastDirection] = useState()

    const currentIndexRef = useRef(0)

    // update index after collecting new items
    const getFood = useCallback(async () => {
        const _food = await fetchFood()
        setFood(_food)
        updateCurrentIndex(_food.length - 1)
    }, [])

    // On component mount, get food
    useEffect(() => {
        getFood().catch(console.error)
    }, [])

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const swiped = (direction, nameToDelete, index) => {
        console.log(currentIndex)
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        setDetails(true)
    }

    const outOfFrame = (name, idx) => {
        if (currentIndexRef.current < 0) {
            getFood()
        }
        
    }

    const [details, setDetails] = useState(false)

    return (
        <Box sx={{ padding: 0, margin: 0 }}>
            <FoodCardContainer>
                {food.map((dish, index) => (
                    <SwipeCard
                        key={dish.id}
                        onSwipe={(dir) => swiped(dir, dish.title, index)}
                        onCardLeftScreen={() => outOfFrame(dish.title, index)}
                    >
                        <Card
                            sx={{
                                width: "95vw",
                                height: "70vh",
                                boxShadow: "2px 2px 10px 0px rgba(154, 159, 174, 1)",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={dish.img}
                                width="100%"
                                height="100%"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 20,
                                    margin: "10px",
                                }}
                            >
                                <FoodName variant="h3">{dish.title}</FoodName>
                                <FoodDistance variant="subtitle1">
                                    <LocationOnOutlinedIcon /> {dish.distance}
                                </FoodDistance>
                                <FoodPrice>{dish.price}</FoodPrice>
                            </div>
                        </Card>
                    </SwipeCard>

                ))}
            </FoodCardContainer>

          
            {               
               details? 
               <div className="foodDetailContainer"
                    style={{
                        backgroundColor: "red",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        top: 0,
                        left: 0, 
                        width: "100vw",
                        height: "100vh",
                        zIndex: "1000",
                    }}
                >
                    <button onClick={()=>setDetails(false)}>BACK</button>
                        <Card sx={{
                                position: "relative",
                                width: "98vw",
                                height: "100vh",
                                
                            }}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img"
                                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg"
                                    width="100%"
                                    height="30%"
                                />
                                <div className="detailsContainer" style={{position: "relative", width: "90%"}}>
                                    <FoodName variant="h2">Food Name</FoodName>
                                        <FoodDistance variant="subtitle1">
                                            <LocationOnOutlinedIcon /> Restaurant name
                                        </FoodDistance>
                                    <div style={{display: "flex", justifyContent:"space-between"}}>
                                        <div><StarIcon />4.5</div>
                                        <div>2mi</div>
                                    </div>
                                    <FoodPrice>$7</FoodPrice>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro neque, dicta quibusdam, iusto laboriosam assumenda magni ex vero fuga, quia sequi harum placeat autem cumque iure inventore commodi ipsam asperiores repudiandae explicabo? Illo sequi nam aperiam consequuntur voluptatem odio reprehenderit, magni ut fuga unde, sint, optio tenetur facere inventore!</div>
                                </div>

                                <div className="buttonsContainer" style={{display: "flex", justifyContent:"space-around", alignItems:"flex-end"}}>
                                    <button>view on yelp</button>
                                    <button>maps</button>
                                </div>
                            </CardActionArea>
                        </Card>
                </div>:null
            }
        </Box>
    )
}

export default FoodCard