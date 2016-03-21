import Column from './Column';

@connect(({node}) => ({
        children: q(node).children('[instanceof Sfi.Grid:Column]').get()
    })
)
class Row extends React.Component {
    render() {
        const columns = this.props.images.map(i => <Column node={i} />);
        return <ul {...this.props.attributes}>{columns}</ul>;
    }
}
