import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let posts  = [
        {id:1, message: 'hi, how are you?', likesCount:12},
        {id:2, message: 'it`s my first post', likesCount:11},
        {id:3, message: 'Blabla', likesCount:13},
        {id:4, message: 'Dadadada', likesCount:145},
    ]

    let postsElements =
        posts.map(p=>  <Post message={p.message} count={p.likesCount}/>);
    return <div className={s.postsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
            {/* <Post/>
      <Post/>
      <Post/>
      <Post/>  */}
        </div>
    </div>

}

export default MyPosts;

// import React, { useState } from 'react';

// function Example() {
//   // Объявление новой переменной состояния «count»
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Вы кликнули {count} раз(а)</p>
//       <button onClick={() => setCount(count + 1)}>
//         Нажми на меня
//       </button>
//     </div>