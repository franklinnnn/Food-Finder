import React, { useRef, useEffect, useState } from "react"

import { disableBodyScroll } from "body-scroll-lock"

import { Box, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Restore, Favorite, LocationOn } from "@mui/icons-material"

import "./App.css"
import Header from "./Header"
import Search from "./Search"
import FoodCard from "./FoodCard"
import Navigation from "./Navigation"

import Test from "./Test"

const App = () => {

    return (
        <Box>
            {/* <Header />
            <Search />
            <FoodCard />
            <Navigation /> */}

            <Test />

            
        </Box>
    )
}

export default App