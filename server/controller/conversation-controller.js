const Conversation = require('../model/conversation');

const newConservations = async (req,res) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    try{
        const exist = await Conversation.findOne({members: {$all: [receiverId,senderId]}})
        if(exist){
            res.status(200).json("coversation already exists")
            return
        }
        const validatedConversation = new Conversation({
            members: [senderId,receiverId]
        });
        await validatedConversation.save();
        res.status(200).json('new conversation add successfully')
    }catch(error){
        res.status(500).json(error);
    }
}

const getConversation = async (req,res) => {
    try{
        const conversation = await Conversation.findOne({members: { $all: [req.body.sender,req.body.receiver]}});
        res.status(200).json(conversation)
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports= {
    newConservations,
    getConversation
}