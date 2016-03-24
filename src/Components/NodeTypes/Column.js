import React from 'react';
import Transmit from 'react-transmit';
import ContentCase from 'Components/ContentCase';

const Column = (props) => (
  <div className='Column'>
    {props.data.map((itemProps, i) => <ContentCase key={i} {...itemProps} />)}
  </div>
);
Column.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedColumn = Transmit.createContainer(Column, {
  initialVariables: {},
  fragments: {
    data() {
      let nodes;
      return fetch('http://localhost:3000/column.json')
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

export default WrappedColumn;
