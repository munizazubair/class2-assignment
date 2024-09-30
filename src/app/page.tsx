import Image from "next/image";
import image from "../app/public/image.jpg";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="childContainers">
        <div className="childContainer1">
          Hey, My Name is <br />
          <span className="name">Muniza Zubair</span>
          <br />
        </div>

        <div className="childContainer2">
          I am a passionate frontend developer <br /> with expertise in
          TypeScript,
          <br />
          currently mastering Next.js.
        </div>
      </div>
      <Image src={image} className="image" alt="my image"/>
    </div>
  );
}
