const { customFilter } = require("./utils");      
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    );

    const data = await response.json();

const filteredPosts = customFilter(data, (post) => {
  return post.userId === 1;
});

console.log("Filtered Posts:", filteredPosts);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPost();