
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M11.5147 48.5147C9.26427 50.7651 8 53.8173 8 56.9999C8 60.1825 9.26436 63.2348 11.5148 65.4853C13.7652 67.7357 16.8175 69 20 69H60C63.1825 69 66.2348 67.7357 68.4852 65.4853C70.7356 63.2348 72 60.1825 72 56.9999C72 53.8173 70.7357 50.7651 68.4853 48.5147C66.2349 46.2643 63.1826 45 60 45C56.8174 45 53.7651 46.2643 51.5147 48.5147C50.9451 49.0842 50.4387 49.7052 50 50.3666C49.5613 49.7052 49.0549 49.0842 48.4853 48.5147C46.2349 46.2643 43.1826 45 40 45C36.8174 45 33.7651 46.2643 31.5147 48.5147C30.9451 49.0842 30.4387 49.7052 30 50.3666C29.5613 49.7052 29.0549 49.0842 28.4853 48.5147C26.2349 46.2643 23.1826 45 20 45C16.8174 45 13.7651 46.2643 11.5147 48.5147Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.4156 45.5477C16.3273 44.7106 16.282 43.8606 16.282 43V41.6298C16.282 36.332 17.9405 31.167 21.0249 26.8595L21.5813 26.0826L29.4346 37.05C29.4578 37.0824 29.5061 37.0824 29.5294 37.05L48.1827 11L59.5391 26.8595C62.6235 31.167 64.282 36.332 64.282 41.6298V43C64.282 43.9239 64.2298 44.8356 64.1282 45.7323"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.2857 45.4588C23.229 44.9105 23.2 44.354 23.2 43.7907C23.2 42.5429 23.3455 41.3076 23.6285 40.1083L29.1526 47.8229C29.1759 47.8553 29.2242 47.8553 29.2474 47.8229L46.0001 24.4272L53.4105 33.9314C55.6071 36.7485 56.7999 40.2184 56.7999 43.7907C56.7999 44.354 56.7709 44.9105 56.7142 45.4589"
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
            d="M11.5147 48.5147C9.26427 50.7651 8 53.8173 8 56.9999C8 60.1825 9.26436 63.2348 11.5148 65.4853C13.7652 67.7357 16.8175 69 20 69H40H60C63.1825 69 66.2348 67.7357 68.4852 65.4853C70.7356 63.2348 72 60.1825 72 56.9999C72 53.8173 70.7357 50.7651 68.4853 48.5147C66.2349 46.2643 63.1826 45 60 45C56.8174 45 53.7651 46.2643 51.5147 48.5147C50.9451 49.0842 50.4387 49.7052 50 50.3666C49.5613 49.7052 49.0549 49.0842 48.4853 48.5147C46.2349 46.2643 43.1826 45 40 45C36.8174 45 33.7651 46.2643 31.5147 48.5147C30.9451 49.0842 30.4387 49.7052 30 50.3666C29.5613 49.7052 29.0549 49.0842 28.4853 48.5147C26.2349 46.2643 23.1826 45 20 45C16.8174 45 13.7651 46.2643 11.5147 48.5147Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5813 26.0826L29.4346 37.05C29.4578 37.0824 29.5061 37.0824 29.5294 37.05L48.1827 11L59.5391 26.8595C62.6145 31.1544 64.2723 36.3018 64.2819 41.5835C62.8995 41.1995 61.46 40.9999 60 40.9999C58.9475 40.9999 57.9056 41.1036 56.8881 41.3054C56.4682 38.6295 55.3747 36.0892 53.6925 33.9318L46.282 24.4276L33.3928 42.4278C32.1854 42.9752 31.0448 43.6732 30 44.5098C28.5464 43.3459 26.9075 42.4503 25.1611 41.8552L23.9105 40.1086C23.8081 40.5426 23.7237 40.9813 23.6576 41.4235C22.4682 41.1442 21.2416 40.9999 20 40.9999C18.7377 40.9999 17.4907 41.1491 16.2827 41.4377C16.3223 36.2071 17.9778 31.1149 21.0249 26.8595L21.5813 26.0826ZM30.675 64.9999C24.1468 62.1451 19.1338 56.4698 17.1767 49.5146C18.0707 49.1775 19.0262 48.9999 20 48.9999C21.8759 48.9999 23.6838 49.6587 25.1145 50.8482C25.999 52.6499 27.2116 54.2613 28.6745 55.6045L30 57.6028L30.4074 56.9886C32.9944 58.7775 36.1329 59.8253 39.5162 59.8253H41.0477C44.2625 59.8253 47.2564 58.8792 49.7661 57.2501L50 57.6028L50.6363 56.6435C52.8453 54.9928 54.6145 52.786 55.7364 50.2307C57.003 49.4329 58.4792 48.9999 60 48.9999C61.1593 48.9999 62.2927 49.2516 63.3271 49.7246C61.329 56.5839 56.3514 62.1739 49.889 64.9999H40H30.675Z"
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
            d="M11.5147 48.5147C9.26427 50.7651 8 53.8173 8 56.9999C8 60.1825 9.26436 63.2348 11.5148 65.4853C13.7652 67.7357 16.8175 69 20 69H40H60C63.1825 69 66.2348 67.7357 68.4852 65.4853C70.7356 63.2348 72 60.1825 72 56.9999C72 53.8173 70.7357 50.7651 68.4853 48.5147C66.2349 46.2643 63.1826 45 60 45C56.8174 45 53.7651 46.2643 51.5147 48.5147C50.9451 49.0842 50.4387 49.7052 50 50.3666C49.5613 49.7052 49.0549 49.0842 48.4853 48.5147C46.2349 46.2643 43.1826 45 40 45C36.8174 45 33.7651 46.2643 31.5147 48.5147C30.9451 49.0842 30.4387 49.7052 30 50.3666C29.5613 49.7052 29.0549 49.0842 28.4853 48.5147C26.2349 46.2643 23.1826 45 20 45C16.8174 45 13.7651 46.2643 11.5147 48.5147Z"
            fill="#828282"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.4346 37.05L21.5813 26.0826L21.0249 26.8595C17.9405 31.167 16.282 36.332 16.282 41.6298V43C16.282 43.8606 16.3273 44.7106 16.4156 45.5477C17.5654 45.1878 18.773 44.9999 20 44.9999C23.1826 44.9999 26.2349 46.2642 28.4853 48.5146C29.0549 49.0842 29.5613 49.7051 30 50.3665C30.4387 49.7051 30.9451 49.0842 31.5147 48.5146C33.7651 46.2642 36.8174 44.9999 40 44.9999C43.1826 44.9999 46.2349 46.2642 48.4853 48.5146C49.0549 49.0842 49.5613 49.7051 50 50.3665C50.4387 49.7051 50.9451 49.0842 51.5147 48.5146C53.7651 46.2642 56.8174 44.9999 60 44.9999C61.422 44.9999 62.818 45.2523 64.1282 45.7323C64.2298 44.8356 64.282 43.9239 64.282 43V41.6298C64.282 36.332 62.6235 31.167 59.5391 26.8595L48.1827 11L29.5294 37.05C29.5061 37.0824 29.4578 37.0824 29.4346 37.05Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.1526 47.8229L23.6285 40.1083C23.3455 41.3076 23.2 42.5429 23.2 43.7907C23.2 44.354 23.229 44.9105 23.2857 45.4588C25.2337 46.0134 27.0278 47.0573 28.4855 48.5149C29.055 49.0845 29.5614 49.7054 30.0001 50.3668C30.4388 49.7054 30.9452 49.0845 31.5148 48.5149C33.7652 46.2645 36.8176 45.0003 40.0001 45.0003C43.1827 45.0003 46.235 46.2645 48.4855 48.5149C49.055 49.0845 49.5614 49.7054 50.0001 50.3668C50.4388 49.7054 50.9452 49.0845 51.5148 48.5149C52.9724 47.0574 54.7663 46.0135 56.7142 45.4589C56.7709 44.9105 56.7999 44.354 56.7999 43.7907C56.7999 40.2184 55.6071 36.7485 53.4105 33.9314L46.0001 24.4272L29.2474 47.8229C29.2242 47.8553 29.1759 47.8553 29.1526 47.8229Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 56.9999C28 53.8173 29.2643 50.7651 31.5147 48.5147C33.7651 46.2643 36.8174 45 40 45C43.1826 45 46.2349 46.2643 48.4853 48.5147C50.7357 50.7651 52 53.8173 52 56.9999C52 60.1825 50.7356 63.2348 48.4852 65.4853C46.2348 67.7357 43.1825 69 40 69C36.8175 69 33.7652 67.7357 31.5148 65.4853C29.2644 63.2348 28 60.1825 28 56.9999Z"
            fill="#BDBDBD"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M11.5147 48.5146C9.26427 50.765 8 53.8172 8 56.9998C8 60.1824 9.26436 63.2347 11.5148 65.4852C13.7652 67.7356 16.8175 68.9999 20 68.9999H60C63.1825 68.9999 66.2348 67.7356 68.4852 65.4852C70.7356 63.2347 72 60.1824 72 56.9998C72 53.8172 70.7357 50.765 68.4853 48.5146C66.2349 46.2642 63.1826 44.9999 60 44.9999C56.8174 44.9999 53.7651 46.2642 51.5147 48.5146C50.9451 49.0841 50.4387 49.7051 50 50.3665C49.5613 49.7051 49.0549 49.0841 48.4853 48.5146C46.2349 46.2642 43.1826 44.9999 40 44.9999C36.8174 44.9999 33.7651 46.2642 31.5147 48.5146C30.9451 49.0841 30.4387 49.7051 30 50.3665C29.5613 49.7051 29.0549 49.0841 28.4853 48.5146C26.2349 46.2642 23.1826 44.9999 20 44.9999C16.8174 44.9999 13.7651 46.2642 11.5147 48.5146Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.4346 37.05L21.5813 26.0826L21.0249 26.8595C17.9405 31.167 16.282 36.332 16.282 41.6298V43C16.282 43.8606 16.3273 44.7106 16.4156 45.5477C17.5654 45.1878 18.773 44.9999 20 44.9999C23.1826 44.9999 26.2349 46.2642 28.4853 48.5146C29.0549 49.0841 29.5613 49.7051 30 50.3665C30.4387 49.7051 30.9451 49.0841 31.5147 48.5146C33.7651 46.2642 36.8174 44.9999 40 44.9999C43.1826 44.9999 46.2349 46.2642 48.4853 48.5146C49.0549 49.0841 49.5613 49.7051 50 50.3665C50.4387 49.7051 50.9451 49.0841 51.5147 48.5146C53.7651 46.2642 56.8174 44.9999 60 44.9999C61.422 44.9999 62.818 45.2523 64.1282 45.7323C64.2298 44.8356 64.282 43.9239 64.282 43V41.6298C64.282 36.332 62.6235 31.167 59.5391 26.8595L48.1827 11L29.5294 37.05C29.5061 37.0824 29.4578 37.0824 29.4346 37.05Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.1526 47.8226L23.6285 40.108C23.3454 41.3073 23.1999 42.5426 23.1999 43.7904C23.1999 44.3537 23.2289 44.9102 23.2856 45.4585C25.2336 46.0131 27.0277 47.0569 28.4853 48.5146C29.0549 49.0841 29.5613 49.7051 30 50.3665C30.4387 49.7051 30.9451 49.0841 31.5147 48.5146C33.7651 46.2642 36.8174 44.9999 40 44.9999C43.1826 44.9999 46.2349 46.2642 48.4853 48.5146C49.0549 49.0841 49.5613 49.7051 50 50.3665C50.4387 49.7051 50.9451 49.0841 51.5147 48.5146C52.9722 47.057 54.7663 46.0132 56.7142 45.4586C56.7708 44.9103 56.7999 44.3537 56.7999 43.7904C56.7999 40.2182 55.607 36.7482 53.4105 33.9311L46 24.427L29.2474 47.8226C29.2241 47.8551 29.1758 47.8551 29.1526 47.8226Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60 44.9999C63.1826 44.9999 66.2349 46.2642 68.4853 48.5146C70.7357 50.765 72 53.8172 72 56.9998C72 60.1824 70.7356 63.2347 68.4852 65.4852C66.2348 67.7356 63.1825 68.9999 60 68.9999H20C16.8175 68.9999 13.7652 67.7356 11.5148 65.4852C9.26436 63.2347 8 60.1824 8 56.9998C8 53.8172 9.26427 50.765 11.5147 48.5146C13.7651 46.2642 16.8174 44.9999 20 44.9999M60 44.9999C56.8174 44.9999 53.7651 46.2642 51.5147 48.5146M60 44.9999C61.422 44.9999 62.818 45.2523 64.1282 45.7323C64.2298 44.8356 64.282 43.9239 64.282 43V41.6298C64.282 36.332 62.6235 31.167 59.5391 26.8595L48.1827 11L29.5294 37.05C29.5061 37.0824 29.4578 37.0824 29.4346 37.05L21.5813 26.0826L21.0249 26.8595C17.9405 31.167 16.282 36.332 16.282 41.6298V43C16.282 43.8606 16.3273 44.7106 16.4156 45.5477C17.5654 45.1878 18.773 44.9999 20 44.9999M51.5147 48.5146C50.9451 49.0841 50.4387 49.7051 50 50.3665C49.5613 49.7051 49.0549 49.0841 48.4853 48.5146C46.2349 46.2642 43.1826 44.9999 40 44.9999C36.8174 44.9999 33.7651 46.2642 31.5147 48.5146C30.9451 49.0841 30.4387 49.7051 30 50.3665C29.5613 49.7051 29.0549 49.0841 28.4853 48.5146M51.5147 48.5146C52.9722 47.057 54.7663 46.0132 56.7142 45.4586C56.7708 44.9103 56.7999 44.3537 56.7999 43.7904C56.7999 40.2182 55.607 36.7482 53.4105 33.9311L46 24.427L29.2474 47.8226C29.2241 47.8551 29.1758 47.8551 29.1526 47.8226L23.6285 40.108C23.3454 41.3073 23.1999 42.5426 23.1999 43.7904C23.1999 44.3537 23.2289 44.9102 23.2856 45.4585C25.2336 46.0131 27.0277 47.0569 28.4853 48.5146M28.4853 48.5146C26.2349 46.2642 23.1826 44.9999 20 44.9999"
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
            d="M48.1827 9.00977C48.8246 9.00977 49.427 9.31935 49.8007 9.8412L61.1571 25.7007C64.4834 30.3461 66.272 35.9162 66.272 41.6296V42.9997C66.272 43.4943 66.2582 43.9857 66.2308 44.4738C67.5734 45.1416 68.8122 46.0269 69.8925 47.1072C72.5161 49.7308 73.99 53.2892 73.99 56.9996C73.99 60.7099 72.516 64.2685 69.8924 66.8921C67.2688 69.5157 63.7104 70.9897 60 70.9897H20C16.2897 70.9897 12.7312 69.5157 10.1077 66.8921C7.48404 64.2685 6.01001 60.7099 6.01001 56.9996C6.01001 53.2892 7.48393 49.7308 10.1075 47.1072C11.334 45.8807 12.7648 44.9055 14.3199 44.2146C14.3014 43.8119 14.292 43.4068 14.292 42.9997V41.6296C14.292 35.9162 16.0806 30.3461 19.4069 25.7007L19.9633 24.9238C20.337 24.4019 20.9394 24.0923 21.5813 24.0923C22.2231 24.0923 22.8256 24.4019 23.1993 24.9238L29.482 33.6978L46.5647 9.8412C46.9384 9.31935 47.5409 9.00977 48.1827 9.00977Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreFireSmoke = forwardRef((props, ref) => {
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

CoreFireSmoke.displayName = 'CoreFireSmoke'

export default CoreFireSmoke
