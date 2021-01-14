
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M66.782 66.4336L54.3198 53.9714"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.8711 37H24.8711"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.8711 49L36.8711 25"
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
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724ZM52.0887 55.9828L64.6608 68.5548C65.8324 69.7264 67.7318 69.7264 68.9034 68.5548C70.075 67.3833 70.075 65.4838 68.9034 64.3122L56.288 51.6967C55.0707 53.2939 53.6597 54.7338 52.0887 55.9828ZM39.8711 25C39.8711 23.3431 38.528 22 36.8711 22C35.2143 22 33.8711 23.3431 33.8711 25V34H24.8711C23.2143 34 21.8711 35.3431 21.8711 37C21.8711 38.6569 23.2143 40 24.8711 40H33.8711V49C33.8711 50.6568 35.2143 52 36.8711 52C38.528 52 39.8711 50.6568 39.8711 49V40H48.8711C50.528 40 51.8711 38.6569 51.8711 37C51.8711 35.3431 50.528 34 48.8711 34H39.8711V25Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M65.3678 67.8478C66.1488 68.6288 67.4151 68.6288 68.1962 67.8478C68.9772 67.0667 68.9772 65.8004 68.1962 65.0194L65.3678 67.8478ZM55.734 52.5572C54.953 51.7762 53.6867 51.7762 52.9056 52.5572C52.1246 53.3383 52.1246 54.6046 52.9056 55.3856L55.734 52.5572ZM68.1962 65.0194L55.734 52.5572L52.9056 55.3856L65.3678 67.8478L68.1962 65.0194Z"
            fill="#F2994A"
          />
          <path
            d="M13.5776 30.724C15.8198 22.3559 22.356 15.8197 30.7241 13.5775C39.0921 11.3353 48.0207 13.7277 54.1465 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1803 51.6441 51.6441 58.1802 43.2761 60.4225C34.9081 62.6647 25.9795 60.2723 19.8537 54.1464C13.7278 48.0206 11.3354 39.092 13.5776 30.724Z"
            fill="#56CCF2"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.8711 39C49.9757 39 50.8711 38.1046 50.8711 37C50.8711 35.8954 49.9757 35 48.8711 35V39ZM24.8711 35C23.7665 35 22.8711 35.8954 22.8711 37C22.8711 38.1046 23.7665 39 24.8711 39L24.8711 35ZM36.8711 38.0909H38.8711H36.8711ZM34.8711 49C34.8711 50.1046 35.7665 51 36.8711 51C37.9757 51 38.8711 50.1046 38.8711 49H34.8711ZM38.8711 25C38.8711 23.8954 37.9757 23 36.8711 23C35.7665 23 34.8711 23.8954 34.8711 25L38.8711 25ZM36.8711 35.9091H34.8711H36.8711ZM37.962 39H48.8711V35H37.962V39ZM24.8711 39H35.7802V35H24.8711L24.8711 39ZM35.7802 39H37.962V35H35.7802V39ZM34.8711 38.0909V49H38.8711V38.0909H34.8711ZM34.8711 25L34.8711 35.9091H38.8711L38.8711 25L34.8711 25ZM34.8711 35.9091V38.0909H38.8711V35.9091H34.8711Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66.7821 66.4335L54.3199 53.9714M48.8711 37H24.8711M36.8711 49L36.8711 25M19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464Z"
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
            d="M22.8712 37C22.8712 35.8955 23.7666 35 24.8712 35H34.8712V25C34.8712 23.8955 35.7666 23 36.8712 23C37.9757 23 38.8712 23.8955 38.8712 25V35H48.8712C49.9757 35 50.8712 35.8955 50.8712 37C50.8712 38.1046 49.9757 39 48.8712 39H38.8712V49C38.8712 50.1046 37.9757 51 36.8712 51C35.7666 51 34.8712 50.1046 34.8712 49V39H24.8712C23.7666 39 22.8712 38.1046 22.8712 37Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.2064 11.6457C21.1482 14.0729 14.0729 21.1482 11.6457 30.2064C9.21859 39.2646 11.8083 48.9296 18.4394 55.5607C25.0705 62.1918 34.7355 64.7815 43.7937 62.3544C47.7383 61.2974 51.3069 59.359 54.2793 56.7592L65.3679 67.8478C66.149 68.6288 67.4153 68.6288 68.1964 67.8478C68.9774 67.0667 68.9774 65.8004 68.1964 65.0193L57.0812 53.9042C59.5192 51.0084 61.3415 47.5737 62.3543 43.7937C64.7815 34.7355 62.1918 25.0705 55.5607 18.4394C48.9296 11.8083 39.2646 9.21859 30.2064 11.6457ZM15.5094 31.2417C17.5667 23.5638 23.5638 17.5667 31.2416 15.5094C38.9195 13.4522 47.1117 15.6472 52.7323 21.2678C58.3528 26.8884 60.5479 35.0806 58.4906 42.7584C56.4334 50.4363 50.4363 56.4334 42.7584 58.4907C35.0806 60.5479 26.8884 58.3528 21.2678 52.7323C15.6472 47.1117 13.4522 38.9195 15.5094 31.2417Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreZoomIn = forwardRef((props, ref) => {
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

CoreZoomIn.displayName = 'CoreZoomIn'

export default CoreZoomIn
