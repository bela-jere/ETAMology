// PastExams.tsx
import { useState } from 'react';
import ExamCard from './examCard';

function PastExams() {
  const [search, setSearch] = useState("");

// Example data
  const exams = [
    {
      title: "CSCE 121",
      professor: "Meer",
      semester: "Fall 2023",
      difficulty: "Medium",
      tags: ["CSCE 121", "Meer", "Midterm", "2023", "Fall"]
    },
    {
      title: "MATH 251",
      professor: "Smith",
      semester: "Spring 2024",
      difficulty: "Hard",
      tags: ["MATH 251", "Smith", "Final", "2024", "Spring"]
    },
    {
      title: "ECON 202",
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
    <div className="pastExams">
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

      {/*upload content*/}
        <div className="uploadExams">
          <button className="uploadBtn">Upload resource</button>
        </div>

      
    </div>
  );
}

export default PastExams;
