import React from 'react';

const Image = (props) => (
  <div>
    <img src={props.node.properties.image}/>
    <figcaption style={{fontStyle: 'italic'}}>{props.node.properties.caption}</figcaption>
  </div>
);
Image.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default Image;
