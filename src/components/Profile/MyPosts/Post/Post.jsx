import React, {useState}  from "react";
import s from './Post.module.css';




function Post(props) {

  const [count, setCount] = useState(0);


 

  return (
    <div className={s.item}>
      <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1596A1PA4137PT10X14Y11D1034059454W3415H4098/views/1,width=800,height=800,appearanceId=1,backgroundColor=F2F2F2/funny-whippet-dog-head-dog-gift-square-magnet.jpg" />
      {props.message}
      <div>
        <button onClick={()=> setCount(count+1)}>like {count}</button> {props.count} 
      </div>
    </div>
  )
}

export default Post;


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
//   );
// }