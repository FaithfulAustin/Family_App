import  express  from "express";
import dbConnect from "./config/dbConnect.js";
import dotenv  from "dotenv";

import { globalError, notFound } from "./middleware/globalerrorhandler.js";
import familyRouter from "./routes/familyRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
dbConnect();
const app = express();
app.use(express.json());
app.use("/api/v1/familys", familyRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(globalError);
export default app;