module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'MexxDent CRM для стоматологии',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js + Vuetify.js + Material Dashboard',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
            },
        ],
    },
    plugins: [
        '~/plugins/vuetify.js',
        '~/plugins/base.js',
        '~/plugins/chartist.js',
        '~/plugins/components.js',
        { src: '~/plugins/ckeditor.js', mode: 'client' },
    ],
    css: ['~/assets/less/main.less'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
            if (ctx.isClient) {
                config.devtool = 'source-map';
            }
        },
        transpile: [/^vuetify/],
    },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://127.0.0.1:8000/api/',
        credentials: true,
    },
    auth: {
        scopeKey: 'scope',
        strategies: {
            local: {
                token: {
                    property: 'access_token',
                    global: true,
                    // required: true,
                    type: 'Bearer',
                },
                user: {
                    property: 'user',
                    autoFetch: true,
                },
                endpoints: {
                    login: { url: '/login/access-token', method: 'post' },
                    logout: false,
                    user: { url: '/users/me', method: 'get' },
                },
            },
        },
        redirect: {
            login: '/login',
            logout: '/',
            callback: false,
            home: '/dashboard',
        },
        rewriteRedirects: false,
    },
};
