/**
* Render data declaratively
*/

var app = new Vue({
    el: '#app',
    data: {
        message: "I am Ramkumar Learning Vue.js"
    }
});

/**
* Binding Data
*/
var app1 = new Vue({
    el: '#app-1',
    data: {
        message1: "Hey Ramkumar....!!!!"
    }
});

/**
* Rendering Data based on Condition
*/
var app2 = new Vue({
    el: '#app-2',
    data: {
        seen: true
    }
});

/**
* Rendering Data with help of Loop
*/
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn JavaScript' },
            {text: 'Build something awesome' },
            {text: 'Do it Properly'},
        ]
    }
});

/**
* Event Handling
*/
var app5 = new Vue({
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

/**
* Two-way Binding
*/
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Type Something...."
    }
});
