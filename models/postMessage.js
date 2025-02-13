import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    Desc:String,
    creator:String,
    tags: [String],
    selectedImage:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Data,
        default:new Date()
    },
    deadLine:{
        type:Date
    }
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;


