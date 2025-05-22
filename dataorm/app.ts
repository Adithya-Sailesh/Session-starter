import express from "express";
import employeeRouter from "./routes/employee.route";
import loggerMiddleware from "./loggerMiddleware";

import datasource from "./db/data-source";
import processTimeMiddleware from "./processTimeMiddleware";
import { errorMiddleware } from "./errorMiddleware";
import { authRouter } from "./routes/auth.router";
import { authMiddleware } from "./auth.middleware";


const server = express();
server.use(express.json());
server.use(loggerMiddleware);
// server.use(processTimeMiddleware)

server.use("/employee", authMiddleware, employeeRouter);
server.use("/auth", authRouter);
server.use(errorMiddleware)
server.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("Hello world typescript");
});

(async()=>{
  try{
    await datasource.initialize();
    console.log("connected")
  }
  catch{
    console.error('Failed to connect to DB');
    process.exit(1);
  }

  server.listen(3000, () => {
  console.log("server listening to 3000");
});

})();


