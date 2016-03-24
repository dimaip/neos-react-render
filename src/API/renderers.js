let _renderers = {};

export const setRenderers = renderers => {
  _renderers = renderers;
};
export const setRenderer = (name, renderer) => {
  _renderers[name] = renderer;
};
export const getRenderer = name => {
  if (!_renderers[name]) {
    throw new Error(`No renderer registred for ${name}`);
  }
  return _renderers[name];
};
