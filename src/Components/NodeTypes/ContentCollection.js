import React from 'react';
import Transmit from 'react-transmit';
import ContentCase from 'Components/ContentCase';
import resolver from 'Helpers/resolver';
import {q} from 'Vendor/FlowQuery';

const ContentCollection = (props) => (
  <div className='ContentCollection'>
    {props.data.map((itemProps, i) => <ContentCase key={i} {...itemProps} />)}
  </div>
);
ContentCollection.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedContentCollection = Transmit.createContainer(ContentCollection, {
  initialVariables: {},
  fragments: {
    data({node}) {
      let nodes;
      return resolver(
        q(node).children()
          .shape({
            contextPath: 'contextPath',
            nodeType: 'nodeType',
            properties: 'properties'
          }).get()
      );
    }
  }
});

export default WrappedContentCollection;
