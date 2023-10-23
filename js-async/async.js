//-------------------------------------------------------------------------task 1 Сереалізація і десереалізація

const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
  };
  
  // Сереалізація (об'єкт -> JSON-рядок)
  const serializedUserSettings = JSON.stringify(userSettings);
  console.log("Serialized User Settings:", serializedUserSettings);
  
  // Десереалізація (JSON-рядок -> об'єкт)
  const deserializedUserSettings = JSON.parse(serializedUserSettings);
  console.log("Deserialized User Settings:", deserializedUserSettings);

  //-----------------------------------------------------------------------task 2 Асинхронна функція delayAndLog

  async function delayAndLog(message, milliseconds) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
    console.log(message);
  }
  
  async function runTasks() {
    await delayAndLog("Message 1 after 1000ms", 1000);
    await delayAndLog("Message 2 after 2000ms", 2000);
    await delayAndLog("Message 3 after 500ms", 500);
  }
  
  runTasks();
  
  // ---------------------------------------------------------------------task 3 Асинхронні запити до сервера

  async function fetchComments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    const comments = await response.json();
    return comments;
  }
  
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const posts = await response.json();
    return posts;
  }
  
  async function fetchData() {
    const [comments, posts] = await Promise.all([fetchComments(), fetchPosts()]);
    console.log("Comments:", comments);
    console.log("Posts:", posts);
  }
  
  fetchData();
  