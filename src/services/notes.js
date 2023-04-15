import axios from "axios";

const url = 'https://notes-server-mongodb.onrender.com/api/notes'
//const url = '/api/notes'


//Select

//SI se quiere el getAll normal se comenta el NonExist y el .concat
const getAll = () => {
    const request = axios.get(url)
    const NonExist = {
        id: 1000,
        content: 'This note is not saved in server',
        date: '2023-03-15',
        important: true
    }
    return (
        request.then(response => response.data.concat(NonExist))
    )
}

//Insert
const create = (newObject) => {
    const request = axios.post(url, newObject)
    return (
        request.then(response => response.data)
    )
}

//Update
const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return (
        request.then(response => response.data)
    )
}

export default { getAll, create, update }