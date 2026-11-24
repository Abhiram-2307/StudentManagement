
import React from "react";

// Header Component
function Header() {
  return <h1>Student Management System</h1>;
}

// StudentList Component
function StudentList() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 45 },
    { id: 3, name: "Arun", marks: 72 },
    { id: 4, name: "Sneha", marks: 30 },
    { id: 5, name: "Kiran", marks: 90 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>
                {student.marks >= 40 ? "PASS" : "FAIL"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Footer Component
function Footer() {
  return <h3>End of Student Management System</h3>;
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
