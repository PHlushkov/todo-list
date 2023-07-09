import React, { useState } from 'react'
import MyInput from '../UI/MyInput/MyInput'
import classes from "./style/Form.module.css"
import MyBtn from '../UI/MyBtn/MyBtn'
import MySelect from '../UI/select/MySelect'
import { newDate } from '../../tools/helpers'
import { getUniqueID } from '../../tools/helpers'


function Form({
    closeModal, 
    setTaskLists, 
    taskLists, 
}) {

    const [statusTask, setStatusTask] = useState(false)

    const [task, setTask] = useState({
        title:"",
        date: newDate(),
    })

    if (statusTask === "true") {
        setStatusTask(true)
    } else if(statusTask === "false"){
        setStatusTask(false)
    }

    const closeWindow = (e) => {
        e.preventDefault()
        closeModal(false)
    }

    const addNewTask = (e) => {
        e.preventDefault()
        setTaskLists([...taskLists, {...task, id: getUniqueID(), completed: statusTask}])
        setTask({...task, title: "", date: newDate()})
        closeModal(false)
    }


    return (
        <div>
            <h3 className={classes.h3}>
                Add Task
            </h3>
            <form className={classes.form}>
                <label
                    className={classes.label}
                    htmlFor="name">
                     Title
                </label>
                <MyInput 
                    value={task.title}
                    id="name"
                    onChange = {(e)=> {setTask({...task, title: e.target.value})}}
                />
                <label 
                    className={classes.label}
                    htmlFor="status">
                    Status
                </label>
                <MySelect  
                    onClick={(e)=> {setStatusTask(e.target.value)}}
                    id={classes.input} 
                    defaultValue="Status"
                    options={[
                        {value: false, name: "Incomplete"},
                        {value: true, name: "Complete"}
                    ]}
                />
                <div className={classes.btn}>
                    <MyBtn onClick={addNewTask}>
                        Add task
                    </MyBtn>
                    <MyBtn 
                        onClick={closeWindow} 
                        style={{color: "#6a6e87",  backgroundColor:"#cccdde"}}>
                        Cancel
                    </MyBtn>
                </div>
            </form>
        </div>
    )
}

export default Form