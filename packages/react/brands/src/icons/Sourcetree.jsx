
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M67.4604 32.7541C67.4604 17.4259 55.1642 5.00003 39.996 5.00003C26.477 4.98076 14.9562 14.9096 12.8407 28.4028C10.7252 41.896 18.6447 54.9373 31.5075 59.1419V73.0482C31.5075 74.1262 32.3722 75 33.4389 75H46.4758C47.5425 75 48.4072 74.1262 48.4072 73.0482V59.1517C59.7519 55.4602 67.4476 44.7981 67.4604 32.7541ZM39.996 42.1323C34.8679 42.1323 30.7108 37.9314 30.7108 32.7492C30.7108 27.5671 34.8679 23.3661 39.996 23.3661C45.124 23.3661 49.2812 27.5671 49.2812 32.7492C49.2812 37.9314 45.124 42.1323 39.996 42.1323Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9961 5.00003V23.3759C45.1242 23.3759 49.2813 27.5769 49.2813 32.759C49.2813 37.9411 45.1242 42.1421 39.9961 42.1421C42.2474 42.1421 44.4065 43.0458 45.9984 44.6545C47.5903 46.2632 48.4846 48.4451 48.4846 50.7201V59.1615C61.3521 54.9561 69.2751 41.9106 67.1596 28.4126C65.0441 14.9145 53.5198 4.98155 39.9961 5.00003Z"
            fill="url(#paint0_lineargVaD)"
          />
          <defs><linearGradient id="paint0_lineargVaD" x1="53.7283" y1="54.1357" x2="53.7283" y2="24.6543" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M67.4604 32.7541C67.4604 17.4259 55.1642 5.00003 39.996 5.00003C26.477 4.98076 14.9562 14.9096 12.8407 28.4028C10.7252 41.896 18.6447 54.9373 31.5075 59.1419V73.0482C31.5075 74.1262 32.3722 75 33.4389 75H46.4758C47.5425 75 48.4072 74.1262 48.4072 73.0482V59.1517C59.7519 55.4602 67.4476 44.7981 67.4604 32.7541ZM39.996 42.1323C34.8679 42.1323 30.7108 37.9314 30.7108 32.7492C30.7108 27.5671 34.8679 23.3661 39.996 23.3661C45.124 23.3661 49.2812 27.5671 49.2812 32.7492C49.2812 37.9314 45.124 42.1323 39.996 42.1323Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.996 5.00003L39.9957 23.3759C45.1238 23.3759 49.2809 27.5768 49.2809 32.759C49.2809 37.9411 45.1238 42.1421 39.9957 42.1421C42.247 42.1421 44.4061 43.0458 45.998 44.6545C47.5899 46.2632 48.4842 48.445 48.4842 50.7201V59.1614C61.3517 54.9561 69.2747 41.9106 67.1593 28.4125C65.0438 14.9145 53.5197 4.98155 39.996 5.00003Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M39.996 5.00003C55.1642 5.00003 67.4604 17.4259 67.4604 32.7541C67.4476 44.7981 59.7519 55.4602 48.4072 59.1517V73.0482C48.4072 74.1262 47.5425 75 46.4758 75H33.4389C32.3722 75 31.5075 74.1262 31.5075 73.0482V59.1419C18.6447 54.9373 10.7252 41.896 12.8407 28.4028C14.9562 14.9096 26.477 4.98076 39.996 5.00003ZM39.996 5.00003L39.9957 23.3759C45.1238 23.3759 49.2809 27.5768 49.2809 32.759C49.2809 37.9411 45.1238 42.1421 39.9957 42.1421C42.247 42.1421 44.4061 43.0458 45.998 44.6545C47.5899 46.2632 48.4842 48.445 48.4842 50.7201V59.1614C61.3517 54.9561 69.2748 41.9106 67.1593 28.4125C65.0438 14.9145 53.5197 4.98155 39.996 5.00003ZM39.996 42.1323C34.8679 42.1323 30.7108 37.9314 30.7108 32.7492C30.7108 27.5671 34.8679 23.3661 39.996 23.3661C45.124 23.3661 49.2812 27.5671 49.2812 32.7492C49.2812 37.9314 45.124 42.1323 39.996 42.1323Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsSourcetree = forwardRef((props, ref) => {
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

BrandsSourcetree.displayName = 'BrandsSourcetree'

export default BrandsSourcetree