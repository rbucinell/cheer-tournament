import mongoose, { Schema, Types } from "mongoose";

export interface ITournament extends Document {
    name: string;
    description: string;
    date: Date;
    divisions: Types.ObjectId[];
    rubricCategories: string[];
    judges: number;
}

const tournamentSchema = new Schema<ITournament>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, required: true },
    divisions: [{ type: Schema.Types.ObjectId, ref: "Team" }],
    judges: { type: Number, required: true },
    rubricCategories: [{type: String}]
},{ collection: "tournaments" });

export const Tournament = mongoose.model<ITournament>("Tournament", tournamentSchema);
export default Tournament;