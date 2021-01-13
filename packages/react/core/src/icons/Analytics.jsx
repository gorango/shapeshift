
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M15 68C16.1046 68 17 67.1046 17 66L17 56C17 54.8954 16.1046 54 15 54H11C9.89543 54 9 54.8954 9 56V66C9 67.1046 9.89543 68 11 68H15Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M9 32C9 30.8954 9.89543 30 11 30H15C16.1046 30 17 30.8954 17 32V36C17 37.1046 16.1046 38 15 38H11C9.89543 38 9 37.1046 9 36V32Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.4146 30.5856L27.5861 19.4141"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 68C34.1046 68 35 67.1046 35 66V38C35 36.8954 34.1046 36 33 36H29C27.8954 36 27 36.8954 27 38V66C27 67.1046 27.8954 68 29 68H33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 14C27 12.8954 27.8954 12 29 12H33C34.1046 12 35 12.8954 35 14V18C35 19.1046 34.1046 20 33 20H29C27.8954 20 27 19.1046 27 18V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.688 19.0728L45.3121 27.9262"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51 50C52.1046 50 53 50.8954 53 52V66C53 67.1046 52.1046 68 51 68H47C45.8954 68 45 67.1046 45 66V52C45 50.8954 45.8954 50 47 50H51Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 29C45 27.8954 45.8954 27 47 27H51C52.1046 27 53 27.8954 53 29V33C53 34.1046 52.1046 35 51 35H47C45.8954 35 45 34.1046 45 33V29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.6885 27.9262L63.3126 19.0728"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69 68C70.1046 68 71 67.1046 71 66V38C71 36.8954 70.1046 36 69 36H65C63.8954 36 63 36.8954 63 38V66C63 67.1046 63.8954 68 65 68H69Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63 14C63 12.8954 63.8954 12 65 12H69C70.1046 12 71 12.8954 71 14V18C71 19.1046 70.1046 20 69 20H65C63.8954 20 63 19.1046 63 18V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 68C34.1046 68 35 67.1046 35 66V38C35 36.8954 34.1046 36 33 36L29 36C27.8954 36 27 36.8954 27 38L27 66C27 67.1046 27.8954 68 29 68H33ZM15 68C16.1046 68 17 67.1046 17 66L17 56C17 54.8954 16.1046 54 15 54H11C9.89543 54 9 54.8954 9 56L9 66C9 67.1046 9.89543 68 11 68H15ZM51 50C52.1046 50 53 50.8954 53 52L53 66C53 67.1046 52.1046 68 51 68H47C45.8954 68 45 67.1046 45 66L45 52C45 50.8954 45.8954 50 47 50H51ZM69 68C70.1046 68 71 67.1046 71 66V38C71 36.8954 70.1046 36 69 36H65C63.8954 36 63 36.8954 63 38L63 66C63 67.1046 63.8954 68 65 68H69Z"
            fill="currentColor"
          />
          <path
            d="M17 66H15H17ZM33 38V66H37V38H33ZM29 38L33 38V34L29 34V38ZM29 66L29 38H25L25 66H29ZM33 66H29L29 70H33L33 66ZM15 56L15 66H19L19 56H15ZM11 56H15V52H11V56ZM11 66L11 56H7L7 66H11ZM15 66H11V70H15L15 66ZM55 66L55 52H51L51 66H55ZM47 70H51V66H47V70ZM43 52L43 66H47L47 52H43ZM51 48H47V52H51V48ZM69 38V66H73V38H69ZM65 38H69V34H65V38ZM65 66V38H61L61 66L65 66ZM69 66H65V70H69V66ZM61 66C61 68.2091 62.7909 70 65 70V66L61 66ZM65 34C62.7909 34 61 35.7909 61 38H65V34ZM69 66V70C71.2091 70 73 68.2091 73 66H69ZM73 38C73 35.7909 71.2091 34 69 34V38H73ZM47 52V48C44.7909 48 43 49.7909 43 52H47ZM47 66H43C43 68.2091 44.7909 70 47 70V66ZM55 52C55 49.7909 53.2091 48 51 48V52H55ZM51 66V70C53.2091 70 55 68.2091 55 66H51ZM7 66C7 68.2091 8.79086 70 11 70V66H11H7ZM11 52C8.79086 52 7 53.7909 7 56H11V52ZM15 66L15 70C17.2091 70 19 68.2091 19 66H15ZM19 56C19 53.7909 17.2091 52 15 52V56H19ZM25 66C25 68.2091 26.7909 70 29 70L29 66H25ZM29 34C26.7909 34 25 35.7909 25 38H29V34ZM33 66L33 70C35.2091 70 37 68.2091 37 66H33ZM37 38C37 35.7909 35.2091 34 33 34V38H37Z"
            fill="currentColor"
          />
          <path
            d="M14.6468 28.8179C13.6705 29.7942 13.6705 31.3771 14.6468 32.3534C15.6231 33.3297 17.206 33.3297 18.1823 32.3534L14.6468 28.8179ZM29.3539 21.1818C30.3302 20.2055 30.3302 18.6226 29.3539 17.6463C28.3776 16.67 26.7947 16.67 25.8184 17.6463L29.3539 21.1818ZM36.2884 17.1524C35.2277 16.2685 33.6513 16.4118 32.7674 17.4725C31.8835 18.5332 32.0268 20.1096 33.0875 20.9936L36.2884 17.1524ZM43.7116 29.847C44.7723 30.7309 46.3487 30.5876 47.2326 29.5269C48.1166 28.4662 47.9732 26.8898 46.9126 26.0059L43.7116 29.847ZM51.0878 26.0061C50.0271 26.89 49.8838 28.4664 50.7677 29.5271C51.6516 30.5878 53.228 30.7311 54.2887 29.8472L51.0878 26.0061ZM64.9128 20.9937C65.9735 20.1098 66.1168 18.5334 65.2329 17.4727C64.349 16.412 62.7726 16.2687 61.7119 17.1526L64.9128 20.9937ZM18.1823 32.3534L29.3539 21.1818L25.8184 17.6463L14.6468 28.8179L18.1823 32.3534ZM33.0875 20.9936L43.7116 29.847L46.9126 26.0059L36.2884 17.1524L33.0875 20.9936ZM54.2887 29.8472L64.9128 20.9937L61.7119 17.1526L51.0878 26.0061L54.2887 29.8472Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 14C35 12.8954 34.1046 12 33 12H29C27.8954 12 27 12.8954 27 14V18C27 19.1046 27.8954 20 29 20H33C34.1046 20 35 19.1046 35 18V14ZM17 32C17 30.8954 16.1046 30 15 30H11C9.89543 30 9 30.8954 9 32V36C9 37.1046 9.89543 38 11 38H15C16.1046 38 17 37.1046 17 36V32ZM45 29C45 27.8954 45.8954 27 47 27H51C52.1046 27 53 27.8954 53 29V33C53 34.1046 52.1046 35 51 35H47C45.8954 35 45 34.1046 45 33V29ZM71 14C71 12.8954 70.1046 12 69 12H65C63.8954 12 63 12.8954 63 14V18C63 19.1046 63.8954 20 65 20H69C70.1046 20 71 19.1046 71 18V14Z"
            fill="currentColor"
          />
          <path
            d="M29 14H33V10H29V14ZM29 18V14H25V18H29ZM33 18H29V22H33V18ZM33 14V18H37V14H33ZM11 32H15V28H11V32ZM11 36V32H7V36H11ZM15 36H11V40H15V36ZM15 32V36H19V32H15ZM51 25H47V29H51V25ZM55 33V29H51V33H55ZM47 37H51L51 33H47L47 37ZM43 29V33H47V29H43ZM65 14L69 14V10H65V14ZM65 18V14H61V18H65ZM69 18L65 18V22H69V18ZM69 14V18H73V14H69ZM69 22C71.2091 22 73 20.2091 73 18H69V22ZM61 18C61 20.2091 62.7909 22 65 22V18H61ZM69 14H73C73 11.7909 71.2091 10 69 10V14ZM65 10C62.7909 10 61 11.7909 61 14H65V10ZM47 33H43C43 35.2091 44.7909 37 47 37L47 33ZM51 33L51 37C53.2091 37 55 35.2091 55 33H51ZM47 25C44.7909 25 43 26.7909 43 29H47V25ZM51 29H55C55 26.7909 53.2091 25 51 25V29ZM15 40C17.2091 40 19 38.2091 19 36H15V40ZM7 36C7 38.2091 8.79086 40 11 40V36H7ZM15 32H19C19 29.7909 17.2091 28 15 28V32ZM11 28C8.79086 28 7 29.7909 7 32H11V28ZM33 22C35.2091 22 37 20.2091 37 18H33V22ZM25 18C25 20.2091 26.7909 22 29 22V18H25ZM33 14H37C37 11.7909 35.2091 10 33 10V14ZM29 10C26.7909 10 25 11.7909 25 14H29V10Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 68C34.1046 68 35 67.1046 35 66V38C35 36.8954 34.1046 36 33 36L29 36C27.8954 36 27 36.8954 27 38L27 66C27 67.1046 27.8954 68 29 68H33ZM15 68C16.1046 68 17 67.1046 17 66L17 56C17 54.8954 16.1046 54 15 54H11C9.89543 54 9 54.8954 9 56L9 66C9 67.1046 9.89543 68 11 68H15ZM51 50C52.1046 50 53 50.8954 53 52L53 66C53 67.1046 52.1046 68 51 68H47C45.8954 68 45 67.1046 45 66L45 52C45 50.8954 45.8954 50 47 50H51ZM69 68C70.1046 68 71 67.1046 71 66V38C71 36.8954 70.1046 36 69 36H65C63.8954 36 63 36.8954 63 38L63 66C63 67.1046 63.8954 68 65 68H69Z"
            fill="#219653"
          />
          <path
            d="M17 66H15H17ZM33 38V66H37V38H33ZM29 38L33 38V34L29 34V38ZM29 66L29 38H25L25 66H29ZM33 66H29L29 70H33L33 66ZM15 56L15 66H19L19 56H15ZM11 56H15V52H11V56ZM11 66L11 56H7L7 66H11ZM15 66H11V70H15L15 66ZM55 66L55 52H51L51 66H55ZM47 70H51V66H47V70ZM43 52L43 66H47L47 52H43ZM51 48H47V52H51V48ZM69 38V66H73V38H69ZM65 38H69V34H65V38ZM65 66V38H61L61 66L65 66ZM69 66H65V70H69V66ZM61 66C61 68.2091 62.7909 70 65 70V66L61 66ZM65 34C62.7909 34 61 35.7909 61 38H65V34ZM69 66V70C71.2091 70 73 68.2091 73 66H69ZM73 38C73 35.7909 71.2091 34 69 34V38H73ZM47 52V48C44.7909 48 43 49.7909 43 52H47ZM47 66H43C43 68.2091 44.7909 70 47 70V66ZM55 52C55 49.7909 53.2091 48 51 48V52H55ZM51 66V70C53.2091 70 55 68.2091 55 66H51ZM7 66C7 68.2091 8.79086 70 11 70V66H11H7ZM11 52C8.79086 52 7 53.7909 7 56H11V52ZM15 66L15 70C17.2091 70 19 68.2091 19 66H15ZM19 56C19 53.7909 17.2091 52 15 52V56H19ZM25 66C25 68.2091 26.7909 70 29 70L29 66H25ZM29 34C26.7909 34 25 35.7909 25 38H29V34ZM33 66L33 70C35.2091 70 37 68.2091 37 66H33ZM37 38C37 35.7909 35.2091 34 33 34V38H37Z"
            fill="#219653"
          />
          <path
            d="M15.0003 29.1714C14.2193 29.9525 14.2193 31.2188 15.0003 31.9998C15.7814 32.7809 17.0477 32.7809 17.8288 31.9998L15.0003 29.1714ZM29.0003 20.8283C29.7814 20.0472 29.7814 18.7809 29.0003 17.9998C28.2193 17.2188 26.953 17.2188 26.1719 17.9998L29.0003 20.8283ZM35.9683 17.5366C35.1198 16.8294 33.8586 16.9441 33.1515 17.7926C32.4444 18.6412 32.559 19.9023 33.4076 20.6094L35.9683 17.5366ZM44.0317 29.4629C44.8803 30.17 46.1414 30.0554 46.8485 29.2068C47.5557 28.3583 47.441 27.0971 46.5925 26.39L44.0317 29.4629ZM51.4078 26.3902C50.5593 27.0973 50.4446 28.3584 51.1518 29.207C51.8589 30.0555 53.12 30.1702 53.9686 29.4631L51.4078 26.3902ZM64.5927 20.6096C65.4413 19.9025 65.5559 18.6413 64.8488 17.7928C64.1417 16.9442 62.8805 16.8296 62.032 17.5367L64.5927 20.6096ZM17.8288 31.9998L29.0003 20.8283L26.1719 17.9998L15.0003 29.1714L17.8288 31.9998ZM33.4076 20.6094L44.0317 29.4629L46.5925 26.39L35.9683 17.5366L33.4076 20.6094ZM53.9686 29.4631L64.5927 20.6096L62.032 17.5367L51.4078 26.3902L53.9686 29.4631Z"
            fill="#4F4F4F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 14C35 12.8954 34.1046 12 33 12H29C27.8954 12 27 12.8954 27 14V18C27 19.1046 27.8954 20 29 20H33C34.1046 20 35 19.1046 35 18V14ZM17 32C17 30.8954 16.1046 30 15 30H11C9.89543 30 9 30.8954 9 32V36C9 37.1046 9.89543 38 11 38H15C16.1046 38 17 37.1046 17 36V32ZM45 29C45 27.8954 45.8954 27 47 27H51C52.1046 27 53 27.8954 53 29V33C53 34.1046 52.1046 35 51 35H47C45.8954 35 45 34.1046 45 33V29ZM71 14C71 12.8954 70.1046 12 69 12H65C63.8954 12 63 12.8954 63 14V18C63 19.1046 63.8954 20 65 20H69C70.1046 20 71 19.1046 71 18V14Z"
            fill="#219653"
          />
          <path
            d="M29 14H33V10H29V14ZM29 18V14H25V18H29ZM33 18H29V22H33V18ZM33 14V18H37V14H33ZM11 32H15V28H11V32ZM11 36V32H7V36H11ZM15 36H11V40H15V36ZM15 32V36H19V32H15ZM51 25H47V29H51V25ZM55 33V29H51V33H55ZM47 37H51L51 33H47L47 37ZM43 29V33H47V29H43ZM65 14L69 14V10H65V14ZM65 18V14H61V18H65ZM69 18L65 18V22H69V18ZM69 14V18H73V14H69ZM69 22C71.2091 22 73 20.2091 73 18H69V22ZM61 18C61 20.2091 62.7909 22 65 22V18H61ZM69 14H73C73 11.7909 71.2091 10 69 10V14ZM65 10C62.7909 10 61 11.7909 61 14H65V10ZM47 33H43C43 35.2091 44.7909 37 47 37L47 33ZM51 33L51 37C53.2091 37 55 35.2091 55 33H51ZM47 25C44.7909 25 43 26.7909 43 29H47V25ZM51 29H55C55 26.7909 53.2091 25 51 25V29ZM15 40C17.2091 40 19 38.2091 19 36H15V40ZM7 36C7 38.2091 8.79086 40 11 40V36H7ZM15 32H19C19 29.7909 17.2091 28 15 28V32ZM11 28C8.79086 28 7 29.7909 7 32H11V28ZM33 22C35.2091 22 37 20.2091 37 18H33V22ZM25 18C25 20.2091 26.7909 22 29 22V18H25ZM33 14H37C37 11.7909 35.2091 10 33 10V14ZM29 10C26.7909 10 25 11.7909 25 14H29V10Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M33 68C34.1046 68 35 67.1046 35 66V38C35 36.8954 34.1046 36 33 36H29C27.8954 36 27 36.8954 27 38V66C27 67.1046 27.8954 68 29 68H33Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M15 68C16.1046 68 17 67.1046 17 66L17 56C17 54.8954 16.1046 54 15 54H11C9.89543 54 9 54.8954 9 56V66C9 67.1046 9.89543 68 11 68H15Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51 50C52.1046 50 53 50.8954 53 52V66C53 67.1046 52.1046 68 51 68H47C45.8954 68 45 67.1046 45 66V52C45 50.8954 45.8954 50 47 50H51Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M69 68C70.1046 68 71 67.1046 71 66V38C71 36.8954 70.1046 36 69 36H65C63.8954 36 63 36.8954 63 38V66C63 67.1046 63.8954 68 65 68H69Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35 14C35 12.8954 34.1046 12 33 12H29C27.8954 12 27 12.8954 27 14V18C27 19.1046 27.8954 20 29 20H33C34.1046 20 35 19.1046 35 18V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17 32C17 30.8954 16.1046 30 15 30H11C9.89543 30 9 30.8954 9 32V36C9 37.1046 9.89543 38 11 38H15C16.1046 38 17 37.1046 17 36V32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45 29C45 27.8954 45.8954 27 47 27H51C52.1046 27 53 27.8954 53 29V33C53 34.1046 52.1046 35 51 35H47C45.8954 35 45 34.1046 45 33V29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M71 14C71 12.8954 70.1046 12 69 12H65C63.8954 12 63 12.8954 63 14V18C63 19.1046 63.8954 20 65 20H69C70.1046 20 71 19.1046 71 18V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.4145 30.5856L27.586 19.414M34.6879 19.073L45.312 27.9264M52.6881 27.9266L63.3123 19.0731M63 66V38C63 36.8954 63.8954 36 65 36H69C70.1046 36 71 36.8954 71 38V66C71 67.1046 70.1046 68 69 68H65C63.8954 68 63 67.1046 63 66ZM45 52V66C45 67.1046 45.8954 68 47 68H51C52.1046 68 53 67.1046 53 66V52C53 50.8954 52.1046 50 51 50H47C45.8954 50 45 50.8954 45 52ZM9 66V56C9 54.8954 9.89543 54 11 54H15C16.1046 54 17 54.8954 17 56L17 66C17 67.1046 16.1046 68 15 68H11C9.89543 68 9 67.1046 9 66ZM27 66V38C27 36.8954 27.8954 36 29 36H33C34.1046 36 35 36.8954 35 38V66C35 67.1046 34.1046 68 33 68H29C27.8954 68 27 67.1046 27 66ZM69 20H65C63.8954 20 63 19.1046 63 18V14C63 12.8954 63.8954 12 65 12H69C70.1046 12 71 12.8954 71 14V18C71 19.1046 70.1046 20 69 20ZM47 35H51C52.1046 35 53 34.1046 53 33V29C53 27.8954 52.1046 27 51 27H47C45.8954 27 45 27.8954 45 29V33C45 34.1046 45.8954 35 47 35ZM15 38H11C9.89543 38 9 37.1046 9 36V32C9 30.8954 9.89543 30 11 30H15C16.1046 30 17 30.8954 17 32V36C17 37.1046 16.1046 38 15 38ZM33 20H29C27.8954 20 27 19.1046 27 18V14C27 12.8954 27.8954 12 29 12H33C34.1046 12 35 12.8954 35 14V18C35 19.1046 34.1046 20 33 20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M33 17.9997V14H29V17.9996M33 17.9997L29 17.9996M33 17.9997C32.9999 17.9998 33.0001 17.9995 33 17.9997ZM29 17.9996C28.9999 17.9995 29.0001 17.9996 29 17.9996ZM65.0002 18C65.0002 17.9999 65.0003 18.0001 65.0002 18ZM65.0002 18L65 14H69V18H65.0002ZM25 14C25 11.7909 26.7909 10 29 10H33C35.2091 10 37 11.7909 37 14V18C37 18.1286 36.9939 18.2559 36.9821 18.3814L45.3503 25.3549C45.8533 25.127 46.4118 25 47 25H51C51.5883 25 52.1469 25.127 52.6499 25.355L61.018 18.3816C61.0061 18.256 61 18.1287 61 18V14C61 11.7909 62.7909 10 65 10H69C71.2091 10 73 11.7909 73 14V18C73 20.2091 71.2091 22 69 22H65C64.4118 22 63.8532 21.873 63.3502 21.645L54.982 28.6184C54.9939 28.744 55 28.8713 55 29V33C55 35.2091 53.2091 37 51 37H47C44.7909 37 43 35.2091 43 33V29C43 28.8712 43.0061 28.7438 43.018 28.6182L34.65 21.6449C34.147 21.873 33.5883 22 33 22H29C28.6417 22 28.2944 21.9529 27.964 21.8645L18.8645 30.964C18.9529 31.2944 19 31.6417 19 32V36C19 38.2091 17.2091 40 15 40H11C8.79086 40 7 38.2091 7 36V32C7 29.7909 8.79086 28 11 28H15C15.3583 28 15.7057 28.0471 16.0361 28.1355L25.1355 19.0361C25.0471 18.7057 25 18.3583 25 18V14ZM51 29H47V33H51V29ZM15 32H11V36H15V32ZM29 34C26.7909 34 25 35.7909 25 38V66C25 68.2091 26.7909 70 29 70H33C35.2091 70 37 68.2091 37 66V38C37 35.7909 35.2091 34 33 34H29ZM29 38H33V66H29V38ZM65 34C62.7909 34 61 35.7909 61 38V66C61 68.2091 62.7909 70 65 70H69C71.2091 70 73 68.2091 73 66V38C73 35.7909 71.2091 34 69 34H65ZM65 38H69V66H65V38ZM47 48C44.7909 48 43 49.7909 43 52V66C43 68.2091 44.7909 70 47 70H51C53.2091 70 55 68.2091 55 66V52C55 49.7909 53.2091 48 51 48H47ZM47 52H51V66H47V52ZM11 52C8.79086 52 7 53.7909 7 56V66C7 68.2091 8.79086 70 11 70H15C17.2091 70 19 68.2091 19 66L19 56C19 53.7909 17.2091 52 15 52H11ZM11 56H15L15 66H11V56Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAnalytics = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreAnalytics.displayName = 'CoreAnalytics'

export default CoreAnalytics