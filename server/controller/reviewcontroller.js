// const Review = require('../models/reviewModel');
// const Product = require('../models/productModel');

// const addReview = async (req, res) => {
//     try {
//         const { rating, comment } = req.body;
//         const { productId } = req.params;

//         if (!rating || !comment) {
//             return res.status(400).json({ message: "Rating and comment are required" });
//         }

//         const review = new Review({
//             user: req.userid,
//             product: productId,
//             rating,
//             comment
//         });

//         await review.save();
//         res.status(201).json({ message: "Review added successfully", review });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };
// const getReviews = async (req, res) => {
//     try {
//         const { productId } = req.params;
//         const reviews = await Review.find({ product: productId }).populate('user', 'name');
        
//         res.status(200).json(reviews);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };
// const deleteReview = async (req, res) => {
//     try {
//         const { reviewId } = req.params;
//         const review = await Review.findById(reviewId);

//         if (!review) {
//             return res.status(404).json({ message: "Review not found" });
//         }

//         if (review.user.toString() !== req.user._id.toString()) {
//             return res.status(403).json({ message: "Not authorized to delete this review" });
//         }

//         await review.deleteOne();
//         res.status(200).json({ message: "Review deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// module.exports = { addReview, getReviews, deleteReview };
