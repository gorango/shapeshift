
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M26.5 29.0146V73.9998C26.5 75.1044 27.3954 75.9998 28.5 75.9998H32.5C33.6046 75.9998 34.5 75.1044 34.5 73.9998V29.0146"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59.6731 11.7997C58.7228 9.50138 57.4237 7.36857 55.8253 5.47525C55.1119 4.63021 53.8365 4.63521 53.0551 5.4179L46.0847 12.4004C45.7095 12.7762 45.2003 12.9874 44.6693 12.9874H20.5C19.3954 12.9874 18.5 13.8829 18.5 14.9874V27.0152C18.5 28.1197 19.3954 29.0152 20.5 29.0152H44.6719C45.2029 29.0152 45.7121 29.2264 46.0873 29.6022L53.0551 36.5821C53.8365 37.3648 55.1119 37.3698 55.8253 36.5248C57.4237 34.6314 58.7228 32.4986 59.6731 30.2003C60.8792 27.2835 61.5 24.1572 61.5 21C61.5 17.8428 60.8792 14.7165 59.6731 11.7997Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.5 12.9871V6C34.5 4.89543 33.6046 4 32.5 4H28.5C27.3954 4 26.5 4.89543 26.5 6V12.9871"
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
            d="M34.5 9.98705V6C34.5 4.89543 33.6046 4 32.5 4H28.5C27.3954 4 26.5 4.89543 26.5 6V9.98705H34.5ZM26.5 26.0148V15.9871H34.5V26.0148H26.5ZM26.5 32.0148V74C26.5 75.1046 27.3954 76 28.5 76H32.5C33.6046 76 34.5 75.1046 34.5 74V32.0148H26.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.6731 11.7996C58.7228 9.5013 57.4237 7.36849 55.8253 5.47517C55.1119 4.63013 53.8364 4.63513 53.0551 5.41781L46.0847 12.4003C45.7095 12.7762 45.2003 12.9873 44.6693 12.9873H20.5C19.3954 12.9873 18.5 13.8828 18.5 14.9873V27.0151C18.5 28.1197 19.3954 29.0151 20.5 29.0151H44.6719C45.2029 29.0151 45.7121 29.2263 46.0873 29.6021L53.0551 36.582C53.8365 37.3647 55.1119 37.3697 55.8253 36.5247C57.4237 34.6314 58.7228 32.4985 59.6731 30.2003C60.8792 27.2834 61.5 24.1571 61.5 20.9999C61.5 17.8427 60.8792 14.7164 59.6731 11.7996Z"
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
            d="M28.5 4C27.3954 4 26.5 4.89543 26.5 6V12.9871H34.5V6C34.5 4.89543 33.6046 4 32.5 4H28.5ZM34.5 29.0148H26.5V74C26.5 75.1046 27.3954 76 28.5 76H32.5C33.6046 76 34.5 75.1046 34.5 74V29.0148Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.6731 11.7996C58.7228 9.5013 57.4237 7.36849 55.8253 5.47517C55.1119 4.63013 53.8364 4.63513 53.0551 5.41781L46.0847 12.4003C45.7095 12.7762 45.2003 12.9873 44.6693 12.9873H20.5C19.3954 12.9873 18.5 13.8828 18.5 14.9873V27.0151C18.5 28.1197 19.3954 29.0151 20.5 29.0151H44.6719C45.2029 29.0151 45.7121 29.2263 46.0873 29.6021L53.0551 36.582C53.8365 37.3647 55.1119 37.3697 55.8253 36.5247C57.4237 34.6314 58.7228 32.4985 59.6731 30.2003C60.8792 27.2834 61.5 24.1571 61.5 20.9999C61.5 17.8427 60.8792 14.7164 59.6731 11.7996Z"
            fill="#828282"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M28.5 4C27.3954 4 26.5 4.89543 26.5 6V12.9871H34.5V6C34.5 4.89543 33.6046 4 32.5 4H28.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34.5 29.0148H26.5V74C26.5 75.1046 27.3954 76 28.5 76H32.5C33.6046 76 34.5 75.1046 34.5 74V29.0148Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.6731 11.7993C58.7228 9.50101 57.4237 7.3682 55.8253 5.47488C55.1119 4.62984 53.8365 4.63484 53.0551 5.41752L46.0847 12.4C45.7095 12.7759 45.2003 12.9871 44.6693 12.9871H20.5C19.3954 12.9871 18.5 13.8825 18.5 14.9871V27.0148C18.5 28.1194 19.3954 29.0148 20.5 29.0148H44.6719C45.2029 29.0148 45.7121 29.226 46.0873 29.6018L53.0551 36.5817C53.8364 37.3644 55.1119 37.3694 55.8253 36.5244C57.4237 34.6311 58.7228 32.4983 59.6731 30.2C60.8792 27.2831 61.5 24.1568 61.5 20.9996C61.5 17.8424 60.8792 14.7162 59.6731 11.7993Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.5 4C27.3954 4 26.5 4.89543 26.5 6V12.9871H34.5V6C34.5 4.89543 33.6046 4 32.5 4H28.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.5 29.0148H26.5V74C26.5 75.1046 27.3954 76 28.5 76H32.5C33.6046 76 34.5 75.1046 34.5 74V29.0148Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59.6731 11.7993C58.7228 9.50101 57.4237 7.3682 55.8253 5.47488C55.1119 4.62984 53.8365 4.63484 53.0551 5.41752L46.0847 12.4C45.7095 12.7759 45.2003 12.9871 44.6693 12.9871H20.5C19.3954 12.9871 18.5 13.8825 18.5 14.9871V27.0148C18.5 28.1194 19.3954 29.0148 20.5 29.0148H44.6719C45.2029 29.0148 45.7121 29.226 46.0873 29.6018L53.0551 36.5817C53.8364 37.3644 55.1119 37.3694 55.8253 36.5244C57.4237 34.6311 58.7228 32.4983 59.6731 30.2C60.8792 27.2831 61.5 24.1568 61.5 20.9996C61.5 17.8424 60.8792 14.7162 59.6731 11.7993Z"
            stroke="currentColor"
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
            d="M28.5 2C26.2909 2 24.5 3.79086 24.5 6V10.9871H20.5C18.2909 10.9871 16.5 12.7779 16.5 14.9871V27.0148C16.5 29.2239 18.2909 31.0148 20.5 31.0148H24.5V74C24.5 76.2091 26.2909 78 28.5 78H32.5C34.7091 78 36.5 76.2091 36.5 74V31.0148H44.6719L51.6397 37.9947C53.1676 39.5253 55.8121 39.6403 57.3535 37.8146C59.0849 35.7637 60.492 33.4535 61.5213 30.9642C62.8277 27.8049 63.5 24.419 63.5 20.9996C63.5 17.5803 62.8277 14.1943 61.5213 11.0351C60.492 8.54577 59.0849 6.23558 57.3535 4.1847C55.8121 2.35892 53.1676 2.47393 51.6397 4.00454L44.6693 10.9871H36.5V6C36.5 3.79086 34.7091 2 32.5 2H28.5ZM32.5 10.9871V6L28.5 6V10.9871H32.5ZM32.5 31.0148H28.5V74H32.5V31.0148ZM44.6719 27.0148C45.7339 27.0148 46.7524 27.4372 47.5027 28.1888L54.406 35.1041C55.8216 33.401 56.9752 31.4905 57.8249 29.4357C58.9308 26.7613 59.5 23.8947 59.5 20.9996C59.5 18.1046 58.9308 15.238 57.8249 12.5635C56.9752 10.5087 55.8216 8.59829 54.406 6.89514L47.5001 13.813C46.7498 14.5647 45.7313 14.9871 44.6693 14.9871H20.5V27.0148H44.6719Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAxe = forwardRef((props, ref) => {
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

CoreAxe.displayName = 'CoreAxe'

export default CoreAxe