import { app } from "./app/index";
import "dotenv/config";

const PORT=process.env.PORT



app.listen(PORT,()=>{
    console.log(` server is running running  ${PORT}`)
})