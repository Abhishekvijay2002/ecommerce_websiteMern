const express = require('express');
const sellerrouter = express.Router();
const authUser = require('../middleware/authuser');
const { requestSeller, getSellerStatus, cancelSellerRequest, getSellerRequest, getAllSellerRequests, approveSellerRequest, rejectSellerRequest } = require('../controller/sellercontroller');
const authAdmin = require('../middleware/authadmin');

sellerrouter.post('/request',authUser,requestSeller);
sellerrouter.get('/status', authUser, getSellerStatus);
sellerrouter.delete('/request',authUser, cancelSellerRequest);

sellerrouter.get('/requests', authAdmin,getAllSellerRequests);
sellerrouter.get('/requests/:id',authAdmin, getSellerRequest);
sellerrouter.put('/requests/:id/approve',authAdmin, approveSellerRequest);
sellerrouter.put('/requests/:id/reject', authAdmin, rejectSellerRequest);

module.exports = sellerrouter;
