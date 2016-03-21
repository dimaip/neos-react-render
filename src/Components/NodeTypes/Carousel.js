import Image from './Image';

@connect(({node}) => ({
        images: q(node).find('[instanceof TYPO3.Neos.NodeTypes:Image]').get()
    })
)
class Carousel extends React.Component {
    render() {
        const images = this.props.images.map(i => <Image node={i}/>);
        return <ul {...this.props.attributes}>{images}</ul>;
    }
}
