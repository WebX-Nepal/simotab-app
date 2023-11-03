import { app } from "./app/index";
import env from "./utils/validateenv";



app.listen(env.PORT,()=>{
    console.log(` server is running running  ${env.PORT}`)
})