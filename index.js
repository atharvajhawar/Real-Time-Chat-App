import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/Database.js';
import userRoute from './Routes/userRoute.js';
import cookieParser from 'cookie-parser';
import messageRoute from './Routes/messageRoute.js';
import cors from 'cors';


dotenv.config({});



const app = express();

const PORT =process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOption={
    origin: "http://localhost:3000",
    credentials: true,
    
};

app.use(cors(corsOption));


app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);  

app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server is running on port ${PORT}`);
})


