class Launch{
    constructor(data){
        this.node = document.createElement('section');
        this.node.className = 'launch';
        
        //Data
        this.mission_name = data.mission_name;
        this.launch_year = data.launch_year;
        this.launch_date_utc = data.launch_date_utc;
        this.rocket_name = data.rocket_name;
        this.site_name = data.launch_site.site_name;
        this.mission_patch = data.links.mission_patch;
        //Object destructuring
        this.banner = document.createElement('h2');
        this.banner.textContent = this.mission_name;

        this.txtYear = document.createElement('label');
        this.txtYear.textContent = this.launch_year;
        this.txtYear.className = 'size';
        
        this.txtDate = document.createElement('label');
        this.txtDate.textContent = this.launch_date_utc;
        this.txtDate.className = 'size';

        this.txtRocketName = document.createElement('label');
        this.txtRocketName.textContent = this.rocket_name;
        this.txtRocketName.className = 'size';

        this.txtLaunchSite = document.createElement('label');
        this.txtLaunchSite.textContent = this.site_name;
        this.txtLaunchSite.className = 'size';

        this.image = document.createElement('img');
        this.image.src = this.mission_patch;
        this.image.className = 'mission-logo';

        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtYear);
        this.node.appendChild(this.txtDate);
        this.node.appendChild(this.txtRocketName);
        this.node.appendChild(this.txtLaunchSite);
        this.node.appendChild(this.image);

    }

    getNode() {
        return this.node;
    }
}

export {
    Launch
}