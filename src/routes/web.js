const express = require('express');
const router = express.Router();
// viet tiep duoi dong nay
const { getHomePage, getAddUserPage, postnewUser, UpdateUser, getAllUsers } = require('../controllers/homeController');
// route cho addnew
router.get('/addnew', getAddUserPage);
// router cho hien thi home
router.get('/', getHomePage);
router.get('/', getAllUsers);

// rounter để post lên database và homepage
router.post('/', postnewUser);

router.get('/UpdatePage', UpdateUser);

// export default
module.exports = router;