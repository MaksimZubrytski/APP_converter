import App from './components/root';
import appendService from './services/appendService';

const AppInstance = new App();
appendService.append(document.querySelector('.root'), AppInstance);

console.log(AppInstance);
