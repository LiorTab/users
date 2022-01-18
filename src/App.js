import { useState, useEffect } from 'react';
import UserCard from './components/UserCard/UserCard';
import PostCard from './components/PostCard/PostCard';
import './App.scss'
import Modal from './components/Modal/Modal';
function App() {

  const [users, setUsers] = useState([]);
  const [posts, setPost] = useState([]);
  const [editingPostIndex, setPostIndex] = useState(null);



  useEffect(() => {
    (async () => {
      let userData;
      try {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => setUsers(users));
        console.log(users)



      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);

  const removeUser = (index) => {
    const arr = [...users]
    arr.splice(index, 1);
    setUsers(arr);
  }

  const postNavigate = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${index}`).then((response) => response.json()).then((posts) => setPost(posts));
    console.log(posts);

  }

  const removePost = (index) => {
    const postArr = [...posts]
    // drops from array by index
    postArr.splice(index, 1);
    setPost(postArr);
  }

  const onUpdatePost = (data) => {
    const tempArr = [...posts]
    tempArr[editingPostIndex] = data
    setPost(tempArr)
    setPostIndex(null)


  }
  //
  return (
    <div className="App">
      <div className={'card-wrapper'}>
        {users && users.map((user, idx) => { return <UserCard {...user} onRemove={() => removeUser(idx)} onNavigate={() => postNavigate(idx + 1)} key={idx} /> })}
      </div>
      <div className={'post-wrapper'}>
        {posts && posts.map((post, idx) => { return <PostCard {...post} onRemove={() => removePost(idx)} onEdit={() => setPostIndex(idx)} key={idx} /> })}
      </div>
      {editingPostIndex ? <Modal postData={posts[editingPostIndex]} onClose={() => setPostIndex(null)} onUpdate={onUpdatePost} /> : null}




    </div>

  );
}

export default App;
