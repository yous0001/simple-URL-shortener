import mongoose from "mongoose";


const UrlSchema = new mongoose.Schema({
    longUrl: { 
        type: String,
        required: true 
        },
    shortUrl: { 
        type: String,
        required: true,
        unique: true 
        },
    urlCode: { 
        type: String,
        required: true,
        unique: true },
    date: { 
        type: Date,
        default: Date.now 
        },
});

export default mongoose.model("Url", UrlSchema);