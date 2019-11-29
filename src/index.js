import '../assets/css/style.css';
import { getCompanyInfo, getLaunchesInfo } from './utilities/space-x-service';
import { Dashboard } from './layouts/dashboard';

getCompanyInfo().then(data => {
    console.log(data);
});

getLaunchesInfo().then(data => {
    console.log(data);
});

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());