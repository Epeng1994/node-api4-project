const initializeUsers = () =>([
    {
        id:0,
        name:'Eric',
        password: '123'
    },
    {
        id:1,
        name:'Joe',
        password: 'Shmoe'
    },
    {
        id:2,
        name:'Batman',
        password: 'Martha'
    },
])

let currentUsers = initializeUsers()


function getUsers(){
    return Promise.resolve(currentUsers)
}

function registerUser({name, password}){
    currentUsers.push({name, password})
    return Promise.resolve({name, password}) 
}

function loginUser(body, user){
    if(body.password === user.password){
        return Promise.resolve(`Welcome back ${body.name}`)
    }else{
        return Promise.resolve(`Incorrect Username and/or Password`)
    }
}


module.exports ={
    getUsers, 
    registerUser, 
    loginUser,
    currentUsers
}