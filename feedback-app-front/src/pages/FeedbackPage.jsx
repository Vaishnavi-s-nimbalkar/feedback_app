import { useEffect, useState } from "react";
import api from "../api";
import FeedbackTable from "../components/FeedbackTable";

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const loadFeedbacks = async () => {
    const res = await api.get("/feedback");
    setFeedbacks(res.data);
  };

  const addFeedback = async (e) => {
    e.preventDefault();
    if (!name || !comment || !rating) return;
    await api.post("/feedback", { name, comment, rating: parseInt(rating) });
    setName("");
    setComment("");
    setRating("");
    loadFeedbacks();
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Feedback App</h2>

      <form onSubmit={addFeedback} className="mb-4">
        <input className="form-control mb-2" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Your Feedback" value={comment} onChange={(e) => setComment(e.target.value)} />
        <input type="number" className="form-control mb-2" placeholder="Rating (1-5)" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button className="btn btn-primary">Submit Feedback</button>
      </form>

      <FeedbackTable feedbacks={feedbacks} />
    </div>
  );
}

export default FeedbackPage;
