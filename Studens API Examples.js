const apiEndpoint = "https://amirandev.com/study/api";

async function getStudents() {
  const response = await fetch(`${apiEndpoint}/students`);
  const students = await response.json();
  return students;
}

async function addStudent() {
  const response = await fetch(`${apiEndpoint}/students/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Jane Doe",
      avatar: "https://example.com/avatar.png"
    })
  });
  const result = await response.json();
  return result;
}

async function getStudentById() {
  const response = await fetch(`${apiEndpoint}/student/1`);
  const student = await response.json();
  return student;
}
