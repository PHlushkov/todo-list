import React from 'react'
import classes from "./style/mySelect.module.css"

function MySelect({options, defaultValue, ...props}) {
    

    return (
        <select {...props}
                 className={classes.mySelect}
                 >
            <option value="" disabled>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}> 
                    {option.name}
                </option>
                )}
        </select>
    )
}

export default MySelect