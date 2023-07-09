import React, { useState } from 'react'
import classes from "./style/App.module.css"
import Main from '../main/Main'

function App() {


    const [taskLists, setTaskLists] = useState([
        {id: 1, title: "Дописать TODO LIST",  date: "00:07 AM, 08/07/2023", completed: true},
        {id: 2, title: "настройка сортировки",  date: "23:06 , 09/07/2023", completed: true}
    ])

    return (
        <div className={classes.app}>
            <Main 
                taskLists={taskLists} 
                setTaskLists={setTaskLists}
                completed={taskLists.completed}
            />
        </div>
    )
}

export default App