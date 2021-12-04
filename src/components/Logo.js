import React from 'react'
import {logo,title} from '../styles/style'
import useHover from '../hooks/useHover'

const Logo = () => {
    // const logoImage = "./logo192.png"
    const [hover, mouseOver, mouseOut] = useHover()
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            {/* <img src={logoImage} width="100" alt="logo"/> */}
            <h3 style={title}>logo</h3>
            {
                hover ? <h3>logo</h3> : null
            }
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoImage.url} width="100" alt="logo"/>
        </div>
    )
}

export default Logo
