import React from "react"
import styled from "@emotion/styled"
import { Undo, Clear, Favorite, Info } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const NavigationContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px 40px 0px;
    background-color: #f5f5f5;
    width: 100%;
    height: 5vh;
    bottom: 0;
`

const NavigationButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(5px, 5px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
    }
`

const Navigation = () => {
    return (
        <>
        <NavigationContainer>
            <NavigationButton>
                <IconButton><Undo /></IconButton>
            </NavigationButton>
            <NavigationButton>
                <IconButton><Clear /></IconButton>
            </NavigationButton>
            <NavigationButton>
                <IconButton><Favorite /></IconButton>
            </NavigationButton>
            <NavigationButton>
                <IconButton><Info /></IconButton>
            </NavigationButton>
        </NavigationContainer>
        </>
    )
}

export default Navigation