import nextI18NextConfig, { i18n } from '../index'

describe('i18NextConfig', () => {
  it('Should have i18n config property', () => {
    expect(nextI18NextConfig).toHaveProperty('i18n')
  })

  it('Default locale should be always en because is the more popular', () => {
    expect(i18n.defaultLocale).toBe('en')
  })
})
