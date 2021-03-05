import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #6d9fea;
  display: flex;
  align-content: center;
  .center-header {
    width: 100vw;
    height: 10vh;
    background-color: #3461a4;

    display: flex;
    margin-top: 2vh;
    color: white;
    h2 {
      margin-left: 120px;
      line-height: 3vh;
    }
    img {
      margin-left: 20px;
      width: 80px;
      position: absolute;
    }
  }
`;
