
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <rect
            x="6.25"
            y="6.25"
            width="67.5"
            height="67.5"
            fill="#2C0213"
            stroke="#F9488E"
            stroke-width={strokeWidth}
          />
          <path
            d="M30.3611 57.0793C30.3611 57.392 30.3124 57.5 29.9675 57.5H25.3936C25.0975 57.5 25 57.3437 25 57.0793V22.9207C25 22.6042 25.1463 22.5 25.3936 22.5H30.0163C30.2636 22.5 30.3611 22.6042 30.3611 22.8685V57.0793ZM35.5469 44.4932C35.5469 36.8804 40.3274 31.2146 47.8449 31.2146C48.4823 31.2146 48.8272 31.2146 49.4159 31.2668V22.8164C49.4159 22.608 49.5622 22.5 49.712 22.5H54.5576C54.8014 22.5 54.8537 22.6042 54.8537 22.7643V52.5266C54.8537 53.42 54.8537 54.5219 55 55.728C55 55.9365 54.9373 55.9923 54.7422 56.0966C52.1888 57.4107 49.2458 57.5 46.6924 57.5C38.5095 57.5 35.5719 51.7364 35.5469 44.4932ZM49.4159 36.4077C48.9735 36.1992 48.3848 36.0913 47.6463 36.0913C43.8144 36.0913 41.1287 39.2406 41.1287 44.4932C41.1287 50.4792 43.8632 52.8914 47.3014 52.8914C48.0399 52.8914 48.8237 52.7872 49.4124 52.5229L49.4159 36.4077Z"
            fill="#F9488E"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M47.6463 36.0913C48.3848 36.0913 48.9735 36.1992 49.4159 36.4077L49.4124 52.5229C48.8237 52.7872 48.0399 52.8914 47.3014 52.8914C43.8632 52.8914 41.1287 50.4792 41.1287 44.4932C41.1287 39.2406 43.8144 36.0913 47.6463 36.0913Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 5H5V75H75V5ZM29.9675 57.5C30.3124 57.5 30.3611 57.392 30.3611 57.0793V22.8685C30.3611 22.6042 30.2636 22.5 30.0163 22.5H25.3936C25.1463 22.5 25 22.6042 25 22.9207V57.0793C25 57.3437 25.0975 57.5 25.3936 57.5H29.9675ZM47.8449 31.2146C40.3274 31.2146 35.5469 36.8805 35.5469 44.4932C35.5719 51.7364 38.5095 57.5 46.6924 57.5C49.2458 57.5 52.1888 57.4107 54.7422 56.0966C54.9373 55.9923 55 55.9365 55 55.728C54.8537 54.5219 54.8537 53.42 54.8537 52.5266V22.7643C54.8537 22.6042 54.8014 22.5 54.5576 22.5H49.712C49.5622 22.5 49.4159 22.608 49.4159 22.8164V31.2668C48.8272 31.2146 48.4823 31.2146 47.8449 31.2146Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M5 5H75V75H5V5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.3611 57.0793C30.3611 57.392 30.3124 57.5 29.9675 57.5H25.3936C25.0975 57.5 25 57.3437 25 57.0793V22.9207C25 22.6042 25.1463 22.5 25.3936 22.5H30.0163C30.2636 22.5 30.3611 22.6042 30.3611 22.8685V57.0793ZM35.5469 44.4932C35.5469 36.8804 40.3274 31.2146 47.8449 31.2146C48.4823 31.2146 48.8272 31.2146 49.4159 31.2668V22.8164C49.4159 22.608 49.5622 22.5 49.712 22.5H54.5576C54.8014 22.5 54.8537 22.6042 54.8537 22.7643V52.5266C54.8537 53.42 54.8537 54.5219 55 55.728C55 55.9365 54.9373 55.9923 54.7422 56.0966C52.1888 57.4107 49.2458 57.5 46.6924 57.5C38.5095 57.5 35.5719 51.7364 35.5469 44.4932ZM49.4159 36.4077C48.9735 36.1992 48.3848 36.0913 47.6463 36.0913C43.8144 36.0913 41.1287 39.2406 41.1287 44.4932C41.1287 50.4792 43.8632 52.8914 47.3014 52.8914C48.0399 52.8914 48.8237 52.7872 49.4124 52.5229L49.4159 36.4077Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsAdobeIndesign = forwardRef((props, ref) => {
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

BrandsAdobeIndesign.displayName = 'BrandsAdobeIndesign'

export default BrandsAdobeIndesign
