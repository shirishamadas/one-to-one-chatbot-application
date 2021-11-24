import axios from  'axios';


const URL = 'http://localhost:5000';
export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`,data)
    }catch(error){
        console.error("Error while calling adduser api",error)
    }
}

export const getUsers = async () => {
    try{
        const response =  await axios.get(`${URL}/users`)
        return response.data
    }catch(error){
        console.error("Error while calling getUsers api",error)
    }
}

export const setConservation = async (data) => {
    try{
        await axios.post(`${URL}/conversation/add`,data);
    }catch(error){
        console.error('Error while calling setConservation api',error)
    }
}

export const getConversation = async (data) => {
    try{
        const response = await axios.post(`${URL}/conversation/get`,data);
        return response.data
    }catch(error){
        console.error("Error while calling getConversation api")
    }
}

export const newMessage = async (data) => {
    try{
        await axios.post(`${URL}/message/add`,data)
    }catch(error){
        console.error("Error while calling newMessage api",error)
    }
}

export const getMessages = async (id) => {
    try{
       const response = await axios.get(`${URL}/message/get/${id}`);
       return response.data;
    }catch(error){
        console.error("Error while calling getMessages  api",error)
    }
}