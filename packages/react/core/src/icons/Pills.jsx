
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M27.2011 45.0001C21.7338 50.4674 21.7338 59.3317 27.2011 64.7991C32.6684 70.2664 41.5327 70.2664 47.0001 64.7991L56.8996 54.8996L66.7991 45.0001C72.2664 39.5327 72.2664 30.6684 66.7991 25.2011C61.3317 19.7338 52.4674 19.7338 47.0001 25.2011L37.1006 35.1006L27.2011 45.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56.8996 54.9006L37.1006 35.1016"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.9998 11C23.1824 11 26.2348 12.2644 28.4853 14.5148C30.7356 16.7652 32 19.8175 32 23C32 26.1825 30.7356 29.2348 28.4853 31.4852C26.2348 33.7356 23.1824 35 19.9998 35C16.8173 35 13.765 33.7357 11.5147 31.4853C9.26426 29.235 8 26.1825 8 23C8 19.8175 9.26426 16.765 11.5146 14.5146C13.765 12.2643 16.8173 11 19.9998 11Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 23L32 23"
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
            d="M28.4854 14.5148C26.2349 12.2644 23.1825 11 19.9999 11C16.8174 11 13.7651 12.2643 11.5147 14.5146C9.98615 16.0432 8.91255 17.9419 8.3811 20L31.6191 20C31.0876 17.942 30.0139 16.0434 28.4854 14.5148Z"
            fill="currentColor"
          />
          <path
            d="M31.619 26L8.38111 26C8.91255 28.0581 9.98615 29.9568 11.5147 31.4853C13.7651 33.7357 16.8174 35 19.9999 35C23.1825 35 26.2349 33.7356 28.4854 31.4852C30.0139 29.9566 31.0876 28.058 31.619 26Z"
            fill="currentColor"
          />
          <path
            d="M47.0001 25.2014C52.4674 19.7341 61.3317 19.7341 66.7991 25.2014C72.2664 30.6688 72.2664 39.5331 66.7991 45.0004L59.021 52.7785C59.0209 52.7785 59.021 52.7786 59.021 52.7785L39.222 32.9795L47.0001 25.2014Z"
            fill="currentColor"
          />
          <path
            d="M34.9793 37.2222L27.2011 45.0004C21.7338 50.4677 21.7338 59.3321 27.2011 64.7994C32.6684 70.2667 41.5328 70.2667 47.0001 64.7994L54.7783 57.0212C54.7784 57.0212 54.7783 57.0211 54.7783 57.0212L34.9793 37.2222Z"
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
            d="M27.201 45.0009C21.7337 50.4682 21.7337 59.3325 27.201 64.7999C32.6683 70.2672 41.5327 70.2672 47 64.7999L56.8995 54.9004L37.1005 35.1014L27.201 45.0009Z"
            fill="#EB5757"
          />
          <path
            d="M56.8995 54.9004L58.3137 56.3146C59.0948 55.5336 59.0948 54.2672 58.3137 53.4862L56.8995 54.9004ZM37.1005 35.1014L38.5147 33.6872C37.7337 32.9061 36.4673 32.9061 35.6863 33.6872L37.1005 35.1014ZM28.6152 63.3857C23.9289 58.6994 23.9289 51.1014 28.6152 46.4151L25.7868 43.5867C19.5384 49.8351 19.5384 59.9657 25.7868 66.2141L28.6152 63.3857ZM45.5858 63.3857C40.8995 68.072 33.3015 68.072 28.6152 63.3857L25.7868 66.2141C32.0352 72.4625 42.1658 72.4625 48.4142 66.2141L45.5858 63.3857ZM55.4853 53.4862L45.5858 63.3857L48.4142 66.2141L58.3137 56.3146L55.4853 53.4862ZM35.6863 36.5156L55.4853 56.3146L58.3137 53.4862L38.5147 33.6872L35.6863 36.5156ZM28.6152 46.4151L38.5147 36.5156L35.6863 33.6872L25.7868 43.5867L28.6152 46.4151Z"
            fill="#E0E0E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.9999 25.2022C52.4673 19.7349 61.3316 19.7349 66.7989 25.2022C72.2662 30.6696 72.2662 39.5339 66.7989 45.0012L56.8994 54.9007L37.1004 35.1017L46.9999 25.2022Z"
            fill="#F2F2F2"
          />
          <path
            d="M56.8994 54.9007L58.3136 56.3149C57.5326 57.096 56.2662 57.096 55.4852 56.3149L56.8994 54.9007ZM37.1004 35.1017L35.6862 36.5159C34.9052 35.7349 34.9052 34.4686 35.6862 33.6875L37.1004 35.1017ZM65.3847 26.6164C60.6984 21.9302 53.1004 21.9302 48.4141 26.6164L45.5857 23.788C51.8341 17.5396 61.9647 17.5396 68.2131 23.788L65.3847 26.6164ZM65.3847 43.587C70.071 38.9007 70.071 31.3027 65.3847 26.6164L68.2131 23.788C74.4615 30.0364 74.4615 40.167 68.2131 46.4154L65.3847 43.587ZM55.4852 53.4865L65.3847 43.587L68.2131 46.4154L58.3136 56.3149L55.4852 53.4865ZM38.5146 33.6875L58.3136 53.4865L55.4852 56.3149L35.6862 36.5159L38.5146 33.6875ZM48.4141 26.6164L38.5146 36.5159L35.6862 33.6875L45.5857 23.788L48.4141 26.6164Z"
            fill="#E0E0E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9998 11C23.1824 11 26.2348 12.2644 28.4853 14.5148C30.7356 16.7652 32 19.8175 32 23C32 26.1825 30.7356 29.2348 28.4853 31.4852C26.2348 33.7356 23.1824 35 19.9998 35C16.8173 35 13.765 33.7357 11.5147 31.4853C9.26426 29.235 8 26.1825 8 23C8 19.8175 9.26426 16.765 11.5146 14.5146C13.765 12.2643 16.8173 11 19.9998 11Z"
            fill="#F2F2F2"
          />
          <path
            d="M12.9289 15.9289C14.8042 14.0535 17.3477 13 19.9998 13L19.9998 9C16.2869 9 12.7259 10.475 10.1004 13.1004L12.9289 15.9289ZM10 23C10 20.3479 11.0536 17.8042 12.9289 15.9289L10.1004 13.1004C7.47494 15.7259 6 19.2871 6 23L10 23ZM12.9289 30.0711C11.0536 28.1958 10 25.6521 10 23L6 23C6 26.7129 7.47494 30.2741 10.1004 32.8996L12.9289 30.0711ZM19.9998 33C17.3477 33 14.8042 31.9465 12.9289 30.0711L10.1004 32.8996C12.7259 35.525 16.2869 37 19.9998 37L19.9998 33ZM27.071 30.0709C25.1957 31.9463 22.652 33 19.9998 33L19.9998 37C23.7129 37 27.274 35.5249 29.8995 32.8994L27.071 30.0709ZM30 23C30 25.652 28.9464 28.1956 27.071 30.0709L29.8995 32.8994C32.5249 30.274 34 26.713 34 23L30 23ZM27.071 15.9291C28.9464 17.8044 30 20.348 30 23L34 23C34 19.287 32.5249 15.726 29.8995 13.1006L27.071 15.9291ZM29.8995 13.1006C27.274 10.4751 23.7129 9 19.9998 9L19.9998 13C22.652 13 25.1957 14.0537 27.071 15.9291L29.8995 13.1006Z"
            fill="#E0E0E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.16779 21L31.8322 21C31.9432 21.6565 32 22.3253 32 23C32 23.6746 31.9432 24.3435 31.8322 25L8.16779 25C8.05681 24.3434 8 23.6746 8 23C8 22.3253 8.05681 21.6565 8.16779 21Z"
            fill="#E0E0E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M27.201 45.0004C21.7337 50.4677 21.7337 59.3321 27.201 64.7994C32.6683 70.2667 41.5327 70.2667 47 64.7994L56.8995 54.8999L37.1005 35.1009L27.201 45.0004Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 25.2014C52.4673 19.7341 61.3316 19.7341 66.799 25.2014C72.2663 30.6688 72.2663 39.5331 66.799 45.0004L56.8995 54.8999L37.1005 35.1009L47 25.2014Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.9998 11C23.1824 11 26.2348 12.2644 28.4853 14.5148C30.7356 16.7652 32 19.8175 32 23C32 26.1825 30.7356 29.2348 28.4853 31.4852C26.2348 33.7356 23.1824 35 19.9998 35C16.8173 35 13.765 33.7357 11.5147 31.4853C9.26426 29.235 8 26.1825 8 23C8 19.8175 9.26426 16.765 11.5146 14.5146C13.765 12.2643 16.8173 11 19.9998 11Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56.8995 54.8999L47 64.7994C41.5327 70.2667 32.6683 70.2667 27.201 64.7994C21.7337 59.3321 21.7337 50.4677 27.201 45.0004L37.1005 35.1009M56.8995 54.8999L37.1005 35.1009M56.8995 54.8999L66.799 45.0004C72.2663 39.5331 72.2663 30.6688 66.799 25.2014C61.3316 19.7341 52.4673 19.7341 47 25.2014L37.1005 35.1009M8 23C8 19.8175 9.26426 16.765 11.5146 14.5146C13.765 12.2643 16.8173 11 19.9998 11C23.1824 11 26.2348 12.2644 28.4853 14.5148C30.7356 16.7652 32 19.8175 32 23M8 23C8 26.1825 9.26426 29.235 11.5147 31.4853C13.765 33.7357 16.8173 35 19.9998 35C23.1824 35 26.2348 33.7356 28.4853 31.4852C30.7356 29.2348 32 26.1825 32 23M8 23L32 23"
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
            d="M34 23C34 19.287 32.5249 15.726 29.8995 13.1006C27.274 10.4751 23.7129 9 19.9998 9C16.2869 9 12.7259 10.475 10.1004 13.1004C7.47494 15.7259 6 19.2871 6 23C6 26.7129 7.47494 30.2741 10.1004 32.8996C12.7259 35.525 16.2869 37 19.9998 37C23.7129 37 27.274 35.5249 29.8995 32.8994C32.5241 30.2747 33.9991 26.715 34 23.0032V23ZM29.798 25L10.202 25C10.5913 26.9069 11.5322 28.6744 12.9289 30.0711C14.8042 31.9465 17.3477 33 19.9998 33C22.652 33 25.1957 31.9463 27.071 30.0709C28.4678 28.6742 29.4087 26.9068 29.798 25ZM10.202 21L29.798 21C29.4087 19.0932 28.4678 17.3258 27.071 15.9291C25.1957 14.0537 22.652 13 19.9998 13C17.3477 13 14.8042 14.0535 12.9289 15.9289C11.5321 17.3256 10.5913 19.0931 10.202 21Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.2132 46.4146C74.4616 40.1662 74.4616 30.0356 68.2132 23.7872C61.9648 17.5388 51.8342 17.5388 45.5858 23.7872L25.7868 43.5862C19.5384 49.8346 19.5384 59.9652 25.7868 66.2136C32.0352 72.462 42.1658 72.462 48.4142 66.2136L68.2132 46.4146ZM28.6152 46.4146C23.9289 51.1009 23.9289 58.6989 28.6152 63.3852C33.3015 68.0715 40.8995 68.0715 45.5858 63.3852L54.0711 54.8999L37.1005 37.9293L28.6152 46.4146ZM39.9289 35.1009L56.8995 52.0715L65.3848 43.5862C70.0711 38.8999 70.0711 31.3019 65.3848 26.6156C60.6985 21.9293 53.1005 21.9293 48.4142 26.6156L39.9289 35.1009Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePills = forwardRef((props, ref) => {
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

CorePills.displayName = 'CorePills'

export default CorePills
