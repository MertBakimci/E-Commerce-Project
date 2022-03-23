import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: ${props => props.justifyCenter ? "center" : props => props.justifyStart ? "flex-start" : props => props.justifyEnd ? "flex-end": props => props.justifyBetween ? "space-between" : props => props.justifyEvenly ? "space-evenly" :""};
    align-items: ${props => props.alignCenter ? "center" : props => props.alignStart ? "flex-start" : props => props.alignStart ? "flex-end":""};
`;

