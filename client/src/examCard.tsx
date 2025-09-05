function ExamCard({ title, professor, semester, difficulty, tags }) {
  return (
    <div className="exam-card">
      <h2>{title}</h2>
      <p><strong></strong> {professor}</p>
      <p><strong></strong> {semester}</p>
      <p><strong>Difficulty:</strong> {difficulty}</p>

      {/* Tags */}
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      {/* Download Button */}
      <button className="download-btn">Download Exam</button>
    </div>
  );
}

export default ExamCard;