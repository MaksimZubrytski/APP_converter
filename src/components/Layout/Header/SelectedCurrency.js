import Component from '../../AbstractClasses/Component';

export default class SelectedCurrency extends Component {
  render() {
    const selectedCurrency = document.createElement('div');
    selectedCurrency.classList.add('selected-currency');
    selectedCurrency.innerHTML = `
        <select class="select">
          <option>USD</option>
          <option>CAD</option>
        </select>
        <input class="input" type="text" value="$1.00000">
        `;

    return selectedCurrency;
  }
}
