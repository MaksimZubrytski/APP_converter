import Component from '../AbstractClasses/Component';
import Layout from '../Layout/Layout';
import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';
import appendService from '../../services/appendService';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      temperatureValue: 'Celsius',
    };
  }

  render() {
    const element = document.createDocumentFragment();
    const header = new Header();
    const main = new Main();
    const footer = new Footer();
    const layout = new Layout({ header, main, footer });

    appendService.append(element, layout);

    return element;
  }
}
