import mongoose, { Schema } from "mongoose";

export interface ITeam extends Document{
    name: string;
    scores: number[];
    division: string;
    group: string;    
}

const teamSchema = new Schema<ITeam>({
    name: { type: String, required: true },
    scores: { type: [Number], required: true },
    division: { type: String, required: true },
    group: { type: String, required: true }   
},{ collection: "teams" });

export const Team = mongoose.model<ITeam>("Team", teamSchema);