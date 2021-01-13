
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0_MVv)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0_MVv"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0nzWb)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0nzWb"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0JGLN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0JGLN)"><g clip-path="url(#clip0JGLN)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0JGLN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsEquatorialGuinea = forwardRef((props, ref) => {
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

FlagsEquatorialGuinea.displayName = 'FlagsEquatorialGuinea'

export default FlagsEquatorialGuinea