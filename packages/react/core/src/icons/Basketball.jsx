
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M28.455 12.6865C35.6991 9.68589 43.8384 9.68589 51.0824 12.6865C58.3265 15.6871 64.0819 21.4424 67.0824 28.6865C70.083 35.9305 70.083 44.0698 67.0824 51.3139C64.0819 58.5579 58.3265 64.3133 51.0824 67.3139C43.8384 70.3145 35.6991 70.3145 28.455 67.3139C21.211 64.3133 15.4556 58.5579 12.455 51.3139C9.45444 44.0698 9.45444 35.9305 12.455 28.6865C15.4556 21.4424 21.211 15.6871 28.455 12.6865Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.7683 10.436V69.5643"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.3329 40L10.2046 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.7193 62.6088C23.4173 59.8988 25.5901 56.6652 27.0819 53.0637C30.0825 45.8196 30.0825 37.6803 27.0819 30.4363C25.254 26.0234 22.4039 22.1629 18.8176 19.1411"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.7195 19.1411C57.133 22.163 54.2827 26.0235 52.4548 30.4366C49.4542 37.6806 49.4542 45.82 52.4548 53.064C53.9467 56.6657 56.1195 59.8994 58.8178 62.6095"
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
            d="M12.4552 51.3136C11.2151 48.3197 10.4875 45.173 10.2725 41.9997H27.3313C27.2996 45.502 26.6006 48.9998 25.2343 52.2984C23.8306 55.6871 21.7804 58.7264 19.2327 61.2673C16.342 58.476 14.0227 55.0979 12.4552 51.3136Z"
            fill="currentColor"
          />
          <path
            d="M22.3021 63.8526C24.1922 65.2368 26.255 66.4022 28.4552 67.3136C31.4489 68.5536 34.5954 69.2812 37.7685 69.4963V41.9997H31.3315C31.2997 46.0224 30.4991 50.0404 28.9298 53.8291C27.3676 57.6005 25.1062 60.9939 22.3021 63.8526Z"
            fill="currentColor"
          />
          <path
            d="M31.1089 37.9997H37.7685V10.5035C34.5954 10.7186 31.4489 11.4461 28.4552 12.6862C21.2112 15.6868 15.4558 21.4421 12.4552 28.6862C11.2152 31.6799 10.4876 34.8265 10.2725 37.9997L27.0762 37.9997C26.7582 35.6837 26.1442 33.3985 25.2343 31.2017C23.5172 27.0565 20.8327 23.4341 17.4537 20.6074C18.3322 19.5965 19.2784 18.6465 20.2856 17.7639C24.0303 20.9671 27.0088 25.0333 28.9298 29.671C30.043 32.3585 30.7694 35.1615 31.1089 37.9997Z"
            fill="currentColor"
          />
          <path
            d="M51.0826 67.3136C48.0887 68.5537 44.9419 69.2813 41.7685 69.4963V41.9997H48.2054C48.2372 46.0224 49.0377 50.0405 50.607 53.8291C52.1693 57.6007 54.4309 60.9942 57.2352 63.8531C55.3453 65.237 53.2826 66.4023 51.0826 67.3136Z"
            fill="currentColor"
          />
          <path
            d="M60.3047 61.2677C63.1955 58.4764 65.515 55.0981 67.0826 51.3136C70.0832 44.0695 70.0832 35.9302 67.0826 28.6862C64.082 21.4421 58.3267 15.6868 51.0826 12.6862C48.0887 11.4461 44.9419 10.7185 41.7685 10.5034V37.9997H48.4279C48.7674 35.1615 49.4938 32.3585 50.607 29.671C52.5281 25.0332 55.5068 20.9669 59.2516 17.7636C60.2588 18.6461 61.205 19.5962 62.0836 20.607C58.7043 23.4338 56.0197 27.0563 54.3026 31.2017C53.3926 33.3986 52.7786 35.6837 52.4606 37.9997L69.2652 37.9997C69.3555 39.3315 69.3555 40.6679 69.2653 41.9997H52.2055C52.2372 45.502 52.9362 48.9998 54.3026 52.2984C55.7063 55.6873 57.7567 58.7268 60.3047 61.2677Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M28.4551 12.6863C35.6991 9.68571 43.8385 9.68571 51.0825 12.6863C58.3266 15.6869 64.0819 21.4422 67.0825 28.6863C70.0831 35.9303 70.0831 44.0697 67.0825 51.3137C64.0819 58.5578 58.3266 64.3131 51.0825 67.3137C43.8385 70.3143 35.6991 70.3143 28.4551 67.3137C21.211 64.3131 15.4557 58.5578 12.4551 51.3137C9.45451 44.0697 9.45451 35.9303 12.4551 28.6863C15.4557 21.4422 21.211 15.6869 28.4551 12.6863Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2723 38L37.7685 38V10.5038C39.1003 10.4135 40.4367 10.4135 41.7685 10.5037V38L69.2652 38C69.3554 39.3318 69.3555 40.6682 69.2652 42H41.7685V69.4966C40.4367 69.5869 39.1003 69.5869 37.7685 69.4966V42H10.2723C10.182 40.6682 10.182 39.3318 10.2723 38Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.2325 61.2675C21.7802 58.7267 23.8305 55.6873 25.2342 52.2985C28.0318 45.5445 28.0318 37.9558 25.2342 31.2018C23.5172 27.0566 20.8327 23.4342 17.4536 20.6075C18.3321 19.5966 19.2784 18.6466 20.2856 17.764C24.0302 20.9672 27.0087 25.0334 28.9297 29.6711C32.1333 37.4052 32.1333 46.0951 28.9297 53.8292C27.3676 57.6006 25.106 60.9941 22.3019 63.8529C21.2199 63.0605 20.1945 62.1965 19.2325 61.2675ZM59.2515 17.7637C55.5067 20.967 52.5281 25.0333 50.607 29.6711C47.4034 37.4052 47.4034 46.0951 50.607 53.8292C52.1692 57.6008 54.4309 60.9944 57.2352 63.8532C58.3172 63.0609 59.3425 62.1969 60.3046 61.2679C57.7567 58.727 55.7063 55.6875 54.3025 52.2985C51.5049 45.5445 51.5049 37.9558 54.3025 31.2018C56.0196 27.0564 58.7043 23.4339 62.0835 20.6071C61.205 19.5963 60.2588 18.6462 59.2515 17.7637Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M28.6863 12.6865C35.9304 9.68589 44.0697 9.68589 51.3138 12.6865C58.5578 15.6871 64.3132 21.4424 67.3138 28.6865C70.3143 35.9305 70.3143 44.0698 67.3138 51.3139C64.3132 58.5579 58.5578 64.3133 51.3138 67.3139C44.0697 70.3145 35.9304 70.3145 28.6863 67.3139C21.4423 64.3133 15.6869 58.5579 12.6863 51.3139C9.68577 44.0698 9.68576 35.9305 12.6863 28.6865C15.6869 21.4424 21.4423 15.6871 28.6863 12.6865Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.9505 62.6092C17.3643 59.5874 14.5142 55.7268 12.6863 51.3139C9.68577 44.0698 9.68576 35.9305 12.6863 28.6865C14.1782 25.0849 16.3508 21.8515 19.0489 19.1415C22.6351 22.1633 25.4853 26.0238 27.3132 30.4367C30.3137 37.6807 30.3137 45.82 27.3132 53.0641C25.8213 56.6656 23.6486 59.8992 20.9505 62.6092Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.9506 19.1412C63.6489 21.8512 65.8219 25.0848 67.3138 28.6865C70.3143 35.9305 70.3143 44.0698 67.3138 51.3139C65.4858 55.727 62.6354 59.5877 59.0489 62.6096C56.3507 59.8995 54.1778 56.6658 52.6859 53.0641C49.6854 45.82 49.6854 37.6807 52.6859 30.4367C54.5139 26.0236 57.3642 22.163 60.9506 19.1412Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12.6863 28.6865C15.6869 21.4424 21.4423 15.6871 28.6863 12.6865C35.9304 9.68589 44.0697 9.68589 51.3138 12.6865C58.5578 15.6871 64.3132 21.4424 67.3138 28.6865M12.6863 28.6865C9.68576 35.9305 9.68577 44.0698 12.6863 51.3139M12.6863 28.6865C14.1782 25.0849 16.3508 21.8515 19.0489 19.1415C22.6351 22.1633 25.4853 26.0238 27.3132 30.4367C30.3137 37.6807 30.3137 45.82 27.3132 53.0641C25.8213 56.6656 23.6486 59.8992 20.9505 62.6092C17.3643 59.5874 14.5142 55.7268 12.6863 51.3139M12.6863 51.3139C15.6869 58.5579 21.4423 64.3133 28.6863 67.3139C35.9304 70.3145 44.0697 70.3145 51.3138 67.3139C58.5578 64.3133 64.3132 58.5579 67.3138 51.3139M67.3138 51.3139C70.3143 44.0698 70.3143 35.9305 67.3138 28.6865M67.3138 51.3139C65.4858 55.727 62.6354 59.5877 59.0489 62.6096C56.3507 59.8995 54.1778 56.6658 52.6859 53.0641C49.6854 45.82 49.6854 37.6807 52.6859 30.4367C54.5139 26.0236 57.3642 22.163 60.9506 19.1412C63.6489 21.8513 65.8219 25.0848 67.3138 28.6865M39.9997 10.436V69.5643M69.5641 40L10.4358 40"
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
            d="M27.6897 10.8387C35.4238 7.63514 44.1137 7.63514 51.8478 10.8387C59.5819 14.0423 65.7266 20.187 68.9302 27.9211C72.1338 35.6552 72.1338 44.3451 68.9302 52.0793C65.7266 59.8134 59.5819 65.9581 51.8478 69.1616C44.1137 72.3652 35.4238 72.3652 27.6897 69.1616C19.9556 65.9581 13.8108 59.8134 10.6073 52.0793C7.4037 44.3452 7.4037 35.6552 10.6073 27.9211C13.8108 20.187 19.9556 14.0423 27.6897 10.8387ZM50.3171 14.5342C47.5683 13.3956 44.6812 12.7204 41.7684 12.5086V38H48.4277C48.7673 35.1618 49.4936 32.3588 50.6069 29.6713C52.2662 25.6654 54.7145 22.0859 57.764 19.1207C55.5618 17.2226 53.0534 15.6676 50.3171 14.5342ZM60.5968 21.9454C57.9132 24.5433 55.7594 27.6844 54.3024 31.202C53.3924 33.3989 52.7784 35.684 52.4604 38L67.2602 38C67.0484 35.0874 66.3732 32.2005 65.2347 29.4518C64.0911 26.6909 62.5182 24.1619 60.5968 21.9454ZM48.2052 42H41.7684V67.4917C44.6812 67.2799 47.5683 66.6047 50.3171 65.4661C52.2979 64.6457 54.1593 63.6043 55.8716 62.3717C53.6923 59.8465 51.9073 56.9689 50.6069 53.8294C49.0375 50.0408 48.237 46.0227 48.2052 42ZM58.9402 59.8051C57.0188 57.5887 55.446 55.0597 54.3024 52.2987C52.9361 49.0001 52.237 45.5023 52.2053 42H67.2603C67.0485 44.9127 66.3733 47.7998 65.2347 50.5485C63.7776 54.0661 61.6239 57.2073 58.9402 59.8051ZM29.2204 14.5342C31.969 13.3957 34.8558 12.7205 37.7684 12.5087V38H31.1087C30.7692 35.1618 30.0428 32.3588 28.9296 29.6713C27.2704 25.6656 24.8222 22.0863 21.773 19.1211C23.9752 17.2229 26.4839 15.6677 29.2204 14.5342ZM18.9402 21.946C17.019 24.1623 15.4463 26.6911 14.3028 29.4518C13.1643 32.2005 12.4891 35.0874 12.2772 38L27.076 38C26.758 35.684 26.144 33.3989 25.2341 31.202C23.7771 27.6846 21.6236 24.5437 18.9402 21.946ZM27.3311 42H12.2772C12.489 44.9127 13.1642 47.7998 14.3028 50.5485C15.7597 54.0659 17.9133 57.2068 20.5967 59.8046C22.5179 57.5883 24.0905 55.0594 25.2341 52.2987C26.6004 49.0001 27.2994 45.5023 27.3311 42ZM23.6653 62.3713C25.3777 63.604 27.2394 64.6456 29.2204 65.4661C31.969 66.6046 34.8558 67.2798 37.7684 67.4917V42H31.3313C31.2995 46.0227 30.4989 50.0407 28.9296 53.8294C27.6293 56.9687 25.8444 59.8461 23.6653 62.3713Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBasketball = forwardRef((props, ref) => {
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

CoreBasketball.displayName = 'CoreBasketball'

export default CoreBasketball
