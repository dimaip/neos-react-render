@connect(({node}) => ({
        images: q(node).find('[instanceof TYPO3.Neos.NodeTypes:Image]').get()
    })
)
class Carousel extends React.Component {
    render() {
        const ImageRenderer = nodeTypeRenderers['TYPO3.Neos.NodeTypes:Image'];
        const images = this.props.images.map(ImageRenderer);
        return <ul {...this.props.attributes}>{images}</ul>;
    }
}
