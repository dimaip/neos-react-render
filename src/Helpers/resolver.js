import ContentCase from 'Components/ContentCase';

const resolver = promise => {
  let nodes;
  return promise
    .then(i => {
      nodes = i;
      return Promise.all(i.map(node => {
        return ContentCase.getFragment('data', {node});
      }));
    })
    .then(datas => {
      return datas.map((i, j) => ({
        node: nodes[j],
        data: i
      }));
    });
};
export default resolver;
