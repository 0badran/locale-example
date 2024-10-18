import LocaleTriggerSelect from '@/components/LocaleTriggerSelect';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return <>
    <h1>{t('title')}</h1>
    <LocaleTriggerSelect />
  </>
}