import Component from '../../AbstractClasses/Component';

export default class AddConvertedCurrency extends Component {
    render() {
        const addConvertedCurrency = document.createElement('button');
        addConvertedCurrency.classList.add('button-add-currency')
        addConvertedCurrency.innerText = `add currend`
    
        return addConvertedCurrency;
      }
}