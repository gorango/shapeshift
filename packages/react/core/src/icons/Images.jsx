
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M21 21C21 17.6863 23.6863 15 27 15H59C62.3137 15 65 17.6863 65 21V53C65 56.3137 62.3137 59 59 59H27C23.6863 59 21 56.3137 21 53V21Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 21C17.6863 21 15 23.6863 15 27V59C15 62.3137 17.6863 65 21 65H53C56.3137 65 59 62.3137 59 59"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 59H59C61.8222 59 64.1893 57.0515 64.8294 54.4264C64.905 54.1164 64.7952 53.7952 64.5696 53.5695L58.7071 47.7071C58.3166 47.3165 57.6834 47.3165 57.2929 47.7071L53.5212 51.4788C53.1186 51.8814 52.4616 51.8671 52.0769 51.4475L37.7372 35.8041C37.3408 35.3718 36.6592 35.3718 36.2629 35.8041L21.2628 52.1678C21.0938 52.3522 21 52.5933 21 52.8435V53C21 56.3137 23.6863 59 27 59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.4018 22.5C50.0095 21.5718 51.9902 21.5718 53.5979 22.5C55.2056 23.4282 56.196 25.1436 56.196 27C56.196 28.8564 55.2056 30.5718 53.5979 31.5C51.9902 32.4282 50.0095 32.4282 48.4018 31.5C46.7941 30.5718 45.8037 28.8564 45.8037 27C45.8037 25.1436 46.7941 23.4282 48.4018 22.5Z"
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
            d="M18.8188 21.544C16.7533 22.492 15.3188 24.5785 15.3188 27V59C15.3188 62.3137 18.0051 65 21.3188 65H53.3188C55.7403 65 57.8268 63.5655 58.7748 61.5H27.3188C22.6244 61.5 18.8188 57.6944 18.8188 53V21.544Z"
            fill="currentColor"
          />
          <path
            d="M49.9708 24.6651C50.805 24.1834 51.8327 24.1834 52.6669 24.6651C53.5011 25.1467 54.015 26.0368 54.015 27C54.015 27.9632 53.5011 28.8533 52.6669 29.3349C51.8327 29.8166 50.805 29.8166 49.9708 29.3349C49.1366 28.8533 48.6227 27.9632 48.6227 27C48.6227 26.0368 49.1366 25.1467 49.9708 24.6651Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3188 21C21.3188 17.6863 24.0051 15 27.3188 15H59.3188C62.6326 15 65.3188 17.6863 65.3188 21V50.4644L60.7938 45.9393C59.4269 44.5725 57.2108 44.5725 55.844 45.9393L53.18 48.6033L39.8989 34.1149C38.5117 32.6016 36.126 32.6016 34.7388 34.1149L21.3188 48.7548V21ZM55.1669 20.3349C52.7857 18.9602 49.852 18.9602 47.4708 20.3349C45.0896 21.7097 43.6227 24.2504 43.6227 27C43.6227 29.7496 45.0896 32.2903 47.4708 33.6651C49.852 35.0398 52.7857 35.0398 55.1669 33.6651C57.5481 32.2903 59.015 29.7496 59.015 27C59.015 24.2504 57.5481 21.7097 55.1669 20.3349Z"
            fill="currentColor"
          />
          <path
            d="M37.3189 38.6997L23.8417 53.4021C24.0411 55.1457 25.5218 56.5 27.3188 56.5H59.3188C60.6602 56.5 61.8291 55.7439 62.4162 54.6329L58.3189 50.5355L55.6078 53.2466C54.1987 54.6557 51.8993 54.6057 50.5529 53.1368L37.3189 38.6997Z"
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
            d="M21 21C17.6863 21 15 23.6863 15 27L15 59C15 62.3137 17.6863 65 21 65H53C56.3137 65 59 62.3137 59 59L27 59C23.6863 59 21 56.3137 21 53L21 21Z"
            fill="#828282"
          />
          <g opacity="0.9"><rect x="21" y="15" width="44" height="44" rx="6" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27 59L46 59L59 59C61.8222 59 64.1893 57.0515 64.8294 54.4264C64.905 54.1164 64.7952 53.7952 64.5696 53.5696L58.7071 47.7071C58.3166 47.3166 57.6834 47.3166 57.2929 47.7071L53.5212 51.4789C53.1186 51.8814 52.4616 51.8672 52.0769 51.4475L37.7372 35.8042C37.3408 35.3718 36.6592 35.3718 36.2629 35.8042L21.2628 52.1678C21.0938 52.3523 21 52.5934 21 52.8436V53C21 56.3137 23.6863 59 27 59Z" fill="#6FCF97"/><path d="M48.4019 22.5C50.0096 21.5718 51.9904 21.5718 53.5981 22.5C55.2058 23.4282 56.1962 25.1436 56.1962 27C56.1962 28.8564 55.2058 30.5718 53.5981 31.5C51.9904 32.4282 50.0096 32.4282 48.4019 31.5C46.7942 30.5718 45.8038 28.8564 45.8038 27C45.8038 25.1436 46.7942 23.4282 48.4019 22.5Z" fill="#F2C94C"/></g>
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M21 21C17.6863 21 15 23.6863 15 27V59C15 62.3137 17.6863 65 21 65H53C56.3137 65 59 62.3137 59 59H27C23.6863 59 21 56.3137 21 53V21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21 21C21 17.6863 23.6863 15 27 15H59C62.3137 15 65 17.6863 65 21V53C65 56.3137 62.3137 59 59 59H27C23.6863 59 21 56.3137 21 53V21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27 59H59C61.8222 59 64.1893 57.0515 64.8294 54.4264C64.905 54.1164 64.7952 53.7952 64.5696 53.5696L58.7071 47.7071C58.3166 47.3166 57.6834 47.3166 57.2929 47.7071L53.5212 51.4789C53.1186 51.8815 52.4616 51.8672 52.0769 51.4475L37.7372 35.8042C37.3408 35.3718 36.6592 35.3718 36.2629 35.8042L21.2628 52.1678C21.0938 52.3523 21 52.5934 21 52.8436V53C21 56.3137 23.6863 59 27 59Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48.4019 22.5C50.0096 21.5718 51.9904 21.5718 53.5981 22.5C55.2058 23.4282 56.1962 25.1436 56.1962 27C56.1962 28.8564 55.2058 30.5718 53.5981 31.5C51.9904 32.4282 50.0096 32.4282 48.4019 31.5C46.7942 30.5718 45.8038 28.8564 45.8038 27C45.8038 25.1436 46.7942 23.4282 48.4019 22.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21 21C17.6863 21 15 23.6863 15 27V59C15 62.3137 17.6863 65 21 65H53C56.3137 65 59 62.3137 59 59M21 21V53M21 21C21 17.6863 23.6863 15 27 15H59C62.3137 15 65 17.6863 65 21V53C65 56.3137 62.3137 59 59 59M59 59H27C23.6863 59 21 56.3137 21 53M59 59C61.8222 59 64.1893 57.0515 64.8294 54.4264C64.905 54.1164 64.7952 53.7952 64.5696 53.5696L58.7071 47.7071C58.3166 47.3166 57.6834 47.3166 57.2929 47.7071L53.5212 51.4789C53.1186 51.8815 52.4616 51.8672 52.0769 51.4475L37.7372 35.8042C37.3408 35.3718 36.6592 35.3718 36.2629 35.8042L21.2628 52.1678C21.0938 52.3523 21 52.5934 21 52.8436V53M45.8038 27C45.8038 25.1436 46.7942 23.4282 48.4019 22.5C50.0096 21.5718 51.9904 21.5718 53.5981 22.5C55.2058 23.4282 56.1962 25.1436 56.1962 27C56.1962 28.8564 55.2058 30.5718 53.5981 31.5C51.9904 32.4282 50.0096 32.4282 48.4019 31.5C46.7942 30.5718 45.8038 28.8564 45.8038 27Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.5981 20.7679C52.3716 19.4825 49.6284 19.4825 47.4019 20.7679C45.1754 22.0534 43.8038 24.4291 43.8038 27C43.8038 29.5709 45.1754 31.9466 47.4019 33.2321C49.6284 34.5175 52.3716 34.5175 54.5981 33.2321C56.8246 31.9466 58.1962 29.5709 58.1962 27C58.1962 24.4291 56.8246 22.0534 54.5981 20.7679ZM49.4019 24.2321C50.3908 23.6611 51.6092 23.6611 52.5981 24.2321C53.587 24.803 54.1962 25.8581 54.1962 27C54.1962 28.1419 53.587 29.197 52.5981 29.7679C51.6092 30.3389 50.3908 30.3389 49.4019 29.7679C48.413 29.197 47.8038 28.1419 47.8038 27C47.8038 25.8581 48.413 24.803 49.4019 24.2321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53 67C56.8003 67 59.9817 64.3502 60.7973 60.7974C61.7987 60.5676 62.728 60.1498 63.5465 59.5834C65.6331 58.1396 67 55.7294 67 53V21C67 16.5817 63.4183 13 59 13H27C23.1997 13 20.0183 15.6499 19.2027 19.2027C15.6499 20.0183 13 23.1997 13 27V59C13 63.4183 16.5817 67 21 67H53ZM19 23.5351C17.8044 24.2267 17 25.5194 17 27V59C17 61.2091 18.7909 63 21 63H53C54.4806 63 55.7733 62.1956 56.4649 61H27C22.5817 61 19 57.4183 19 53V23.5351ZM63 21V49.1715L60.1213 46.2929C58.9498 45.1213 57.0503 45.1213 55.8787 46.2929L52.8455 49.3261L39.2115 34.4527C38.0225 33.1556 35.9776 33.1556 34.7886 34.4527L23 47.313V21C23 18.7909 24.7909 17 27 17H59C61.2091 17 63 18.7909 63 21ZM23.0063 53.2257C23.1233 55.3299 24.8666 57 27 57H59C59.1381 57 59.2745 56.993 59.409 56.9793C60.0935 56.9098 60.727 56.6677 61.2653 56.2972C61.899 55.861 62.4007 55.2468 62.6983 54.5267L58 49.8284L54.9354 52.8931C53.7276 54.1008 51.7567 54.058 50.6026 52.7989L37 37.9598L23.0063 53.2257Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreImages = forwardRef((props, ref) => {
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

CoreImages.displayName = 'CoreImages'

export default CoreImages
