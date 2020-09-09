import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  background-color: #f0f0f0;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: black;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3 {
  font-family: Pacifico;
  padding: 0;
  margin: 0;
}
p {
  padding: 0;
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
input, button {
  font: inherit;
}
input::-webkit-outer-spin-button, 
input::-webkit-inner-spin-button 
{
  -webkit-appearance: none;
}
@keyframes loader {
  0% {
    width: 10%;
    transform: rotate(0deg);
  }
  10% {
    left: 0%;
    transform: rotate(0deg);
  }
  20% {
    width: 0%;
    left: 20%;
  }
  30% {
    width: 25%;
  }
  50% {
    left: 15%;
    width: 35%;
  }
  70% {
    width: 30%;
    left: 18%;
    transform: rotate(240deg);
  }
  90% {
    width: 30%;
    left: 10%;
  }
  100% {
    width: 2%;
    left: 25%;
    transform: rotate(360deg);
  }
}

@keyframes pan {
  0% {
    transform: rotate(0deg);
    transform-origin: top right;
  }
  10% {
    transform: rotate(-2deg);
    transform-origin: top right;
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes shadow {
  0% {
    width: 30%;
  }
  50% {
    width: 40%;
    left: 20px;
  }
  100% {
    width: 30%;
  }
}
`;

