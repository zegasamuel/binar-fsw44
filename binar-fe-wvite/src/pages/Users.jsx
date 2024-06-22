import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

function App() {
    const [userList, setUserList] = useState([])
    const [allData, setallData] = useState([])
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [files, setFiles] = useState('')
    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        // const response = await fetch('https://randomuser.me/api/?results=50')
        // const data = await response.json()
        const axiosResponse = await axios({
            method: 'get',
            url: 'https://randomuser.me/api/?results=5'
        })
        // console.log(axiosResponse.data.results);
        setUserList(axiosResponse.data.results)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = { firstName, lastName, email, files }
        setallData([...allData, newData])
    }
    const handleChangeStatus = ({ meta, file }, status) => {
        // console.log(status, meta, file)
        if (status === 'done') {
            setFiles(meta.previewUrl)
        }
    }

    return (
        <div className="container-fluid p-5">
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
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((e, i) => {
                        return <UserRow item={e} index={i} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App

function UserRow({ item, index }) {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name.title} {item.name.first} {item.name.last}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
        </tr>
    )
}
