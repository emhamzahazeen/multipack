import ora from 'ora'
import { TCLISpinner } from '../../types'

/**
 * Used to show a spinner in CLI
 * @param message - message to show right to the spinner
 */
const cliSpinner: TCLISpinner = (message = 'Loading...') => {
  const spinner = ora()

  spinner.color = 'yellow'
  spinner.text = message

  return spinner
}

export default cliSpinner
