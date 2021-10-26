import React, { } from 'react'
import Area from './showArea.jsx'
import Button from './buttons'
import { Color } from './color'
function Demo() {
    return (
        <div>
            <h1>
                <Color>
                    <Button />
                    <Area />
                </Color>
            </h1>

        </div>
    )
}

export default Demo