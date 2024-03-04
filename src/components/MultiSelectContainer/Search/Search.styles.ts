import styled from "styled-components";

export const StyledInput = styled.input`
      width: 800px;
      padding: 1em;
      margin-top:20px;
      font-size: 16px;
      border: 1px solid white;
      border-radius: 10px 10px 0 0;   
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
      
      @media (max-width: 1000px) {
        width: 600px;
        font-size: 16px;
      }
      @media (max-width: 660px) {
        width: 450px;
        font-size: 13px;
      }
      @media (max-width: 450px) {
        width: 350px;
        font-size: 12px;
      }
      @media (max-width: 361px) {
        width: 300px;
        font-size: 11px;
      }
      @media (max-width: 281px) {
        width: 250px;
        font-size: 10px;
      }
    `;

export const StyledSelectedCharacters = styled.div`
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: white;
        overflow: scroll;
        overflow-x: hidden;
        max-width: 800px;
        max-height: 50px;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
        @media (max-width: 1000px) {
          width: 600px;
        }
        @media (max-width: 660px) {
          width: 450px;
        }
        @media (max-width: 450px) {
          width: 350px;
        }
        @media (max-width: 361px) {
          width: 300px;
        }
        @media (max-width: 281px) {
          width: 250px;
        }
      }
    `;

export const StyledMain = styled.div`
    position: fixed;
    top: 180px;
  `;

export const StyledListItem = styled.li`
      color: black;
      padding: 1em;
      background-color: white;
    `;

export const StyledButton = styled.button`
      background-color: white;
      border: none;
      font-size:1rem;
      color:brown;
      font-weight: bold;
      padding-right:0.5em;
      cursor: pointer;
    `;
