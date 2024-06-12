import { createClient } from "redis";
import { mongo, mongoose } from "mongoose";

//Conexion Redis
const redis_client = createClient({
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_ENDPOINT}`,
    legacyMode: true
})

try {
    await redis_client.connect();
    console.log("Redis Connected");
} catch {
    redis_client.on('error', (err) => {
        console.log("Redis Error", err);
    })
}

export default redis_client;

//Conexion MongoDB
try {
    await mongoose.connect(`mongodb+srv://santibd2:${process.env.MONGODB_PASSWORD}@bd2custer.brywesn.mongodb.net/?retryWrites=true&w=majority&appName=bd2Custer`, {dbName: 'TPO_DB2'});
    // await mongoose.connect(`mongodb://mongo:${process.env.MONGODB_PASSWORD}@viaduct.proxy.rlwy.net:43356`, {})
    console.log("MongoDB Connected");
} catch (err) {
    console.log("MongoDB Error", err);
}