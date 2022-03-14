import React from "react"
import styled from "@emotion/styled"

import { Paper, Grid, Box, Typography, IconButton, Button, Avatar } from "@mui/material"
import { History as HistoryIcon, Person as PersonIcon } from "@mui/icons-material"

const StyledAvatar = styled(Avatar)`
width: 40px;
    height: 40px;    
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(2px, 2px);
    }
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
}
`

const Header = () => {
    return (
        <Paper square sx={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "green" }}>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                direction="row"
                alignItems="center"
            >
                <Grid item xs>
                    <Box textAlign={"left"}>
                        <IconButton>
                            <StyledAvatar src="https://i.imgur.com/R9Qt4Le.png" variant="rounded" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box textAlign={"center"}>
                        <Typography fontSize="xx-large">🍽️</Typography>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box textAlign={"right"}>
                        <IconButton>
                            <NavButton size="small">
                                <HistoryIcon sx={{ p: 1 }} fontSize="large" />
                            </NavButton>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Header
