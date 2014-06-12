var trace = {
    enabled: true,

    log: function () {
        if (!trace.enabled) return;
        console.log.apply(console, arguments);
    },

    enter: function () {
        if (!trace.enabled) return;
        arguments[0] = ">> " + arguments[0];
        console.log.apply(console, arguments);
    },

    leave: function () {
        if (!trace.enabled) return;
        arguments[0] = "<< " + arguments[0];
        console.log.apply(console, arguments);
    }
};