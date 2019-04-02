import SimpleEventer from 'simple-eventer';

const defaults = {

};

class Query extends SimpleEventer {
    constructor($context, options) {
        super(); // :)
        this.$context = $context; // Input
        console.log(this.$context);
        this.init();
    }

    init() {
        this.initChange();
    }

    initChange() {
        this.$context.on('change', () => this.handleChange());
    }

    handleChange() {
        this.fire('change', { val: this.$context.val() });
    }

    getVal() {
        return this.$context.val();
    }

    static initialize($parent) {
        return new Query($parent.find('.js-query'));
    }
}

export default Query;
