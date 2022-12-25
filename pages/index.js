import Image from "next/image";
import images from "../assets";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="app">
      <div className="homeContainer">
        <div className="nav top">
          <div className="left-icons">
            <Image src={images.Logo} />
            <Image src={images.Trail} />
          </div>
          <div className="right-icons">
            <div className="dmSquare">
              <Button
                btnImage={<Image src={images.DM} />}
                btnType="primary"
                // handleClick={} -> For Button Click
              />
            </div>
          </div>
        </div>
        <div className="temp-user-card">
          <div className="post-a">
            <Card
              username="Nettie Fernandes"
              bacimg="BaseCard"
              userimage={images.Avatar}
              uploadtime="Just now"
            />
          </div>
          <div className="post-b">
            <Card
              username="Ally Sebastian"
              bacimg="BaseCardt"
              userimage={images.Avatar2}
              uploadtime="11 : 11 PM"
            />
          </div>
        </div>

        <div className="bottom-navbar">
          <div className="homeButton">
            <Button
              btnImage={<Image src={images.Home} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
          <div className="discoverButton">
            <Button
              btnImage={<Image src={images.Discover} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
          <div className="uploadButton">
            <Button
              btnImage={<Image src={images.Upload} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
          <div className="uploadButton">
            <Button
              btnImage={<Image src={images.Notification} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
          <div className="uploadButton">
            <Button
              btnImage={<Image src={images.Wallet} />}
              btnType="primary"
              // handleClick={} -> For Button Click
            />
          </div>
        </div>
      </div>
    </div>
  );
}
