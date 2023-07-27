// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
// Parse the json body of the request
app.use(bodyParser.json());
// Store comments
const commentsByPostId = {};

// Route: GET /posts/:id/comments
// Get comments for a post
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Route: POST /posts/:id/comments
// Create a comment for a post
app.post('/posts/:id/comments', (req, res) => {
  // Create a random id for the comment
  const commentId = randomBytes(4).toString('hex');
  // Get the comment content from the request
  const { content } = req.body;
  // Get the list of comments for this post
  const comments = commentsByPostId[req.params.id] || [];
  // Add the comment to the list of comments
  comments.push({ id: commentId, content });
  // Store the list of comments for this post
  commentsByPostId[req.params.id] = comments;
  // Send the comment
  res.status(201).send(comments);
});

// Start the web server
app.listen(4001, () => {
  console.log('Listening on 4001...');
});