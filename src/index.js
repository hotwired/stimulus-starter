import { Application } from "stimulus"
import { autoload } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)

autoload(context, application)
