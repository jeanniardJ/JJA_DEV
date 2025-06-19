/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// assets/app.js

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap-icons/font/bootstrap-icons.css'

require('bootstrap-table/src/bootstrap-table')
require('bootstrap-table/src/extensions/mobile/bootstrap-table-mobile')
require('bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar')
require('bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh')
require('bootstrap-table/src/locale/bootstrap-table-fr-FR')

import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/collapse'
import 'bootstrap/js/src/alert'
import 'bootstrap/js/src/button'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tab'
import 'bootstrap/js/src/toast'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/js/src/popover'
import 'bootstrap/js/src/util'

import './styles/admin/admin.scss'

import './bootstrap-admin'

const $ = require('jquery')

import('./_layouts/modals')
import('./_layouts/toasts')
import('./_layouts/validationForm')
//import('./devis.js')
