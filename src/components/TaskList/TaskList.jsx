import React, { useState } from 'react'
import classes from "./style/TaskList.module.css"
import BtnDelete from '../UI/editButtons/BtnDelete'
import BtnEdit from '../UI/editButtons/BtnEdit'
import MyModal from '../UI/MyModal/MyModal'
import { toggleComplete } from '../../tools/helpers'
import EditingTask from '../EditingTask/EditingTask'



function TaskList({taskLists, setTaskLists}) {

    const [modal, setModal] = useState(false)
    const [taskEdit, setTaskEdit] = useState("")

    const deleteTask = (id) => {
        setTaskLists(taskLists.filter((task) => task.id !== id))
    }
    
    const handleTaskTitleChange  = (task) => {
        setModal(true)
        setTaskEdit(task);
    }
    


    return (
        <div className={classes.list}>
            {taskLists.map((task, id) => 
                <div className={classes.task} key={id}>
                    <div className={classes.info}>
                        <input 
                            value={taskLists.completed} 
                            className={classes.input} 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id, setTaskLists)}
                        />
                        <div className={task.completed ? classes.completed : ''}> 
                            <h4 className={classes.title}>{task.title}</h4>
                            <p className={classes.date}>{task.date}</p>
                        </div>
                    </div>
                    <div className={classes.editorBtn}>
                        <BtnDelete onClick={()=>deleteTask(task.id)}/>
                        <BtnEdit onClick={()=>handleTaskTitleChange(task)}/>
                        <MyModal
                            visible={modal}
                            setVisible={setModal}
                        >
                            <EditingTask

                                setTaskLists={setTaskLists}
                                taskEdit={taskEdit}
                                taskLists={taskLists}
                                setTaskEdit={setTaskEdit}
                                setModal={setModal}
                            />
                        </MyModal>
                    </div>
                </div>
            )}
        </div>  
    )
}

export default TaskList