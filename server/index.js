const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const database = [
    {
        username: 'jcollier',
        password: 'asdf1234'
    }
]

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username) {
            if (database[i].password === password) {
                res.send('login in the user')
                return
            } else {
                res.send('incorrect password for ' + username)
                return
            }
        }
    }
    res.send('no account with username')
})

app.listen(5005, () => {
    console.log('server running on port 5005')
})