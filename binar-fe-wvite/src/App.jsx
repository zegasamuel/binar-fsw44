import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
    const [toDoList, setToDoList] = useState([])
    const handleIsDone = (index) => {
        const newTodoList = toDoList.map((item, i) => {
            if (i === index) {
                return { ...item, isDone: !item.isDone }
            }
            return item
        })
        setToDoList(newTodoList)
    }
    useEffect(() => {
      setToDoList(toDoListSample)
    }, [])
    
    useEffect(() => {
      alert('there is a change on to do List')
    }, [toDoList])
    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoList.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{e.name}</td>
                                <td>
                                    {e.isDone
                                        ? 'sudah selesai'
                                        : 'belum selesai'}
                                </td>
                                <td>
                                    <input
                                        class="form-check-input mt-0"
                                        type="checkbox"
                                        value={e.isDone}
                                        onChange={() => handleIsDone(i)}
                                        aria-label="Checkbox for following text input"
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App

const toDoListSample = [
    {
        name: 'to do 1',
        isDone: false,
    },
    {
        name: 'to do 2',
        isDone: false,
    },
    {
        name: 'to do 3',
        isDone: false,
    },
    {
        name: 'to do 4',
        isDone: false,
    },
    {
        name: 'to do 5',
        isDone: false,
    },
    {
        name: 'to do 6',
        isDone: false,
    },
    {
        name: 'to do 7',
        isDone: false,
    },
    {
        name: 'to do 8',
        isDone: false,
    },
]
