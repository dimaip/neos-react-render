import React from 'react';
import Transmit from 'react-transmit';
import ContentCase from 'Components/ContentCase';
import resolver from 'Helpers/resolver';
import {q} from 'Vendor/FlowQuery';

const Page = ({node, data}) => (
  <div>
    <h1 style={{backgroundColor: 'yellow'}}>{node.properties.title}</h1>
    <div style={{border: '2px dashed gray', padding: '12px'}}>
      {data.map((i, j) => <ContentCase key={j} {...i} />)}
    </div>
  </div>
);
Page.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedPage = Transmit.createContainer(Page, {
  initialVariables: {},
  fragments: {
    data({node}) {
      return resolver(q(node).children('main').children().shape({
          contextPath: 'contextPath',
          nodeType: 'nodeType',
          properties: 'properties'
        }).get());
    }
  }
});

export default WrappedPage;
