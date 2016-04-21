import React from 'react';
import Transmit from 'react-transmit';
import 'Components/NodeTypes/index';
import ContentCase from 'Components/ContentCase';
import Layout from 'Components/Layout';
import {q} from 'Vendor/FlowQuery';

const Root = ({data}) => (
  <Layout>
    <ContentCase {...data} />
  </Layout>
);
Root.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedRoot = Transmit.createContainer(Root, {
  initialVariables: {},
  fragments: {
    data() {
      let node;
      // For now we are rendering the root page, but we can buil contextPath of current documentNode from url
      return q('site').shape({
          contextPath: 'contextPath',
          nodeType: 'nodeType',
          properties: {
            title: 'title'
          }
        }).get()
        .then(i => {
          node = i[0];
          return ContentCase.getFragment('data', {node});
        })
        .then(data => {
          return {
            node,
            data
          };
        });
    }
  }
});

export default WrappedRoot;
