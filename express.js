const express = require('express');
const app=express();
const PORT=3000;

app.use('/', (req, res, next) => {
    console.log("FIRST MIDDLEWARE: ", req.url, req.method);
    res.send("<h1>Welcome to the my homepage</h1>");
});

app.use('/submit-details', (req, res, next) => {
    console.log("SECOND MIDDLEWARE: ", req.url, req.method);
    res.send("<h1>SUBMIT DETAILS PAGE</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});