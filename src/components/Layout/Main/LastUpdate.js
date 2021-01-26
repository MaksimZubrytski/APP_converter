import Component from '../../AbstractClasses/Component';

export default class LastUpdate extends Component {
    render() {
        const lastUpdate = document.createElement('p');
        lastUpdate.classList.add('last-update')
        lastUpdate.innerText = `Last update component`
    
        return lastUpdate;
      }
}