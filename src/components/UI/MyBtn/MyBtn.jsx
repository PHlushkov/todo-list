import React from 'react'
import classes from "./style/myBtn.module.css"

function MyBtn({children, ...props}) {
    

    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    )
}

export default MyBtn