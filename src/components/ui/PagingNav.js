import React from 'react';
import PropTypes from 'prop-types';

function PagingNav({
  arrPages, totalPage, gotoPage, page,
}) {
  return (
    <ul className="uk-pagination uk-flex-center">
      {
        page > 1
        && <li><a href="#" onClick={() => gotoPage(page - 1)}><span data-uk-pagination-previous /></a></li>
      }
      {
        arrPages.length > 1
        && arrPages.map((val) => {
          const pageNumber = val + 1;
          return <li key={pageNumber}><a href="#" onClick={() => gotoPage(pageNumber)}>{pageNumber}</a></li>;
        })
      }
      {
        page < totalPage
        && <li><a href="#" onClick={() => gotoPage(page + 1)}><span data-uk-pagination-next /></a></li>
      }
    </ul>
  );
}

PagingNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  arrPages: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default PagingNav;
