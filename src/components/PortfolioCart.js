import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SinglePortfolio({ portfolios }) {
  //console.log(room) use to see what props we can get!
  const { type, images, logo, slug } = portfolios;
  return (
    <Cart>
      <CartContainer>
        <img src={images[0]} alt="portfolio" />
        {/*Us || to set default img */}
        <div className="logo-top">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Link to={`/portfolio/${slug}`} className="btn-primary portfolio-link">
          {/* root is our path to exact portfolio wee click */}
          {type}
        </Link>
      </CartContainer>
    </Cart>
  );
}

const Cart = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  :hover {
    box-shadow: var(--darkShadow);
  }
`;

const CartContainer = styled.article`
  position: relative;
  img {
    width: 100%;
    max-height: 180px;
    display: block;
    transition: var(--mainTransition);
  }
  @media screen and (max-width: 776px) {
    img {
      width: 100%;
      max-height: 200px;
    }
  }
  .logo {
    max-width: 50px;
  }
  .logo-top {
    position: absolute;
    top: 0;
    right: 0;
    background: black;
    color: black;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-left-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: var(--mainTransition);
  }

  .portfolio-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
  }
  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
  :hover img {
    opacity: 0.3;
  }
  :hover .price-top {
    opacity: 0;
  }
  :hover .portfolio-link {
    transform: translate(-50%, -50%) scale(1);
  }
`;