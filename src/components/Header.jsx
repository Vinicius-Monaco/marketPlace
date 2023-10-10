import { Button } from "react-bootstrap"
import "../styles/Header.css"
import { useEffect, useState } from "react"

const Header = () => {

    const [color, setColor] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setColor((prevColor) => prevColor = window.scrollY)
        })
    }, [])

    const headerStyle = {
        opacity: color/100
    }

    return (
        <header className="headerTop" id="header" style={headerStyle}>
            <div className="rightArea">
                
            </div>
            <div className="leftArea">
                <Button className="buttonHeader">Login </Button>
                <Button className="buttonHeader">Sign in</Button>
            </div>
        </header>
    )
}

export default Header