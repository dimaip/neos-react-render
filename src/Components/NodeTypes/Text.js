import React from 'react';

const Text = ({node}) => (
  <div>{node.properties.text}</div>
);
Text.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default Text;
