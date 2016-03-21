let _nodeTypeRenderers = {};

export const setNodeTypeRenderers = nodeTypeRenderers => _nodeTypeRenderers = nodeTypeRenderers;
export const setNodeTypeRenderer = (nodeTypeName, nodeTypeRenderer) => _nodeTypeRenderers[nodeTypeName] = nodeTypeRenderer;
export const getNodeTypeRenderer = nodeTypeName => _nodeTypeRenderers[nodeTypeName];
