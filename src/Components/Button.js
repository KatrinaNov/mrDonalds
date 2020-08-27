import styled from 'styled-components';

export const Button = styled.button`
  background: #299B01;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  padding: 20px;
  border-color: transparent;
  margin: auto;
  margin-bottom: 40px;
  width: 250px;
  transition-property: color, border-color, background;
  transition-duration: 0.5s;
  &:hover {
    background: #fff;
    color: #299B01;
    border-color: #299B01;
  }
`;