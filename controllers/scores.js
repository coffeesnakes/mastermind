var Score = require("../models/score");

async function create(req, res) {
  try {
    await Score.create(req.body);
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function highScores(req, res) {
  try {
    const scores = await Score.find({})
      .sort({ numGuesses: 1, seconds: 1 })
      .limit(req.query.limit || 20);
    res.json(scores);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  create,
  highScores,
};