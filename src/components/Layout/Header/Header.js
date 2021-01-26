import Component from '../../AbstractClasses/Component';
import appendService from '../../../services/appendService';
import SelectedCurrency from './SelectedCurrency';

export default class Header extends Component {
  render() {
    const element = document.createDocumentFragment();
    const title = document.createElement('h1');
    title.innerText = 'Converter';
    const selectedCurrency = new SelectedCurrency();
    appendService.append(element, title);
    appendService.append(element, selectedCurrency);

    return element;
  }
}
