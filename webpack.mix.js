const mix = require('laravel-mix');
const isProduction = process.env.NODE_ENV == "production";
//const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .vue({
        extractVueStyles: true,
    })
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: true,
        postCss: ['autoprefixer'],
        autoprefixer: {
            options: {
                browsers: ['last 6 versions'],
            }
        }
    })
    .version()

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
		config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
	} else {
		config.mode = "development";
	}
};
