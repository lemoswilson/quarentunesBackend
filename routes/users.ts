import Router from 'express-promise-router';
import passport from 'passport';
import '../config/passport';
import { 
    deleteUser, 
    signUp, 
    updateUser, 
    signIn, 
    google, 
    verify, 
    emailRecoverPassword, 
    checkLink, 
    resetPassword,

} from '../controllers/users';
import { getDataList, saveData, updateData, getData, deleteData } from '../controllers/data';
import { validateBody, schemas } from '../helpers/routeHelpers';

const router = Router()

router.route('/signup').post(validateBody(schemas.authSchema), signUp);
router.route('/signin').post(validateBody(schemas.passSchema), passport.authenticate('local'), signIn);
router.route('/auth/google').post(google);
router.route('/auth/verify').post(passport.authenticate('jwt', { session: false }), verify);

router.route('/update').post(validateBody(schemas.authSchema), passport.authenticate('jwt', {session: false}), updateUser);
router.route('/delete').delete(passport.authenticate('jwt', {session: false}), deleteUser);

router.route('/recover').post(emailRecoverPassword)
router.route('/checkLink').post(checkLink)
router.route('/resetPassword').post(validateBody(schemas.resetPassword), resetPassword)

router.route('/userDataList').post(passport.authenticate('jwt', { session: false }), getDataList);
router.route('/saveData').post(passport.authenticate('jwt', { session: false }), saveData);
router.route('/updateData').post(passport.authenticate('jwt', { session: false }), updateData);
router.route('/deleteData').post(passport.authenticate('jwt', { session: false }), deleteData);
router.route('/getData').post(passport.authenticate('jwt', { session: false}), getData)


export default router;