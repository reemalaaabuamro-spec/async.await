async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    );

    const data = await response.json();

    console.log("AJAX Response Data:", data);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPost();