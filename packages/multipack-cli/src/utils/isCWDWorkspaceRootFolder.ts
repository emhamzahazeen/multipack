import path from 'path'
import fs from 'fs'
import { TIsCWDWorkspaceRootFolder } from '../../types'

/**
 * Checks if cwd is the workspace root folder
 */
const isCWDWorkspaceRootFolder: TIsCWDWorkspaceRootFolder = () =>
  fs.existsSync(path.join(process.cwd(), '/packages'))

export default isCWDWorkspaceRootFolder
