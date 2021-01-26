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

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: this?.state?.count + 1 });
  //   }, 3000);
  // }

  handleChangeTemperature(e) {
    this.setState({ temperatureValue: e.target.value });
  }

  render() {
    const element = document.createDocumentFragment();
    const header = new Header({
      temperatureController: {
        temperatureValue: this?.state?.temperatureValue || 'Celsius',
        handleChangeTemperature: this.handleChangeTemperature.bind(this),
      },
    });
    const main = new Main();
    const footer = new Footer();
    const layout = new Layout({ header, main, footer });

    appendService.append(element, layout);

    return element;
  }
}
