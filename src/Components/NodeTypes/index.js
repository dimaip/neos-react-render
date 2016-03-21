import {setNodeTypeRenderers} from 'API/nodeTypeRenderers';
import Image from './Image';
import Text from './Text';
import Carousel from './Carousel';
import Row from './Row';
import Column from './Column';

setNodeTypeRenderers({
  'TYPO3.Neos.NodeTypes:Image': Image,
  'TYPO3.Neos.NodeTypes:Text': Text,
  'Sfi.Site:Carousel': Carousel,
  'Sfi.Site:Row': Row,
  'Sfi.Site:Column': Column
});

export default {
    Image,
    Text,
    Carousel,
    Row,
    Column
};
