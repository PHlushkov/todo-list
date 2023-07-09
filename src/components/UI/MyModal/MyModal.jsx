import React from 'react'
import classes from "./style/MyModule.module.css"

function MyModal({children, visible, setVisible}) {
    
    const rootStyle = [classes.myModal]

    if(visible) {
        rootStyle.push(classes.active);
    }


    return (
        <div className={rootStyle.join(" ")} onClick={()=>setVisible(false)}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal