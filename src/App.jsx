function App() {
  const fullName = "Anguun Tushigsaikhan";
  const studentId = "10882716";

  return (
    <div className="page">
      <div className="card">
        <h1>{fullName}</h1>
        <p>UVU Student ID: {studentId}</p>
        <p>Deployed with React + Docker on AWS</p>
      </div>
    </div>
  );
}

export default App;
