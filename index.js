import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@user.uq06ulo.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api', router)
app.use(fileUpload({}))

async function startApp () {
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

startApp()

