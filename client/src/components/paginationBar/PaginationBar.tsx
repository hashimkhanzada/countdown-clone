import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  selectedPage: number;
  nextPage: MouseEventHandler;
  prevPage: MouseEventHandler;
  onPageChange: MouseEventHandler;
  isFirstPage: boolean;
  isLastPage: boolean;
}

const PaginationBar = ({
  itemsPerPage,
  totalItems,
  selectedPage,
  nextPage,
  prevPage,
  onPageChange,
  isFirstPage,
  isLastPage,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {isFirstPage ? (
        <a className="disabled">&laquo;</a>
      ) : (
        <a onClick={prevPage}>&laquo;</a>
      )}

      {pageNumbers.map((number) => {
        return number == selectedPage ? (
          <a id={number.toString()} className="active" key={number}>
            {number}
          </a>
        ) : (
          <a id={number.toString()} onClick={onPageChange} key={number}>
            {number}
          </a>
        );
      })}

      {isLastPage ? (
        <a className="disabled">&raquo;</a>
      ) : (
        <a onClick={nextPage}>&raquo;</a>
      )}
    </Container>
  );
};

export default PaginationBar;

const Container = styled.div`
  display: inline-block;

  &:hover {
    cursor: pointer;
  }

  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }

  a.active {
    background-color: #007837;
    color: white;
    border: 1px solid #007837;
  }

  a.disabled {
    background-color: #dbdbdb;
    color: #666666;
    border: 1px solid #dbdbdb;
    cursor: not-allowed;
  }

  a:hover:not(.active) {
    background-color: #ddd;
  }
`;
