'use client';
import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useLocale } from 'next-intl';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';


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
      <Select disabled={isPending} value={locale} onValueChange={onChange}>
         <SelectTrigger className="w-28 text-white">
            <SelectValue />
         </SelectTrigger>
         <SelectContent>
            <SelectItem value="ar">Ar</SelectItem>
            <SelectItem value="en">En</SelectItem>
         </SelectContent>
      </Select>

   );
}