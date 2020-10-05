import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import eventController from '../controllers/event';
import { auth, adminAuth } from '../middlewares/authorization';


const eventRouter = new Router();

eventRouter
    .post('/', [auth, adminAuth], asyncHandler(eventController.postEvent))
    .get('/', [auth, adminAuth], asyncHandler(eventController.getEvents))
    .delete('/:id', [auth, adminAuth], asyncHandler(eventController.deleteEvent))
    .put('/:id', [auth, adminAuth], asyncHandler(eventController.updateEvent))

export default eventRouter;
