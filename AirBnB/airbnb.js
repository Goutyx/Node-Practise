const path=require('path');

const express=require('express');

const userRouter=require('./routes/userRouter');
const hostRouter=require('./routes/hostRouter');
const rootDir=require("./utils/path");
const app=express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next)=>{
    res.statusCode=404;
    res.sendFile(path.join(rootDir, "views", "404Erro.html"));
});

const PORT=5000;
app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});