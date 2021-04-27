import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root {
    --red: #e9150a;
    --black: #080b13;

    --border: #9b9791;
    --shape: #f3efeb;
    --background: #faf9f7;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px a partir do padrão (16px)
    }
    @media(max-width: 720px) {
      font-size: 87.5% ; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;    
  }

  body, input, textarea, button {
    font-family: 'Gilroy', sans-serif;
    //font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Gilroy-Bold', sans-serif;
    //font-weight: 600;
  }


  
`;