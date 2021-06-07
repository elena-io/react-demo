//putting some loaders 
//bable-loader, babel-core, babel-preset react
//npm i @babel/preset-react
module.exports = {
    module: {
        rules: [
            {
                //webpack - when you encounter a file that ends with .js (our index.js) we want you to use a bable loader
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}