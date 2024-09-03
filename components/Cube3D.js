// Imports
import Image from "next/image";

// Local Images
import frontImage from "@/public/home-page-images/home-header-picture-iv-(with-kiri)-(original)-(tinypng).jpg";
import topImage from "@/public/home-page-images/home-header-picture-i-(cropped)-(tinypng).jpg";
import rightImage from "@/public/home-page-images/nena-facebook-video-screenshot-(cropped)-(tinypng).png";
import bottomImage from "@/public/home-page-images/home-header-picture-ii-(cropped)-(tinypng).jpg";
import leftImage from "@/public/home-page-images/nena-facebook-video-screenshot-(cropped)-(tinypng).png";
import backImage from "@/public/home-page-images/home-header-picture-iv-(with-kiri)-(original)-(tinypng).jpg";

// Cube 3D (Sitewide) Component
export default function Cube3D() {
  return (

    <div className="cube-3d-scene-container">
      <div className="cube">
        <div className="face front">{/*background-image-default*/}
          <Image src={ frontImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur" priority={ true }/>{/*loading="eager"*/}{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        <div className="face top" aria-hidden="true">{/*background-image-default*/}
          <Image src={ topImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur"/>{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        <div className="face right" aria-hidden="true">{/*background-image-default*/}
          <Image src={ rightImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur"/>{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        <div className="face bottom" aria-hidden="true">{/*background-image-default*/}
          <Image src={ bottomImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur"/>{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        <div className="face left" aria-hidden="true">{/*background-image-default*/}
          <Image src={ leftImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur"/>{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        <div className="face back" aria-hidden="true">{/*background-image-default*/}
          <Image src={ backImage } alt="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" placeholder="blur"/>{/*loading="lazy"*/}{/*fill={ true }*/}
        </div>

        {/*<div className="face front background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/home-header-picture-iv-(with-kiri)-(original)-(tinypng).jpg')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri">
        </div>

        <div className="face top background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/home-header-picture-i-(cropped)-(tinypng).jpg')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" aria-hidden="true">
        </div>

        <div className="face right background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/nena-facebook-video-screenshot-(cropped)-(tinypng).png')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" aria-hidden="true">
        </div>

        <div className="face bottom background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/home-header-picture-ii-(cropped)-(tinypng).jpg')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" aria-hidden="true">
        </div>

        <div className="face left background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/nena-facebook-video-screenshot-(cropped)-(tinypng).png')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" aria-hidden="true">
        </div>

        <div className="face back background-image-default" type="image" style={{ backgroundImage:"url('/home-page-images/home-header-picture-iv-(with-kiri)-(original)-(tinypng).jpg')" }} title="Pure HTML & CSS 3D rotating cube featuring Simón, Ñeña, and Kiri" aria-hidden="true">
        </div>*/}
      </div>
    </div>

  )
};