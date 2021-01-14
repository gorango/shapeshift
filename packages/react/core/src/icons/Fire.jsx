
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M21.2993 27.0826L29.1526 38.05C29.1759 38.0824 29.2242 38.0824 29.2474 38.05L47.9007 12L59.2571 27.8595C62.3415 32.167 64 37.332 64 42.6298V44C64 57.2548 53.2548 68 40 68C26.7452 68 16 57.2548 16 44V42.6298C16 37.332 17.6585 32.167 20.7429 27.8595L21.2993 27.0826Z"
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
            d="M29.1526 38.05L21.2993 27.0826L20.7429 27.8595C17.6585 32.167 16 37.332 16 42.6298V44C16 57.2548 26.7452 68 40 68C53.2548 68 64 57.2548 64 44V42.6298C64 37.332 62.3415 32.167 59.2571 27.8595L47.9007 12L29.2474 38.05C29.2242 38.0824 29.1759 38.0824 29.1526 38.05ZM29.1526 48.8232L23.6285 41.1086C23.3455 42.308 23.1999 43.5433 23.1999 44.791C23.1999 53.6465 30.3787 60.8253 39.2342 60.8253H40.7657C49.6211 60.8253 56.7999 53.6465 56.7999 44.791C56.7999 41.2188 55.607 37.7489 53.4105 34.9318L46.0001 25.4276L29.2474 48.8232C29.2242 48.8557 29.1759 48.8557 29.1526 48.8232Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2993 27.0826L29.1526 38.05C29.1759 38.0824 29.2242 38.0824 29.2474 38.05L47.9007 12L59.2571 27.8595C62.3415 32.167 64 37.332 64 42.6298V44C64 57.2548 53.2548 68 40 68C26.7452 68 16 57.2548 16 44V42.6298C16 37.332 17.6585 32.167 20.7429 27.8595L21.2993 27.0826Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6285 41.1088L29.1526 48.8233C29.1759 48.8558 29.2242 48.8558 29.2474 48.8233L46.0001 25.4277L53.4105 34.9319C55.6071 37.749 56.7999 41.2189 56.7999 44.7912C56.7999 53.6466 49.6212 60.8254 40.7657 60.8254H39.2342C30.3787 60.8254 23.2 53.6466 23.2 44.7912C23.2 43.5434 23.3455 42.3081 23.6285 41.1088Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M21.2993 27.0826L29.1526 38.05C29.1759 38.0824 29.2242 38.0824 29.2474 38.05L47.9007 12L59.2571 27.8595C62.3415 32.167 64 37.332 64 42.6298V44C64 57.2548 53.2548 68 40 68C26.7452 68 16 57.2548 16 44V42.6298C16 37.332 17.6585 32.167 20.7429 27.8595L21.2993 27.0826Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M30.8736 39.2143L47.9007 15.4353L57.631 29.0239C60.4722 32.9918 62 37.7496 62 42.6298V44C62 56.1502 52.1503 66 40 66C27.8497 66 18 56.1502 18 44V42.6298C18 38.373 19.1624 34.2093 21.345 30.5817L27.5265 39.2143M30.8736 39.2143C30.8736 39.2143 30.8735 39.2143 30.8736 39.2143ZM30.8736 39.2143C30.0525 40.3609 28.3475 40.361 27.5265 39.2143M27.5265 39.2143C27.5265 39.2144 27.5265 39.2143 27.5265 39.2143ZM49.5268 10.8356C49.1513 10.3111 48.5458 10 47.9007 10C47.2556 10 46.6502 10.3111 46.2746 10.8356L29.2 34.6809L22.9254 25.9182C22.5498 25.3937 21.9444 25.0826 21.2993 25.0826C20.6542 25.0826 20.0487 25.3937 19.6732 25.9182L19.1168 26.6952C15.7893 31.3422 14 36.9143 14 42.6298V44C14 58.3594 25.6406 70 40 70C54.3594 70 66 58.3594 66 44V42.6298C66 36.9143 64.2107 31.3422 60.8832 26.6952L49.5268 10.8356Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
        </>
      )
  }
}

const CoreFire = forwardRef((props, ref) => {
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

CoreFire.displayName = 'CoreFire'

export default CoreFire
