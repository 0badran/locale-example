'use client';
import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useLocale } from 'next-intl';


export default function LocaleTriggerSelect() {
   const locale = useLocale();
   const [isPending, startTransition] = useTransition();


   function onChange(value: string) {
      const locale = value as Locale;
      startTransition(() => {
         setUserLocale(locale);
      });
   }

   return (
      <div>
         <select disabled={isPending} defaultValue={locale} onChange={(e) => onChange(e.target.value)}>
            <option value="ar">Ar</option>
            <option value="en">En</option>
         </select>
      </div>
   );
}