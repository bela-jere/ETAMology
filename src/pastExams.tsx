// PastExams.tsx
import { useState } from 'react';
import ExamCard from './examCard';

function PastExams() {
  const [search, setSearch] = useState("");

// Example data
  const exams = [
    {
      title: "CSCE 121 Midterm",
      professor: "Meer",
      semester: "Fall 2023",
      difficulty: "Medium",
      tags: ["CSCE 121", "Meer", "Midterm", "2023", "Fall"]
    },
    {
      title: "MATH 251 Final",
      professor: "Smith",
      semester: "Spring 2024",
      difficulty: "Hard",
      tags: ["MATH 251", "Smith", "Final", "2024", "Spring"]
    },
    {
      title: "ECON 202 Quiz Pack",
      professor: "Johnson",
      semester: "Fall 2022",
      difficulty: "Easy",
      tags: ["ECON 202", "Johnson", "Quizzes", "2022", "Fall"]
    },
  ];

  // Filter exams by search text
  const filteredExams = exams.filter(exam =>
    exam.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="past-exams">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search exams by course, professor, type, year..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Grid of Cards */}
      <div className="exam-grid">
        {filteredExams.map((exam, index) => (
          <ExamCard key={index} {...exam} />
        ))}
      </div>
    </div>
  );
}

export default PastExams;
