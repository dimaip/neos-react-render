import {setRenderers} from 'API/renderers';
import Text from './Text';
import Image from './Image';
import Carousel from './Carousel';
import Row from './Row';
import Column from './Column';

setRenderers({
  'TYPO3.Neos.NodeTypes:Text': Text,
  'TYPO3.Neos.NodeTypes:Image': Image,
  'Sfi.Site:Carousel': Carousel,
  'Sfi.Site:Row': Row,
  'Sfi.Site:Column': Column
});
