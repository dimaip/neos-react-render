import connect from 'API/connect';
import Carousel from './Carousel';
import Layout from 'Components/Layout';

@connect(
    ({node}) => ({
        mainContent: q(node).children('main').children().get(),
        carouselNode: q(node).children('carousel').get(0)
    })
)
class Page extends React.Component {
    render() {
        const mainContent = this.props.mainContent.map(i => ContentCase(i, nodeTypeRenderers));
        return (
            <Layout>
                <div>{mainContent}</div>
                <div>
                    <Carousel node={this.props.carouselNode} attributes={{className: 'Carousel'}} />
                </div>
            </Layout>
        );
    }
}
