import Component from '../../AbstractClasses/Component';
import appendService from '../../../services/appendService';
import ConvertedCurrency from "../Main/ConvertedCurrency";
import LastUpdate from "../Main/LastUpdate";
import AddConvertedCurrency from "../Main/AddConvertedCurrency";

export default class Main extends Component {
  render() {
    const element = document.createDocumentFragment();
    for(let i = 0; i < 3; i++) {
      appendService.append(element, new ConvertedCurrency);
    }
  
    appendService.append(element, new LastUpdate)
    appendService.append(element, new AddConvertedCurrency)
    return element;
  }
}
