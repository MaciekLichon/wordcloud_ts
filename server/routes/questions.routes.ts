import { Router } from 'express';
import { db } from './../db';

const router = Router();

router.route('/questions').get((req, res) => {
  res.json(db.questions);
});

router.route('/questions/random').get((req, res) => {
  const randomIndex = Math.floor(Math.random()*db.questions.length);
  res.json(db.questions[randomIndex]);
});

export { router };
