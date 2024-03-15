import connectDB from "./db";
import { app } from "./app";
import { config } from "dotenv";

config({
	path: ".env",
});

connectDB().then(() => {
	app.listen(process.env.PORT || 8080, () => {
		console.log(`🌐Server is running on port ${process.env.PORT || 8080}`);
	});
}).catch((err) => {
    console.log(`⚠️Failed to connect MongoDB\n ${err}`);

})

