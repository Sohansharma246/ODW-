import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectdb from "./config/db.js"
import authroute from "./routes/authroute.js"
import CategoryRoutes from "./routes/CategoryRoutes.js"
import ProductRoutes from "./routes/ProductRoutes.js"
import cors from "cors"
const app = express()

dotenv.config()


//database connect
connectdb()


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Auth-route
app.use('/api/v1/auth',authroute)

//Category-route
app.use('/api/v1/category',CategoryRoutes)

//product 
app.use('/api/v1/product',ProductRoutes)
app.get('/',  (req, res) =>{
  res.send({message:'Hello World'})
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`.bgCyan.white)
})