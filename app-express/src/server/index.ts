import http from "http";
import app from "./app";

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.on("error", (error: Error) => {
    console.log(`❌ Server error: ${error}`);
});

server.listen(PORT,() => {
    console.log(`🚀 Server started on port ${PORT}`);
});
