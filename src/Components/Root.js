import React from 'react';
import Transmit from 'react-transmit';
import 'Components/NodeTypes/index';
import ContentCase from 'Components/ContentCase';
import Layout from 'Components/Layout';

const Root = ({data}) => (
  <Layout>
    {data.map((i, j) => <ContentCase key={j} {...i} />)}
  </Layout>
);
Root.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedRoot = Transmit.createContainer(Root, {
  initialVariables: {},
  fragments: {
    data() {
      let nodes;
      return fetch('http://localhost:3000/main.json')
        .then(r => r.json())
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
    }
  }
});

export default WrappedRoot;
