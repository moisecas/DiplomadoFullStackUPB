import mongoose from 'mongoose';

export async function DBconnect() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/mern-tasks')
        
        console.log('DB is connected', db.connection.host);
    } catch (error) {
        console.log(error);
    }

}

export default DBconnect;