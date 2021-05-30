import path from 'path'
import { TGetTemplatesDirPath } from '../../types'

/**
 * Used to get path to templates dir (in test and other env's these are different)
 */
const getTemplatesDirPath: TGetTemplatesDirPath = () =>
  process.env.NODE_ENV === 'test'
    ? path.join(__dirname, '../../templates/')
    : path.join(__dirname, '../templates/')

export default getTemplatesDirPath
