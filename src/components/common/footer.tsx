import { useTranslations } from 'next-intl'
import Link from 'next/link'
import NavigationLink from './NavigationLink'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Acme Inc. {t('all_rights_reserved')}.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <NavigationLink
          href="/terms"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          {t('menu.terms_of_service')}
        </NavigationLink>
        <NavigationLink
          href="/privacy"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          {t('menu.privacy_policy')}
        </NavigationLink>
      </nav>
    </footer>
  )
}
