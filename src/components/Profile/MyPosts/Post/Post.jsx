import React from "react";
import s from './Post.module.css';

const Post = (props) => {


  return (

    <div className={s.item}>
      <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1596A1PA4137PT10X14Y11D1034059454W3415H4098/views/1,width=800,height=800,appearanceId=1,backgroundColor=F2F2F2/funny-whippet-dog-head-dog-gift-square-magnet.jpg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;