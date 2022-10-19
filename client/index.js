const form = document.getElementById('login-form')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

function submitLogin(event) {
    event.preventDefault()

    let username = usernameInput.value
    let password = passwordInput.value

    let myBod = {
        username,
        password
    }

    axios.post('http://localhost:5005/login', myBod)
    .then((response) => {
        let data = response.data
        alert(data)
    })
    .catch((error) => {
        console.log(error)
    })
}


form.addEventListener('submit', submitLogin)