import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPolicyPage')

  return (
    <main className="flex-1">
      <section className="w-full py-12">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {t('sample_text')}
          </div>
        </div>
      </section>
    </main>
  )
}
