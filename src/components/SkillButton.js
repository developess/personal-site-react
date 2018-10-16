import styled from 'styled-components';

const Button = styled.button`
  font-family: ${props => props.theme.fontStack};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  transition: ${props => props.theme.steady};
  box-shadow: ${props => props.theme.boxShadow};
  :hover {
    color: white;
    opacity: 0.9;
  }
  &.node {
    background-color: ${props => props.theme.purple};
  }
  &.database {
    background-color: ${props => props.theme.lavender};
  }
  &.git {
    background-color: ${props => props.theme.cyan};
  }
  &.css {
    background-color: ${props => props.theme.yellow};
  }
  &.javascript {
    background-color: ${props => props.theme.orange};
  }
  &.frontend {
    background-color: ${props => props.theme.pink};
  }
  &.methodology {
    background-color: ${props => props.theme.skyBlue};
  }
`;

export default Button;