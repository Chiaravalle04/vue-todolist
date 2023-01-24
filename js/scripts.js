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
                    done: false
                },

                {
                    text: 'Fare la spesa',
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

            if (this.newTodo != '') {

                const myNewTodo = {

                    text: this.newTodo,
                    done: false
    
                }
    
                this.todoList.push(myNewTodo);
    
                this.newTodo = '';

            }

        },

        completedTodo(i) {

            if (this.todoList[i].done == false) {

                this.todoList[i].done = true;

            } else {

                this.todoList[i].done = false;

            };

        }

    }

}).mount('#app');