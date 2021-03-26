import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBarContainer = styled.form`
  background: white;
  display: flex;
  align-items: center;
  border: 1px solid rgb(155, 155, 155);
  border-radius: 4px;
  flex-grow: 1;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border: none;
    cursor: pointer;
    margin: 2px;

    :focus {
      outline: 0;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 8px 12px;
  font-size: 16px;

  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  ::placeholder {
    color: rgb(155, 155, 155);
  }

  :focus {
    outline: 0;

    ::placeholder {
      color: lightgray;
    }
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 32px;
  color: #535e65;
  transition: all 0.2s ease;

  &:hover {
    color: green;
    padding: 3px;
  }
`;
