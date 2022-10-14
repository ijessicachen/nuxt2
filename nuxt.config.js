export default{

    ssr: false, 

    target: 'static',

    build: {
        extend( config, ctx ) {
            config.module.rules.push( {
                test: /\.md$/i, // find files that end with md
                loader: 'raw-loader', // raw loader will read the content
                exclude: /(node_modules)/ // way too huge of a file
            } );
        }
    },

    buildModules: [
        '@nuxtjs/vuetify', 
    ]
}
