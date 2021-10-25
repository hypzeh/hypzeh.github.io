import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import Styles from './Page.styles';
import Scroller from '~components/layout/Scroller';
import layouts from '~redux/layout/layouts';
import { getLayoutName } from '~redux/layout/layout-selectors';
import { setLayout } from '~redux/layout/layout-actions';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  hideHeading: PropTypes.bool,
  layout: PropTypes.oneOf(Object.keys(layouts)),
  padding: PropTypes.string,
};

const defaultProps = {
  hideHeading: false,
  layout: layouts.DEFAULT.name,
  padding: '0 .5rem',
};

const Page = ({
  children,
  title,
  hideHeading,
  layout,
  padding,
}) => {
  const dispatch = useDispatch();
  const activeLayout = useSelector(getLayoutName);

  useEffect(() => {
    if (activeLayout === layout) return;

    dispatch(setLayout(layout));
  }, [dispatch, activeLayout, layout]);

  return (
    <Styles.Wrapper>
      <Helmet title={title} />
      <Scroller padding={padding}>
        {!hideHeading && (<Styles.Heading>{title}</Styles.Heading>)}
        {children}
      </Scroller>
    </Styles.Wrapper>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
