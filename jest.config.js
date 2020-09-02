const {
  commonJestConfig,
  tsJestConfig,
  monorepoJestConfig,
  mergeConfigs,
} = require('@episclera/toolkit')

module.exports = mergeConfigs(
  commonJestConfig,
  monorepoJestConfig,
  tsJestConfig,
)
