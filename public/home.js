console.log('render home controller');

const app = new Vue({
    el: '#root',
    data: {
        cards: [],
        user: undefined
    },
    methods: {
        shuffle: function() {
            this.cards = [{
                raw: "H1"
            }];
        },
        signIn: function() {
            this.user = {
                name: 'bob stevens'
            };
        }
    },
    created: function() {
        this.cards = [{
            raw: "H1"
        }];
    }
});
