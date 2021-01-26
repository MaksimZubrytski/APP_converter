import Component from '../../AbstractClasses/Component';

export default class ConvertedCurrency extends Component {
    render() {
        const convertedCurrency = document.createElement('div');
        convertedCurrency.classList.add('currency')
        convertedCurrency.innerHTML = `
          <img alt="currency" scr="">
          <p>CAD</p>
        `;
    
        return convertedCurrency;
      }
}