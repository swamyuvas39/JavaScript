const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString();
        resolve(currentTime);
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = posts.findIndex((p) => p.title === post.title);
        if (index !== -1) {
          posts.splice(index, 1);
          resolve();
        } else {
          reject(new Error('Post not found.'));
        }
      }, 1000);
    });
  }
  
  function updateLastUserActivityTimeAndDeletePost() {
    Promise.all([createPost({ title: 'Post Three', body: 'This is post three' }), updateLastUserActivityTime()])
      .then(([createdPost, activityTime]) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', activityTime);
        return deletePost(createdPost);
      })
      .then(() => {
        console.log('Post deleted successfully.');
        console.log('New Posts:', posts);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }
  
  getPosts();
  updateLastUserActivityTimeAndDeletePost();
  