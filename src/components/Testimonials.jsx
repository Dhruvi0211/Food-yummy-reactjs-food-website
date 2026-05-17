import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
const testimonialsData = [
  {
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "The food quality is absolutely outstanding! Fresh ingredients, incredible flavors, and excellent service. Best food ordering experience I've had!",
  },
  {
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
    message:
      "Highly recommend this restaurant! The delivery was super fast and the food arrived perfectly hot. Great value for money, will order again!",
  },
  {
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    message:
      "Amazing variety of dishes and professional service. The chefs really know their craft. My family loves the food!",
  },
];
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          {testimonialsData.map((item, index) => (
            <div className="testimonial" key={index}>
              <div className={`image avatar${index + 1}`}>
                <img src={item.image} alt="Customer testimonial" />
              </div>
              <p>
                {item.message.split(" ").map((word, i) => {
                  if (i === 0) return word;
                  return ` ${word}`;
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
          &.avatar1 img {
            filter: brightness(1) saturate(1);
          }
          &.avatar2 img {
            filter: sepia(0.3) brightness(0.95) saturate(1.1);
          }
          &.avatar3 img {
            filter: hue-rotate(15deg) brightness(1.05) saturate(0.9);
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
