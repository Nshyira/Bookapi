const mongoose =require('mongoose');

const bookSchema= mongoose.Schema({
    id:Number,
    title:String,
    author: String

}


);

module.exports=mongoose.model("Books",bookSchema);