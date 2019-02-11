var app = new Vue({
    el: '#app-5',
    data: {
        message: "Ramukumar"
    },
    methods: {
        reverseMessage: function () {
                this.message= this.message.split('').reverse().join('')
        }
    }
});

var app2 = new Vue({
    el: '#app-6',
    data: {
        message: "lllllllllllllllllllllllll"
    }
});
