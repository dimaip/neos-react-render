import React from 'react';
import ReactDOM from 'react-dom';
import Transmit from 'react-transmit';
import 'Components/NodeTypes/index';
import ContentCase from 'Components/ContentCase';

const List = ({data}) => (
  <div>
    {data.map((i, j) => <ContentCase key={j} {...i} />)}
  </div>
);
List.propTypes = {
  data: React.PropTypes.array.isRequired
};

const WrappedList = Transmit.createContainer(List, {
  initialVariables: {},
  fragments: {
    data() {
      return fetch('http://localhost:3000/static/dummynodes.json')
        .then(r => r.json())
        .then(nodes => Promise.all(nodes.map(node => {
          const data = ContentCase.getFragment('data', node);
          return {data, node};
        })));
    }
  }
});

export class Root extends React.Component {
  render() {
    return (<WrappedList />);
  }
}

ReactDOM.render(
    (<Root />),
    document.getElementById('app')
);
