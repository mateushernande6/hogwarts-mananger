import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 910px)",
  mobile2: "@media(max-width: 656px)",
  mobile3: "@media(max-width: 556px)",
  mobile4: "@media(max-width: 405px)",
};

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Card = styled.div`
  width: 20vw;
  .divH3 {
    width: 15vw;
    margin: 0 auto;
  }
  height: 360px;
  text-align: center;
  position: relative;
  bottom: 19px;
  background-color: #e5edf2;
  .divImage {
    width: 150px;
    height: 190px;
    margin: 0 auto;
    padding: 10px;
  }
  img {
    width: 150px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 2rem;
    margin-top: 20px;
  }
  ${media.mobile1} {
    height: 300px;
    img {
      width: 100px;
    }
    h2 {
      margin-top: 0;
    }
    .divImage {
      width: 100px;
      height: 150px;
    }
  }
  ${media.mobile2} {
    height: 250px;
    img {
      width: 80px;
    }
    .divImage {
      width: 80px;
      height: 100px;
    }
    h3 {
      font-size: 15px;
    }
  }
  ${media.mobile3} {
    height: 200px;
    h3 {
      font-size: 13px;
    }
    img {
      width: 60px;
    }
    .divImage {
      width: 60px;
      height: 80px;
    }
  }
  ${media.mobile4} {
    height: 150px;
    img {
      width: 40px;
    }
    h3 {
      font-size: 10px;
    }
    .divImage {
      width: 40px;
      height: 60px;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;
