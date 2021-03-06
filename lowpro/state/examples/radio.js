var Radio = {};

Radio.definition = {
    start: {
        init: 'Stopped'
    },

    Stopped: {
        enter: function() {
            this.counter = 0;
            this.updateCounter();
        },
        play: 'Playing'
    },
    
    Paused: {
        play: 'Playing',
        stop: 'Stopped'
    },
    
    Playing: {
        enter: function() {
            this.interval = setInterval(function() { this.incrementCounter(); }.bind(this), 200);
        },
        pause: 'Paused',
        stop: 'Stopped',
        exit: function() {
            clearInterval(this.interval);
        }
    }
};

Radio.events = {
    Stopped: {
        'button.play:click': 'play'
    },
    Playing: {
        'button.stop:click': 'stop',
        'button.pause:click': 'pause'
    },
    Paused: {
        'button.stop:click': 'stop',
        'button.play:click': 'play'
    }
};

Radio.machine = Behavior.create(State.behavior, {
    definition: Radio.definition,
    events: Radio.events,
    incrementCounter: function() {
        this.counter += 1;
        this.updateCounter();
    },
    updateCounter: function() {
        this.element.down('.counter').innerHTML = this.counter;
    }
});