import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
          We provide high-quality, fresh food prepared with passion and expertise. 
          From sourcing premium ingredients to expert cooking and fast delivery, 
          we ensure every meal is a memorable dining experience.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            Premium quality ingredients sourced from <span>trusted local farms</span> 
            and suppliers. We ensure freshness and nutritional value in every meal.
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            Expert chefs crafting <span>delicious dishes</span> with passion and 
            attention to detail. Every recipe is perfected for taste and presentation.
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
            Fast and reliable <span>delivery service</span> ensuring your food arrives 
            hot and fresh. Same-day delivery available in most areas.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
