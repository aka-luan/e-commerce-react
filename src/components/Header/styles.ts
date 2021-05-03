import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  border-bottom: 1px solid var(--border);
  position: relative;

`;

export const Content = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: row;
  }

  img {
    max-height: 49px;
    margin-right: 3rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    
    li {
      padding: 1rem;
    }   

    .dropdown-right, .dropdown-left {
      position: relative;
      
      div {
        top: 100%;
        overflow: hidden;
        max-height: 0px;
        position: absolute;
        display: block;
        background-color: var(--background);
        min-width: 150px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-top: 1px solid var(--border);
        transition: max-height 1s;

        a {
          font-size: 1rem;
          float: none;
          color: var(--black);
          padding: 0.8rem;
          display: block;
          text-align: left; 
          display: block;

          i {
            margin-right: 0.75rem;
          }
        }
      }

      &:hover div{
        max-height: 400px;
      }
    }

    .dropdown-right {
      div {
        right: 0;
      }
    }
  }

  a {    
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: var(--black);
    }
  }

  button {
    color: var(--black);
    font-size: 1rem;
    background-color: var(--background);
    border: 0;
    cursor: pointer;
    padding: 1rem;
    i.fa-caret-down {
      color: var(--border);
    }        
  }
`;