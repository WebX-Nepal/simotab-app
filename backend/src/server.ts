import { app } from "./app/index";
import env from "./utils/validateenv";
import cors from "cors";

app.listen(env.PORT, () => {
  console.log(` server is running running  ${env.PORT}`);
});
app.use(
  cors({
    origin: ["https://simotap.com/", "*"],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);
