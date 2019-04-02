import SimpleEventer from 'simple-eventer';

const defaults = {

};

class Surname extends SimpleEventer {
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
        return new Surname($parent.find('.js-surname'));
    }
}

export default Surname;
