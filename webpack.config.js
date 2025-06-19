/**
 * @file webpack.config.js
 * @description Configuration file for webpack.
 *
 * @license
 * Copyright (c) 2023. All rights reserved.
 * No part of this website may be reproduced, displayed, modified, or distributed without the prior written permission of the copyright holder.
 * This website, its content, and all products created by JJA DEV are protected by copyright and intellectual property laws. All rights reserved to JJA DEV.
 *
 * Unauthorized use of any part of this site, including but not limited to text, images, drawings, graphics, logos, and trademarks, may constitute a violation of copyright laws, trademark laws, or other applicable laws and may result in legal action.
 *
 * To obtain permission to use content from this site, please contact JJA DEV.
 *
 * Thank you for your understanding and respect for our creative work and intellectual property rights.
 */
const Encore = require('@symfony/webpack-encore')
const { css } = require('jquery')
const path = require('path')
const { rule } = require('postcss/lib/postcss')

const { GenerateSW } = require('workbox-webpack-plugin')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    .setManifestKeyPrefix('build')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    .addEntry('admin', './assets/admin.js')

    .addStyleEntry('appCss', './assets/styles/app.scss')
    .addStyleEntry('home', './assets/styles/pages/_home.scss')
    .addStyleEntry('legalnotice', './assets/styles/pages/_legalnotice.scss')
    .addStyleEntry('privatepolicy', './assets/styles/pages/_privatepolicy.scss')
    .addStyleEntry('sitemap', './assets/styles/pages/_sitemap.scss')
    .addStyleEntry('blog', './assets/styles/pages/_blog.scss')
    .addStyleEntry('contact', './assets/styles/pages/_contact.scss')

    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|jpg|jpeg|svg)$/,
    })

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    .configureSplitChunks((splitChunks) => {
        splitChunks.minSize = 0 // Taille minimale pour l'inclusion directe en base64
    })

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild() // empty the outputPath dir before each build

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .enableBuildNotifications()
    .enableSourceMaps()
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin')
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage'
        config.corejs = 3
    })

    // enables Sass/SCSS support
    .enableSassLoader((options) => {
        if (!Encore.isProduction()) {
            return
        }

        return (options = {
            sassOptions: {
                outputStyle: 'compressed',
            },
        })
    })

    .enablePostCssLoader((options) => {
        if (!Encore.isProduction()) {
            return
        }

        return (options = {
            postcssOptions: {
                plugins: [
                    require('postcss-preset-env')({
                        stage: 0, // Permet d'utiliser les fonctionnalités de la dernière version de CSS
                        features: {
                            'nesting-rules': true, // Permet d'utiliser les règles imbriquées
                        },
                    }),
                    require('@fullhuman/postcss-purgecss')({
                        content: [
                            './templates/**/*.html.twig',
                            './assets/**/*.js',
                            './assets/**/*.jsx',
                            './node_modules/bootstrap-table/src/**/*.js',
                        ],
                        css: ['./assets/**/*.scss', './assets/**/*.css'],
                        safelist: {
                            standard: [/^is-/, /^has-/, /^js-/, /^fa-/, /^bi-/, /^text-bg-/, /^col-/],
                            skippedContentGlobs: [
                                '**/node_modules/**',
                                '**/vendor/**',
                                '**/public/**',
                                '**/components/**',
                            ],
                        },
                    }),
                    require('autoprefixer'),
                ],
            },
        })
    })

    // enables CSS minification
    .configureCssMinimizerPlugin((options) => {
        return {
            parallel: 4,
            minimizerOptions: {
                preset: [
                    'advanced',
                    {
                        discardComments: {
                            removeAll: true,
                        },
                        discardUnused: true, // Supprime les règles inutilisées
                        mergeIdents: true,
                        reduceIdents: true,
                    },
                ],
            },
            test: /\.(css|scss|sass)$/,
        }
    })

    // uncomment if you use TypeScript
    .enableTypeScriptLoader()

    // uncomment if you use React
    .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    .configureImageRule({
        type: 'asset',
        maxSize: 4 * 1024, // Taille maximale pour l'inclusion directe en base64
        enabled: !Encore.isProduction(),
    })

    .configureFontRule({
        type: 'asset',
        maxSize: 4 * 1024, // Taille maximale pour l'inclusion directe en base64
    })

    .configureTerserPlugin((options) => {
        return (options = {
            terserOptions: {
                compress: true,
                output: {
                    comments: false,
                    beautify: false,
                    ascii_only: true,
                },
            },
            extractComments: true,
            parallel: 4,
        })
    })

    .addPlugin(
        new GenerateSW({
            // Ces options encouragent les travailleurs de service à se mettre à jour dès que possible
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
            cacheId: 'jja-dev-cache-v1',
            exclude: [
                /\.map$/,
                /robots\.txt$/,
                /sitemap\.xml$/,
                /manifest\.json$/,
                /\/build\/service-worker\.js$/,
                /\/build\/service-worker\./,
            ],
            // Ceci est une liste de fichiers à mettre en cache dans le service worker
            runtimeCaching: [
                {
                    urlPattern: /\.(?:js|css|png|webp|jpg|svg)$/,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'assets-cache',
                        expiration: {
                            maxEntries: 100,
                            maxAgeSeconds: 60 * 60 * 24 * 7,
                        },
                    },
                },
            ],
        })
    )

// export the final configuration
module.exports = Encore.getWebpackConfig()

// Path: postcss.config.js
