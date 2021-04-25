class Info{
    constructor({name, ceo, founded, founder}){
        this.node = document.createElement('section');
        this.node.className = 'info';
        //Data
        this.name = name;
        this.ceo = ceo;
        this.founded = founded;
        this.founder = founder;
        //Object destructuring
        this.banner = document.createElement('h1');
        this.banner.textContent = this.name;
        this.banner.className = 'baner';
        this.txtFounder = document.createElement('label');
        this.txtFounder.textContent = `Founder: ${this.founder}`;
        this.txtFounder.className = 'styling';
        
        this.txtFounded = document.createElement('label');
        this.txtFounded.textContent = `Year: ${this.founded}`;
        this.txtFounded.className = 'styling';
        
        this.txtCeo = document.createElement('label');
        this.txtCeo.textContent = `CEO: ${this.ceo}`;
        this.txtCeo.className = 'styling';

        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtFounder);
        this.node.appendChild(this.txtFounded);
        this.node.appendChild(this.txtCeo);

    }

    getNode() {
        return this.node;
    }
}

export {
    Info
}