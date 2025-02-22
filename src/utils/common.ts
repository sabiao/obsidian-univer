import { LocaleType, Tools } from '@univerjs/core'
import { enUS as UniverDesignEnUS } from '@univerjs/design'
import { enUS as UniverDocsUIEnUS } from '@univerjs/docs-ui'
import { enUS as UniverSheetsEnUS } from '@univerjs/sheets'
import { enUS as UniverSheetsUIEnUS } from '@univerjs/sheets-ui'
import { enUS as UniverFindReplaceEnUS } from '@univerjs/find-replace'
import { enUS as UniverSheetsFormulaEnUS } from '@univerjs/sheets-formula'
import { enUS as UniverSheetsDataValidationEnUS } from '@univerjs/sheets-data-validation'
import { enUS as UniverSheetsConditionalFormattingUIEnUS } from '@univerjs/sheets-conditional-formatting-ui'
import { enUS as UniverSheetsZenEditorEnUS } from '@univerjs/sheets-zen-editor'
import { enUS as UniverUiEnUS } from '@univerjs/ui'
import { enUS, ruRU, zhCN } from 'univer:locales'
import type { UniverPluginSettings } from '@/types/setting'

export const legacyLocales = {
  [LocaleType.EN_US]: Tools.deepMerge(
    UniverSheetsEnUS,
    UniverDocsUIEnUS,
    UniverFindReplaceEnUS,
    UniverSheetsUIEnUS,
    UniverSheetsFormulaEnUS,
    UniverSheetsDataValidationEnUS,
    UniverSheetsConditionalFormattingUIEnUS,
    UniverSheetsZenEditorEnUS,
    UniverUiEnUS,
    UniverDesignEnUS,
  ),
}

export const univerLocales = {
  [LocaleType.EN_US]: enUS,
  [LocaleType.ZH_CN]: zhCN,
  [LocaleType.RU_RU]: ruRU,
}

export const univerIconSvg = `
<g clip-path="url(#clip0_249_2)">
<path d="M8.04017 76.3743C7.8188 76.2488 7.6138 76.0866 7.43764 75.884C2.75535 70.582 2.0055 62.937 5.5708 56.8617L30.6994 14.0454C31.3526 12.9331 32.7978 12.5519 33.9288 13.195C35.0598 13.838 35.4464 15.259 34.7955 16.3736L9.66693 59.19C7.10948 63.5473 7.6481 69.0301 11.0084 72.8331C11.8643 73.8036 11.7606 75.2729 10.7738 76.1155C9.99275 76.785 8.88824 76.8568 8.04017 76.3743ZM2.94164 53.5794L28.7047 9.67954C29.6058 8.1432 30.7984 6.83914 32.2459 5.80478C32.9498 5.30046 33.1072 4.33314 32.5951 3.63941C32.083 2.94568 31.0962 2.79368 30.3923 3.29566C28.5839 4.58647 27.0959 6.21323 25.9735 8.12761L0.211155 52.0275C-0.223791 52.7687 0.0349942 53.7181 0.787184 54.1445C1.53937 54.5709 2.50436 54.3175 2.94164 53.5763V53.5794ZM41.2652 72.8752L50.5744 57.0106C51.6625 55.157 51.0171 52.7835 49.1316 51.7149C47.246 50.6431 44.8351 51.2799 43.7478 53.1335L34.4385 68.9981C32.6972 71.9632 28.8279 72.9851 25.8145 71.2726C22.7987 69.5609 21.7612 65.7524 23.5026 62.7873L43.9964 27.8693C45.0846 26.0157 44.4392 23.6422 42.5536 22.5736C40.6681 21.5018 38.2572 22.1386 37.1698 23.9922L16.6752 58.9102C12.7607 65.5794 15.0913 74.1372 21.8727 77.9878C28.6517 81.8384 37.353 79.5452 41.2652 72.8752ZM89.2261 24.3601C88.2392 25.2027 88.1356 26.672 88.9914 27.6425C92.3517 31.4455 92.8904 36.9283 90.3329 41.2856L65.2043 84.1027C64.5511 85.215 64.9377 86.6391 66.0711 87.2814C67.2021 87.9245 68.6472 87.5425 69.3004 86.431L94.429 43.6138C97.9943 37.5363 97.2453 29.8936 92.5622 24.5924C92.386 24.3921 92.181 24.2299 91.9597 24.1021C91.1085 23.6188 90.0071 23.6929 89.2261 24.3601ZM97.0582 46.8962L71.2951 90.7961C70.394 92.3324 69.2014 93.6365 67.7539 94.6708C67.0501 95.1751 66.8926 96.1432 67.4047 96.8362C67.9169 97.5299 68.9037 97.6819 69.6075 97.1799C71.4159 95.8891 72.9039 94.2624 74.0264 92.348L99.7895 48.4481C100.224 47.7069 99.9656 46.7575 99.2134 46.3311C98.4589 45.9016 97.4962 46.158 97.059 46.8993L97.0582 46.8962ZM58.7347 27.5996L49.4255 43.4642C48.3373 45.3178 48.9827 47.6913 50.8682 48.7599C52.7538 49.8317 55.1647 49.1949 56.2521 47.3413L65.5613 31.4775C67.3026 28.5124 71.1719 27.4905 74.1854 29.203C77.2011 30.9147 78.2386 34.7232 76.4973 37.6883L56.0042 72.6063C54.916 74.4599 55.5615 76.8334 57.447 77.902C59.3325 78.9738 61.7434 78.337 62.8308 76.4834L83.3247 41.5654C87.2392 34.8962 84.9086 26.3384 78.1272 22.4878C71.3481 18.6372 62.6469 20.9304 58.7347 27.5996Z" fill="url(#paint0_linear_249_2)"/>
</g>
<defs>
<linearGradient id="paint0_linear_249_2" x1="14.5968" y1="27.5563" x2="86.3476" y2="73.5253" gradientUnits="userSpaceOnUse">
<stop stop-color="var(--icon-color)"/>
<stop offset="0.49" stop-color="var(--icon-color)"/>
<stop offset="0.65" stop-color="var(--icon-color)"/>
<stop offset="0.88" stop-color="var(--icon-color)"/>
<stop offset="1" stop-color="var(--icon-color)"/>
</linearGradient>
<clipPath id="clip0_249_2">
<rect width="100" height="100" fill="var(--icon-color)"/>
</clipPath>
</defs>
`

export function getLanguage(setting: UniverPluginSettings) {
  switch (setting.language) {
    case 'EN':
      return LocaleType.EN_US
    case 'ZH':
      return LocaleType.ZH_CN
    case 'RU':
      return LocaleType.RU_RU
    default:
      return LocaleType.EN_US
  }
}
