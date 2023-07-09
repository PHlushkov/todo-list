import React from 'react'
import svgTrash from "../../../pictures/trash.svg"
import classes from "./style/editButons.module.css"


function BtnDelete({...props}) {
    

    return (
        <button {...props}>
            <img className={classes.svg} src={svgTrash} alt="trash" />
        </button>
    )
}

export default BtnDelete