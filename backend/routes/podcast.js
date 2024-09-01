import express from 'express';
import {
    addView,
    addepisodes,
    createPodcast,
    favoritPodcast,
    getByCategory,
    getByTag,
    getPodcastById,
    getPodcasts,
    random,
    search,
    mostpopular
} from '../controllers/podcasts.js';  // Ensure this path is correct

const router = express.Router();

// Route handlers
router.post('/', verifyToken, createPodcast);
router.get('/', getPodcasts);
router.get('/get/:id', getPodcastById);
router.post('/episode', verifyToken, addepisodes);
router.post('/favorit', verifyToken, favoritPodcast);
router.post('/addview/:id', addView);
router.get('/mostpopular', mostpopular);
router.get('/random', random);
router.get('/tags', getByTag);
router.get('/category', getByCategory);
router.get('/search', search);

export default router;
