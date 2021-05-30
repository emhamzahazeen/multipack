import { NextI18NextConfig, I18N } from '../types'

const i18n: I18N = {
  defaultLocale: 'en',
  locales: ['en'],
}

const nextI18NextConfig: NextI18NextConfig = {
  i18n,
}

export { i18n }

export default nextI18NextConfig
