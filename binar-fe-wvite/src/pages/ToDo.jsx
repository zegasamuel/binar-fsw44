import { useContext, useEffect, useState } from 'react'
import ToDoRow from '../components/toDoRow'
import { useNavigate } from 'react-router-dom'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { Context } from '../context/Provider'

function App() {
    const { nama } = useContext(Context)
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
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const response = await fetch('https://randomuser.me/api/?results=50')
        const data = await response.json()
        console.log(data);
    }

    const [allData, setallData] = useState([])
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [files, setFiles] = useState('')

    const handleChangeStatus = ({ meta, file }, status) => {
        // console.log(status, meta, file)
        if (status === 'done') {
            setFiles(meta.previewUrl)
        }
    }

    useEffect(() => {
        setfirstName('')
        setLastName('')
        setEmail('')
        setFiles('')
    }, [allData])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = { firstName, lastName, email, files }
        setallData([...allData, newData])
    }

    useEffect(() => {
        if (allData.length >= 3) {
            navigate('/to-do-list')
        }
    }, [allData])

    // useEffect(() => {
    //     alert('there is a change on to do List')
    // }, [toDoList])

    return (
        <div className='container-fluid p-5'>
            <p>pemilik {nama}</p>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                    {firstName}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Dropzone
                    // getUploadParams={() => {}}
                    multiple={false}
                    onChangeStatus={handleChangeStatus}
                    accept="image/*,audio/*,video/*"
                />

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
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
                        return <ToDoRow item={e} index={i} handleIsDone={handleIsDone} />
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
