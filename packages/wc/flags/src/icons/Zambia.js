
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsZambia = {
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
          <rect
            width="120"
            height="80"
            fill="#219653"
          />
          <g opacity="0.9"><path d="M78 28L78 80L92 80L92 28L78 28Z" fill="#EB5757"/><path d="M92 28L92 80L106 80L106 28L92 28Z" fill="#333333"/><path d="M106 28L106 80L120 80L120 28L106 28Z" fill="#F2994A"/></g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M95.0001 11H85.0001V10.9684L85 11C85 13.2091 86.7909 15 89 15L89.0001 15C89.0001 16.6569 90.3432 18 92.0001 18C92.0001 19.6569 93.3432 21 95.0001 21H103C104.657 21 106 19.6569 106 18C107.657 18 109 16.6569 109 15C111.209 14.9999 113 13.2091 113 11H103C103 8.79086 101.209 7 99.0001 7C96.791 7 95.0001 8.79086 95.0001 11Z"
            fill="#F2994A"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0FURg)"><rect x="-40" width="120" height="80" fill="#219653"/><g opacity="0.9"><path d="M38 28L38 80L52 80L52 28L38 28Z" fill="#EB5757"/><path d="M52 28L52 80L66 80L66 28L52 28Z" fill="#333333"/><path d="M66 28L66 80L80 80L80 28L66 28Z" fill="#F2994A"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M55.0001 11H45.0001V10.9684L45 11C45 13.2091 46.7909 15 49 15L49.0001 15C49.0001 16.6569 50.3432 18 52.0001 18C52.0001 19.6569 53.3432 21 55.0001 21H63.0001C64.657 21 66.0001 19.6569 66.0001 18C67.657 18 69.0001 16.6569 69.0001 15C71.2092 14.9999 73 13.2091 73 11H63.0001C63.0001 8.79086 61.2093 7 59.0001 7C56.791 7 55.0001 8.79086 55.0001 11Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip0FURg"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0zgbU" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0zgbU)"><g clip-path="url(#clip0zgbU)"><rect x="-40" width="120" height="80" fill="#219653"/><g opacity="0.9"><path d="M38 28L38 80L52 80L52 28L38 28Z" fill="#EB5757"/><path d="M52 28L52 80L66 80L66 28L52 28Z" fill="#333333"/><path d="M66 28L66 80L80 80L80 28L66 28Z" fill="#F2994A"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M55.0001 11H45.0001V10.9684L45 11C45 13.2091 46.7909 15 49 15L49.0001 15C49.0001 16.6569 50.3432 18 52.0001 18C52.0001 19.6569 53.3432 21 55.0001 21H63.0001C64.657 21 66.0001 19.6569 66.0001 18C67.657 18 69.0001 16.6569 69.0001 15C71.2092 14.9999 73 13.2091 73 11H63.0001C63.0001 8.79086 61.2093 7 59.0001 7C56.791 7 55.0001 8.79086 55.0001 11Z" fill="#F2994A"/></g></g>
          <defs><clipPath id="clip0zgbU"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-zambia', FlagsZambia)
export default FlagsZambia