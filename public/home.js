console.log('render home controller');

const app = new Vue({
    el: '#root',
    data: {
        cards: [],
        user: undefined
    },
    methods: {
        shuffle: async function() {
            const result =  await axios.get('game/getCards');
            this.cards = result.data.cards;
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
