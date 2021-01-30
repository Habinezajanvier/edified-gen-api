import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import { auth, adminAuth } from '../middlewares/authorization';
import partnersController from '../controllers/partners';
import { partnerValidation, updatePartnerValidation } from '../middlewares/validation';
import { getSignedUrl } from '../controllers/files';

const partnerRoutes = new Router();

partnerRoutes
    .post('/', [auth, adminAuth], partnerValidation, asyncHandler(partnersController.addPartner))
    .get('/signedUrl', [auth, adminAuth], asyncHandler(getSignedUrl))
    .get('/', asyncHandler(partnersController.getPartners))
    .get('/:id', asyncHandler(partnersController.getPartner))
    .put('/:id', [auth, adminAuth], updatePartnerValidation, asyncHandler(partnersController.updatePartner))
    .delete('/:id', [auth, adminAuth], asyncHandler(partnersController.deletePartner));

export default partnerRoutes;
