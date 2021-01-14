
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0002 24.3617C31.3634 24.3617 24.3619 31.3632 24.3619 40C24.3619 42.7399 25.0665 45.3152 26.3043 47.5547L10.7989 20.6985C10.7989 20.6985 10.7989 20.6985 10.7989 20.6986L10.7988 20.6985C13.6773 16.3524 17.5 12.6863 21.9744 9.99265L23.0824 9.35299C28.0939 6.58059 33.8578 5.00173 39.9901 5H40.0002H40.0102C53.7153 5.00386 65.5792 12.8849 71.3207 24.3617H40.0002Z"
            fill="#DE5347"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0164 24.3618H71.3205L71.3205 24.3618C73.675 29.0683 74.9998 34.3794 74.9998 40.0001C74.9998 59.3301 59.3298 75.0001 39.9998 75.0001H37.8501L37.8864 74.9374L53.4077 48.0538L53.693 47.5595C54.9325 45.3189 55.6381 42.7419 55.6381 40.0001C55.6381 31.3688 48.6456 24.3708 40.0164 24.3618Z"
            fill="#FFCD42"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 55.6383C45.6913 55.6383 50.6725 52.5981 53.4081 48.0531L53.4078 48.0538L37.8866 74.9373C32.5399 74.6187 27.5165 73.1 23.0819 70.6469C22.7085 70.4403 22.3394 70.2272 21.9746 70.0075C11.8035 63.8846 5 52.7369 5 40C5 32.8666 7.13411 26.2315 10.7987 20.6985L26.3067 47.5591L26.5925 48.054C29.3283 52.5985 34.3092 55.6383 40 55.6383Z"
            fill="#1CA261"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9999 52.6595C46.9916 52.6595 52.6595 46.9916 52.6595 39.9999C52.6595 33.0082 46.9916 27.3403 39.9999 27.3403C33.0082 27.3403 27.3403 33.0082 27.3403 39.9999C27.3403 46.9916 33.0082 52.6595 39.9999 52.6595Z"
            fill="#4B8BF5"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M24.3806 39.2231C24.7855 30.9472 31.6236 24.3617 40 24.3617H71.3205C65.579 12.8849 53.715 5.00386 40.0099 5H39.9898C33.8575 5.00173 28.0937 6.58059 23.0821 9.35299L21.9742 9.99265C18.2855 12.2133 15.0397 15.0948 12.4008 18.4734L24.3806 39.2231Z"
            fill="currentColor"
          />
          <path
            d="M48.4853 26.8617C52.7897 29.6475 55.6383 34.4911 55.6383 40C55.6383 42.7418 54.9326 45.3188 53.6931 47.5594L37.8866 74.9373L37.8502 75H40C59.3299 75 75 59.33 75 40C75 35.3534 74.0946 30.9184 72.4505 26.8617H48.4853Z"
            fill="currentColor"
          />
          <path
            d="M47.1343 53.9199C44.9952 55.0184 42.57 55.6383 40 55.6383C34.3092 55.6383 29.3283 52.5985 26.5925 48.054L10.7987 20.6985C7.13411 26.2315 5 32.8666 5 40C5 52.7369 11.8035 63.8846 21.9746 70.0075C22.3394 70.2272 22.7085 70.4403 23.0819 70.6469C26.7526 72.6775 30.8267 74.0678 35.1536 74.6672L35.7236 73.6838L47.1343 53.9199Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 52.6596C46.9917 52.6596 52.6596 46.9917 52.6596 40C52.6596 33.0083 46.9917 27.3404 40 27.3404C33.0084 27.3404 27.3405 33.0083 27.3405 40C27.3405 46.9917 33.0084 52.6596 40 52.6596Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M10.7987 20.6985L26.3041 47.5547C25.0663 45.3152 24.3617 42.7399 24.3617 40C24.3617 31.3632 31.3631 24.3617 40 24.3617H71.3205M10.7987 20.6985C10.7987 20.6985 10.7987 20.6985 10.7987 20.6985ZM10.7987 20.6985C13.6771 16.3524 17.4997 12.6863 21.9742 9.99265L23.0821 9.35299C28.0937 6.58059 33.8575 5.00173 39.9898 5H40.0099C53.715 5.00386 65.579 12.8849 71.3205 24.3617M10.7987 20.6985C7.13411 26.2315 5 32.8666 5 40C5 52.7369 11.8035 63.8846 21.9746 70.0075C22.3394 70.2272 22.7085 70.4403 23.0819 70.6469C27.5165 73.1 32.5399 74.6187 37.8866 74.9373M10.7987 20.6985L26.5925 48.054C29.3283 52.5985 34.3092 55.6383 40 55.6383C45.6913 55.6383 50.6721 52.5987 53.4078 48.0537M71.3205 24.3617H40.0165C48.6457 24.3706 55.6383 31.3687 55.6383 40C55.6383 42.7418 54.9326 45.3188 53.6931 47.5594L53.4078 48.0537M71.3205 24.3617C73.675 29.0682 75 34.3793 75 40C75 59.33 59.3299 75 40 75H37.8502L37.8866 74.9373M37.8866 74.9373L53.4078 48.0537"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsChrome = forwardRef((props, ref) => {
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

BrandsChrome.displayName = 'BrandsChrome'

export default BrandsChrome
