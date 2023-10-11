import { Button } from "react-bootstrap"
import "../styles/Header.css"
import { useEffect, useState } from "react"
import imageSymbol from "../images/yatch_symbol.png"

const Header = () => {

    const [color, setColor] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setColor((prevColor) => prevColor = window.scrollY)
        })
    }, [])

    const headerStyle = {
        backgroundColor: `rgba(3, 0, 31, ${color/700})`
    }

    return (
        <header className="headerTop" id="header" style={headerStyle}>
            <div className="rightArea">
                <span className="titleHeader">PoseiStore</span>
                <img className="imgHeaderTitle" src={imageSymbol}></img>
            </div>
            <div className="leftArea">
                <Button className="buttonHeader">Login </Button>
                <Button className="buttonHeader">Sign in</Button>
            </div>
        </header>
    )
}

export default Header
