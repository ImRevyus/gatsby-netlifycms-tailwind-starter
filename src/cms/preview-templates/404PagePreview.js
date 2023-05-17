import React from 'react';
import PropTypes from 'prop-types';
import { PageNotFound } from '../../pages/404';

const PageNotFoundPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  return <PageNotFound data={data} />;
};

PageNotFoundPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PageNotFoundPreview;
