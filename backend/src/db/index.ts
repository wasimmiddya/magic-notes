import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
	try {
		const connectionInst = await mongoose.connect(
			`${process.env.MONGODB_URI}/${DB_NAME}`
		);

		console.log(
			`🍃MongoDB successfully connected!!!\n DB HOST:: ${connectionInst.connection.host}`
		);
	} catch (err) {
		console.log("❌MongoDB connection failed...");
		process.exit(1);
	}
};

export default connectDB;
