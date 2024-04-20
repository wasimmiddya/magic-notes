import { Schema, model } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "User name must be provided"],
		trim: true,
		unique: true,
		index: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		index: {
			unique: true,
			sparse: true,
		},
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	avater: {
		type: String,
	},
});

export const User = model("User", userSchema);
