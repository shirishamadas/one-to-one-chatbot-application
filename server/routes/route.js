const express = require('express');
const { addUser, getUsers } = require('../controller/user-controller');
const { newConservations, getConversation } = require('../controller/conversation-controller');
const { newMessage, getMessage } = require('../controller/message-controller');

const router = express.Router();



router.post('/add',addUser);

router.get('/users', getUsers);

router.post('/conversation/add', newConservations);

router.post('/conversation/get', getConversation);

router.post('/message/add', newMessage);

router.get('/message/get/:id', getMessage)

module.exports = router
