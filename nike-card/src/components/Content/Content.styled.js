import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;

  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 2.5em;
    line-height: 1em;
  }

  p {
    color: #fff;
  }

  a {
    position: relative;
    color: #111;
    background: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 10px;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    transition: .5s;
  }

  a:hover{
    color: #fff;
    background: #3d298b;
  }

  a.button:hover{
    color: #fff;
    background: #005cb1;
  }

  width: 100%;
  left: 0;
  padding: 40px;
`;
