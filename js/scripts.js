// Vue
const { createApp } = Vue;

createApp({

    data() {

        return {

            todoList: [

                {
                    text: 'Fare attività fisica',
                    done: false
                },

                {
                    text: 'Seguire webinar sul web 3',
                    done: true
                },

                {
                    text: 'Comprare 2 bottiglie di acqua',
                    done: false
                },

            ],

            newTodo: '',

        };

    },

    methods: {

        removeTodo(i) {

            this.todoList.splice(i, 1);

        },

        addTodo() {

            const myNewTodo = {

                text: this.newTodo,
                done: false

            }

            this.todoList.push(myNewTodo);

            this.newTodo = '';

        }

    }

}).mount('#app');