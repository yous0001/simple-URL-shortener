import { nanoid } from "nanoid"
import urlModel from "../DB/models/url.model.js"


export const shorterURL=async(req,res,next) => {
    const {longUrl}=req.body

    if(!longUrl)return res.status(404).json({message:"please provide url"})

    const existingUrl=await urlModel.findOne({longUrl})
    if(existingUrl) return res.status(409).json({message:"url already exists"})

    
    const urlCode=nanoid(6)
    const shortUrl= `${process.env.BASE_URL}/${urlCode}`
    const newUrl=await urlModel.create({longUrl,shortUrl,urlCode})
    
    res.status(201).json({shortUrl:newUrl.shortUrl})
    
}
export const getURL=async(req,res,next) => {
    const {shortUrl}=req.body

    if(!shortUrl)return res.status(404).json({message:"please provide shortUrl"})
    if(!shortUrl.startsWith(process.env.BASE_URL))return res.status(404).json({message:"invalid url"})


    const urlCode=shortUrl.split('/')[1]
    const url=await urlModel.findOne({urlCode})
    if(!url)return res.status(404).json({message:"url not found"})

    res.redirect(url.longUrl)
}