import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;

export const Content = styled.div`
  float: left; 
  width: 100%;

  h1 {
    font-size: 3.5rem;
    padding: 3rem 0 2rem;
  }

  .input-content {
    width: 96%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--border);
    border-radius: 2rem;

    div {
      position: relative;
      left: 5%; 
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 0;
      
    } 
  }

  input {
    margin: 1rem 1.5rem;
    font-size: 1rem;
    background: var(--background);
    border: 0;
    width: 65%;

    &:focus {
      outline: none;
    }
  }

  label {
    position: relative;
    margin-left: 1rem;
    padding: 0.4rem 0.5rem;

    input {
      position: absolute;
      opacity: 0;

      &:checked {
        
        background: var(--black);
        color: var(--background)
      }
    }
  }

  button {
    color: var(--black);
    font-size: 1rem;
    margin-left: 1rem;
    padding: 0.4rem 0.7rem;
    border: 0;
    border-radius: 1rem;
    cursor: pointer;
    background: var(--background);
    transition: background 0.25s;

    &:focus {
      color: var(--background);
      background: black;
    }

    &.search-btn {
      position: relative;
      left: 4%;
      color: var(--background);  
      padding: 0 1rem;
      font-size: 1rem;
      background: var(--black);
      border-radius: 50%;
    }
    
  }
`;