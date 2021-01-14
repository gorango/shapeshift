
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M57.0721 21.5793C61.1503 23.8905 64.1252 27.7036 65.3496 32.1892C65.8878 34.1608 66.0686 36.1918 65.9039 38.1936C66.7655 38.7008 67.5692 39.3145 68.2944 40.0264L68.3765 40.107C70.6943 42.3821 72 45.4935 72 48.7412C72 51.9889 70.6943 55.1003 68.3765 57.3754L68.2944 57.456C65.9809 59.7269 62.8686 60.9992 59.6269 60.9992H56.811C56.8012 60.9999 56.7913 61.0003 56.7813 61.0003H23.2203C23.2179 61.0003 23.2154 61.0002 23.2129 61.0002H20.3731C17.1314 61.0002 14.0191 59.728 11.7056 57.4571L11.6235 57.3764C9.30573 55.1013 8 51.99 8 48.7422C8 45.4945 9.30573 42.3831 11.6235 40.1081L11.7056 40.0274C13.5867 38.1809 15.9959 36.9947 18.5734 36.6158C18.6316 36.2446 18.7097 35.8751 18.8078 35.5089C19.5518 32.731 21.3869 30.3669 23.9092 28.9375C26.4315 27.508 29.4348 27.1301 32.2576 27.8866C32.3398 27.9086 32.4218 27.9316 32.5033 27.9554C34.9144 23.9183 38.8423 20.9727 43.4291 19.7663C47.9988 18.5644 52.8504 19.1867 56.9286 21.498L57.0721 21.5793Z"
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
            d="M57.0644 21.5748C60.6954 23.6326 63.344 27.0276 64.4342 31.0213C65.0248 33.1848 65.132 35.4286 64.7757 37.6053C66.0682 38.1968 67.261 39.0119 68.2944 40.0262L68.3765 40.1069C70.6943 42.382 72 45.4933 72 48.7411C72 51.9888 70.6943 55.1002 68.3765 57.3753L68.2944 57.4559C65.9809 59.7268 62.8686 60.999 59.6269 60.999H56.8111C56.8012 60.9998 56.7913 61.0002 56.7813 61.0002L23.2203 61.0002C23.2179 61.0002 23.2154 61.0001 23.2129 61.0001H20.3731C17.1314 61.0001 14.0191 59.7278 11.7056 57.457L11.6235 57.3763C9.30573 55.1012 8 51.9899 8 48.7421C8 45.4944 9.30573 42.383 11.6235 40.1079L11.7056 40.0273C13.5867 38.1808 15.9959 36.9946 18.5734 36.6157C18.6316 36.2445 18.7097 35.875 18.8078 35.5088C19.5518 32.7309 21.3869 30.3668 23.9092 28.9374C26.4315 27.5079 29.4348 27.13 32.2576 27.8864C32.9854 28.0815 33.686 28.3479 34.3501 28.6786L35.1356 27.3431C37.2774 23.7018 40.7991 21.0438 44.9174 19.9607C48.986 18.8906 53.3056 19.4446 56.9366 21.5024L57.0644 21.5748Z"
            fill="currentColor"
          />
          <path
            d="M64.4342 31.0213L66.3636 30.4946L64.4342 31.0213ZM57.0644 21.5748L56.0783 23.3148L56.0783 23.3148L57.0644 21.5748ZM64.7757 37.6053L62.802 37.2822L62.5554 38.7887L63.9435 39.4239L64.7757 37.6053ZM68.2944 40.0262L66.8933 41.4535L68.2944 40.0262ZM68.3765 40.1069L69.7776 38.6796L68.3765 40.1069ZM68.3765 57.3753L66.9755 55.948L66.9755 55.948L68.3765 57.3753ZM68.2944 57.4559L69.6954 58.8832L69.6954 58.8832L68.2944 57.4559ZM56.8111 60.999V58.999H56.7358L56.6608 59.0047L56.8111 60.999ZM23.2129 61.0001L23.2501 59.0004L23.2315 59.0001H23.2129V61.0001ZM11.7056 57.457L10.3046 58.8842L10.3046 58.8843L11.7056 57.457ZM11.6235 57.3763L13.0245 55.949L13.0245 55.949L11.6235 57.3763ZM11.6235 40.1079L13.0245 41.5352L13.0245 41.5352L11.6235 40.1079ZM11.7056 40.0273L10.3046 38.6L10.3046 38.6L11.7056 40.0273ZM18.5734 36.6157L18.8643 38.5944L20.321 38.3803L20.5492 36.9258L18.5734 36.6157ZM18.8078 35.5088L16.8759 34.9913L16.8759 34.9913L18.8078 35.5088ZM23.9092 28.9374L22.9231 27.1974L23.9092 28.9374ZM32.2576 27.8864L32.7753 25.9546L32.7753 25.9546L32.2576 27.8864ZM34.3501 28.6786L33.4584 30.4689L35.1282 31.3005L36.074 29.6926L34.3501 28.6786ZM35.1356 27.3431L36.8595 28.3571V28.3571L35.1356 27.3431ZM44.9174 19.9607L45.4261 21.8949L44.9174 19.9607ZM56.9366 21.5024L57.9227 19.7624L57.9227 19.7624L56.9366 21.5024ZM66.3636 30.4946C65.1318 25.9823 62.1407 22.1529 58.0505 19.8348L56.0783 23.3148C59.25 25.1124 61.5562 28.0729 62.5048 31.548L66.3636 30.4946ZM66.7494 37.9283C67.1515 35.4721 67.0307 32.9384 66.3636 30.4946L62.5048 31.548C63.0188 33.4312 63.1125 35.3851 62.802 37.2822L66.7494 37.9283ZM69.6954 38.5989C68.495 37.4206 67.1093 36.4737 65.6079 35.7867L63.9435 39.4239C65.0271 39.9198 66.027 40.6031 66.8933 41.4535L69.6954 38.5989ZM69.7776 38.6796L69.6954 38.5989L66.8933 41.4535L66.9755 41.5342L69.7776 38.6796ZM74 48.7411C74 44.9565 72.4784 41.3308 69.7776 38.6796L66.9755 41.5342C68.9101 43.4332 70 46.0302 70 48.7411H74ZM69.7775 58.8026C72.4784 56.1514 74 52.5257 74 48.7411H70C70 51.4519 68.9101 54.049 66.9755 55.948L69.7775 58.8026ZM69.6954 58.8832L69.7776 58.8025L66.9755 55.948L66.8933 56.0287L69.6954 58.8832ZM59.6269 62.999C63.3926 62.999 67.008 61.5211 69.6954 58.8832L66.8933 56.0286C64.9538 57.9324 62.3446 58.999 59.6269 58.999V62.999ZM56.8111 62.999H59.6269V58.999H56.8111V62.999ZM56.6608 59.0047C56.7008 59.0017 56.741 59.0002 56.7813 59.0002V63.0002C56.8416 63.0002 56.9017 62.9979 56.9613 62.9934L56.6608 59.0047ZM56.7813 59.0002L23.2203 59.0002V63.0002L56.7813 63.0002V59.0002ZM23.2203 59.0002C23.2302 59.0002 23.2401 59.0002 23.2501 59.0004L23.1757 62.9997C23.1906 63 23.2055 63.0002 23.2203 63.0002V59.0002ZM20.3731 63.0001H23.2129V59.0001H20.3731V63.0001ZM10.3046 58.8843C12.992 61.5222 16.6074 63.0001 20.3731 63.0001V59.0001C17.6554 59.0001 15.0462 57.9335 13.1067 56.0297L10.3046 58.8843ZM10.2224 58.8036L10.3046 58.8842L13.1067 56.0297L13.0245 55.949L10.2224 58.8036ZM6 48.7421C6 52.5267 7.52158 56.1524 10.2224 58.8036L13.0245 55.949C11.0899 54.05 10 51.453 10 48.7421H6ZM10.2224 38.6807C7.52158 41.3318 6 44.9575 6 48.7421H10C10 46.0313 11.0899 43.4342 13.0245 41.5352L10.2224 38.6807ZM10.3046 38.6L10.2224 38.6807L13.0245 41.5352L13.1067 41.4546L10.3046 38.6ZM18.2825 34.637C15.2884 35.0771 12.4898 36.455 10.3046 38.6L13.1067 41.4546C14.6836 39.9066 16.7034 38.9121 18.8643 38.5944L18.2825 34.637ZM16.8759 34.9913C16.7594 35.4261 16.6667 35.8648 16.5976 36.3057L20.5492 36.9258C20.5965 36.6241 20.66 36.3238 20.7397 36.0262L16.8759 34.9913ZM22.9231 27.1974C19.9386 28.8887 17.7598 31.691 16.8759 34.9913L20.7397 36.0262C21.3438 33.7708 22.8352 31.8449 24.8953 30.6774L22.9231 27.1974ZM32.7753 25.9546C29.4501 25.0635 25.9062 25.5068 22.9231 27.1974L24.8953 30.6774C26.9567 29.5091 29.4195 29.1964 31.7399 29.8183L32.7753 25.9546ZM35.2417 26.8884C34.4587 26.4984 33.633 26.1845 32.7753 25.9546L31.7399 29.8183C32.3379 29.9785 32.9132 30.1973 33.4584 30.4689L35.2417 26.8884ZM33.4117 26.3291L32.6262 27.6647L36.074 29.6926L36.8595 28.3571L33.4117 26.3291ZM44.4086 18.0265C39.7843 19.2427 35.8235 22.2286 33.4117 26.3291L36.8595 28.3571C38.7312 25.1749 41.8139 22.845 45.4261 21.8949L44.4086 18.0265ZM57.9227 19.7624C53.8337 17.4451 48.9773 16.8248 44.4086 18.0265L45.4261 21.8949C48.9947 20.9563 52.7774 21.4442 55.9505 23.2424L57.9227 19.7624ZM58.0505 19.8349L57.9227 19.7624L55.9504 23.2424L56.0783 23.3148L58.0505 19.8349Z"
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
            d="M57.0644 21.5748C60.6954 23.6326 63.344 27.0276 64.4342 31.0213C65.0248 33.1848 65.132 35.4286 64.7757 37.6053C66.0682 38.1968 67.261 39.0119 68.2944 40.0262L68.3765 40.1069C70.6943 42.382 72 45.4933 72 48.7411C72 51.9888 70.6943 55.1002 68.3765 57.3753L68.2944 57.4559C65.9809 59.7268 62.8686 60.999 59.6269 60.999H56.8111C56.8012 60.9998 56.7913 61.0002 56.7813 61.0002L23.2203 61.0002C23.2179 61.0002 23.2154 61.0001 23.2129 61.0001H20.3731C17.1314 61.0001 14.0191 59.7278 11.7056 57.457L11.6235 57.3763C9.30573 55.1012 8 51.9899 8 48.7421C8 45.4944 9.30573 42.383 11.6235 40.1079L11.7056 40.0273C13.5867 38.1808 15.9959 36.9946 18.5734 36.6157C18.6316 36.2445 18.7097 35.875 18.8078 35.5088C19.5518 32.7309 21.3869 30.3668 23.9092 28.9374C26.4315 27.5079 29.4348 27.13 32.2576 27.8864C32.9854 28.0815 33.686 28.3479 34.3501 28.6786L35.1356 27.3431C37.2774 23.7018 40.7991 21.0438 44.9174 19.9607C48.986 18.8906 53.3056 19.4446 56.9366 21.5024L57.0644 21.5748Z"
            fill="#56CCF2"
          />
          <path
            d="M43.3888 19.7769C47.9585 18.575 52.8504 19.1867 56.9285 21.4979L57.0721 21.5793C61.1503 23.8905 64.1359 27.7431 65.3604 32.2287C65.894 34.1836 66.0744 36.2049 65.9116 38.1981C64.0228 37.0845 61.8554 36.4832 59.6269 36.4832H59.3975C56.1557 36.4832 53.0434 37.7555 50.73 40.0263L50.6478 40.107C48.3301 42.3821 47.0244 45.4934 47.0244 48.7412C47.0244 50.7362 47.5171 52.6799 48.4345 54.4098C45.1925 54.4851 41.962 53.6997 39.1252 52.0921L38.9817 52.0107C37.1899 50.9953 35.6091 49.6823 34.2958 48.1489C31.9282 49.274 29.2128 49.5239 26.6466 48.8362C23.8238 48.0797 21.4115 46.25 19.9417 43.7511C18.4719 41.2522 18.0638 38.2867 18.8078 35.5089C19.5517 32.731 21.3869 30.3669 23.9091 28.9375C26.4314 27.508 29.4348 27.1301 32.2575 27.8865C32.3397 27.9086 32.4215 27.9315 32.5029 27.9553C34.8836 23.9272 38.8267 20.9768 43.3888 19.7769Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M57.0644 21.5748C60.6954 23.6326 63.344 27.0276 64.4342 31.0213C65.0248 33.1848 65.132 35.4286 64.7757 37.6053C66.0682 38.1968 67.261 39.0119 68.2944 40.0262L68.3765 40.1069C70.6943 42.382 72 45.4933 72 48.7411C72 51.9888 70.6943 55.1002 68.3765 57.3753L68.2944 57.4559C65.9809 59.7268 62.8686 60.999 59.6269 60.999H56.8111C56.8012 60.9998 56.7913 61.0002 56.7813 61.0002H23.2203C23.2179 61.0002 23.2154 61.0001 23.2129 61.0001H20.3731C17.1314 61.0001 14.0191 59.7278 11.7056 57.457L11.6235 57.3763C9.30573 55.1012 8 51.9899 8 48.7421C8 45.4944 9.30573 42.383 11.6235 40.1079L11.7056 40.0273C13.5867 38.1808 15.9959 36.9946 18.5734 36.6157C18.6316 36.2445 18.7097 35.875 18.8078 35.5088C19.5518 32.7309 21.3869 30.3668 23.9092 28.9374C26.4315 27.5079 29.4348 27.13 32.2576 27.8864C32.9854 28.0815 33.686 28.3479 34.3501 28.6786L35.1356 27.3431C37.2774 23.7018 40.7991 21.0438 44.9174 19.9607C48.986 18.8906 53.3056 19.4446 56.9366 21.5024L57.0644 21.5748Z"
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
            d="M23.2203 63.0005H56.7813C56.8057 63.0005 56.8301 63.0001 56.8543 62.9994H59.6269C63.3926 62.9994 67.008 61.5215 69.6954 58.8835L69.7775 58.8029C72.4784 56.1517 74 52.526 74 48.7414C74 44.9568 72.4784 41.3311 69.7776 38.68L69.6954 38.5993C69.1524 38.0663 68.5714 37.5806 67.9589 37.1448C67.9949 35.3096 67.7707 33.4641 67.279 31.6628C65.913 26.6586 62.5956 22.411 58.0582 19.8395L57.9147 19.7582C53.3786 17.1875 47.9901 16.4989 42.9203 17.8323C38.3109 19.0447 34.2963 21.8413 31.5878 25.6947C28.6198 25.1861 25.5534 25.707 22.9231 27.1977C19.963 28.8753 17.7954 31.6457 16.8978 34.911C14.4306 35.5258 12.1491 36.7898 10.3046 38.6003L10.2224 38.681C7.52158 41.3321 6 44.9579 6 48.7425C6 52.5271 7.52158 56.1528 10.2224 58.8039L10.3046 58.8846C12.992 61.5225 16.6074 63.0004 20.3731 63.0004H23.2022M23.2203 63.0005C23.2143 63.0005 23.2082 63.0005 23.2022 63.0004M23.2203 63.0005L23.2022 63.0004M43.9378 21.7008C48.0075 20.6304 52.3222 21.1865 55.9425 23.2382L56.086 23.3195C59.705 25.3705 62.3373 28.7492 63.4202 32.7161C63.8964 34.4605 64.0565 36.2576 63.9107 38.0299L63.8078 39.2807L64.8894 39.9174C65.6116 40.3426 66.2853 40.857 66.8933 41.4539L66.9755 41.5345C68.9101 43.4335 70 46.0306 70 48.7414C70 51.4523 68.9101 54.0494 66.9755 55.9483L66.8933 56.029C64.9538 57.9328 62.3446 58.9994 59.6269 58.9994H56.736L56.7212 59.0005H23.2352L23.2315 59.0004H20.3731C17.6554 59.0004 15.0462 57.9338 13.1067 56.03L13.0245 55.9494C11.0899 54.0504 10 51.4533 10 48.7425C10 46.0316 11.0899 43.4346 13.0245 41.5356L13.1067 41.4549C14.6836 39.907 16.7034 38.9124 18.8643 38.5948L20.321 38.3806L20.5492 36.9261C20.5965 36.6244 20.66 36.3242 20.7397 36.0265C21.3438 33.7711 22.8352 31.8452 24.8953 30.6777C26.9567 29.5094 29.4195 29.1968 31.7399 29.8186C31.8074 29.8367 31.8748 29.8556 31.9418 29.8752L33.427 30.3097L34.2204 28.9811C36.3608 25.3972 39.8529 22.7752 43.9378 21.7008Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCloud1 = forwardRef((props, ref) => {
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

CoreCloud1.displayName = 'CoreCloud1'

export default CoreCloud1
