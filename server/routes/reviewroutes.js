const reviewRouter = require('express').Router();
const reviewController = require('../controller/reviewcontroller');
const authuser = require('../middleware/authuser');

reviewRouter.post("/add/:productId",authuser ,reviewController.createReview); 
reviewRouter.get("/:productId", reviewController.getReviewsByProduct); 
reviewRouter.post("/reply/:reviewId", authuser,reviewController.addReply);
reviewRouter.delete("/:reviewId", reviewController.deleteReview);

module.exports = reviewRouter;
