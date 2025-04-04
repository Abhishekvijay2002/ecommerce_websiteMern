const Review = require("../models/reviewModel");

const createReview = async (req, res) => {
    try {
        const userid = req.userId;
        const { productId } = req.params;
        const { rating, Comment } = req.body;
        const review = new Review({ product : productId, user : userid, rating, Comment });
        await review.save();
        res.status(201).json({ success: true, message: "Review added successfully", review });
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error :error.message || "Intenal Server Error"})
    }
};

const getReviewsByProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({ product: productId }).populate("user", "name").populate("replies.user", "name");
        res.status(200).json({ success: true, reviews });
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error :error.message || "Intenal Server Error"})
    }
};

const addReply = async (req, res) => {
    try {

        const { reviewId } = req.params;
        const user = req.userId;
        const { Comment } = req.body;
        
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        review.replies.push({ user, Comment });
        await review.save();
        
        res.status(200).json({ success: true, message: "Reply added successfully", review });
    } catch (error) {
        console.log(error)
      res.status(error.status || 500).json({error :error.message || "Intenal Server Error"})
    }
};

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        await Review.findByIdAndDelete(reviewId);
        res.status(200).json({ success: true, message: "Review deleted successfully" });
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error :error.message || "Intenal Server Error"})
    }
};


module.exports = {
   deleteReview , createReview ,addReply,getReviewsByProduct
}