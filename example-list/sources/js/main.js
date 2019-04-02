import Name from './components/name';
import Surname from './components/surname';
import Query from './components/query';
import Results from './components/results';
import DB from './components/db';

class App {
    constructor() {
        this.$context = $('body');

        this.db = new DB();

        this.init();
    }

    init() {
        this.initName();
        this.initSurname();
        this.initQuery();
        this.initResults();
    }

    initName() {
        this.name = Name.initialize(this.$context);
        this.name.on('change', () => this.filterList());
    }

    initSurname() {
        this.surname = Surname.initialize(this.$context);
        this.surname.on('change', () => this.filterList());
    }

    initQuery() {
        this.query = Query.initialize(this.$context);
        this.query.on('change', () => this.filterList());
    }

    initResults() {
        this.results = Results.initialize(this.$context);

        this.filterList();
    }
    
    async filterList() {
        let filter = {
            name: this.name.getVal(),
            surname: this.surname.getVal(),
            query: this.query.getVal()
        }

        let list = await this.db.getAllUser(filter);

        this.results.render(list);
    }
}

document.addEventListener('DOMContentLoaded', () => new App());
