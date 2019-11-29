import { Info } from "../components/info";
import { getCompanyInfo, getLaunchesInfo } from "../utilities/space-x-service";
import { Launch } from "../components/launches";

class Header {
    constructor() {
        this.node = document.createElement('header');
        this.info = null;
        this.launchInfo = null;
        getCompanyInfo().then(data => {

            this.info = new Info(data);
            this.node.appendChild(this.info.getNode());

        });
        getLaunchesInfo().then(data => {
            //Zadrzavamo misije koje imaju slike
            data = data.filter(element =>{
                return element.links.mission_patch!=null;
            })
            data.forEach(launch => { 
                this.launchInfo = new Launch(launch);
                this.node.appendChild(this.launchInfo.getNode());
            });
            
        });

    }
    getNode(){
        return this.node;
    }
}

export {
    Header
}