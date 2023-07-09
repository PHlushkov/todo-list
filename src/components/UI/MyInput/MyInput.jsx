import React from 'react'
import classes from "./style/Input.module.css"

function MyInput({...props}) {
    

    return (
        <input className={classes.input} {...props} />
    )
}

export default  MyInput