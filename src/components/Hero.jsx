import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/HeroDesign.png";
export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="" />
          <h1>
            BIG SALE
            <span>50% OFF</span>
          </h1>
        </div>
        <div className="info">
          <h2>FRESH & DELICIOUS</h2>
          <em>
            Experience the finest quality food delivered fresh to your table. 
            Our premium ingredients and expert preparation guarantee delightful flavors in every bite!
          </em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 5%;
      flex: 0 0 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        max-height: 55vh;
        width: 100%;
        object-fit: contain;
      }
      h1 {
        color: white;
        position: relative;
        margin-top: 2rem;
        font-size: 4.5rem;
        line-height: 1.05;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      flex: 0 0 50%;
      right: 0;
      padding-right: 5%;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 80%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
