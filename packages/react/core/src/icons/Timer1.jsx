
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.1665 15.9258C38.7138 16.1133 38.3541 16.4731 38.1665 16.9258C37.979 17.3786 37.979 17.8873 38.1665 18.34C38.3541 18.7928 38.7138 19.1525 39.1665 19.34C39.6193 19.5276 40.128 19.5276 40.5807 19.34C41.0335 19.1525 41.3932 18.7928 41.5807 18.34C41.7683 17.8873 41.7683 17.3786 41.5807 16.9258C41.3932 16.4731 41.0335 16.1133 40.5807 15.9258C40.128 15.7383 39.6193 15.7383 39.1665 15.9258Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.9446 18.1519C45.8752 18.3953 46.7928 18.7053 47.6901 19.0819L48.3306 19.3507C53.7531 21.6264 58.0495 25.9629 60.2746 31.4064C62.4997 36.8498 62.4713 42.9543 60.1956 48.3768C57.9199 53.7993 53.5833 58.0957 48.1398 60.3208C42.6964 62.5459 36.592 62.5175 31.1695 60.2418C25.747 57.9661 21.4506 53.6295 19.2255 48.186C17.0003 42.7426 17.0288 36.6382 19.3045 31.2157C19.7032 30.2656 20.1651 29.3502 20.6852 28.4744"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.7299 37.746L23.0293 22.7686L38.0068 40.4692C38.3739 40.9031 38.9134 41.1533 39.4818 41.1533C40.549 41.1533 41.4141 40.2882 41.4141 39.2211C41.4141 38.6527 41.1638 38.1132 40.7299 37.746Z"
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
            d="M19.5155 48.179L16.7438 49.3271H16.7438L19.5155 48.179ZM21.998 33.0974C22.5681 31.5418 21.7691 29.8185 20.2134 29.2484C18.6577 28.6783 16.9345 29.4773 16.3644 31.033L21.998 33.0974ZM31.5155 60.179L32.6635 57.4074H32.6635L31.5155 60.179ZM48.486 60.179L47.338 57.4074H47.338L48.486 60.179ZM60.486 48.179L57.7144 47.031L60.486 48.179ZM60.486 31.2084L57.7144 32.3565V32.3565L60.486 31.2084ZM48.486 19.2084L47.338 21.9801L47.338 21.9801L48.486 19.2084ZM48.7213 16.0794C47.167 15.5053 45.4417 16.3 44.8677 17.8542C44.2937 19.4084 45.0883 21.1337 46.6426 21.7078L48.7213 16.0794ZM22.2871 47.031C20.4428 42.5785 20.3465 37.6044 21.998 33.0974L16.3644 31.033C14.1959 36.9505 14.3224 43.4811 16.7438 49.3271L22.2871 47.031ZM32.6635 57.4074C27.9656 55.4614 24.2331 51.7289 22.2871 47.031L16.7438 49.3271C19.2987 55.4952 24.1993 60.3957 30.3674 62.9506L32.6635 57.4074ZM47.338 57.4074C42.64 59.3533 37.3615 59.3533 32.6635 57.4074L30.3674 62.9506C36.5355 65.5056 43.466 65.5056 49.6341 62.9506L47.338 57.4074ZM57.7144 47.031C55.7684 51.7289 52.0359 55.4614 47.338 57.4074L49.6341 62.9506C55.8022 60.3957 60.7027 55.4952 63.2577 49.3271L57.7144 47.031ZM57.7144 32.3565C59.6603 37.0544 59.6603 42.333 57.7144 47.031L63.2577 49.3271C65.8126 43.1589 65.8126 36.2285 63.2577 30.0604L57.7144 32.3565ZM47.338 21.9801C52.0359 23.926 55.7684 27.6585 57.7144 32.3565L63.2577 30.0604C60.7027 23.8923 55.8022 18.9917 49.6341 16.4368L47.338 21.9801ZM49.6341 16.4368C49.3316 16.3115 49.0273 16.1924 48.7213 16.0794L46.6426 21.7078C46.8757 21.7938 47.1075 21.8846 47.338 21.9801L49.6341 16.4368Z"
            fill="currentColor"
          />
          <path
            d="M39.1667 15.9257C39.6194 15.7382 40.1281 15.7382 40.5809 15.9257V15.9257C41.0336 16.1132 41.3933 16.473 41.5809 16.9257V16.9257C41.7684 17.3785 41.7684 17.8872 41.5809 18.3399V18.3399C41.3933 18.7927 41.0336 19.1524 40.5809 19.3399V19.3399C40.1281 19.5275 39.6194 19.5275 39.1667 19.3399V19.3399C38.7139 19.1524 38.3542 18.7927 38.1667 18.3399V18.3399C37.9791 17.8872 37.9791 17.3785 38.1667 16.9257V16.9257C38.3542 16.473 38.7139 16.1132 39.1667 15.9257V15.9257Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M23.0297 22.7684L40.7303 37.7459C41.1642 38.113 41.4145 38.6526 41.4145 39.2209V39.2209C41.4145 40.2881 40.5494 41.1532 39.4822 41.1532V41.1532C38.9138 41.1532 38.3743 40.9029 38.0072 40.4691L23.0297 22.7684Z"
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
            opacity="0.5"
            d="M31.5147 19.2071C36.9478 16.9567 43.0522 16.9567 48.4853 19.2071C53.9183 21.4575 58.2348 25.7741 60.4853 31.2071C62.7357 36.6401 62.7357 42.7446 60.4853 48.1777C58.2348 53.6107 53.9183 57.9272 48.4853 60.1777C43.0522 62.4281 36.9478 62.4281 31.5147 60.1777C26.0817 57.9272 21.7652 53.6107 19.5147 48.1777C17.2643 42.7446 17.2643 36.6401 19.5147 31.2071C21.7652 25.7741 26.0817 21.4575 31.5147 19.2071Z"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M19.5155 31.208L17.6677 30.4426H17.6677L19.5155 31.208ZM19.7813 30.5663L21.629 31.3317L21.629 31.3317L19.7813 30.5663ZM22.7984 28.9917C23.3609 28.041 23.0461 26.8144 22.0955 26.252C21.1448 25.6896 19.9182 26.0043 19.3558 26.9549L22.7984 28.9917ZM19.5155 48.1786L17.6677 48.9439H17.6677L19.5155 48.1786ZM31.5155 60.1786L32.2808 58.3308H32.2808L31.5155 60.1786ZM48.486 60.1786L47.7207 58.3308L48.486 60.1786ZM60.486 48.1786L58.6383 47.4132L60.486 48.1786ZM60.486 31.208L58.6383 31.9734V31.9734L60.486 31.208ZM48.486 19.208L49.2514 17.3603L49.2514 17.3603L48.486 19.208ZM46.0787 16.2967C45.0096 16.0189 43.9178 16.6604 43.6401 17.7295C43.3623 18.7986 44.0039 19.8904 45.0729 20.1682L46.0787 16.2967ZM21.3632 31.9734L21.629 31.3317L17.9335 29.801L17.6677 30.4426L21.3632 31.9734ZM21.629 31.3317C21.9651 30.5202 22.3565 29.7387 22.7984 28.9917L19.3558 26.9549C18.8182 27.8637 18.3422 28.8142 17.9335 29.801L21.629 31.3317ZM21.3632 47.4132C19.3158 42.4702 19.3158 36.9164 21.3632 31.9734L17.6677 30.4426C15.2143 36.3657 15.2143 43.0209 17.6677 48.9439L21.3632 47.4132ZM32.2808 58.3308C27.3379 56.2834 23.4107 52.3562 21.3632 47.4132L17.6677 48.9439C20.1211 54.867 24.827 59.5729 30.7501 62.0263L32.2808 58.3308ZM47.7207 58.3308C42.7777 60.3783 37.2238 60.3783 32.2808 58.3308L30.7501 62.0263C36.6732 64.4798 43.3283 64.4798 49.2514 62.0263L47.7207 58.3308ZM58.6383 47.4132C56.5908 52.3562 52.6636 56.2834 47.7207 58.3308L49.2514 62.0263C55.1745 59.5729 59.8804 54.867 62.3338 48.9439L58.6383 47.4132ZM58.6383 31.9734C60.6857 36.9164 60.6857 42.4702 58.6383 47.4132L62.3338 48.9439C64.7872 43.0209 64.7872 36.3657 62.3338 30.4426L58.6383 31.9734ZM47.7207 21.0558C52.6636 23.1032 56.5908 27.0304 58.6383 31.9734L62.3338 30.4426C59.8804 24.5196 55.1745 19.8137 49.2514 17.3603L47.7207 21.0558ZM49.2514 17.3603C48.2138 16.9305 47.1536 16.5759 46.0787 16.2967L45.0729 20.1682C45.9698 20.4012 46.8546 20.697 47.7207 21.0558L49.2514 17.3603Z"
            fill="#E0E0E0"
          />
          <path
            d="M39.1667 15.9257C39.6194 15.7382 40.1281 15.7382 40.5809 15.9257C41.0336 16.1132 41.3933 16.473 41.5809 16.9257C41.7684 17.3785 41.7684 17.8872 41.5809 18.3399C41.3933 18.7927 41.0336 19.1524 40.5809 19.3399C40.1281 19.5275 39.6194 19.5275 39.1667 19.3399C38.7139 19.1524 38.3542 18.7927 38.1667 18.3399C37.9791 17.8872 37.9791 17.3785 38.1667 16.9257C38.3542 16.473 38.7139 16.1132 39.1667 15.9257Z"
            fill="#4F4F4F"
            stroke="#4F4F4F"
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M23.0297 22.7684L40.7303 37.7459C41.1642 38.113 41.4145 38.6526 41.4145 39.2209C41.4145 40.2881 40.5494 41.1532 39.4822 41.1532C38.9138 41.1532 38.3743 40.9029 38.0072 40.4691L23.0297 22.7684Z"
            fill="#EB5757"
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
            d="M31.5147 19.2072C36.9478 16.9567 43.0523 16.9567 48.4853 19.2072C53.9183 21.4576 58.2349 25.7741 60.4853 31.2072C62.7357 36.6402 62.7357 42.7447 60.4853 48.1777C58.2349 53.6108 53.9183 57.9273 48.4853 60.1777C43.0523 62.4282 36.9478 62.4282 31.5147 60.1777C26.0817 57.9273 21.7652 53.6108 19.5147 48.1777C17.2643 42.7447 17.2643 36.6402 19.5147 31.2072C21.7652 25.7741 26.0817 21.4576 31.5147 19.2072Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.1667 15.9258C39.6194 15.7383 40.1281 15.7383 40.5809 15.9258C41.0336 16.1133 41.3934 16.4731 41.5809 16.9258C41.7684 17.3786 41.7684 17.8873 41.5809 18.34C41.3934 18.7928 41.0336 19.1525 40.5809 19.34C40.1281 19.5276 39.6194 19.5276 39.1667 19.34C38.7139 19.1525 38.3542 18.7928 38.1667 18.34C37.9791 17.8873 37.9791 17.3786 38.1667 16.9258C38.3542 16.4731 38.7139 16.1133 39.1667 15.9258Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M23.0296 22.7685L40.7303 37.746C41.1642 38.1131 41.4144 38.6527 41.4144 39.221C41.4144 40.2882 40.5493 41.1533 39.4822 41.1533C38.9138 41.1533 38.3742 40.903 38.0071 40.4692L23.0296 22.7685Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21.0772 27.9736C20.5874 28.8015 20.1538 29.6675 19.7814 30.5667L19.5156 31.2083C17.2651 36.6413 17.2651 42.7458 19.5156 48.1789C21.766 53.6119 26.0825 57.9284 31.5156 60.1789C36.9486 62.4293 43.0531 62.4293 48.4861 60.1789C53.9192 57.9284 58.2357 53.6119 60.4861 48.1789C62.7366 42.7458 62.7366 36.6413 60.4861 31.2083C58.2357 25.7753 53.9192 21.4588 48.4861 19.2083C47.5343 18.814 46.5618 18.4888 45.5759 18.2327M19.5147 31.2072C21.7652 25.7741 26.0817 21.4576 31.5147 19.2072C36.9478 16.9567 43.0523 16.9567 48.4853 19.2072C53.9183 21.4576 58.2349 25.7741 60.4853 31.2072C62.7357 36.6402 62.7357 42.7447 60.4853 48.1777C58.2349 53.6108 53.9183 57.9273 48.4853 60.1777C43.0523 62.4282 36.9478 62.4282 31.5147 60.1777C26.0817 57.9273 21.7652 53.6108 19.5147 48.1777C17.2643 42.7447 17.2643 36.6402 19.5147 31.2072ZM38.1667 16.9258C38.3542 16.4731 38.7139 16.1133 39.1667 15.9258C39.6194 15.7383 40.1281 15.7383 40.5809 15.9258C41.0336 16.1133 41.3934 16.4731 41.5809 16.9258C41.7684 17.3786 41.7684 17.8873 41.5809 18.34C41.3934 18.7928 41.0336 19.1525 40.5809 19.34C40.1281 19.5276 39.6194 19.5276 39.1667 19.34C38.7139 19.1525 38.3542 18.7928 38.1667 18.34C37.9791 17.8873 37.9791 17.3786 38.1667 16.9258ZM23.0296 22.7685L40.7303 37.746C41.1642 38.1131 41.4144 38.6527 41.4144 39.221C41.4144 40.2882 40.5493 41.1533 39.4822 41.1533C38.9138 41.1533 38.3742 40.903 38.0071 40.4692L23.0296 22.7685Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.4005 15.2524C39.3433 14.8618 40.4026 14.8618 41.3454 15.2524C42.2882 15.6429 43.0373 16.3919 43.4278 17.3348C43.6044 17.7612 43.7012 18.2114 43.718 18.664C44.0859 17.7413 45.0916 17.215 46.078 17.4713C47.1528 17.7505 48.213 18.1051 49.2507 18.5349C55.1738 20.9883 59.8796 25.6942 62.333 31.6173C64.7865 37.5404 64.7865 44.1955 62.333 50.1186C59.8796 56.0417 55.1738 60.7475 49.2507 63.201C43.3276 65.6544 36.6725 65.6544 30.7494 63.201C24.8263 60.7475 20.1204 56.0417 17.667 50.1186C15.2135 44.1955 15.2135 37.5404 17.667 31.6173L17.9328 30.9756C18.3415 29.9889 18.8174 29.0383 19.3551 28.1296C19.9175 27.1789 21.1441 26.8642 22.0947 27.4266C23.0454 27.989 23.3601 29.2156 22.7977 30.1663C22.3557 30.9134 21.9644 31.6949 21.6283 32.5063L21.3625 33.148C19.315 38.091 19.315 43.6449 21.3625 48.5878C23.4099 53.5308 27.3371 57.458 32.2801 59.5054C37.2231 61.5529 42.777 61.5529 47.7199 59.5054C52.6629 57.458 56.5901 53.5308 58.6375 48.5878C60.685 43.6449 60.685 38.091 58.6375 33.148C56.5901 28.205 52.6629 24.2778 47.7199 22.2304C46.8538 21.8716 45.9691 21.5758 45.0722 21.3428C44.2881 21.1391 43.734 20.4975 43.6039 19.7481C43.5585 19.9283 43.4998 20.106 43.4278 20.2797C43.0373 21.2225 42.2882 21.9716 41.3454 22.3621C40.4026 22.7526 39.3433 22.7526 38.4005 22.3621C37.4577 21.9716 36.7086 21.2225 36.3181 20.2797C35.9275 19.3369 35.9275 18.2776 36.3181 17.3348C36.7086 16.3919 37.4577 15.6429 38.4005 15.2524ZM39.9312 18.9479C39.9685 18.9324 39.9981 18.9028 40.0136 18.8655C40.029 18.8282 40.029 18.7863 40.0136 18.749C39.9981 18.7117 39.9685 18.682 39.9312 18.6666C39.8939 18.6511 39.852 18.6511 39.8147 18.6666C39.7774 18.682 39.7477 18.7117 39.7323 18.749C39.7168 18.7863 39.7168 18.8282 39.7323 18.8655C39.7477 18.9028 39.7774 18.9324 39.8147 18.9479C39.852 18.9633 39.8939 18.9633 39.9312 18.9479Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.3207 22.4161C23.5266 21.7442 22.3501 21.7931 21.6146 22.5286C20.8791 23.2641 20.8301 24.4407 21.502 25.2347L36.4795 42.9354C37.2266 43.8183 38.3246 44.3276 39.4813 44.3276C41.653 44.3276 43.4136 42.5671 43.4136 40.3953C43.4136 39.2387 42.9043 38.1407 42.0213 37.3935L24.3207 22.4161Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTimer1 = forwardRef((props, ref) => {
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

CoreTimer1.displayName = 'CoreTimer1'

export default CoreTimer1
