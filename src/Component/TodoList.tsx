import React from 'react';
import Task from './Task';
import { type } from 'os';
import { useState } from 'react'

type TaskData = {
    id: number;
    name: string;
    IsDone: boolean
}
type DnTaskData = {
    id: number;
    name: string;
    IsDone: boolean
}


const TodoList = () => {


    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])
    const [dn_tasks, setDntasks] = useState<DnTaskData[]>([])

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key === "Enter") {
            addTask(curTask);
        }
    }

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }

    
    const reset_Input = () => {
        var FillInput = document.querySelector('input')
        if(FillInput != null)
            FillInput.value = "";
        setCurTask('')
    }

    const addTask = (taskName: string) => {
        if (curTask === "") {
            alert("Task can't be empty")
        } else {
            const newId = (new Date()).getTime()
            const newTasks = [{ id: newId, name: taskName, IsDone: false }, ...tasks]
            setTasks(newTasks)
            reset_Input()
        }
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    const doneTask = (id: number) => {
        const newDone = tasks;
        const taskIsDone = newDone[newDone.findIndex(x => x.id === id)];

        const newId = (new Date()).getTime()
        const newdoneTasks = [{ id: newId, name: taskIsDone.name, IsDone: true }, ...dn_tasks]
        setDntasks(newdoneTasks)

        //Delete
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)

    }


    return (
        <div>
            {/* todo section */}
            <div className='mx-auto max-w-4xl'>

                {/* task input and add button */}
                <div className='flex space-x-1'>
                    <input className='border border-gray-400 w-full text-2xl'
                        onKeyDown={onKeyDownCallback} onChange={onChangeCallback} ></input>
                    <button className='border border-gray-400 w-8 font-bold' onClick={() => { addTask(curTask) }}>+</button>
                </div>

                {/* tasks section */}
                <div id='task'>
                    {tasks.map(x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask} IsDone={x.IsDone} />)}
                    {dn_tasks.map(x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask} IsDone={x.IsDone} />)}
                </div>

                
            </div>
        </div>
    )



}

export default TodoList