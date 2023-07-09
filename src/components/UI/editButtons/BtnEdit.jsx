import React from 'react'
import svgPen from "../../../pictures/pen.svg"
import classes from "./style/editButons.module.css"

function BtnEdit({...props}) {
    
    return (
        <button {...props}>
            <img className={classes.svg} src={svgPen} alt="pen" />
        </button>
    )
}

export default BtnEdit