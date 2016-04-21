import React from 'react';

const Text = ({node}) => (
  <p dangerouslySetInnerHTML={{__html: node.properties.text}} />
);
Text.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default Text;
