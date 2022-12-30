import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

// routers handle requests
const router = express.Router();

// reached by localhost:3000/posts
router.get('/', getPosts);
router.post('/', createPosts);

export default router;