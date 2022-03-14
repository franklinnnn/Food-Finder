import { Box, Card, CardMedia } from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import React from "react"
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

const FoodCard = () => {
    const food = [
        {
            name: "Pizza",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg",
            distance: "2 miles away",
        },
        {
            name: "Ramen",
            url: "http://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760",
            distance: "4 miles away",
        },
        {
            name: "Steak",
            url: "https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12.jpg",
            distance: "12 miles away",
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
                <SwipeCard key={dish.name}>
                    <Card  sx={{ width: "95vw", height: "70vh" }}>
                        
                        <CardMedia
                            component="img"
                            image={dish.url}
                            width="100%"
                            height="100%"
                        />
                        <div style={{ 
                                position: "Absolute", bottom: 20, margin: "10px"
                        }}>
                            <h1 style={{ color: "#fff", textShadow: "2px 2px black" }}>{dish.name}</h1>
                            <h3 style={{ color: "#fff", textShadow: "2px 2px black" }}><LocationOnOutlinedIcon /> {dish.distance}</h3>
                        </div>
                    </Card>
                    
                </SwipeCard>
                ))}
            </FoodCardContainer>
        </Box>
    )
}

export default FoodCard
