Vue.component('app-icon', {
    template: '<span  :class="cssClasses" aria-hidden="true"></span>',
    props: ['img'],
    computed: {
        cssClasses: function () {
            return 'glyphicon glyphicon-' + this.img;
        }
    }
});

Vue.component('app-task', {
    template: '#task-template',
    props: ['task', 'index']
})

var vm = new Vue({
    el: '#app',
    methods: {
        createTask: function(){
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        toggleStatus: function (task) {
            task.pending = !task.pending;
        },
        editTask: function (task) {
            this.tasks.forEach( function (task) {
                task.editing = false;
            });

            this.draft = task.description;

            task.editing = true;
            
        },
        discardTask: function (task) {
            task.editing = false;
        },
        updateTask: function (task) {
            task.description = this.draft;
            task.editing = false;
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1)
        },
        deleteCompleted: function () {
            this.tasks = this.tasks.filter ( function (task) {
                return task.pending;
            });
        }
    },
    data: {
        new_task: '',
        draft: '',
        tasks: [
        {
                description: 'Aprender Vue.js',
                pending: true,
                editing: false
            },
            {
                description: 'Practicar Vue.js',
                pending: true,
                editing: false
            },
            {
                description: 'Terminar Vue.js',
                pending: false,
                editing: false
            }
        ]
    }
});