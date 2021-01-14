
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20.5336 16.8266C25.0966 12.4461 31.1768 10 37.5021 10H38.4979C44.8232 10 50.9034 12.4461 55.4664 16.8266L55.8286 17.1743C58.7645 19.9928 60.8825 23.5003 62.0253 27.3276C62.0771 27.3684 62.1174 27.4259 62.137 27.4971L65.6148 40.1932C66.3121 42.7388 64.3963 45.25 61.7569 45.25H59.18L58.4837 53.954C58.2174 57.2825 55.285 59.7532 51.9596 59.4509L47 59V68.25C47 69.3546 46.1046 70.25 45 70.25H23C21.8954 70.25 21 69.3546 21 68.25V51.6096C20.8428 51.4664 20.6874 51.321 20.5336 51.1734L20.1714 50.8257C15.5899 46.4274 13 40.351 13 34C13 27.649 15.5899 21.5726 20.1714 17.1743L20.5336 16.8266Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55 32.75L52.9303 31.9739C52.3404 31.7527 52.3888 30.9028 53 30.75L55 30.25"
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
            d="M37.5146 10.127C31.2688 10.127 25.2648 12.5413 20.7577 16.8653L20.3942 17.2141C15.8686 21.5559 13.3101 27.5561 13.3101 33.8277C13.3101 40.0993 15.8686 46.0995 20.3942 50.4414L20.7577 50.7901C20.9086 50.9349 21.0612 51.0775 21.2153 51.2179V67.6258C21.2153 68.7304 22.1108 69.6258 23.2153 69.6258H44.9075C46.0121 69.6258 46.9075 68.7304 46.9075 67.6258V58.5161L51.7375 58.9549C55.0626 59.257 57.9948 56.7864 58.2612 53.4582L58.9433 44.9375H59.8603L61.4268 44.9375C64.0664 44.9375 65.9823 42.4258 65.2845 39.8801L61.8653 27.4059C61.846 27.3356 61.8062 27.2789 61.7551 27.2386C60.6262 23.4594 58.5339 19.9963 55.6339 17.2141L55.2704 16.8653C50.7634 12.5413 44.7593 10.127 38.5135 10.127H37.5146ZM56.7532 29.6397C56.9087 30.2624 56.7539 30.8898 56.3866 31.3587C56.8022 31.8895 56.9395 32.6177 56.6856 33.2952C56.298 34.3295 55.1453 34.8537 54.1109 34.4661L52.0658 33.6997C49.6451 32.7925 49.8437 29.3045 52.3517 28.6779L54.328 28.1841C55.3996 27.9164 56.4854 28.5681 56.7532 29.6397Z"
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
            d="M20.5336 16.8266C25.0966 12.4461 31.1768 10 37.5021 10H38.4979C44.8232 10 50.9034 12.4461 55.4664 16.8266L55.8286 17.1743C58.7645 19.9928 60.8825 23.5003 62.0253 27.3276C62.0771 27.3684 62.1174 27.4259 62.137 27.4971L65.6148 40.1932C66.3121 42.7388 64.3963 45.25 61.7569 45.25H60.1076H59.18L58.4837 53.954C58.2174 57.2825 55.285 59.7532 51.9596 59.4509L47 59V68.25C47 69.3546 46.1046 70.25 45 70.25H23C21.8954 70.25 21 69.3546 21 68.25L21 51.6096C20.8428 51.4664 20.6874 51.321 20.5336 51.1734L20.1714 50.8257C15.5899 46.4274 13 40.351 13 34C13 27.649 15.5899 21.5726 20.1714 17.1743L20.5336 16.8266Z"
            fill="#F2C94C"
          />
          <path
            d="M55 30.25L53 30.75V30.75C52.3889 30.9028 52.3405 31.7527 52.9303 31.9739L55 32.75"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M20.5336 16.8266C25.0966 12.4461 31.1768 10 37.5021 10H38.4979C44.8232 10 50.9034 12.4461 55.4664 16.8266L55.8286 17.1743C58.7645 19.9928 60.8825 23.5003 62.0253 27.3276C62.0771 27.3684 62.1174 27.4259 62.137 27.4971L65.6148 40.1932C66.3121 42.7388 64.3963 45.25 61.7569 45.25H59.18L58.4837 53.954C58.2174 57.2825 55.285 59.7532 51.9596 59.4509L47 59V68.25C47 69.3546 46.1046 70.25 45 70.25H23C21.8954 70.25 21 69.3546 21 68.25V51.6096C20.8428 51.4664 20.6874 51.321 20.5336 51.1734L20.1714 50.8257C15.5899 46.4274 13 40.351 13 34C13 27.649 15.5899 21.5726 20.1714 17.1743L20.5336 16.8266Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55 32.75L52.9303 31.9739C52.3405 31.7527 52.3889 30.9028 53 30.75L55 30.25M37.5021 10C31.1768 10 25.0966 12.4461 20.5336 16.8266L20.1714 17.1743C15.5899 21.5726 13 27.649 13 34C13 40.351 15.5899 46.4274 20.1714 50.8257L20.5336 51.1734C20.6874 51.321 20.8428 51.4664 21 51.6096V68.25C21 69.3546 21.8954 70.25 23 70.25H45C46.1046 70.25 47 69.3546 47 68.25V59L51.9596 59.4509C55.285 59.7532 58.2174 57.2825 58.4837 53.954L59.18 45.25H61.7569C64.3963 45.25 66.3121 42.7388 65.6148 40.1932L62.137 27.4971C62.1174 27.4259 62.0771 27.3684 62.0253 27.3276C60.8825 23.5003 58.7645 19.9928 55.8286 17.1743L55.4664 16.8266C50.9034 12.4461 44.8232 10 38.4979 10H37.5021Z"
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
            d="M56.2513 29.6451C56.4046 30.2663 56.2495 30.8913 55.8834 31.3587C56.2973 31.8874 56.4354 32.6121 56.1851 33.2879C55.8015 34.3237 54.6508 34.8524 53.615 34.4688L51.5469 33.703C49.1145 32.8022 49.312 29.2983 51.8302 28.6766L53.8302 28.1828C54.9026 27.918 55.9865 28.5727 56.2513 29.6451Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.5141 8.12695C30.7522 8.12695 24.2521 10.7408 19.3726 15.4221L19.0091 15.7709C14.0903 20.4899 11.3096 27.0113 11.3096 33.8277C11.3096 40.6442 14.0903 47.1656 19.0091 51.8846L19.2149 52.082V67.6258C19.2149 69.8349 21.0057 71.6258 23.2149 71.6258H44.907C47.1162 71.6258 48.907 69.8349 48.907 67.6258V60.706L51.556 60.9467C55.9896 61.3494 59.8991 58.0554 60.2543 53.6178L60.7891 46.9375H61.4263C65.3857 46.9375 68.2595 43.1699 67.2128 39.3514L63.7936 26.8772C63.7411 26.6855 63.6656 26.5054 63.5709 26.3395C62.3225 22.3594 60.0863 18.7145 57.018 15.7709L56.6545 15.4221C51.7751 10.7408 45.2749 8.12695 38.513 8.12695H37.5141ZM22.1418 18.3085C26.2765 14.3418 31.7844 12.127 37.5141 12.127H38.513C44.2428 12.127 49.7507 14.3418 53.8853 18.3085L54.2488 18.6573C56.8968 21.1978 58.8074 24.36 59.8383 27.8111C59.8819 27.957 59.9417 28.0966 60.0162 28.2275L63.3551 40.4088C63.704 41.6816 62.7461 42.9375 61.4263 42.9375L58.9428 42.9375C57.9001 42.9375 57.0324 43.7385 56.9492 44.7779L56.2671 53.2986C56.0895 55.5175 54.1347 57.1645 51.9179 56.9631L47.088 56.5243C46.5284 56.4734 45.9732 56.6603 45.5583 57.0392C45.1434 57.4182 44.907 57.9542 44.907 58.5161V67.6258H23.2149V51.2179C23.2149 50.6552 22.9777 50.1184 22.5617 49.7394C22.4202 49.6106 22.2803 49.4797 22.1419 49.3469L21.7783 48.9982C17.6458 45.0335 15.3096 39.5545 15.3096 33.8277C15.3096 28.1009 17.6458 22.622 21.7783 18.6573L22.1418 18.3085Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHeadSide = forwardRef((props, ref) => {
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

CoreHeadSide.displayName = 'CoreHeadSide'

export default CoreHeadSide
