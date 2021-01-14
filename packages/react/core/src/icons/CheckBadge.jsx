
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M49.0936 18.0465C52.6757 16.3667 57.0758 17.0064 60.0348 19.9654C62.9937 22.9243 63.6335 27.3244 61.9537 30.9066C65.6744 32.2518 68.3334 35.8155 68.3334 40.0001C68.3334 44.1847 65.6744 47.7484 61.9537 49.0936C63.6335 52.6757 62.9937 57.0758 60.0348 60.0348C57.0758 62.9937 52.6757 63.6335 49.0936 61.9537C47.7484 65.6745 44.1847 68.3334 40.0001 68.3334C35.8155 68.3334 32.2518 65.6745 30.9066 61.9537C27.3244 63.6335 22.9243 62.9937 19.9654 60.0348C17.0064 57.0758 16.3667 52.6757 18.0465 49.0936C14.3257 47.7484 11.6667 44.1847 11.6667 40.0001C11.6667 35.8155 14.3257 32.2518 18.0465 30.9066C16.3667 27.3244 17.0064 22.9243 19.9654 19.9654C22.9243 17.0064 27.3244 16.3667 30.9066 18.0465C32.2518 14.3257 35.8155 11.6667 40.0001 11.6667C44.1847 11.6667 47.7484 14.3257 49.0936 18.0465Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.2307 41.1819L32.6693 49.7006C33.4467 50.4853 34.707 50.4853 35.4844 49.7006L53.7692 31.2424"
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
            d="M59.7014 19.632C56.7425 16.6731 52.3424 16.0333 48.7602 17.7131C47.4151 13.9924 43.8513 11.3334 39.6667 11.3334C35.4822 11.3334 31.9184 13.9924 30.5733 17.7131C26.9911 16.0333 22.591 16.6731 19.6321 19.632C16.6731 22.591 16.0333 26.9911 17.7131 30.5733C13.9924 31.9184 11.3334 35.4822 11.3334 39.6667C11.3334 43.8513 13.9924 47.4151 17.7131 48.7602C16.0333 52.3424 16.6731 56.7425 19.6321 59.7014C22.591 62.6604 26.9911 63.3002 30.5733 61.6203C31.9184 65.3411 35.4822 68.0001 39.6667 68.0001C43.8513 68.0001 47.4151 65.3411 48.7602 61.6203C52.3424 63.3002 56.7425 62.6604 59.7014 59.7014C62.6604 56.7425 63.3002 52.3424 61.6203 48.7602C65.3411 47.4151 68.0001 43.8513 68.0001 39.6667C68.0001 35.4822 65.3411 31.9184 61.6203 30.5733C63.3002 26.9911 62.6604 22.591 59.7014 19.632ZM55.5472 33.0404C56.7133 31.8634 56.7133 29.9549 55.5472 28.7778C54.3812 27.6007 52.4907 27.6007 51.3247 28.7778L33.7437 46.5255L26.0088 38.7173C24.8428 37.5403 22.9522 37.5403 21.7862 38.7173C20.6202 39.8944 20.6202 41.8029 21.7862 42.98L30.2248 51.4986C32.1682 53.4604 35.3191 53.4604 37.2625 51.4986L55.5472 33.0404Z"
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
            d="M49.0936 18.0465C52.6757 16.3667 57.0758 17.0064 60.0348 19.9654C62.9937 22.9243 63.6335 27.3244 61.9537 30.9066C65.6745 32.2518 68.3334 35.8155 68.3334 40.0001C68.3334 44.1847 65.6745 47.7484 61.9537 49.0936C63.6335 52.6757 62.9937 57.0758 60.0348 60.0348C57.0758 62.9937 52.6757 63.6335 49.0936 61.9537C47.7484 65.6745 44.1847 68.3334 40.0001 68.3334C35.8155 68.3334 32.2518 65.6745 30.9066 61.9537C27.3244 63.6335 22.9243 62.9937 19.9654 60.0348C17.0064 57.0758 16.3667 52.6757 18.0465 49.0936C14.3257 47.7484 11.6667 44.1847 11.6667 40.0001C11.6667 35.8155 14.3257 32.2518 18.0465 30.9066C16.3667 27.3244 17.0064 22.9243 19.9654 19.9654C22.9243 17.0064 27.3244 16.3667 30.9066 18.0465C32.2518 14.3257 35.8155 11.6667 40.0001 11.6667C44.1847 11.6667 47.7484 14.3257 49.0936 18.0465Z"
            fill="#F2C94C"
          />
          <path
            d="M24.2308 41.182L32.6694 49.7006C33.4468 50.4854 34.7071 50.4854 35.4845 49.7006L53.7692 31.2425"
            stroke="#EB5757"
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
            d="M49.0936 18.0465C52.6757 16.3667 57.0758 17.0064 60.0348 19.9654C62.9937 22.9243 63.6335 27.3244 61.9537 30.9066C65.6744 32.2518 68.3334 35.8155 68.3334 40.0001C68.3334 44.1847 65.6744 47.7484 61.9537 49.0936C63.6335 52.6757 62.9937 57.0758 60.0348 60.0348C57.0758 62.9937 52.6757 63.6335 49.0936 61.9537C47.7484 65.6745 44.1847 68.3334 40.0001 68.3334C35.8155 68.3334 32.2518 65.6745 30.9066 61.9537C27.3244 63.6335 22.9243 62.9937 19.9654 60.0348C17.0064 57.0758 16.3667 52.6757 18.0465 49.0936C14.3257 47.7484 11.6667 44.1847 11.6667 40.0001C11.6667 35.8155 14.3257 32.2518 18.0465 30.9066C16.3667 27.3244 17.0064 22.9243 19.9654 19.9654C22.9243 17.0064 27.3244 16.3667 30.9066 18.0465C32.2518 14.3257 35.8155 11.6667 40.0001 11.6667C44.1847 11.6667 47.7484 14.3257 49.0936 18.0465Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.2308 41.182L32.6695 49.7006C33.4468 50.4854 34.7072 50.4854 35.4845 49.7006L53.7693 31.2425M60.0348 19.9654C57.0758 17.0064 52.6757 16.3667 49.0936 18.0465C47.7484 14.3257 44.1847 11.6667 40.0001 11.6667C35.8155 11.6667 32.2518 14.3257 30.9066 18.0465C27.3244 16.3667 22.9243 17.0064 19.9654 19.9654C17.0064 22.9243 16.3667 27.3244 18.0465 30.9066C14.3257 32.2518 11.6667 35.8155 11.6667 40.0001C11.6667 44.1847 14.3257 47.7484 18.0465 49.0936C16.3667 52.6757 17.0064 57.0758 19.9654 60.0348C22.9243 62.9937 27.3244 63.6335 30.9066 61.9537C32.2518 65.6745 35.8155 68.3334 40.0001 68.3334C44.1847 68.3334 47.7484 65.6745 49.0936 61.9537C52.6757 63.6335 57.0758 62.9937 60.0348 60.0348C62.9937 57.0758 63.6335 52.6757 61.9537 49.0936C65.6744 47.7484 68.3334 44.1847 68.3334 40.0001C68.3334 35.8155 65.6744 32.2518 61.9537 30.9066C63.6335 27.3244 62.9937 22.9243 60.0348 19.9654Z"
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
            d="M55.1768 32.6632C55.9542 31.8785 55.9542 30.6062 55.1768 29.8215C54.3995 29.0368 53.1391 29.0368 52.3618 29.8215L34.077 48.2796L25.6384 39.761C24.861 38.9763 23.6007 38.9763 22.8233 39.761C22.046 40.5457 22.046 41.818 22.8233 42.6027L31.2619 51.1214C32.8166 52.6908 35.3373 52.6908 36.892 51.1214L55.1768 32.6632Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0001 9.66663C35.6617 9.66663 31.8798 12.0339 29.8698 15.5434C25.967 14.4831 21.6189 15.4834 18.5512 18.5511C15.4835 21.6187 14.4832 25.9669 15.5435 29.8697C12.034 31.8797 9.66675 35.6616 9.66675 40C9.66675 44.3383 12.034 48.1202 15.5435 50.1302C14.4832 54.0331 15.4835 58.3812 18.5512 61.4489C21.6189 64.5166 25.967 65.5168 29.8698 64.4566C31.8798 67.966 35.6617 70.3333 40.0001 70.3333C44.3385 70.3333 48.1203 67.966 50.1303 64.4566C54.0332 65.5168 58.3813 64.5166 61.449 61.4489C64.5167 58.3812 65.517 54.0331 64.4567 50.1302C67.9661 48.1202 70.3334 44.3383 70.3334 40C70.3334 35.6616 67.9661 31.8797 64.4567 29.8697C65.517 25.9669 64.5167 21.6187 61.449 18.5511C58.3813 15.4834 54.0332 14.4831 50.1303 15.5434C48.1203 12.0339 44.3385 9.66663 40.0001 9.66663ZM32.7875 18.7263C33.8553 15.7725 36.6844 13.6666 40.0001 13.6666C43.3158 13.6666 46.1448 15.7725 47.2127 18.7263L47.958 20.7879L49.9427 19.8571C52.7865 18.5236 56.276 19.0349 58.6206 21.3795C60.9651 23.724 61.4765 27.2136 60.1429 30.0573L59.2122 32.042L61.2737 32.7873C64.2275 33.8552 66.3334 36.6843 66.3334 40C66.3334 43.3156 64.2275 46.1447 61.2737 47.2126L59.2122 47.9579L60.1429 49.9426C61.4765 52.7864 60.9651 56.2759 58.6206 58.6204C56.276 60.965 52.7865 61.4763 49.9427 60.1428L47.958 59.2121L47.2127 61.2736C46.1448 64.2274 43.3158 66.3333 40.0001 66.3333C36.6844 66.3333 33.8553 64.2274 32.7875 61.2736L32.0422 59.2121L30.0575 60.1428C27.2137 61.4763 23.7241 60.965 21.3796 58.6204C19.0351 56.2759 18.5237 52.7864 19.8573 49.9426L20.788 47.9579L18.7265 47.2126C15.7726 46.1447 13.6667 43.3156 13.6667 40C13.6667 36.6843 15.7726 33.8552 18.7265 32.7873L20.788 32.042L19.8573 30.0573C18.5237 27.2136 19.0351 23.724 21.3796 21.3795C23.7241 19.0349 27.2137 18.5236 30.0575 19.8571L32.0422 20.7879L32.7875 18.7263Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCheckBadge = forwardRef((props, ref) => {
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

CoreCheckBadge.displayName = 'CoreCheckBadge'

export default CoreCheckBadge
