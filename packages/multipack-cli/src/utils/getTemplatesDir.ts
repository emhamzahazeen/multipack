import path from 'path'
import isTestEnv from './isTestEnv'
import { TGetTemplatesDir } from '../../types'

/**
 * Used to get path to templates dir (in test and prod these are different)
 */
const getTemplatesDir: TGetTemplatesDir = () =>
  isTestEnv
    ? path.join(__dirname, '../../templates/')
    : path.join(__dirname, '../templates/')

export default getTemplatesDir
