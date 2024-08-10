import express from "express"
import mongoose, { mongo } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"


const app=express();
const PORT=process.env.PORT||4000;

app.use(bodyParser.json())

app.use(express.json())

app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello from server000");
})

app.listen(PORT,()=>{
    console.log("server is running")
})

const eventSchema=new mongoose.Schema({
    email: String,
    F_name: String,
    l_name:String,
    password:String,
})

const Event=mongoose.model("Event",eventSchema);

let dburl="mongodb+srv://mahamsultana:1234@cluster0.ykhuvj0.mongodb.net/";
mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("Connected")
})

mongoose.connection.on("disconnected",function(){
    console.log("Disconnected")
    process.exit(1);
})

mongoose.connection.on("error",function(err){
    console.log("Mongoose Error",err)
    process.exit(1);
})


app.post("/event", async (req, res) => {
  try {
    const { F_name, l_name, email, password } = req.body;

    const newEvent = new Event({
      F_name: F_name,
      l_name: l_name,
      email: email,
      password: password,
    });

    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error Saving Registration Data:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.get("/events",async(req,res)=>{
    try{
        const events=await Event.find(req.body);
        res.status(200).json(events);
    }

    catch(error){
        console.error("Error Fetching Events:",error)
        res.status(500).send("Internal Server Error")
    }

})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Event.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

