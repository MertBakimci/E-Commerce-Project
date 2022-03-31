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
  overflow:hidden;
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
  margin-top: 100px;
  width: 100%;
  padding: 20px 0;
  gap: 80px 10px;
  @media (max-width : 500px) {
    gap: 30px 10px;
  }
`;
export const ProductBannerBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  background-color: var(--productBannerBoxColor);
  border:1px solid var(--productBorderColor);
  justify-content:space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    border: 1px solid var(--mainColor);
  }
  .item-img {
    padding-right: 50px;
    img {
      width:100%;
      object-fit: cover;
    }
  }
  .title {
    width: clamp(100px,30%,400px);
    text-align: right;
    width: fit-content;
    &.have-discount{
     
    }
  }
  .discount-banner {
    padding: 0 50px;
    gap:0;
    span {
      margin:0;
      margin-bottom -20px;
      font-size: clamp(1.5rem,6vw,7rem)
    }
    p{
      font-size: clamp(1rem,3vw, 60px);
    }
  }
  h1 {
    font-size: clamp(2rem,3vw, 60px);
  } p {
    font-size: clamp(1.2rem, 1.5vw, 30px)
  }
  &:nth-child(2),&:nth-child(3) {
    width: calc(47% - 10px);                                                                                                                                                                                                                                                                             
  }
  &:nth-child(3) {
    margin-left: auto;                                                                                                                                                                                                                                                                            
  }
  @media (max-width : 1000px) {
    flex-direction: column;
    gap: 20px;
    .item-img {
      padding:0;
    }
    .title {
      width: 100%;
      text-align: center;
    }
    .discount-banner {
      span {
        margin-bottom 0px;
        font-size: clamp(1.5rem,6vw,7rem)
      }
  }
  @media (max-width : 500px) {
    &:nth-child(2),&:nth-child(3) {
      width: 100%; 
      .item-img {
        img {
          width:100%;
          object-fit: cover;
        }
      }                                                                                                                                                                                                                                                                           
    }
  }
 
`;
