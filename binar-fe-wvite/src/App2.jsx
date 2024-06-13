import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
    const [allData, setallData] = useState([])
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        setfirstName('')
        setLastName('')
        setEmail('')
    }, [allData])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {firstName}
        setallData([...allData, newData])
    }
    return (
        <div>
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
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((el, id) => (
                        <tr key={id}>
                            <th scope="row">{id+1}</th>
                            <td>{el.firstName}</td>
                            <td>Otto</td>
                            <td>sample@mail.com</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
