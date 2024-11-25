//8번 - MySQL 명령어 작성
INSERT INTO node.js.users(name, age, married, comment) VALUES ('ab', 22, 0, '안녕하세요');
INSERT INTO node.js.users(name, age, married, comment) VALUES ('cd', 22, 0, '반갑습니다');


//9번
const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
    const users = await User.(findAll)();	//메서드를 이용해 모든 사용자 찾기
    res.render('sequelize', { (users) });	//sequelize.html을 렌더링할 때 결과 값
    } catch (err) {
    console.error(err);
    next(err);
    }
});

module.exports = (router);	//다른 파일에서 사용할 수 있도록 내보냄