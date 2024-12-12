import mongoose, { Schema, Types } from "mongoose";

export interface IDivision extends Document{
    name: string;
    groups: string[];
    teams: Types.ObjectId[];
}

const divisionSchema = new Schema<IDivision>({
    name: { type: String, required: true },
    groups: [{ type: String }],
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }]
},{ collection: "divisions" });

export const Division = mongoose.model<IDivision>("Division", divisionSchema);