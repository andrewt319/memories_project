import express from 'express';

import { getPosts, createPosts, updatePosts, deletePost, likePost } from '../controllers/posts.js';

// routers handle requests
const router = express.Router();

// reached by localhost:3000/posts
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePosts);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;