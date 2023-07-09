import React, {  useState } from 'react'
import MyBtn from '../UI/MyBtn/MyBtn'
import MySelect from '../UI/select/MySelect'
import classes from "./style/Main.module.css"
import TaskList from '../TaskList/TaskList'
import MyModal from '../UI/MyModal/MyModal'
import Form from "../Form/Form"
// import { handleSortChange } from '../../tools/helpers'

function Main({taskLists, setTaskLists, completed}) {

    const [modal, setModal] = useState(false)

    const [sortOption, setSortOption] = useState('all');

    // Функция для обновления опции сортировки
    const handleSortOptionChange = (event) => {
      setSortOption(event.target.value);
    };
  
    // Функция для фильтрации и сортировки задач
    const getSortedTasks = () => {
      let sortedTasks = [...taskLists];
  
      if (sortOption === 'completed') {
        sortedTasks = sortedTasks.filter(task => task.completed);
      } else if (sortOption === 'incomplete') {
        sortedTasks = sortedTasks.filter(task => !task.completed);
      }
  
      return sortedTasks;
    };
  
    const sortedTasks = getSortedTasks();

    return (
        <div className={classes.main}>
            <h1 className={classes.h1}>TODO LIST</h1>
            <div className={classes.control}>
                <MyBtn onClick = {() => {setModal(true)}}>Add Task</MyBtn>
                <MyModal visible={modal} setVisible={setModal}>
                    <Form 
                        closeModal={setModal} 
                        taskLists={taskLists}
                        setTaskLists={setTaskLists}
                        completed={completed}
                        />
                </MyModal>
                <MySelect 
                    onClick={handleSortOptionChange}
                    options={[
                        {value: "all", name: "ALL"},
                        {value: "incomplete", name: "Incomplete"},
                        {value: "completed", name: "Complete"}
                    ]}
                    defaultValue="Sotring"
                />
            </div>
            {sortedTasks.length ? <TaskList
                                     completed={completed} 
                                     modal={modal} setModal={setModal} 
                                     taskLists={sortedTasks} 
                                     setTaskLists={setTaskLists}
                                /> : 
                                <div 
                                    className={classes.message}>
                                    <p className={classes.txtMessage}>
                                        No Todo Found
                                    </p>
                                </div>}

        </div>
    )
}

export default Main