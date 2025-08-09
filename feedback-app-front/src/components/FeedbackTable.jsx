function FeedbackTable({ feedbacks }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.length > 0 ? (
          feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td>{fb.name}</td>
              <td>{fb.comment}</td>
              <td>{fb.rating}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">No feedback yet.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default FeedbackTable;
