//8번
router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

//9번
exports.renderProfile = (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird' });
    }; 