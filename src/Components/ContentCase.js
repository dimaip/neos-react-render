import {getNodeTypeRenderer} from './../API/';

const ContentCase = {node} => React.createElement(getNodeTypeRenderer(node._nodeType.name), {node});

export default ContentCase;
