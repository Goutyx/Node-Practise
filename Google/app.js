const path=require('path');
const express=require('express');
const userRoutes=require('./routes/userRoutes');
const hostRoutes=require('./routes/hostRoutes');
const { urlencoded } = require('body-parser');

const app=express();
const PORT=5000;

app.use(express.urlencoded());
app.use(userRoutes);
app.use(hostRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on the host http://localhost:${PORT}`);
});