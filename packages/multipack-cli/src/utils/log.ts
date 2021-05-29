/* eslint-disable no-console */
import chalk from 'chalk'
import { Log } from '../../types'

/**
 * Used to log colored messages to console
 */
const log: Log = {
  info: message => {
    console.log(chalk.blue(`Info: ${message}`))
  },
  error: message => {
    console.log(chalk.red(`Error: ${message}`))
  },
  warning: message => {
    console.log(chalk.yellow(`Warning: ${message}`))
  },
  success: message => {
    console.log(chalk.green(`Success: ${message}`))
  },
}

export default log
