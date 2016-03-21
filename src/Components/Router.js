import ContentCase from './ContentCase';

@connect(
    () => {
        const documentNodeContextPath = window.location.pathname + '@live';
        return {
            documentNode: q(documentNodeContextPath).get(0)
        };
    }
)
class Router extends React.Component {
    render() {
        return (
            <ContentCase node={this.props.documentNode} />
        );
    }
}
