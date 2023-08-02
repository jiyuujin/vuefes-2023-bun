import { match } from 'ts-pattern'
import { Path, Sponsor } from '~/types/app'
import { all } from '~/utils/sponsor.constants'

export function useLocale(path: Path) {
  const { locale } = useI18n({ useScope: 'global' })

  const docPath = computed(() => {
    let m = match(path)
      .with('message', () => `/${locale.value}/top/message`)
      .with('form', () => `/${locale.value}/top/contact`)
      .with('sponsor', () => `/${locale.value}/top/sponsors`)
      .with('teams', () => `/${locale.value}/top/teams`)
      .with('speaker', () => `/${locale.value}/top/speakers`)
      .with('ticket', () => `/${locale.value}/top/ticket`)
      .with('namecard', () => `/${locale.value}/top/namecard`)
      .with('volunteer', () => `/${locale.value}/top/volunteer`)
      .with('childcare', () => `/${locale.value}/top/childcare`)
      .with('handson', () => `/${locale.value}/top/handson`)
      .with('privacy', () => `/${locale.value}/privacy`)
      .with('code-of-conduct', () => `/${locale.value}/code-of-conduct`)
      .with('personal-sponsors-text1', () => `/${locale.value}/top/personal-sponsors-text1`)
      .with('personal-sponsors-caption', () => `/${locale.value}/top/personal-sponsors-caption`)

    // set sponsors markdown
    m = all.reduce((prev: any, s: Sponsor) => {
      return prev
        .with(`sponsors/${s.id}/head`, () => `/${locale.value}/sponsors/${s.id}/head`)
        .with(`sponsors/${s.id}/title`, () => `/${locale.value}/sponsors/${s.id}/title`)
        .with(`sponsors/${s.id}/body`, () => `/${locale.value}/sponsors/${s.id}/body`)
    }, m)

    return (m as any).exhaustive()
  })

  return { docPath }
}
