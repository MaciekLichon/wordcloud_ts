"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const db_1 = require("./../db");
const router = (0, express_1.Router)();
exports.router = router;
router.route('/questions').get((req, res) => {
    res.json(db_1.db.questions);
});
router.route('/questions/random').get((req, res) => {
    const randomIndex = Math.floor(Math.random() * db_1.db.questions.length);
    res.json(db_1.db.questions[randomIndex]);
});
