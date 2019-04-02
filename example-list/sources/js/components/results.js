import resultstststsTempalte from '../components/resultstststs.twig';

const defaults = {

};

class Results{
    constructor($context, options) {
        this.$context = $context; 

        this.list = [];

        this.init();
    }

    init() {
        this.render();
    }

    render(list) {
        console.log(list);
        this.list = list;
        this.$context.html(resultstststsTempalte({list: this.list}));
    }

    static initialize($parent) {
        return new Results($parent.find('.js-results'));
    }
}

export default Results;
