
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
            fill="#2E001F"
            stroke="#FF26BE"
            stroke-width={strokeWidth}
          />
          <path
            d="M41.4316 57.0165L32.9156 39.993L41.0487 22.951C41.202 22.6933 41.11 22.5 40.8649 22.5H35.9311C35.6357 22.5 35.5097 22.6997 35.3795 22.9188L29.7408 35.805L23.949 22.8866C23.8264 22.5966 23.7038 22.5322 23.3974 22.5322H18.1265C17.9426 22.5322 17.7587 22.7255 17.9426 22.9832L26.0635 39.993L17.59 57.0487C17.4368 57.242 17.4674 57.4998 17.7738 57.4998H22.8302C23.0754 57.4998 23.2286 57.4031 23.3818 57.1454L29.3424 43.7944L35.272 57.1132C35.4252 57.4353 35.5785 57.4998 35.9156 57.4998H41.2477C41.4929 57.4998 41.5848 57.2743 41.4316 57.0165Z"
            fill="#FF26BE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.2985 31.3263C47.7599 31.3263 43.0099 37.1895 43.0099 44.6957C43.0099 53.4583 47.7005 57.532 54.3504 57.4998C56.9245 57.4998 59.6807 57.163 62.2548 55.8744C62.4387 55.7778 62.5 55.7133 62.5 55.5201C62.3468 54.3281 62.3468 53.2328 62.3468 52.3629V22.7892C62.3468 22.6281 62.2855 22.5314 62.0403 22.5314H57.1985C57.0452 22.5314 56.892 22.6603 56.892 22.8536V31.3907C56.2791 31.3263 55.942 31.3263 55.2985 31.3263ZM55.1146 36.1264C55.8501 36.1264 56.463 36.2552 56.892 36.4485V52.3952C56.3098 52.6529 55.513 52.7495 54.7775 52.7495C51.3147 52.7495 48.5566 50.3656 48.5566 44.4379C48.5566 39.2513 51.2534 36.1264 55.1146 36.1264Z"
            fill="#FF26BE"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M56.892 36.4485C56.463 36.2552 55.8501 36.1264 55.1146 36.1264C51.2534 36.1264 48.5566 39.2513 48.5566 44.4379C48.5566 50.3656 51.3147 52.7495 54.7775 52.7495C55.513 52.7495 56.3098 52.6529 56.892 52.3952V36.4485Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 5H5V75H75V5ZM32.9156 39.993L41.4316 57.0165C41.5848 57.2743 41.4929 57.4998 41.2477 57.4998H35.9156C35.5785 57.4998 35.4252 57.4353 35.272 57.1132L29.3424 43.7944L23.3818 57.1454C23.2286 57.4031 23.0754 57.4998 22.8302 57.4998H17.7738C17.4674 57.4998 17.4368 57.242 17.59 57.0487L26.0635 39.993L17.9426 22.9832C17.7587 22.7255 17.9426 22.5322 18.1265 22.5322H23.3974C23.7038 22.5322 23.8264 22.5966 23.949 22.8866L29.7408 35.805L35.3795 22.9188C35.5097 22.6997 35.6357 22.5 35.9311 22.5H40.8649C41.11 22.5 41.202 22.6933 41.0487 22.951L32.9156 39.993ZM43.0099 44.6957C43.0099 37.1895 47.7599 31.3263 55.2985 31.3263C55.942 31.3263 56.2791 31.3263 56.892 31.3907V22.8536C56.892 22.6603 57.0452 22.5314 57.1985 22.5314H62.0403C62.2855 22.5314 62.3468 22.6281 62.3468 22.7892V52.3629C62.3468 53.2328 62.3468 54.3281 62.5 55.5201C62.5 55.7133 62.4387 55.7778 62.2548 55.8744C59.6807 57.163 56.9245 57.4998 54.3504 57.4998C47.7005 57.532 43.0099 53.4583 43.0099 44.6957Z"
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
            d="M41.4316 57.0165L32.9156 39.993L41.0487 22.951C41.202 22.6933 41.11 22.5 40.8649 22.5H35.9311C35.6357 22.5 35.5097 22.6997 35.3795 22.9188L29.7408 35.805L23.949 22.8866C23.8264 22.5966 23.7038 22.5322 23.3974 22.5322H18.1265C17.9426 22.5322 17.7587 22.7255 17.9426 22.9832L26.0635 39.993L17.59 57.0487C17.4368 57.242 17.4674 57.4998 17.7738 57.4998H22.8302C23.0754 57.4998 23.2286 57.4031 23.3818 57.1454L29.3424 43.7944L35.272 57.1132C35.4252 57.4353 35.5785 57.4998 35.9156 57.4998H41.2477C41.4929 57.4998 41.5848 57.2743 41.4316 57.0165Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.2985 31.3263C47.7599 31.3263 43.0099 37.1895 43.0099 44.6957C43.0099 53.4583 47.7005 57.532 54.3504 57.4998C56.9245 57.4998 59.6807 57.163 62.2548 55.8744C62.4387 55.7778 62.5 55.7133 62.5 55.5201C62.3468 54.3281 62.3468 53.2328 62.3468 52.3629V22.7892C62.3468 22.6281 62.2855 22.5314 62.0403 22.5314H57.1985C57.0452 22.5314 56.892 22.6603 56.892 22.8536V31.3907C56.2791 31.3263 55.942 31.3263 55.2985 31.3263ZM55.1146 36.1264C55.8501 36.1264 56.463 36.2552 56.892 36.4485V52.3952C56.3098 52.6529 55.513 52.7495 54.7775 52.7495C51.3147 52.7495 48.5566 50.3656 48.5566 44.4379C48.5566 39.2513 51.2534 36.1264 55.1146 36.1264Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsAdobeXd = forwardRef((props, ref) => {
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

BrandsAdobeXd.displayName = 'BrandsAdobeXd'

export default BrandsAdobeXd
