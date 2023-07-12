import React, { useState } from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MySelect from '../UI/select/MySelect'
import MyBtn from '../UI/MyBtn/MyBtn'
import classes from "./style/EditingTask.module.css"

function EditingTask({taskEdit, setTaskEdit, setTaskLists, setModal}) {

    const [statusTask, setStatusTask] = useState("completed")


    const saveEdit = () => {
        setModal(false)
        setTaskLists(prevTaskLists => {
            return prevTaskLists.map(task=> {
                if (task.id === taskEdit.id) {
                    return{...task, title: taskEdit.title, completed: statusTask}
                }
                return task
            })
        })
    }

    const closeModal =()=>{
        setModal(false)
    }

    return ( 
        <div className={classes.container}>
            <h3 className={classes.h3}>Update Task</h3>
            <div className={classes.displayColum}>
                <label className={classes.label} >Title</label>
                <MyInput
                    value={taskEdit.title}
                    onChange={(e)=> setTaskEdit({...taskEdit, title: e.target.value}) }
                    id="title"
                />
            </div>
            <div className={classes.displayColum}>
                <label className={classes.label} htmlFor="status">Status</label>
                <MySelect
                    sortOption={statusTask}
                    setSortOption={setStatusTask} 
                    onChange={(e)=> setStatusTask(e.target.value)}
                    defaultValue={statusTask}
                    id={classes.status}
                    options={[
                        {value: "completed", name: "Complete"},
                        {value: "incompleted", name: "Incomplete"}
                    ]}
                />
            </div>
            <div className={classes.blockBtn}>
                <MyBtn onClick={saveEdit}>Update Task</MyBtn>
                <MyBtn onClick={closeModal} id={classes.btn}>Cancel</MyBtn>
            </div>
        </div>
    )
}


export default EditingTask