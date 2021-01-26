import Component from '../../AbstractClasses/Component';

export default class LastUpdate extends Component {
  render() {
    const lastUpdate = document.createElement('p');
    lastUpdate.classList.add('last-update');
    lastUpdate.innerText = `Last update ${new Date().getUTCFullYear()} - ${new Date().getUTCMonth() + 1}`;

    return lastUpdate;
  }
}
