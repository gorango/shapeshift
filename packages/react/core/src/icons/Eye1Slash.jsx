
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M71.03 39.7359C69.8997 37.3183 68.4799 35.0186 66.7828 32.8905C60.2866 24.7445 50.4345 20 40.0154 20C29.5963 20 19.7442 24.7445 13.248 32.8905C11.5505 35.0191 10.1304 37.3195 9 39.7377"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M71.03 39.7358C69.8996 42.1541 68.4795 44.4544 66.782 46.583C60.2858 54.729 50.4337 59.4736 40.0146 59.4736C29.5955 59.4736 19.7434 54.729 13.2472 46.583C11.5501 44.4549 10.1302 42.1552 9 39.7376"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.8821 22.2225C27.6899 22.4387 27.5029 22.6606 27.3215 22.8881C24.2443 26.7467 23.0917 31.7966 24.19 36.6082C25.2882 41.4199 28.5177 45.4695 32.9643 47.6109C37.4109 49.7523 42.5907 49.7523 47.0373 47.6109C51.4839 45.4695 54.7134 41.4199 55.8116 36.6082C56.9098 31.7966 55.7572 26.7467 52.6801 22.8881C52.4932 22.6538 52.3005 22.4254 52.1022 22.2031"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.7496 28.2363C30.9274 29.6604 30.4736 31.2971 30.4736 32.9985C30.4736 36.4008 32.2885 39.5448 35.2348 41.2463"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 64L64 16"
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
            d="M49.1016 23.8275C46.1859 22.9564 43.1293 22.5 40.0178 22.5C36.3414 22.5 32.7415 23.1372 29.3601 24.3429C29.3319 24.3775 29.3039 24.4123 29.2761 24.4472C26.6733 27.711 25.6984 31.9824 26.6273 36.0523C27.2049 38.5831 28.4796 40.8646 30.2654 42.6638L31.4617 41.4675C29.257 39.2448 27.9737 36.213 27.9737 32.9985C27.9737 30.8507 28.5469 28.7838 29.5846 26.9864C30.275 25.7907 31.8039 25.381 32.9997 26.0713C34.1954 26.7616 34.6051 28.2906 33.9148 29.4863C33.3082 30.5371 32.9737 31.7436 32.9737 32.9985C32.9737 34.8696 33.718 36.6347 34.9974 37.9318L49.1016 23.8275Z"
            fill="currentColor"
          />
          <path
            d="M26.7298 46.1994C24.2863 43.7423 22.5422 40.6242 21.7526 37.1649C20.7495 32.7701 21.3734 28.203 23.4377 24.2814C19.5566 26.4291 16.0828 29.336 13.248 32.8907C11.5505 35.0194 10.1304 37.3197 9 39.7379C10.1302 42.1555 11.5501 44.4552 13.2472 46.5834C15.2028 49.0356 17.4626 51.1797 19.9504 52.9788L26.7298 46.1994Z"
            fill="currentColor"
          />
          <path
            d="M29.3128 57.7585L35.8254 51.2459C39.9229 52.1834 44.2618 51.7227 48.122 49.8637C53.2541 47.3923 56.9814 42.7183 58.249 37.1649C58.8835 34.3848 58.867 31.5357 58.2466 28.8247L60.3664 26.7049C62.7412 28.4602 64.9026 30.533 66.7828 32.8907C68.4799 35.0188 69.8997 37.3186 71.03 39.7361C69.8996 42.1544 68.4795 44.4547 66.782 46.5834C60.2858 54.7293 50.4337 59.4739 40.0146 59.4739C36.3357 59.4739 32.7275 58.8824 29.3128 57.7585Z"
            fill="currentColor"
          />
          <path
            d="M53.7137 33.3576C53.6903 34.257 53.5781 35.1595 53.3743 36.0523C52.4454 40.1222 49.7137 43.5476 45.9526 45.3589C44.1822 46.2115 42.2744 46.6627 40.3586 46.7127L53.7137 33.3576Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.7678 14.2322C70.7441 15.2085 70.7441 16.7915 69.7678 17.7678L21.7678 65.7678C20.7915 66.7441 19.2085 66.7441 18.2322 65.7678C17.2559 64.7915 17.2559 63.2085 18.2322 62.2322L66.2322 14.2322C67.2085 13.2559 68.7915 13.2559 69.7678 14.2322Z"
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
            d="M71.03 39.7359C69.8996 42.1541 68.4795 44.4545 66.782 46.5831C60.2858 54.7291 50.4337 59.4736 40.0146 59.4736C29.5955 59.4736 19.7434 54.7291 13.2472 46.5831C11.5501 44.455 10.1302 42.1553 9 39.7377C10.1304 37.3195 11.5505 35.0191 13.248 32.8905C19.7442 24.7445 29.5963 20 40.0154 20C50.4345 20 60.2866 24.7445 66.7828 32.8905C68.4799 35.0186 69.8997 37.3183 71.03 39.7359Z"
            fill="#F2F2F2"
          />
          <path
            d="M71.03 39.7359L72.8418 40.5828L73.2377 39.7358L72.8418 38.8889L71.03 39.7359ZM66.782 46.5831L65.2183 45.3361L66.782 46.5831ZM13.2472 46.5831L14.8108 45.3361L14.8108 45.3361L13.2472 46.5831ZM9 39.7377L7.18817 38.8908L6.79226 39.7378L7.18822 40.5847L9 39.7377ZM13.248 32.8905L14.8117 34.1375L13.248 32.8905ZM66.7828 32.8905L65.2192 34.1375V34.1375L66.7828 32.8905ZM69.2182 38.889C68.1539 41.1658 66.8168 43.3317 65.2183 45.3361L68.3457 47.8301C70.1422 45.5773 71.6453 43.1425 72.8418 40.5828L69.2182 38.889ZM65.2183 45.3361C59.1016 53.0063 49.825 57.4736 40.0146 57.4736V61.4736C51.0423 61.4736 61.47 56.4519 68.3457 47.8301L65.2183 45.3361ZM40.0146 57.4736C30.2041 57.4736 20.9275 53.0063 14.8108 45.3361L11.6835 47.8301C18.5592 56.452 28.9868 61.4736 40.0146 61.4736V57.4736ZM14.8108 45.3361C13.2127 43.3322 11.8759 41.1669 10.8118 38.8907L7.18822 40.5847C8.38456 43.1437 9.88739 45.5779 11.6835 47.8301L14.8108 45.3361ZM11.6843 31.6435C9.88779 33.8963 8.38466 36.3311 7.18817 38.8908L10.8118 40.5846C11.8761 38.3078 13.2132 36.1419 14.8117 34.1375L11.6843 31.6435ZM40.0154 18C28.9877 18 18.56 23.0217 11.6843 31.6435L14.8117 34.1375C20.9284 26.4674 30.205 22 40.0154 22V18ZM68.3465 31.6435C61.4708 23.0217 51.0432 18 40.0154 18V22C49.8259 22 59.1025 26.4674 65.2192 34.1375L68.3465 31.6435ZM72.8418 38.8889C71.6454 36.3299 70.1426 33.8958 68.3465 31.6435L65.2192 34.1375C66.8173 36.1415 68.1541 38.3068 69.2182 40.5829L72.8418 38.8889Z"
            fill="#E0E0E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.8116 36.6086C54.7134 41.4203 51.4839 45.4699 47.0373 47.6113C42.5907 49.7527 37.4109 49.7527 32.9643 47.6113C28.5177 45.4699 25.2882 41.4203 24.19 36.6086C23.0917 31.797 24.2443 26.7471 27.3215 22.8885C27.5029 22.661 27.6899 22.4391 27.8821 22.2229C31.7136 20.7703 35.8197 20 40.0178 20C44.1972 20 48.2853 20.7634 52.1022 22.2035C52.3005 22.4258 52.4932 22.6542 52.6801 22.8885C55.7572 26.7471 56.9098 31.797 55.8116 36.6086Z"
            fill="#56CCF2"
          />
          <path
            d="M55.8116 36.6086L53.8618 36.1636V36.1636L55.8116 36.6086ZM32.9643 47.6113L33.8321 45.8094L32.9643 47.6113ZM24.19 36.6086L26.1398 36.1636L24.19 36.6086ZM27.3215 22.8885L25.7578 21.6415L25.7578 21.6415L27.3215 22.8885ZM27.8821 22.2229L27.1731 20.3528L26.7138 20.5269L26.3874 20.894L27.8821 22.2229ZM52.1022 22.2035L53.5947 20.8722L53.2678 20.5057L52.8082 20.3323L52.1022 22.2035ZM52.6801 22.8885L54.2438 21.6415L54.2438 21.6415L52.6801 22.8885ZM47.905 49.4133C52.9 47.0078 56.5278 42.4587 57.7615 37.0537L53.8618 36.1636C52.899 40.3818 50.0677 43.9321 46.1695 45.8094L47.905 49.4133ZM32.0965 49.4133C37.0915 51.8187 42.9101 51.8187 47.905 49.4133L46.1695 45.8094C42.2713 47.6867 37.7303 47.6867 33.8321 45.8094L32.0965 49.4133ZM22.2401 37.0537C23.4738 42.4587 27.1016 47.0078 32.0965 49.4133L33.8321 45.8094C29.9338 43.9321 27.1026 40.3818 26.1398 36.1636L22.2401 37.0537ZM25.7578 21.6415C22.3012 25.976 21.0064 31.6487 22.2401 37.0537L26.1398 36.1636C25.177 31.9454 26.1875 27.5182 28.8851 24.1355L25.7578 21.6415ZM26.3874 20.894C26.1715 21.1368 25.9616 21.386 25.7578 21.6415L28.8851 24.1355C29.0443 23.936 29.2082 23.7414 29.3767 23.5519L26.3874 20.894ZM28.5911 24.093C32.1988 22.7252 36.0648 22 40.0178 22V18C35.5746 18 31.2285 18.8153 27.1731 20.3528L28.5911 24.093ZM40.0178 22C43.9532 22 47.8023 22.7188 51.3962 24.0748L52.8082 20.3323C48.7683 18.808 44.4412 18 40.0178 18V22ZM54.2438 21.6415C54.0339 21.3784 53.8174 21.1219 53.5947 20.8722L50.6097 23.5349C50.7836 23.7298 50.9526 23.93 51.1164 24.1355L54.2438 21.6415ZM57.7615 37.0537C58.9951 31.6487 57.7004 25.976 54.2438 21.6415L51.1164 24.1355C53.8141 27.5182 54.8246 31.9454 53.8618 36.1636L57.7615 37.0537Z"
            fill="#56CCF2"
          />
          <path
            d="M33.4817 29.2363C34.0339 28.2797 33.7062 27.0565 32.7496 26.5043C31.793 25.952 30.5698 26.2798 30.0175 27.2364L33.4817 29.2363ZM34.2345 42.9782C35.1911 43.5306 36.4143 43.2031 36.9667 42.2466C37.5191 41.29 37.1915 40.0668 36.235 39.5144L34.2345 42.9782ZM32.4736 32.9985C32.4736 31.6543 32.832 30.3617 33.4817 29.2363L30.0175 27.2364C29.0229 28.9591 28.4736 30.9399 28.4736 32.9985H32.4736ZM36.235 39.5144C33.9074 38.1701 32.4736 35.6864 32.4736 32.9985H28.4736C28.4736 37.1153 30.6696 40.9194 34.2345 42.9782L36.235 39.5144Z"
            fill="#F2F2F2"
          />
          <path
            d="M16 64L64 16"
            stroke="#4F4F4F"
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
            d="M71.03 39.7359C69.8996 42.1541 68.4795 44.4545 66.782 46.5831C60.2858 54.7291 50.4337 59.4736 40.0146 59.4736C29.5955 59.4736 19.7434 54.7291 13.2472 46.5831C11.5501 44.455 10.1302 42.1553 9 39.7377C10.1304 37.3195 11.5505 35.0191 13.248 32.8905C19.7442 24.7445 29.5963 20 40.0154 20C50.4345 20 60.2866 24.7445 66.7828 32.8905C68.4799 35.0186 69.8997 37.3183 71.03 39.7359Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.8116 36.6084C54.7134 41.42 51.4839 45.4697 47.0373 47.6111C42.5907 49.7525 37.4109 49.7525 32.9643 47.6111C28.5177 45.4697 25.2882 41.42 24.19 36.6084C23.0917 31.7968 24.2443 26.7469 27.3215 22.8883C27.5029 22.6608 27.6899 22.4389 27.8821 22.2227C31.7137 20.77 35.8197 19.9998 40.0178 19.9998C44.1972 19.9998 48.2853 20.7632 52.1022 22.2033C52.3005 22.4256 52.4932 22.654 52.6801 22.8883C55.7573 26.7469 56.9099 31.7968 55.8116 36.6084Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.7497 28.2361C30.9276 29.6602 30.4737 31.2969 30.4737 32.9983C30.4737 36.4006 32.2887 39.5446 35.2349 41.2461M16 64L64 16M71.03 39.7359C69.8996 42.1541 68.4795 44.4545 66.782 46.5831C60.2858 54.7291 50.4337 59.4736 40.0146 59.4736C29.5955 59.4736 19.7434 54.7291 13.2472 46.5831C11.5501 44.455 10.1302 42.1553 9 39.7377C10.1304 37.3195 11.5505 35.0191 13.248 32.8905C19.7442 24.7445 29.5963 20 40.0154 20C50.4345 20 60.2866 24.7445 66.7828 32.8905C68.4799 35.0186 69.8997 37.3183 71.03 39.7359ZM47.0373 47.6111C51.4839 45.4697 54.7134 41.42 55.8116 36.6084C56.9099 31.7968 55.7573 26.7469 52.6801 22.8883C52.4932 22.654 52.3005 22.4256 52.1022 22.2033C48.2853 20.7632 44.1972 19.9998 40.0178 19.9998C35.8197 19.9998 31.7137 20.77 27.8821 22.2227C27.6899 22.4389 27.5029 22.6608 27.3215 22.8883C24.2443 26.7469 23.0917 31.7968 24.19 36.6084C25.2882 41.42 28.5177 45.4697 32.9643 47.6111C37.4109 49.7525 42.5907 49.7525 47.0373 47.6111Z"
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
            d="M65.3965 17.3964C66.1678 16.6252 66.1678 15.3747 65.3965 14.6034C64.6252 13.8321 63.3747 13.8321 62.6034 14.6034L55.6384 21.5684C54.8583 21.1954 54.0649 20.8502 53.2596 20.5337L53.2532 20.5266L52.7994 20.3554C48.7623 18.8321 44.4381 18.0247 40.0178 18.0247C38.9839 18.0247 37.9552 18.0689 36.9342 18.156C36.8067 18.1669 36.6793 18.1785 36.552 18.1907C33.2486 18.5078 30.0295 19.2754 26.9777 20.4533L26.7284 20.5478L26.7246 20.5521C20.9032 22.8493 15.7024 26.6449 11.7039 31.659C9.90854 33.9103 8.40645 36.3434 7.21079 38.9013L6.81982 39.7377L7.21084 40.5741C8.40635 43.1313 9.90814 45.5637 11.703 47.8144C14.3596 51.1457 17.5468 53.9391 21.0942 56.1126L14.6034 62.6034C13.8321 63.3746 13.8321 64.6251 14.6034 65.3964C15.3747 66.1677 16.6252 66.1677 17.3965 65.3964L24.7288 58.0642C29.4579 60.2663 34.6656 61.4485 40.0145 61.4485C51.0347 61.4485 61.4551 56.4303 68.3261 47.8144C70.1214 45.5632 71.6235 43.13 72.8191 40.5722L73.2101 39.7358L72.8191 38.8994C71.6236 36.3422 70.1218 33.9097 68.3269 31.659C65.7471 28.424 62.6668 25.6961 59.2423 23.5507L65.3965 17.3964ZM51.136 24.1196C51.072 24.0394 51.0073 23.96 50.9418 23.8814C47.4777 22.6343 43.7859 21.9749 40.0154 21.9749C39.021 21.9749 38.0322 22.0208 37.0515 22.1112C36.9353 22.1219 36.8192 22.1332 36.7032 22.1452C34.0715 22.4168 31.5016 23.0094 29.0464 23.8974C28.9855 23.9708 28.9252 24.0448 28.8656 24.1196C26.1632 27.5083 25.1509 31.9432 26.1154 36.1688C26.9457 39.8064 29.1629 42.9481 32.2551 44.9517L34.2493 42.9575L34.2471 42.9563C30.69 40.9019 28.4987 37.1061 28.4987 32.9982C28.4987 30.9441 29.0468 28.9676 30.0393 27.2486C30.5846 26.3039 31.7925 25.9803 32.7372 26.5256C33.6818 27.071 34.0055 28.2789 33.4601 29.2235C32.8082 30.3526 32.4487 31.6496 32.4487 32.9982C32.4487 35.695 33.8873 38.1871 36.2226 39.5358C36.5347 39.7161 36.7791 39.9687 36.9466 40.2602L51.9529 25.2539C51.7006 24.8646 51.4282 24.486 51.136 24.1196ZM14.7921 34.1218C17.0828 31.2493 19.8165 28.8256 22.8552 26.9171C21.7149 30.132 21.4874 33.6431 22.2645 37.0478C23.2618 41.4174 25.826 45.2268 29.413 47.7938L23.9769 53.2299C20.4874 51.231 17.3607 48.5737 14.7912 45.3516C13.3888 43.5931 12.1875 41.7104 11.1949 39.7376C12.1877 37.7641 13.3893 35.8809 14.7921 34.1218ZM27.7263 55.0667L33.0013 49.7917C37.7804 51.7841 43.2013 51.6504 47.8942 49.3904C52.8823 46.9883 56.5051 42.4454 57.7371 37.0478C58.5161 33.6348 58.2855 30.1149 57.138 26.8935C60.1918 28.8056 62.9385 31.2374 65.2387 34.1218C66.6411 35.8804 67.8424 37.7631 68.835 39.7359C67.8423 41.7093 66.6406 43.5926 65.2378 45.3516C59.1164 53.0277 49.8326 57.4985 40.0145 57.4985C35.7454 57.4985 31.5773 56.6532 27.7263 55.0667ZM46.1803 45.8316C43.0135 47.3566 39.4233 47.645 36.0964 46.6965L53.6976 29.0953C54.3465 31.3719 54.4261 33.8031 53.8861 36.1688C52.9216 40.3945 50.0854 43.951 46.1803 45.8316Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreEye1Slash = forwardRef((props, ref) => {
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

CoreEye1Slash.displayName = 'CoreEye1Slash'

export default CoreEye1Slash
