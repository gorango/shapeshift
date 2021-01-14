
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 16L40 16M40 16L56 16M40 16L40 64"
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
            d="M24 13C22.3431 13 21 14.3431 21 16C21 17.6569 22.3431 19 24 19V13ZM56 19C57.6569 19 59 17.6569 59 16C59 14.3431 57.6569 13 56 13V19ZM37 64C37 65.6569 38.3431 67 40 67C41.6569 67 43 65.6569 43 64H37ZM24 19L40 19V13L24 13V19ZM40 19L56 19V13L40 13V19ZM37 16L37 64H43L43 16L37 16Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18V14ZM56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14V18ZM38 64C38 65.1046 38.8954 66 40 66C41.1046 66 42 65.1046 42 64H38ZM24 18L40 18V14L24 14V18ZM40 18H56V14L40 14V18ZM38 16L38 64H42L42 16L38 16Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 16H40M40 16H56M40 16V64"
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
            d="M22 16C22 14.8954 22.8954 14 24 14L56 14C57.1046 14 58 14.8954 58 16C58 17.1046 57.1046 18 56 18L42 18L42 64C42 65.1046 41.1046 66 40 66C38.8954 66 38 65.1046 38 64L38 18L24 18C22.8954 18 22 17.1046 22 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreT = forwardRef((props, ref) => {
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

CoreT.displayName = 'CoreT'

export default CoreT
