import React from 'react';
import Transmit from 'react-transmit';
import Column from './Column';

const Row = (props) => (
  <div className='Row'>
    {props.data.map((itemProps, i) => <Column key={i} {...itemProps} />)}
  </div>
);
Row.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedRow = Transmit.createContainer(Row, {
  initialVariables: {},
  fragments: {
    data() {
      let nodes;
      return fetch('http://localhost:3000/row.json')
        .then(r => r.json())
        .then(i => {
          nodes = i;
          return Promise.all(i.map(node => {
            return Column.getFragment('data', {node});
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

export default WrappedRow;
