
const Message = require('../model/message');
const Conversation = require('../model/conversation');

const newMessage = async (req,res) => {
    const newMessage = new Message(req.body);
    try{
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });
        res.status(200).json('message saved successfuly');
    }catch(error){
        res.status(500).json(error)
    }
}

const getMessage = async (req,res) => {
    try{
        console.log(req.params.id)
        const messages = await Message.find({conversationId: req.params.id})
        res.status(200).json(messages)
    }catch(error){
        res.status(500).json('error')
    }
}

module.exports ={
    newMessage,
    getMessage
}