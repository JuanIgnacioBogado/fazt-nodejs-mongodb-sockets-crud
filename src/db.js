import {connect, connection} from 'mongoose';
import {MONGODB_URI} from './config';

export default async () => {
    try {
        await connect(MONGODB_URI);
        console.log('DB is connected:', connection.name);
    } catch (error) {
        console.log(error);
    }
};