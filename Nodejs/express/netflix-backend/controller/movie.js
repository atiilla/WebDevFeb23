const Movie = require("../model/movie")

module.exports={
    home:async (req,res)=>{
       let movies = await Movie.find({})
       if(movies){
        res.status(200).json({
            message:'OK',
            movies
        })
       }else{
        res.status(401).json({
            message:"ERROR"
        })
       }
       
    }
}