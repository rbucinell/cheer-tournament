import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        if( mongoose.connection.readyState === 0 ) {
            await mongoose.connect(process.env.MONGODB_URI as string);
        }
    } catch( err ) {
        console.log( err );
    }
}
export default connectDB;