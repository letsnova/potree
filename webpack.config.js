const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /Worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: true },
                },
            }
        ]
    },
    mode: 'development',
    devtool: 'source-map',
    entry: './src/Potree.js',
    output: {
        filename: 'potree.js',
        path: path.resolve(__dirname, 'src/build/potree'),
        library: 'potree',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
};
