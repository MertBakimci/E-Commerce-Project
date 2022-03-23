import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: ${(props) =>
    props.flexRow ? "row" : (props) => (props.flexStart ? "column" : "row")};
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
  padding: 6px 2px 6px 0px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid var(--gray);
  transition:all 0.3s ease-in-out;
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
    background-color: var(--mainColor);
    color: #fff;
    padding: 5px 15px;
    svg {
      display: block;
    }
  }
  &:focus-within {
    border: 2px solid black;
  }
`;
