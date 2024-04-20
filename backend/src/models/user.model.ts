import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { SALT } from "../constants";

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

// Settign the password before save it to the data base
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, SALT);
	next();
});

export const User = model("User", userSchema);
