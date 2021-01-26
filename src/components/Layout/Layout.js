import Component from '../AbstractClasses/Component';
import appendService from '../../services/appendService';

export default class Layout extends Component {
  get header() {
    const element = document.createElement('header');

    appendService.append(element, this._createWrappedNode(this.props.header));

    return element;
  }

  get main() {
    const element = document.createElement('main');

    appendService.append(element, this._createWrappedNode(this.props.main));

    return element;
  }

  get footer() {
    const element = document.createElement('footer');

    appendService.append(element, this._createWrappedNode(this.props.footer));

    return element;
  }

  render() {
    const element = document.createDocumentFragment();

    appendService.append(element, this.header, this.main, this.footer);

    return element;
  }

  _createWrappedNode(node) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    appendService.append(wrapper, node);

    return wrapper;
  }
}
