const API_URL = "https://amirandev.com/study/api";

async function getPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error while fetching posts: ", error);
  }
}

async function getPostById() {
  const postId = 1; // Replace with the ID of the post you want to fetch
  try {
    const response = await fetch(`${API_URL}/post/${postId}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error while fetching post with ID ${postId}: `, error);
  }
}

async function addPost() {
  const requestBody = {
    student_id: 1, // Replace with the ID of the student who wrote the post
    text: "This is a new post", // Replace with the text of the post
  };
  try {
    const response = await fetch(`${API_URL}/posts/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data.data.id;
  } catch (error) {
    console.error("Error while adding post: ", error);
  }
}
