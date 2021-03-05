import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 910px)",
  mobile2: "@media(max-width: 656px)",
  mobile3: "@media(max-width: 556px)",
  mobile4: "@media(max-width: 505px)",
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #e5edf2;
  max-width: 90vw;
  padding: 32px;
  margin: 0 auto;
`;

export const ContLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #5777a8;
  font-family: "roboto", "sans-serif";
  font-size: 36px;
  font-weight: 300;
  border-bottom: 1px solid #5777a8;
  padding-top: 20px;
  p {
    margin: 0;
  }
  .divWidth {
    width: 33%;
  }
  button {
    margin-bottom: 20px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    .write {
      font-size: 1.5rem;
      color: #5777a8;
    }
  }
  ${media.mobile1} {
    .nameStudent,
    .houseName {
      font-size: 30px;
    }
  }
  ${media.mobile2} {
    font-size: 30px;
    .nameStudent,
    .houseName {
      font-size: 25px;
    }
  }
  ${media.mobile3} {
    .nameStudent,
    .houseName {
      font-size: 20px;
    }
  }
  ${media.mobile4} {
    height: 18px;
    .nameStudent,
    .houseName {
      font-size: 15px;
    }
  }
  padding: 15px;
`;

export const DivLine = styled.div`
  width: 100%;
  font-size: 58px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  color: #5777a8;
  margin-bottom: 30px;
  ${media.mobile4} {
    font-size: 48px;
    margin-bottom: 10px;
  }
`;
