
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#F2F2F2"
          />
          <path
            d="M120 0H0V8H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M120 36H0V44H120V36Z"
            fill="#EB5757"
          />
          <path
            d="M120 18H0V26H120V18Z"
            fill="#EB5757"
          />
          <path
            d="M120 54H0V62H120V54Z"
            fill="#EB5757"
          />
          <path
            d="M120 72H0V80H120V72Z"
            fill="#EB5757"
          />
          <path
            d="M62 0H0V44H62V0Z"
            fill="#2F80ED"
          />
          <path
            d="M10 3L11.1226 6.45492H14.7553L11.8164 8.59017L12.9389 12.0451L10 9.90983L7.06107 12.0451L8.18364 8.59017L5.24472 6.45492H8.87743L10 3Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 3L25.1226 6.45492H28.7553L25.8164 8.59017L26.9389 12.0451L24 9.90983L21.0611 12.0451L22.1836 8.59017L19.2447 6.45492H22.8774L24 3Z"
            fill="#F2F2F2"
          />
          <path
            d="M38 3L39.1226 6.45492H42.7553L39.8164 8.59017L40.9389 12.0451L38 9.90983L35.0611 12.0451L36.1836 8.59017L33.2447 6.45492H36.8774L38 3Z"
            fill="#F2F2F2"
          />
          <path
            d="M52 3L53.1226 6.45492H56.7553L53.8164 8.59017L54.9389 12.0451L52 9.90983L49.0611 12.0451L50.1836 8.59017L47.2447 6.45492H50.8774L52 3Z"
            fill="#F2F2F2"
          />
          <path
            d="M10 17L11.1226 20.4549H14.7553L11.8164 22.5902L12.9389 26.0451L10 23.9098L7.06107 26.0451L8.18364 22.5902L5.24472 20.4549H8.87743L10 17Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 17L25.1226 20.4549H28.7553L25.8164 22.5902L26.9389 26.0451L24 23.9098L21.0611 26.0451L22.1836 22.5902L19.2447 20.4549H22.8774L24 17Z"
            fill="#F2F2F2"
          />
          <path
            d="M38 17L39.1226 20.4549H42.7553L39.8164 22.5902L40.9389 26.0451L38 23.9098L35.0611 26.0451L36.1836 22.5902L33.2447 20.4549H36.8774L38 17Z"
            fill="#F2F2F2"
          />
          <path
            d="M52 17L53.1226 20.4549H56.7553L53.8164 22.5902L54.9389 26.0451L52 23.9098L49.0611 26.0451L50.1836 22.5902L47.2447 20.4549H50.8774L52 17Z"
            fill="#F2F2F2"
          />
          <path
            d="M10 31L11.1226 34.4549H14.7553L11.8164 36.5902L12.9389 40.0451L10 37.9098L7.06107 40.0451L8.18364 36.5902L5.24472 34.4549H8.87743L10 31Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 31L25.1226 34.4549H28.7553L25.8164 36.5902L26.9389 40.0451L24 37.9098L21.0611 40.0451L22.1836 36.5902L19.2447 34.4549H22.8774L24 31Z"
            fill="#F2F2F2"
          />
          <path
            d="M38 31L39.1226 34.4549H42.7553L39.8164 36.5902L40.9389 40.0451L38 37.9098L35.0611 40.0451L36.1836 36.5902L33.2447 34.4549H36.8774L38 31Z"
            fill="#F2F2F2"
          />
          <path
            d="M52 31L53.1226 34.4549H56.7553L53.8164 36.5902L54.9389 40.0451L52 37.9098L49.0611 40.0451L50.1836 36.5902L47.2447 34.4549H50.8774L52 31Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M100 0H-20V80H100V0Z" fill="#F2F2F2"/><path d="M100 0H-20V8H100V0Z" fill="#EB5757"/><path d="M100 36H-20V44H100V36Z" fill="#EB5757"/><path d="M100 18H-20V26H100V18Z" fill="#EB5757"/><path d="M100 54H-20V62H100V54Z" fill="#EB5757"/><path d="M100 72H-20V80H100V72Z" fill="#EB5757"/><path d="M42 0H-20V44H42V0Z" fill="#2F80ED"/><path d="M6 3L7.12257 6.45492H10.7553L7.81636 8.59017L8.93893 12.0451L6 9.90983L3.06107 12.0451L4.18364 8.59017L1.24472 6.45492H4.87743L6 3Z" fill="#F2F2F2"/><path d="M20 3L21.1226 6.45492H24.7553L21.8164 8.59017L22.9389 12.0451L20 9.90983L17.0611 12.0451L18.1836 8.59017L15.2447 6.45492H18.8774L20 3Z" fill="#F2F2F2"/><path d="M34 3L35.1226 6.45492H38.7553L35.8164 8.59017L36.9389 12.0451L34 9.90983L31.0611 12.0451L32.1836 8.59017L29.2447 6.45492H32.8774L34 3Z" fill="#F2F2F2"/><path d="M6 17L7.12257 20.4549H10.7553L7.81636 22.5902L8.93893 26.0451L6 23.9098L3.06107 26.0451L4.18364 22.5902L1.24472 20.4549H4.87743L6 17Z" fill="#F2F2F2"/><path d="M20 17L21.1226 20.4549H24.7553L21.8164 22.5902L22.9389 26.0451L20 23.9098L17.0611 26.0451L18.1836 22.5902L15.2447 20.4549H18.8774L20 17Z" fill="#F2F2F2"/><path d="M34 17L35.1226 20.4549H38.7553L35.8164 22.5902L36.9389 26.0451L34 23.9098L31.0611 26.0451L32.1836 22.5902L29.2447 20.4549H32.8774L34 17Z" fill="#F2F2F2"/><path d="M6 31L7.12257 34.4549H10.7553L7.81636 36.5902L8.93893 40.0451L6 37.9098L3.06107 40.0451L4.18364 36.5902L1.24472 34.4549H4.87743L6 31Z" fill="#F2F2F2"/><path d="M20 31L21.1226 34.4549H24.7553L21.8164 36.5902L22.9389 40.0451L20 37.9098L17.0611 40.0451L18.1836 36.5902L15.2447 34.4549H18.8774L20 31Z" fill="#F2F2F2"/><path d="M34 31L35.1226 34.4549H38.7553L35.8164 36.5902L36.9389 40.0451L34 37.9098L31.0611 40.0451L32.1836 36.5902L29.2447 34.4549H32.8774L34 31Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M100 0H-20V80H100V0Z" fill="#F2F2F2"/><path d="M100 0H-20V8H100V0Z" fill="#EB5757"/><path d="M100 36H-20V44H100V36Z" fill="#EB5757"/><path d="M100 18H-20V26H100V18Z" fill="#EB5757"/><path d="M100 54H-20V62H100V54Z" fill="#EB5757"/><path d="M100 72H-20V80H100V72Z" fill="#EB5757"/><path d="M42 0H-20V44H42V0Z" fill="#2F80ED"/><path d="M6 3L7.12257 6.45492H10.7553L7.81636 8.59017L8.93893 12.0451L6 9.90983L3.06107 12.0451L4.18364 8.59017L1.24472 6.45492H4.87743L6 3Z" fill="#F2F2F2"/><path d="M20 3L21.1226 6.45492H24.7553L21.8164 8.59017L22.9389 12.0451L20 9.90983L17.0611 12.0451L18.1836 8.59017L15.2447 6.45492H18.8774L20 3Z" fill="#F2F2F2"/><path d="M34 3L35.1226 6.45492H38.7553L35.8164 8.59017L36.9389 12.0451L34 9.90983L31.0611 12.0451L32.1836 8.59017L29.2447 6.45492H32.8774L34 3Z" fill="#F2F2F2"/><path d="M6 17L7.12257 20.4549H10.7553L7.81636 22.5902L8.93893 26.0451L6 23.9098L3.06107 26.0451L4.18364 22.5902L1.24472 20.4549H4.87743L6 17Z" fill="#F2F2F2"/><path d="M20 17L21.1226 20.4549H24.7553L21.8164 22.5902L22.9389 26.0451L20 23.9098L17.0611 26.0451L18.1836 22.5902L15.2447 20.4549H18.8774L20 17Z" fill="#F2F2F2"/><path d="M34 17L35.1226 20.4549H38.7553L35.8164 22.5902L36.9389 26.0451L34 23.9098L31.0611 26.0451L32.1836 22.5902L29.2447 20.4549H32.8774L34 17Z" fill="#F2F2F2"/><path d="M6 31L7.12257 34.4549H10.7553L7.81636 36.5902L8.93893 40.0451L6 37.9098L3.06107 40.0451L4.18364 36.5902L1.24472 34.4549H4.87743L6 31Z" fill="#F2F2F2"/><path d="M20 31L21.1226 34.4549H24.7553L21.8164 36.5902L22.9389 40.0451L20 37.9098L17.0611 40.0451L18.1836 36.5902L15.2447 34.4549H18.8774L20 31Z" fill="#F2F2F2"/><path d="M34 31L35.1226 34.4549H38.7553L35.8164 36.5902L36.9389 40.0451L34 37.9098L31.0611 40.0451L32.1836 36.5902L29.2447 34.4549H32.8774L34 31Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsUnitedStatesOfAmerica = forwardRef((props, ref) => {
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

FlagsUnitedStatesOfAmerica.displayName = 'FlagsUnitedStatesOfAmerica'

export default FlagsUnitedStatesOfAmerica
