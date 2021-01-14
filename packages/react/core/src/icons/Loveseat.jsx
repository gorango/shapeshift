
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 41.0661C12 38.2682 14.2682 36 17.0661 36H19C22.866 36 26 39.134 26 43V59C26 61.7614 23.7614 64 21 64C18.2386 64 16 61.7614 16 59V52.309C16 50.1455 15.3996 48.0244 14.2657 46.1818L12.7515 43.7212C12.2602 42.9228 12 42.0036 12 41.0661Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 41.0661C68 38.2682 65.7318 36 62.9339 36H61C57.134 36 54 39.134 54 43V59C54 61.7614 56.2386 64 59 64C61.7614 64 64 61.7614 64 59V52.309C64 50.1455 64.6004 48.0244 65.7343 46.1818L67.2485 43.7212C67.7398 42.9228 68 42.0036 68 41.0661Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 60H54"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54 44H26"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20 36.0709V32C20 23.1634 27.1634 16 36 16H44C52.8366 16 60 23.1634 60 32V36.0709"
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
            d="M26 44H54V57.2174V60H26V57.2174V44Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 16C27.1634 16 20 23.1634 20 32V33.0494C24.3858 33.4848 27.9381 36.7539 28.8 41H51.2C52.0619 36.7539 55.6142 33.4848 60 33.0494V32C60 23.1634 52.8366 16 44 16H36ZM60 39.1304V39.126C58.2748 39.5701 57 41.1362 57 43V43.6282C58.7615 42.8951 60 41.1574 60 39.1304ZM23 43.6282V43C23 41.1362 21.7252 39.5701 20 39.126V39.1304C20 41.1574 21.2385 42.8951 23 43.6282Z"
            fill="currentColor"
          />
          <path
            d="M12 41.0661C12 38.2682 14.2682 36 17.0661 36H19C22.866 36 26 39.134 26 43V59C26 61.7614 23.7614 64 21 64C18.2386 64 16 61.7614 16 59V52.309C16 50.1455 15.3996 48.0244 14.2657 46.1818L12.7515 43.7212C12.2602 42.9228 12 42.0036 12 41.0661Z"
            fill="currentColor"
          />
          <path
            d="M68 41.0661C68 38.2682 65.7318 36 62.9339 36H61C57.134 36 54 39.134 54 43V59C54 61.7614 56.2386 64 59 64C61.7614 64 64 61.7614 64 59V52.309C64 50.1455 64.6004 48.0244 65.7343 46.1818L67.2485 43.7212C67.7398 42.9228 68 42.0036 68 41.0661Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 44H54V57.2174V60H26V57.2174V44Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 16C27.1634 16 20 23.1634 20 32V36.0709C23.3923 36.5561 26 39.4735 26 43V44H54V43C54 39.4735 56.6077 36.5561 60 36.0709V32C60 23.1634 52.8366 16 44 16H36Z"
            fill="#56CCF2"
          />
          <path
            d="M12 41.0661C12 38.2682 14.2682 36 17.0661 36H19C22.866 36 26 39.134 26 43V59C26 61.7614 23.7614 64 21 64C18.2386 64 16 61.7614 16 59V52.309C16 50.1455 15.3996 48.0244 14.2657 46.1818L12.7515 43.7212C12.2602 42.9228 12 42.0036 12 41.0661Z"
            fill="#9B51E0"
          />
          <path
            d="M68 41.0661C68 38.2682 65.7318 36 62.9339 36H61C57.134 36 54 39.134 54 43V59C54 61.7614 56.2386 64 59 64C61.7614 64 64 61.7614 64 59V52.309C64 50.1455 64.6004 48.0244 65.7343 46.1818L67.2485 43.7212C67.7398 42.9228 68 42.0036 68 41.0661Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M26 44H54V60H26V44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 16C27.1634 16 20 23.1634 20 32V36.0709C23.3923 36.5561 26 39.4735 26 43V44H54V43C54 39.4735 56.6077 36.5561 60 36.0709V32C60 23.1634 52.8366 16 44 16H36Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 41.0661C12 38.2682 14.2682 36 17.0661 36H19C22.866 36 26 39.134 26 43V59C26 61.7614 23.7614 64 21 64C18.2386 64 16 61.7614 16 59V52.309C16 50.1455 15.3996 48.0244 14.2657 46.1818L12.7515 43.7212C12.2602 42.9228 12 42.0036 12 41.0661Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 41.0661C68 38.2682 65.7318 36 62.9339 36H61C57.134 36 54 39.134 54 43V59C54 61.7614 56.2386 64 59 64C61.7614 64 64 61.7614 64 59V52.309C64 50.1455 64.6004 48.0244 65.7343 46.1818L67.2485 43.7212C67.7398 42.9228 68 42.0036 68 41.0661Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 44H54M26 44V43M26 44V60H54V44M54 44V43M26 43C26 39.4735 23.3923 36.5561 20 36.0709V32C20 23.1634 27.1634 16 36 16H44C52.8366 16 60 23.1634 60 32V36.0709C56.6077 36.5561 54 39.4735 54 43M26 43V59C26 61.7614 23.7614 64 21 64C18.2386 64 16 61.7614 16 59V52.309C16 50.1455 15.3996 48.0244 14.2657 46.1818L12.7515 43.7212C12.2602 42.9228 12 42.0036 12 41.0661C12 38.2682 14.2682 36 17.0661 36H19C22.866 36 26 39.134 26 43ZM54 43V59C54 61.7614 56.2386 64 59 64C61.7614 64 64 61.7614 64 59V52.309C64 50.1455 64.6004 48.0244 65.7343 46.1818L67.2485 43.7212C67.7398 42.9228 68 42.0036 68 41.0661C68 38.2682 65.7318 36 62.9339 36H61C57.134 36 54 39.134 54 43Z"
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
            d="M52.6736 62H27.3264C26.2029 64.3649 23.7924 66 21 66C17.134 66 14 62.866 14 59V52.309C14 50.5156 13.5023 48.7574 12.5624 47.23L11.0482 44.7694C10.3629 43.6557 10 42.3737 10 41.0661C10 37.1636 13.1636 34 17.0661 34H18V32C18 22.0589 26.0589 14 36 14H44C53.9411 14 62 22.0589 62 32V34H62.9339C66.8364 34 70 37.1636 70 41.0661C70 42.3737 69.6371 43.6557 68.9518 44.7694L67.4376 47.23C66.4977 48.7574 66 50.5156 66 52.309V59C66 62.866 62.866 66 59 66C56.2076 66 53.7971 64.3649 52.6736 62ZM22 32C22 24.268 28.268 18 36 18H44C51.732 18 58 24.268 58 32V34.5121C56.5027 35.0413 55.1872 35.9556 54.1726 37.1358C54.1049 37.2145 54.0386 37.2943 53.9737 37.3753C52.9348 38.6712 52.2471 40.2607 52.0549 42H27.9451C27.7521 40.2536 27.0597 38.6583 26.0137 37.3596C25.9853 37.3244 25.9567 37.2894 25.9279 37.2547C24.9003 36.0169 23.5472 35.059 22 34.5121V32ZM52 46H28V58H52V46ZM56 59C56 60.6569 57.3431 62 59 62C60.6569 62 62 60.6569 62 59V52.309C62 49.7754 62.7031 47.2914 64.0309 45.1336L65.5452 42.673C65.8425 42.1898 66 41.6335 66 41.0661C66 39.3727 64.6273 38 62.9339 38H61C59.4503 38 58.0653 38.705 57.1482 39.8118C56.5242 40.565 56.1168 41.5042 56.0215 42.5334C56.0073 42.687 56 42.8427 56 43V59ZM24 59C24 60.6569 22.6569 62 21 62C19.3431 62 18 60.6569 18 59V52.309C18 49.7754 17.2969 47.2914 15.9691 45.1336L14.4548 42.673C14.1575 42.1898 14 41.6335 14 41.0661C14 39.3727 15.3727 38 17.0661 38H19C20.5497 38 21.9347 38.705 22.8518 39.8118C23.5689 40.6775 24 41.7888 24 43V59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLoveseat = forwardRef((props, ref) => {
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

CoreLoveseat.displayName = 'CoreLoveseat'

export default CoreLoveseat
