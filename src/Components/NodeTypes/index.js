import {setRenderers} from 'API/renderers';
import Page from './Page';
import ContentCollection from './ContentCollection';
import Column from './Column';
import Headline from './Headline';
import Text from './Text';

setRenderers({
  'TYPO3.NeosDemoTypo3Org:Homepage': Page,
  'TYPO3.Neos.NodeTypes:Headline': Headline,
  'TYPO3.Neos.NodeTypes:Text': Text,
  'TYPO3.Neos:ContentCollection': ContentCollection,
  'TYPO3.Neos.NodeTypes:TwoColumn': Column,
  'TYPO3.Neos.NodeTypes:ThreeColumn': Column,
  'TYPO3.Neos.NodeTypes:FourColumn': Column
});
