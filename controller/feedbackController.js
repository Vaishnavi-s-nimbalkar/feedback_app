const Feedback = require('../model/Feedback');

exports.getFeedbacks = async (req, res) => {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);   
};

exports.createFeedback = async (req, res) => {
        const { name, comment, rating } = req.body;
        const newFeedback = new Feedback({ name, comment, rating });
        await newFeedback.save();
        res.status(201).json(newFeedback);
   
};
