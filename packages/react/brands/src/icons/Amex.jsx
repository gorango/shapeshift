
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M4.4375 33.8443L6.98256 27.9434H11.384L12.8284 31.2488V27.9434H18.2998L19.1596 30.3324L19.9931 27.9434H44.5539V29.1444C44.5539 29.1444 45.8451 27.9434 47.967 27.9434L55.9361 27.971L57.3555 31.2333V27.9434H61.9342L63.1944 29.8172V27.9434H67.8152V38.5441H63.1944L61.9868 36.6641V38.5441H55.2596L54.5831 36.8731H52.7745L52.1091 38.5441H47.5468C45.7211 38.5441 44.5539 37.3677 44.5539 37.3677V38.5441H37.6753L36.3101 36.8731V38.5441H10.732L10.0559 36.8731H8.25317L7.5819 38.5441H4.4375V33.8443Z"
            fill="white"
          />
          <path
            d="M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z"
            fill="#016FD0"
          />
          <path
            d="M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z"
            fill="#016FD0"
          />
          <path
            d="M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z"
            fill="#016FD0"
          />
          <path
            d="M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z"
            fill="#016FD0"
          />
          <path
            d="M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z"
            fill="#016FD0"
          />
          <path
            d="M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z"
            fill="#016FD0"
          />
          <path
            d="M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z"
            fill="#016FD0"
          />
          <path
            d="M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z"
            fill="#016FD0"
          />
          <path
            d="M17.6182 52.4368V41.8359H28.9044L30.1153 43.4059L31.3662 41.8359H72.332V51.7057C72.332 51.7057 71.2607 52.4261 70.0215 52.4368H47.338L45.9728 50.7657V52.4368H41.499V49.5843C41.499 49.5843 40.8879 49.9824 39.5667 49.9824H38.0439V52.4368H31.2705L30.0612 50.8332L28.8336 52.4368H17.6182Z"
            fill="white"
          />
          <path
            d="M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z"
            fill="#016FD0"
          />
          <path
            d="M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z"
            fill="#016FD0"
          />
          <path
            d="M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z"
            fill="#016FD0"
          />
          <path
            d="M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z"
            fill="#016FD0"
          />
          <path
            d="M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z"
            fill="#016FD0"
          />
          <path
            d="M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8687 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7793 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z"
            fill="#016FD0"
          />
          <path
            d="M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z"
            fill="#016FD0"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z"
            fill="currentColor"
          />
          <path
            d="M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z"
            fill="currentColor"
          />
          <path
            d="M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z"
            fill="currentColor"
          />
          <path
            d="M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z"
            fill="currentColor"
          />
          <path
            d="M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z"
            fill="currentColor"
          />
          <path
            d="M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z"
            fill="currentColor"
          />
          <path
            d="M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z"
            fill="currentColor"
          />
          <path
            d="M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z"
            fill="currentColor"
          />
          <path
            d="M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z"
            fill="currentColor"
          />
          <path
            d="M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z"
            fill="currentColor"
          />
          <path
            d="M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z"
            fill="currentColor"
          />
          <path
            d="M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z"
            fill="currentColor"
          />
          <path
            d="M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z"
            fill="currentColor"
          />
          <path
            d="M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8686 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7794 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z"
            fill="currentColor"
          />
          <path
            d="M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8687 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7794 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsAmex = forwardRef((props, ref) => {
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

BrandsAmex.displayName = 'BrandsAmex'

export default BrandsAmex
