import React from 'react';
import { useMemo } from 'react';
import SVG from 'react-inlinesvg';
import { useCallback } from 'react';
import { CurrentPage, Ellipsis, PageButton, PaginationStyled } from './styles';

import previousButton from '../../assets/chevron-left-black-icon.svg';
import nextButton from '../../assets/chevron-right-black-icon.svg';

interface PaginationProps {
  page: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages = 1,
  onPageChange,
}) => {
  const {
    nextPage,
    previousPage,
    firstPage,
    lastPage,
    currentPage,
  } = useMemo(() => {
    const currentPageTmp = page > totalPages ? totalPages : page;

    if (currentPageTmp !== page) onPageChange(currentPageTmp);

    return {
      nextPage: currentPageTmp === totalPages ? null : currentPageTmp + 1,
      previousPage: currentPageTmp === 1 ? null : currentPageTmp - 1,
      firstPage: 1,
      lastPage: totalPages,
      currentPage: currentPageTmp,
    };
  }, [page, totalPages, onPageChange]);

  const handleOnClick = useCallback(
    (newPage: number) => {
      onPageChange(newPage);
    },
    [onPageChange],
  );

  return (
    <PaginationStyled>
      <PageButton
        disabled={!previousPage}
        onClick={() => {
          if (previousPage) handleOnClick(previousPage);
        }}
      >
        <SVG src={previousButton} title="Previous page" />
      </PageButton>

      {currentPage !== firstPage && previousPage !== firstPage && (
        <PageButton onClick={() => handleOnClick(firstPage)}>
          {firstPage}
        </PageButton>
      )}

      {previousPage && previousPage - firstPage > 1 && <Ellipsis>...</Ellipsis>}

      {previousPage && (
        <PageButton onClick={() => handleOnClick(previousPage)}>
          {previousPage}
        </PageButton>
      )}

      <CurrentPage>{currentPage}</CurrentPage>

      {nextPage && (
        <PageButton onClick={() => handleOnClick(nextPage)}>
          {nextPage}
        </PageButton>
      )}

      {nextPage && lastPage - nextPage > 1 && <Ellipsis>...</Ellipsis>}

      {currentPage !== lastPage && nextPage !== lastPage && (
        <PageButton onClick={() => handleOnClick(lastPage)}>
          {lastPage}
        </PageButton>
      )}

      <PageButton
        disabled={!nextPage}
        onClick={() => {
          if (nextPage) handleOnClick(nextPage);
        }}
      >
        <SVG src={nextButton} title="Next page" />
      </PageButton>
    </PaginationStyled>
  );
};

export default Pagination;
