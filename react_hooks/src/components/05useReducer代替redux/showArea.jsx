import React, { useContext } from 'react'
import { ColorContext } from './color'
function Area() {
    const currentColor = useContext(ColorContext)
    console.log(currentColor)
    return (
        <div style={{ color: currentColor.color }}>
            现在的颜色是{currentColor.color}
        </div>
    )
}

export default Area