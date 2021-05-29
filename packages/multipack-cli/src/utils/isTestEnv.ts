/**
 * Return true if script is running in test ENV
 */
const isTestEnv = process.env.NODE_ENV === 'test'

export default isTestEnv
