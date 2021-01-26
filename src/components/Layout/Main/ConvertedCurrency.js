import Component from '../../AbstractClasses/Component';

export default class ConvertedCurrency extends Component {
  render() {
    const convertedCurrency = document.createElement('div');
    convertedCurrency.classList.add('currency');
    convertedCurrency.innerHTML = `
          <img alt="currency" scr="">
          <section class="about">
            <div class="container">
              <p>CAD</p>
              <p>Canadian Dollar</p>
            </div>
            <div class="container">
              <p>$1.350</p>
              <p>1 CAD = 0.75$</p>
            </div>
          </section>
        `;

    return convertedCurrency;
  }
}
