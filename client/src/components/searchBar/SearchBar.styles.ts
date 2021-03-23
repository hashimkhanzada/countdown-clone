import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBarContainer = styled.div`
  background: white;
  display: flex;
  align-items: center;
  border: 1px solid rgb(155, 155, 155);
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-right: 1px solid rgb(155, 155, 155);
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 8px 12px;
  font-size: 16px;

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
  margin: 2px;
`;
