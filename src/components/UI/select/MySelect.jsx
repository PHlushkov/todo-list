import React, { useState } from 'react'
import classes from "./style/mySelect.module.css"

function MySelect({options, setSortOption, sortOption, defaultValue, ...props}) {
    
    const [optionListOpen, setOptionListOpen] = useState()


    return (
        <div  className={classes.sortOptionsContainer} onClick={()=> setOptionListOpen(!optionListOpen)}>
            <input {...props}  className={classes.sortTask} disabled type="text" value={defaultValue} />
            {
                optionListOpen && (
                    <div className={classes.sortOptionList}>
                        {options.map((option) => (
                            <p {...props} className={classes.option} key={option.name} onClick={()=>setSortOption(option.value)}>{option.name}</p>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default MySelect