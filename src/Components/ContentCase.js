import React, {Component, PropTypes} from 'react';
import Transmit from 'react-transmit';
import {getRenderer} from 'API/renderers';

class ContentCase extends Component {
  static propTypes = {
    node: PropTypes.object,
    data: PropTypes.object
  };
  render() {
    const {node, data} = this.props;
    return React.createElement(getRenderer(node.nodeType), {node, data});
  }
}

export default Transmit.createContainer(ContentCase, {
  initialVariables: {},
  fragments: {
    data({node}) {
      if (node && node.nodeType) {
        const NodeType = getRenderer(node.nodeType);
        if (NodeType.getFragment) {
          return NodeType.getFragment('data', {node});
        }
      }
      return Promise.resolve({});
    }
  }
});
