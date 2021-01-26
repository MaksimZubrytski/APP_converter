import Component from '../../AbstractClasses/Component';
import appendService from '../../../services/appendService';
import ConvertedCurrency from './ConvertedCurrency';
import LastUpdate from './LastUpdate';
import AddConvertedCurrency from './AddConvertedCurrency';

export default class Main extends Component {
  render() {
    const element = document.createDocumentFragment();
    for (let i = 0; i < 3; i += 1) {
      appendService.append(element, new ConvertedCurrency());
    }

    appendService.append(element, new LastUpdate());
    appendService.append(element, new AddConvertedCurrency());
    return element;
  }
}
