import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body{
    background-color: #1b1b1b;
    font-family: 'inter',sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 1rem 2rem;
    border : 3px solid #23d997;
    background-color: #1b1b1b;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 5rem;
}
h3{
    color:white;
}
h4{
    font-weight: bold;
    color:#23d997
}
a{
    font-size: 1.1rem;
    text-decoration : none;
}
span{
    font-weight: bold;
    color: #23d997;
}
p{
    padding: 3rem 0;
    
    font-size: 1.8rem;
    line-height: 150%;
}
ul{
    list-style-type: none;
    
}
*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

*::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background : rgb(58,55,55);
  
}

`;

export default GlobalStyle;
