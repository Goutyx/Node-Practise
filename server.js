const http=require('http');

function requestHandler(req, res) {
    console.log(req);
    process.exit();
}

const server=http.createServer(requestHandler);

const PORT=3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

