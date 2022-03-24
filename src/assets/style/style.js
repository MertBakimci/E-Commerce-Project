import styled from "styled-components";

export const Container = styled.div`
width: 85%;
max-width: 1920px;
margin: 0 auto;
}
@media (max-width: 768px) {
.container {
  width: 95%;
}
}
@media (max-width: 1440px) {
.container {
  width: 90%;
}`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: ${(props) =>
    props.flexRow ? "row" : (props) => (props.flexCol ? "column" : "row")};
  justify-content: ${(props) =>
    props.justifyCenter
      ? "center"
      : (props) =>
          props.justifyStart
            ? "flex-start"
            : (props) =>
                props.justifyEnd
                  ? "flex-end"
                  : (props) =>
                      props.justifyBetween
                        ? "space-between"
                        : (props) =>
                            props.justifyEvenly ? "space-evenly" : ""};
  align-items: ${(props) =>
    props.alignCenter
      ? "center"
      : (props) =>
          props.alignStart
            ? "flex-start"
            : (props) => (props.alignStart ? "flex-end" : "")};
`;

export const FlexButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  font-weight: 300;
  flex-direction: ${(props) =>
    props.flexRow ? "row" : (props) => (props.flexCol ? "column" : "row")};
  justify-content: ${(props) =>
    props.justifyCenter
      ? "center"
      : (props) =>
          props.justifyStart
            ? "flex-start"
            : (props) =>
                props.justifyEnd
                  ? "flex-end"
                  : (props) =>
                      props.justifyBetween
                        ? "space-between"
                        : (props) =>
                            props.justifyEvenly ? "space-evenly" : ""};
  align-items: ${(props) =>
    props.alignCenter
      ? "center"
      : (props) =>
          props.alignStart
            ? "flex-start"
            : (props) => (props.alignStart ? "flex-end" : "")};
`;
export const BrandName = styled.h1`
  font-weight: 700;
  font-size: 31px;
`;
export const SearchBar = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(200px, 100%, 500px);
  background-color: var(--gray);
  padding: 20px 3px 20px 0px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--gray);
  transition: all 0.3s ease-in-out;
  max-height: 40px;

  input {
    background-color: transparent;
    width: 100%;
    outline: 0;
    border: 0;
    text-indent: 10px;
    font-size: 16px;
  }
  button {
    height: 100%;
    border-radius: 5px;
    transition: 0.1s ease-in-out;
    background-color: var(--mainColor);
    color: #fff;
    padding: 5px 15px;
    cursor: pointer;
    border: 0.1rem solid var(--mainColor);
    &:hover {
      background: transparent;
      color: var(--mainColor);
    }
    svg {
      display: block;
    }
  }
  &:focus-within {
    border: 0.1rem solid black;
  }
`;

export const Divider = styled.div`
  border: var(--dividerColor);
  margin: 5px 0 10px 0;
`;
export const ProductBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:100px;
  width: 100%;
  padding: 20px 0;
  gap: 80px 10px;
`;
export const ProductBannerBox = styled.div`
  display:flex; 
  width: 100%;
  position:relative;
  padding: 20px 20px;
  height: 360px;
  justify-content: space-between;
  background: var(--productBannerBoxColor);
  border: 1px solid var(--productBorderColor);
 text-align: right;
 cursor:pointer;
 transition:0.1s ease-in-out;
  &:first-child {
    padding:0 20px;
    p {
      font-size:1.5rem;
    }
  }
  img {
    object-fit-cover;
  }
  h1 {
    margin-top:40px;
    font-size: 62px;
    margin-bottom: -15px;
    font-weight:400;
  }
  p {
    font-size:66px;
    font-weight: 200;
  }
  &:nth-child(n+2) {
    width:47%;
  }
  &:nth-child(1n + 3) {
    margin-left: auto
  }
  &:hover {
    background: var(--gray);
    border-color: var(--mainColor);
  }
`;
