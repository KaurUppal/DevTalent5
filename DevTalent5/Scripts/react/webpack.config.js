module.exports = {
    mode: 'development',
    context: __dirname,
    //entry: "./index.jsx",
    //output: {
    //    path: __dirname + "/dist",
    //    filename: "bundle.js"
    //},
    entry: {
        app: "./customer/app.js",
        //customer: "./customer/customer.js",
       product: "./product.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]_bundle.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}