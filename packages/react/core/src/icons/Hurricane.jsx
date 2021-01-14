
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M37.9524 11.5396C34.7585 11.8309 31.6128 12.8054 28.7417 14.463C21.775 18.4852 17.4834 25.9186 17.4834 33.963C17.4834 42.0074 21.775 49.4408 28.7417 53.463C29.2051 53.7306 29.6757 53.9803 30.1524 54.2122C30.5357 54.477 30.9315 54.7276 31.3391 54.963C34.7153 56.9122 38.5849 57.6334 42.3263 57.1266L40.927 68.4606C44.5031 68.3134 48.052 67.3142 51.2584 65.463C58.2251 61.4408 62.5167 54.0074 62.5167 45.963C62.5167 37.9185 58.2251 30.4852 51.2584 26.463C50.7937 26.1946 50.3218 25.9442 49.8436 25.7117C49.4612 25.4476 49.0663 25.1977 48.6597 24.963C44.9411 22.816 40.6237 22.1588 36.5386 22.9914L37.9524 11.5396Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.5354 33.9629C38.679 32.7253 41.32 32.7253 43.4636 33.9629C45.6072 35.2005 46.9277 37.4877 46.9277 39.9629C46.9277 42.4381 45.6072 44.7253 43.4636 45.9629C41.32 47.2005 38.679 47.2005 36.5354 45.9629C34.3918 44.7253 33.0713 42.4381 33.0713 39.9629C33.0713 37.4877 34.3918 35.2005 36.5354 33.9629Z"
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
            d="M28.7417 14.463C31.6128 12.8054 34.7585 11.8309 37.9524 11.5396L36.5386 22.9914C40.6237 22.1588 44.9411 22.816 48.6597 24.963C49.0663 25.1977 49.4611 25.4476 49.8436 25.7117C50.3217 25.9442 50.7937 26.1946 51.2584 26.463C58.2251 30.4852 62.5167 37.9185 62.5167 45.963C62.5167 54.0074 58.2251 61.4408 51.2584 65.463C48.052 67.3142 44.5031 68.3134 40.927 68.4606L42.3263 57.1266C38.5849 57.6334 34.7153 56.9122 31.3391 54.963C30.9315 54.7276 30.5357 54.477 30.1524 54.2122C29.6757 53.9803 29.2051 53.7306 28.7417 53.463C21.775 49.4408 17.4834 42.0074 17.4834 33.963C17.4834 25.9186 21.775 18.4852 28.7417 14.463ZM43.4636 33.963C41.32 32.7254 38.679 32.7254 36.5354 33.963C34.3918 35.2006 33.0713 37.4878 33.0713 39.963C33.0713 42.4382 34.3918 44.7254 36.5354 45.963C38.679 47.2006 41.32 47.2006 43.4636 45.963C45.6072 44.7254 46.9277 42.4382 46.9277 39.963C46.9277 37.4878 45.6072 35.2006 43.4636 33.963Z"
            fill="currentColor"
          />
          <path
            d="M37.9524 11.5396L39.9373 11.7846C40.0114 11.1842 39.8098 10.5826 39.3889 10.148C38.968 9.71353 38.3731 9.49287 37.7707 9.54782L37.9524 11.5396ZM28.7417 14.463L27.7417 12.731V12.731L28.7417 14.463ZM36.5386 22.9914L34.5536 22.7464C34.4748 23.3852 34.7081 24.0229 35.1807 24.4598C35.6533 24.8968 36.3073 25.0797 36.938 24.9511L36.5386 22.9914ZM48.6597 24.963L47.6597 26.695L48.6597 24.963ZM49.8436 25.7117L48.7072 27.3575C48.7904 27.415 48.8779 27.4661 48.969 27.5103L49.8436 25.7117ZM51.2584 26.463L52.2584 24.7309L51.2584 26.463ZM51.2584 65.463L50.2584 63.7309L51.2584 65.463ZM40.927 68.4606L38.9421 68.2155C38.8701 68.7986 39.0581 69.3838 39.4562 69.8158C39.8543 70.2479 40.4223 70.483 41.0093 70.4589L40.927 68.4606ZM42.3263 57.1266L44.3112 57.3717C44.3872 56.7561 44.1733 56.1401 43.7321 55.7041C43.291 55.2681 42.6725 55.0615 42.0578 55.1447L42.3263 57.1266ZM31.3391 54.963L32.3391 53.2309H32.3391L31.3391 54.963ZM30.1524 54.2122L31.2892 52.5667C31.2059 52.5092 31.1184 52.4581 31.0274 52.4138L30.1524 54.2122ZM28.7417 53.463L27.7417 55.1951H27.7417L28.7417 53.463ZM36.5354 33.963L37.5354 35.695V35.695L36.5354 33.963ZM43.4636 33.963L42.4636 35.695V35.695L43.4636 33.963ZM36.5354 45.963L37.5354 44.2309H37.5354L36.5354 45.963ZM43.4636 45.963L42.4636 44.2309H42.4636L43.4636 45.963ZM37.7707 9.54782C34.2931 9.86506 30.8676 10.9263 27.7417 12.731L29.7417 16.1951C32.358 14.6845 35.2239 13.7968 38.1341 13.5313L37.7707 9.54782ZM38.5235 23.2365L39.9373 11.7846L35.9674 11.2945L34.5536 22.7464L38.5235 23.2365ZM49.6597 23.2309C45.5114 20.8359 40.6953 20.1031 36.1392 21.0317L36.938 24.9511C40.5521 24.2146 44.3707 24.7961 47.6597 26.695L49.6597 23.2309ZM50.98 24.0659C50.5534 23.7714 50.1131 23.4927 49.6596 23.2309L47.6597 26.695C48.0196 26.9028 48.3689 27.1239 48.7072 27.3575L50.98 24.0659ZM52.2584 24.7309C51.7526 24.4389 51.2388 24.1663 50.7182 23.9131L48.969 27.5103C49.4047 27.7222 49.8348 27.9504 50.2584 28.195L52.2584 24.7309ZM64.5167 45.963C64.5167 37.204 59.8439 29.1104 52.2584 24.7309L50.2584 28.195C56.6063 31.86 60.5167 38.6331 60.5167 45.963H64.5167ZM52.2584 67.195C59.8439 62.8155 64.5167 54.7219 64.5167 45.963H60.5167C60.5167 53.2929 56.6063 60.066 50.2584 63.7309L52.2584 67.195ZM41.0093 70.4589C44.9028 70.2986 48.7673 69.2106 52.2584 67.195L50.2584 63.7309C47.3366 65.4178 44.1035 66.3281 40.8448 66.4622L41.0093 70.4589ZM40.3414 56.8816L38.9421 68.2155L42.912 68.7056L44.3112 57.3717L40.3414 56.8816ZM30.3391 56.695C34.1053 58.8694 38.4221 59.6737 42.5947 59.1085L42.0578 55.1447C38.7477 55.5931 35.3252 54.9549 32.3391 53.2309L30.3391 56.695ZM29.0157 55.8578C29.4432 56.1532 29.8846 56.4326 30.3391 56.695L32.3391 53.2309C31.9783 53.0226 31.6282 52.8009 31.2892 52.5667L29.0157 55.8578ZM27.7417 55.1951C28.2461 55.4863 28.7583 55.7581 29.2774 56.0107L31.0274 52.4138C30.593 52.2025 30.1641 51.9748 29.7417 51.731L27.7417 55.1951ZM15.4834 33.963C15.4834 42.722 20.1562 50.8156 27.7417 55.1951L29.7417 51.731C23.3939 48.066 19.4834 41.2929 19.4834 33.963H15.4834ZM27.7417 12.731C20.1562 17.1104 15.4834 25.2041 15.4834 33.963H19.4834C19.4834 26.6331 23.3939 19.86 29.7417 16.1951L27.7417 12.731ZM37.5354 35.695C39.0602 34.8147 40.9388 34.8147 42.4636 35.695L44.4636 32.2309C41.7012 30.6361 38.2978 30.6361 35.5354 32.2309L37.5354 35.695ZM35.0713 39.963C35.0713 38.2023 36.0106 36.5754 37.5354 35.695L35.5354 32.2309C32.773 33.8258 31.0713 36.7732 31.0713 39.963H35.0713ZM37.5354 44.2309C36.0106 43.3506 35.0713 41.7237 35.0713 39.963H31.0713C31.0713 43.1527 32.773 46.1002 35.5354 47.695L37.5354 44.2309ZM42.4636 44.2309C40.9388 45.1113 39.0602 45.1113 37.5354 44.2309L35.5354 47.695C38.2978 49.2899 41.7012 49.2899 44.4636 47.695L42.4636 44.2309ZM44.9277 39.963C44.9277 41.7236 43.9884 43.3506 42.4636 44.2309L44.4636 47.695C47.226 46.1002 48.9277 43.1527 48.9277 39.963H44.9277ZM42.4636 35.695C43.9884 36.5754 44.9277 38.2023 44.9277 39.963H48.9277C48.9277 36.7732 47.226 33.8258 44.4636 32.2309L42.4636 35.695Z"
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
            d="M28.7417 14.463C31.6128 12.8054 34.7585 11.8309 37.9524 11.5396L36.5386 22.9914C40.6237 22.1588 44.9411 22.816 48.6597 24.963C49.0663 25.1977 49.4611 25.4476 49.8436 25.7117C50.3217 25.9442 50.7937 26.1946 51.2584 26.463C58.2251 30.4852 62.5167 37.9185 62.5167 45.963C62.5167 54.0074 58.2251 61.4408 51.2584 65.463C48.052 67.3142 44.5031 68.3134 40.927 68.4606L42.3263 57.1266C38.5849 57.6334 34.7153 56.9122 31.3391 54.963C30.9315 54.7276 30.5357 54.477 30.1524 54.2122C29.6757 53.9803 29.2051 53.7306 28.7417 53.463C21.775 49.4408 17.4834 42.0074 17.4834 33.963C17.4834 25.9186 21.775 18.4852 28.7417 14.463ZM43.4636 33.963C41.32 32.7254 38.679 32.7254 36.5354 33.963C34.3918 35.2006 33.0713 37.4878 33.0713 39.963C33.0713 42.4382 34.3918 44.7254 36.5354 45.963C38.679 47.2006 41.32 47.2006 43.4636 45.963C45.6072 44.7254 46.9277 42.4382 46.9277 39.963C46.9277 37.4878 45.6072 35.2006 43.4636 33.963Z"
            fill="#56CCF2"
          />
          <path
            d="M36.5354 33.9629C38.679 32.7253 41.32 32.7253 43.4636 33.9629C45.6072 35.2005 46.9277 37.4877 46.9277 39.9629C46.9277 42.4381 45.6072 44.7253 43.4636 45.9629C41.32 47.2005 38.679 47.2005 36.5354 45.9629C34.3918 44.7253 33.0713 42.4381 33.0713 39.9629C33.0713 37.4877 34.3918 35.2005 36.5354 33.9629Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.7417 14.463C31.6128 12.8054 34.7585 11.8309 37.9524 11.5396L36.5386 22.9914C40.6237 22.1588 44.9411 22.816 48.6597 24.963C49.0663 25.1977 49.4612 25.4476 49.8436 25.7117C50.3218 25.9442 50.7937 26.1946 51.2584 26.463C58.2251 30.4852 62.5167 37.9185 62.5167 45.963C62.5167 54.0074 58.2251 61.4408 51.2584 65.463C48.052 67.3142 44.5031 68.3134 40.927 68.4606L42.3263 57.1266C38.5849 57.6334 34.7153 56.9122 31.3391 54.963C30.9315 54.7276 30.5357 54.477 30.1524 54.2122C29.6757 53.9803 29.2051 53.7306 28.7417 53.463C21.775 49.4408 17.4834 42.0074 17.4834 33.963C17.4834 25.9186 21.775 18.4852 28.7417 14.463ZM43.4636 33.963C41.32 32.7254 38.679 32.7254 36.5354 33.963C34.3918 35.2006 33.0713 37.4878 33.0713 39.963C33.0713 42.4382 34.3918 44.7254 36.5354 45.963C38.679 47.2006 41.32 47.2006 43.4636 45.963C45.6072 44.7254 46.9277 42.4382 46.9277 39.963C46.9277 37.4878 45.6072 35.2006 43.4636 33.963Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.5354 32.2309C38.2978 30.6361 41.7012 30.6361 44.4636 32.2309C47.226 33.8258 48.9277 36.7732 48.9277 39.963C48.9277 43.1527 47.226 46.1002 44.4636 47.695C41.7012 49.2899 38.2978 49.2899 35.5354 47.695C32.773 46.1002 31.0713 43.1527 31.0713 39.963C31.0713 36.7732 32.773 33.8258 35.5354 32.2309ZM42.4636 35.695C40.9388 34.8147 39.0602 34.8147 37.5354 35.695C36.0106 36.5754 35.0713 38.2023 35.0713 39.963C35.0713 41.7237 36.0106 43.3506 37.5354 44.2309C39.0602 45.1113 40.9388 45.1113 42.4636 44.2309C43.9884 43.3506 44.9277 41.7237 44.9277 39.963C44.9277 38.2023 43.9884 36.5754 42.4636 35.695Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.3889 10.1481C39.8098 10.5826 40.0114 11.1842 39.9373 11.7846L38.8394 20.6773C42.5564 20.454 46.3239 21.305 49.6597 23.2309C50.0685 23.467 50.4667 23.7168 50.8538 23.9796C51.3281 24.2138 51.7965 24.4643 52.2584 24.7309C59.8439 29.1104 64.5167 37.204 64.5167 45.963C64.5167 54.7219 59.8439 62.8156 52.2584 67.195C48.7673 69.2106 44.9028 70.2986 41.0093 70.4589C40.4223 70.483 39.8543 70.2479 39.4562 69.8158C39.0581 69.3838 38.8701 68.7986 38.9421 68.2155L40.0448 59.2834C36.6943 59.2913 33.3417 58.4286 30.3391 56.695C29.9292 56.4583 29.5299 56.2078 29.1418 55.9442C28.6691 55.7106 28.2021 55.4609 27.7417 55.1951C20.1562 50.8156 15.4834 42.722 15.4834 33.963C15.4834 25.2041 20.1562 17.1105 27.7417 12.731C30.8676 10.9263 34.2931 9.86507 37.7707 9.54783C38.3731 9.49288 38.968 9.71354 39.3889 10.1481ZM35.6441 13.9137C33.5994 14.3577 31.6071 15.1181 29.7417 16.1951C23.3939 19.86 19.4834 26.6331 19.4834 33.963C19.4834 41.2929 23.3939 48.066 29.7417 51.731C30.1641 51.9749 30.593 52.2025 31.0274 52.4138C31.1184 52.4581 31.2059 52.5092 31.2892 52.5667C31.6282 52.8009 31.9783 53.0226 32.3391 53.2309C35.3252 54.9549 38.7478 55.5931 42.0578 55.1447C42.6725 55.0615 43.291 55.2681 43.7321 55.7041C44.1733 56.1401 44.3872 56.7561 44.3112 57.3717L43.2181 66.226C45.6605 65.8384 48.0485 65.0068 50.2584 63.7309C56.6063 60.066 60.5167 53.2929 60.5167 45.963C60.5167 38.6331 56.6063 31.86 50.2584 28.195C49.8348 27.9504 49.4047 27.7222 48.969 27.5104C48.878 27.4661 48.7904 27.415 48.7072 27.3575C48.3689 27.1239 48.0196 26.9028 47.6597 26.695C44.3707 24.7962 40.5521 24.2146 36.938 24.9511C36.3073 25.0797 35.6533 24.8968 35.1807 24.4599C34.7081 24.0229 34.4748 23.3852 34.5536 22.7464L35.6441 13.9137Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHurricane = forwardRef((props, ref) => {
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

CoreHurricane.displayName = 'CoreHurricane'

export default CoreHurricane
