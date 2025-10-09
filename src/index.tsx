import buildServer from "./app"
import "dotenv/config"

const server = buildServer()
const startServer = () => {
    try {
        const PORT = process.env.PORT || 4500
        server.listen({
            port: PORT,
            host: "0.0.0.0"
        }, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);

        })
    } catch (error: any) {
        console.error(`Server crushed, the crush is : ${error}`)
    }
}


startServer()