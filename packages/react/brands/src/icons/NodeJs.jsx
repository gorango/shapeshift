
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M39.9998 74.4531C39.0726 74.4531 38.1315 74.207 37.315 73.7422L28.7761 68.752C27.5029 68.041 28.1257 67.7949 28.5409 67.6582C30.2431 67.0703 30.5891 66.9473 32.402 65.9219C32.5958 65.8125 32.8449 65.8535 33.0386 65.9766L39.5985 69.8184C39.8337 69.9551 40.1659 69.9551 40.3873 69.8184L65.9485 55.2441C66.1837 55.1074 66.336 54.834 66.336 54.5605V25.4121C66.336 25.125 66.1837 24.8652 65.9346 24.7148L40.3873 10.1543C40.152 10.0176 39.8337 10.0176 39.5985 10.1543L14.065 24.7285C13.8159 24.8652 13.6636 25.1387 13.6636 25.4258V54.5605C13.6636 54.834 13.8159 55.1074 14.065 55.2305L21.0677 59.2227C24.8735 61.0957 27.1985 58.8945 27.1985 56.666V27.9004C27.1985 27.4902 27.5306 27.1758 27.9458 27.1758H31.1842C31.5855 27.1758 31.9315 27.4902 31.9315 27.9004V56.6797C31.9315 61.6836 29.1636 64.5547 24.3614 64.5547C22.8806 64.5547 21.7181 64.5547 18.4797 62.9688L11.7815 59.1543C10.1208 58.2109 9.09668 56.4473 9.09668 54.5469V25.4121C9.09668 23.5254 10.1208 21.748 11.7815 20.8047L37.315 6.23047C38.9342 5.32812 41.0793 5.32812 42.6846 6.23047L68.2458 20.8184C69.9065 21.7617 70.9306 23.5254 70.9306 25.4258V54.5605C70.9306 56.4473 69.9065 58.2109 68.2458 59.168L42.6846 73.7422C41.8681 74.207 40.9409 74.4531 39.9998 74.4531ZM60.6342 45.7285C60.6342 40.2734 56.8976 38.8242 49.0507 37.7988C41.1069 36.7598 40.3043 36.2266 40.3043 34.3945C40.3043 32.877 40.9824 30.8535 46.8641 30.8535C52.1092 30.8535 54.0467 31.9746 54.8494 35.4746C54.9185 35.8027 55.223 36.0488 55.569 36.0488H58.8904C59.098 36.0488 59.2918 35.9668 59.4302 35.8164C59.5686 35.666 59.6377 35.4609 59.6239 35.2559C59.1119 29.2266 55.0569 26.4238 46.8641 26.4238C39.5708 26.4238 35.2253 29.459 35.2253 34.5586C35.2253 40.082 39.5569 41.6133 46.5458 42.2969C54.9185 43.1035 55.569 44.3203 55.569 45.9473C55.569 48.7637 53.2717 49.9668 47.8882 49.9668C41.1208 49.9668 39.64 48.2852 39.1418 44.9629C39.0864 44.6074 38.7819 44.3477 38.4083 44.3477H35.1007C34.6855 44.3477 34.3672 44.6758 34.3672 45.0723C34.3672 49.3242 36.7061 54.3965 47.902 54.3965C55.9842 54.3828 60.6342 51.2246 60.6342 45.7285Z"
            fill="#8CC84B"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M39.9998 74.4531C39.0726 74.4531 38.1315 74.207 37.315 73.7422L28.7761 68.752C27.5029 68.041 28.1257 67.7949 28.5409 67.6582C30.2431 67.0703 30.5891 66.9473 32.402 65.9219C32.5958 65.8125 32.8449 65.8535 33.0386 65.9766L39.5985 69.8184C39.8337 69.9551 40.1659 69.9551 40.3873 69.8184L65.9485 55.2441C66.1837 55.1074 66.336 54.834 66.336 54.5605V25.4121C66.336 25.125 66.1837 24.8652 65.9346 24.7148L40.3873 10.1543C40.152 10.0176 39.8337 10.0176 39.5985 10.1543L14.065 24.7285C13.8159 24.8652 13.6636 25.1387 13.6636 25.4258V54.5605C13.6636 54.834 13.8159 55.1074 14.065 55.2305L21.0677 59.2227C24.8735 61.0957 27.1985 58.8945 27.1985 56.666V27.9004C27.1985 27.4902 27.5306 27.1758 27.9458 27.1758H31.1842C31.5855 27.1758 31.9315 27.4902 31.9315 27.9004V56.6797C31.9315 61.6836 29.1636 64.5547 24.3614 64.5547C22.8806 64.5547 21.7181 64.5547 18.4797 62.9688L11.7815 59.1543C10.1208 58.2109 9.09668 56.4473 9.09668 54.5469V25.4121C9.09668 23.5254 10.1208 21.748 11.7815 20.8047L37.315 6.23047C38.9342 5.32812 41.0793 5.32812 42.6846 6.23047L68.2458 20.8184C69.9065 21.7617 70.9306 23.5254 70.9306 25.4258V54.5605C70.9306 56.4473 69.9065 58.2109 68.2458 59.168L42.6846 73.7422C41.8681 74.207 40.9409 74.4531 39.9998 74.4531ZM60.6342 45.7285C60.6342 40.2734 56.8976 38.8242 49.0507 37.7988C41.1069 36.7598 40.3043 36.2266 40.3043 34.3945C40.3043 32.877 40.9824 30.8535 46.8641 30.8535C52.1092 30.8535 54.0467 31.9746 54.8494 35.4746C54.9185 35.8027 55.223 36.0488 55.569 36.0488H58.8904C59.098 36.0488 59.2918 35.9668 59.4302 35.8164C59.5686 35.666 59.6377 35.4609 59.6239 35.2559C59.1119 29.2266 55.0569 26.4238 46.8641 26.4238C39.5708 26.4238 35.2253 29.459 35.2253 34.5586C35.2253 40.082 39.5569 41.6133 46.5458 42.2969C54.9185 43.1035 55.569 44.3203 55.569 45.9473C55.569 48.7637 53.2717 49.9668 47.8882 49.9668C41.1208 49.9668 39.64 48.2852 39.1418 44.9629C39.0864 44.6074 38.7819 44.3477 38.4083 44.3477H35.1007C34.6855 44.3477 34.3672 44.6758 34.3672 45.0723C34.3672 49.3242 36.7061 54.3965 47.902 54.3965C55.9842 54.3828 60.6342 51.2246 60.6342 45.7285Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M39.9998 74.4531C39.0726 74.4531 38.1315 74.207 37.315 73.7422L28.7761 68.752C27.5029 68.041 28.1257 67.7949 28.5409 67.6582C30.2431 67.0703 30.5891 66.9473 32.402 65.9219C32.5958 65.8125 32.8449 65.8535 33.0386 65.9766L39.5985 69.8184C39.8337 69.9551 40.1659 69.9551 40.3873 69.8184L65.9485 55.2441C66.1837 55.1074 66.336 54.834 66.336 54.5605V25.4121C66.336 25.125 66.1837 24.8652 65.9346 24.7148L40.3873 10.1543C40.152 10.0176 39.8337 10.0176 39.5985 10.1543L14.065 24.7285C13.8159 24.8652 13.6636 25.1387 13.6636 25.4258V54.5605C13.6636 54.834 13.8159 55.1074 14.065 55.2305L21.0677 59.2227C24.8735 61.0957 27.1985 58.8945 27.1985 56.666V27.9004C27.1985 27.4902 27.5306 27.1758 27.9458 27.1758H31.1842C31.5855 27.1758 31.9315 27.4902 31.9315 27.9004V56.6797C31.9315 61.6836 29.1636 64.5547 24.3614 64.5547C22.8806 64.5547 21.7181 64.5547 18.4797 62.9688L11.7815 59.1543C10.1208 58.2109 9.09668 56.4473 9.09668 54.5469V25.4121C9.09668 23.5254 10.1208 21.748 11.7815 20.8047L37.315 6.23047C38.9342 5.32812 41.0793 5.32812 42.6846 6.23047L68.2458 20.8184C69.9065 21.7617 70.9306 23.5254 70.9306 25.4258V54.5605C70.9306 56.4473 69.9065 58.2109 68.2458 59.168L42.6846 73.7422C41.8681 74.207 40.9409 74.4531 39.9998 74.4531ZM60.6342 45.7285C60.6342 40.2734 56.8976 38.8242 49.0507 37.7988C41.1069 36.7598 40.3043 36.2266 40.3043 34.3945C40.3043 32.877 40.9824 30.8535 46.8641 30.8535C52.1092 30.8535 54.0467 31.9746 54.8494 35.4746C54.9186 35.8027 55.223 36.0488 55.569 36.0488H58.8904C59.098 36.0488 59.2918 35.9668 59.4302 35.8164C59.5685 35.666 59.6377 35.4609 59.6239 35.2559C59.1119 29.2266 55.0569 26.4238 46.8641 26.4238C39.5708 26.4238 35.2253 29.459 35.2253 34.5586C35.2253 40.082 39.5569 41.6133 46.5458 42.2969C54.9185 43.1035 55.569 44.3203 55.569 45.9473C55.569 48.7637 53.2717 49.9668 47.8882 49.9668C41.1208 49.9668 39.64 48.2852 39.1418 44.9629C39.0864 44.6074 38.7819 44.3477 38.4083 44.3477H35.1007C34.6855 44.3477 34.3672 44.6758 34.3672 45.0723C34.3672 49.3242 36.7061 54.3965 47.902 54.3965C55.9842 54.3828 60.6342 51.2246 60.6342 45.7285Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsNodeJs = forwardRef((props, ref) => {
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

BrandsNodeJs.displayName = 'BrandsNodeJs'

export default BrandsNodeJs