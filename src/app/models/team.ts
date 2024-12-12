import mongoose, { Schema, Types } from "mongoose";

export interface ITeam extends Document{
    name: string;
    scores: [number[]];
}

const teamSchema = new Schema<ITeam>({
    name: { type: String, required: true },
    scores: [{ type: [Number] }]
},{ collection: "teams" });

export const Team = mongoose.model<ITeam>("Team", teamSchema);