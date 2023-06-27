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

        const error = false;

        if (!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong');
        }
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
  
function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.values !== 0) {
          resolve(posts.pop());
        } else {
          reject('Array is empty now');
        }
      }, 1000); 
    });
  }
 
  createPost({title:'Post Three', body:'This is post three'})
  .then(getPosts)
  .catch(err=>console.log(err))
  .then(deletePost)
  .catch(err=>console.log(err));
  
  function updateLastUserActivityTimeAndDeletePost() {
    Promise.all([createPost({ title: 'Post Four', body: 'This is post four' }), updateLastUserActivityTime()])
      .then(([createdPost, activityTime]) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', activityTime);
        return deletePost(createdPost);
      })
      .then(() => {
        console.log('Post deleted successfully.');
        console.log('New Posts:', posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  getPosts();
  updateLastUserActivityTimeAndDeletePost(); 
  