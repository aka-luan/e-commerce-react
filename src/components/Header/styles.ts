import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  border-bottom: 0.0625rem solid var(--border);
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

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    
    li {
      line-height: 1rem;
      padding: 1rem 1.5rem;
      
      button {
        color: var(--black);
        font-size: 1rem;
        background-color: var(--background);
        border: 0;
        cursor: pointer;
        i.fa-caret-down {
          color: var(--border);
        }        
      }

      .dropdown-container {
        max-width: 100%;
        max-height: 0px;
        overflow: hidden;
        position: absolute;
      }

      .dropdown-content {
        display: block;
        
        background-color: var(--shape);
        min-width: 160px;
        box-shadow: 0px 8px 16px 0  px rgba(0,0,0,0.2);
        z-index: 1;
        transition: max-height 1s ease-in-out;

        a {
          border: 0.0625px solid var(--border);
          border-top: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block; 
        }        
      } 

      &:hover {
        .dropdown-container {
          max-height: 600px;
        }
      } 
    }    
  }
`;