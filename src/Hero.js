import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            pariatur deleniti illum maiores, amet eum, a culpa unde veniam animi
            doloribus molestias itaque consequuntur. Sapiente!
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
