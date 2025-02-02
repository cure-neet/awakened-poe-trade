import { parseClipboard } from '@/parser'
import { AppConfig } from '@/web/Config'

const ENDPOINT_BY_LANG = {
  en: 'www.poewiki.net/wiki',
  ru: 'pathofexile-ru.gamepedia.com',
  ja: 'www.poewiki.net/wiki',
  ui_ja: 'www.poewiki.net/wiki',
  zh_TW: 'www.poewiki.net/wiki',
  zh_TW_GGC: 'www.poewiki.net/wiki'
}

export function openWiki (clipboard: string) {
  const item = parseClipboard(clipboard)
  if (!item) return

  window.open(`https://${ENDPOINT_BY_LANG[AppConfig().language]}/${item.info.name}`)
}
