import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 830px)",
  mobile2: "@media(max-width: 656px)",
  mobile3: "@media(max-width: 556px)",
};

export const ImageModal = styled.img`
  width: 316px;
  height: 429px;
  margin: auto;
  ${media.mobile1} {
    width: 250px;
    height: 350px;
  }
  ${media.mobile3} {
    width: 150px;
    height: 250px;
    margin-bottom: 0;
  }
`;

export const InfoModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0 0;
  h2 {
    font-size: 3rem;
    margin-top: 0;
  }
  font-family: "Roboto", "sans-serif";
  color: #3461a4;

  ${media.mobile2} {
    h2 {
      font-size: 2rem;
    }
  }
  ${media.mobile3} {
    h2 {
      font-size: 1.5rem;
    }
  }
  ${media.mobile3} {
    margin: 0 auto;
    h2 {
      margin-bottom: 5px;
    }
  }
`;

export const HouseLogo = styled.img`
  width: 80px;
  height: 80px;
  display: inline-block;
`;

export const DivModal = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 40px;
  }
  ${media.mobile2} {
    flex-direction: column;
    margin: 70px 0 0 0;
    p {
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 25px;
    }
  }
  ${media.mobile3} {
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
export const InputModal = styled.input`
  padding: 5px;
  outline: none;
  border: 1px solid #3461a4ad;
  width: 200px;
  max-width: 200px;

  ${media.mobile2} {
    width: 150px;
    margin: 0 auto;
  }
`;

export const DivButton = styled.div`
  width: 212px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .gain {
    border: none;
    outline: none;
    width: 45%;
    background-color: #69e1cb;
    padding: 5px;
    color: white;
  }
  .lose {
    border: none;
    outline: none;
    width: 45%;
    background-color: #f4a288;
    padding: 5px;
    color: white;
  }
  ${media.mobile2} {
    width: 162px;
  }
  ${media.mobile3} {
    margin-bottom: 10px;
  }
`;

export const DivNote = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: ${(props) => (props.gainOrLose === "gain" ? "green" : "red")};
`;

export const PaperModal = styled.div`
  display: flex;
  position: absolute;
  width: 776px;
  height: 488px;
  background-color: #e5edf2;
  border: none;
  outline: none;
  box-shadow: 0 0 20px 1px black;
  ${media.mobile1} {
    width: 80%;
  }
  ${media.mobile3} {
    flex-direction: column;
  }
`;
