const logConfig = {
    ops: {
        interval: 10000,
    },
    reporters: {
        consoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
                ops: '*',
                log: { exclude: ['uploadlog'] },
                response: '*',
                // request: { exclude: ['adlog', 'clientlog'] },
                request: { exclude: ['adlog'] },
                error: '*',
            }],
        }, {
            module: 'good-console',
        }, 'stdout'],
        adLogGenerator: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ request: { include: ['adlog'] } }],
        }, {
            module: 'good-squeeze',
            name: 'SafeJson',
            args: [{ seperator: '\n' }],
        }],
    },
};

export default logConfig;