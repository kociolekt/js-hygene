const data = [
    {
        name: 'Janusz',
        surname: 'Kitek',
        job: 'szlachta nie pracuje'
    },
    {
        name: 'Grażyna',
        surname: 'Cebula-Polak-Robak vel Kitek',
        job: 'madka'
    },
    {
        name: 'Brajan',
        surname: 'Polak',
        job: 'jp na 100%'
    },
    {
        name: 'Sebastian',
        surname: 'Robak',
        job: 'alkochol pod biedronką'
    },
    {
        name: 'Dżessica',
        surname: 'Kitek',
        job: 'dej, mam horom curke'
    },
];

export default class DB {
    constructor() {
      if(DB.singletonInstance) {
        return DB.singletonInstance;
      }
  
      DB.singletonInstance = this;

    }

    getAllUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1);
        });
    }
}
