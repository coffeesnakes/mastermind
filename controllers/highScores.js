var Score = require("../models/score");

export async function create(req, res) {
  try {
    await Score.create(req.body);
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

export async function highScores(req, res) {
  const scores = await Score.find({})
    .sort({ numGuesses: 1, seconds: 1 })
    .limit(req.query.limit || 10);
  res.json(scores);
}
