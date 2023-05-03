import React from "react";
import styled from "styled-components";
import { DOTS, usePagination } from "../../hooks/usePagination";
import { Icon } from "../Global/Icon";

interface PaginationTwoProps {
  onPageChange: (pageNumber: number) => object;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export const PaginationTwo: React.FC<PaginationTwoProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <Style.Container>
      {/* Left navigation arrow */}
      <li
        className={`${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <Icon name="arrow-left-blue" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              className={`${pageNumber === currentPage ? "selected" : ""}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      {/*  Right Navigation arrow */}
      <li
        className={`${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <Icon name="arrow-right-blue" />
      </li>
    </Style.Container>
  );
};

const Style = {
  Container: styled.ul`
    display: flex;
    list-style-type: none;
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--blue-300);
    gap: 16px;

    li {
      height: 20px;
      width: 20px;
      text-align: center;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--blue-300);

      &.dots:hover {
        background-color: transparent;
        cursor: default;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
      }

      &.selected {
        background-color: var(--blue-300);
        color: var(--blue-500);
      }

      .arrow {
        &::before {
          position: relative;
          /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
          content: "";
          /* By using an em scale, the arrows will size with the font */
          display: inline-block;
          width: 0.4em;
          height: 0.4em;
          border-right: 0.12em solid rgba(0, 0, 0, 0.87);
          border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        }

        &.left {
          transform: rotate(-135deg) translate(-50%);
        }

        &.right {
          transform: rotate(45deg);
        }
      }

      &.disabled {
        pointer-events: none;

        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }

        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
    }
  `,
};
