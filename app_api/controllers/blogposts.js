var mongoose = require('mongoose');
var BlogPost = mongoose.model('BlogPost');
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.blogPostsCreate = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.blogPostsList = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.blogPostsReadOne = async function(req, res) {
    try {
        const blogPost = await BlogPost.findById(req.params.blogpostid).exec();
        sendJsonResponse(res, 200, blogPost);
        console.log(blogPost);
    } catch (err) {
        console.log(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
};

module.exports.blogPostsUpdateOne = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.blogPostsDeleteOne = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
