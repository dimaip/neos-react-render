import {setNodeTypeRenderers} from 'API/nodeTypeRenderers';
import Image from './Image';
import Text from './Text';
import Carousel from './Carousel';

setNodeTypeRenderers({
  'TYPO3.Neos.NodeTypes:Image': Image,
  'TYPO3.Neos.NodeTypes:Text': Text,
  'Sfi.Site:Carousel': Carousel
});

export default {
    Image,
    Text,
    Carousel
};
