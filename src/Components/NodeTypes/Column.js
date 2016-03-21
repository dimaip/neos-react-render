import ContentCase from 'Components/ContentCase';
@connect(({node}) => ({
        content: q(node).children().get()
    })
)
class Column extends React.Component {
    render() {
        const content = this.props.content.map((i, key) => <li key={key}><ContentCase node={i} /></li>);
        return <ul {...this.props.attributes}>{content}</ul>;
    }
}
