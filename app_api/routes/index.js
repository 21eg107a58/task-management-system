var express = require('express');
var router = express.Router();
var ctrlBlogPosts = require('../controllers/blogposts');
var ctrlReviews = require('../controllers/reviews');

router.get('/blogPosts', ctrlBlogPosts.blogPostsList);
router.post('/blogPosts', ctrlBlogPosts.blogPostsCreate);
router.get('/blogPosts/:blogpostid', ctrlBlogPosts.blogPostsReadOne);
router.put('/blogPosts/:blogpostid', ctrlBlogPosts.blogPostsUpdateOne);
router.delete('/blogPosts/:blogpostid', ctrlBlogPosts.blogPostsDeleteOne);

// reviews
router.post('/blogPosts/:blogpostid/reviews', ctrlReviews.reviewsCreate);
router.get('/blogPosts/:blogpostid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/blogPosts/:blogpostid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/blogPosts/:blogpostid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
