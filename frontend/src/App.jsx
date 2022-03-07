import React, { useRef, useEffect, useState } from "react"

import { disableBodyScroll } from "body-scroll-lock"

import { Box, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Restore, Favorite, LocationOn } from "@mui/icons-material"

import "./App.css"
import Header from "./Header"
import Search from "./Search"
import FoodCard from "./FoodCard"
import ButtonComponentTest from "./Components/ButtonComponentTest"



const App = () => {
    const lock = useRef(null)
    const [value, setValue] = useState(0)

    useEffect(() => {
        disableBodyScroll(lock.current)
    })

    return (
        <>
            <Header />
            <Search />
            
            {/* <FoodCard /> */}
            <Box>
                <Paper
                    sx={{ position: "fixed", bottom: 0, width: "100%" }}
                    elevation={3}
                    ref={lock}
                >
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<Restore />} />
                        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    )
}

export default App