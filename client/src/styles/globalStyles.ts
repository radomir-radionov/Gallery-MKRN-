import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #566885;
}


body {   
  scroll-behavior: smooth;
}

#root {
  display: flex;
  flex-direction: column;
  min-height:100vh;
}


ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

body, h1, h2, h3, h4, h5 ,p{
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
