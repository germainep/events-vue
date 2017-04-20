new Vue({
    el: '#events',

    data: {
        event: {name: ' ', description: ' ', date: ' '},
        events: [ ]
    },

    mounted: function () {
        this.fetchEvents();
    },
    
    methods: {
        fetchEvents: function () {
            var events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto Interation Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premire',
                    description: 'The Martian comes to theaters',
                    date: '2015-10-2'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'South by Southwest',
                    date: '2016-03-11'
                }
            ];

            this.$set(this,'events', events);
        },
        addEvent: function () { 
            if(this.event.name) {
                this.events.push(this.event);
                this.event = {name: ' ', description: ' ', date: ' '}
            }
        },
        deleteEvent: function (index) {
            if(confirm('Are you sure you want to delete?')) {
                this.events.splice(index, 1);
            }
        }
     }

});