import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Header from "./Header"
import ButtonComponentTest from "./Components/ButtonComponentTest"
import Search from "./Search"


ReactDOM.render(
    <React.StrictMode>
        {/* <Header />
        <ButtonComponentTest /> */}
        <Search />
    </React.StrictMode>,
    document.getElementById("root")
)
