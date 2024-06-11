import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const PORT = 3004;
app.listen(PORT, () => { console.log('Server is listening on http://localhost:' + PORT) })

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const SITE_PASSWORD = "passwordman"
const VALID_AUTH_TOKEN = "this is a valid token"

// ROUTES

app.get('/', (req, res) => {
    res.send('<p>welcome to app</p>')
})

app.post('/login', (req, res) => {
    if (req.body.password == SITE_PASSWORD) {
        res.cookie('authToken', VALID_AUTH_TOKEN, { maxAge: 900000, httpOnly: true })
        return res.send('You are now logged in!')
    }
    else {
        return res.send('Incorrect password.')
    }
})