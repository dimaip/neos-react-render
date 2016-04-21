import React from 'react';

const Headline = ({node}) => (
  <header dangerouslySetInnerHTML={{__html: node.properties.title}} />
);
Headline.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default Headline;
