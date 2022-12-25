import React from "react";
import Image from "next/image";
import Button from "./Button";
import images from "../assets";

const Card = ({ username, userimage, uploadtime, bacimg }) => {
  return (
    <div className="cards" style={{ backgroundImage: `url(/${bacimg}.png)` }}>
      <div className="con-div">
        <div className="userdetails">
          <div className="userimage">
            <Image src={userimage} />
          </div>
          <div className="user">
            <div className="username">{username}</div>
            <div className="uploadtime">{uploadtime}</div>
          </div>
        </div>

        <div className="circle">
          <div className="giftbutton">
            <Button
              btnImage={<Image src={images.Gift} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
        </div>
      </div>
      <div className="pill">
        <div className="pills">
          <div className="like">
            <Button
              btnImage={<Image src={images.Like} />}
              btnType="primary"
              // handleClick={}
            />
            <div className="likeCount">865</div>
          </div>
          <div className="like-1">
            <Button
              btnImage={<Image src={images.Comment} />}
              btnType="primary"
              // handleClick={}
            />
            <div className="likeCount">238</div>
          </div>
          <div className="like-2">
            <Button
              btnImage={<Image src={images.Share} />}
              btnType="primary"
              // handleClick={}
            />
            <div className="likeCount">147</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
