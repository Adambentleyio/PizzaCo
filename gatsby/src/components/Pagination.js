import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <>
      <Link to={`${base}/${prevPage}`}>Previous</Link>
      <Link to={`${base}/${nextPage}`}>Next</Link>
    </>
  );
}
