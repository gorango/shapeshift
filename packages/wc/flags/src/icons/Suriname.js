
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSuriname = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "rectangle" && svg`
          <g clip-path="url(#clip0ULOb)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="48"/><path d="M120 40H0" stroke="#EB5757" stroke-width="32"/><path d="M60 25L63.5737 36.0812L75.2169 36.0557L65.7824 42.8788L69.4046 53.9443L60 47.08L50.5954 53.9443L54.2176 42.8788L44.7831 36.0557L56.4263 36.0812L60 25Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0ULOb"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip063Y4)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="32"/><path d="M39.9999 25L42.3824 36.0812L50.1445 36.0557L43.8549 42.8788L46.2696 53.9443L39.9999 47.08L33.7302 53.9443L36.145 42.8788L29.8553 36.0557L37.6174 36.0812L39.9999 25Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip063Y4"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0IRCU" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0IRCU)"><g clip-path="url(#clip0IRCU)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="32"/><path d="M39.9999 25L42.3824 36.0812L50.1445 36.0557L43.8549 42.8788L46.2696 53.9443L39.9999 47.08L33.7302 53.9443L36.145 42.8788L29.8553 36.0557L37.6174 36.0812L39.9999 25Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0IRCU"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-suriname', FlagsSuriname)
export default FlagsSuriname