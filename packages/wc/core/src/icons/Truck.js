
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreTruck = {
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
        ${variant === "path" && svg`
          <path
            d="M59.1715 50.1715C60.9825 49.4214 63.0173 49.4214 64.8284 50.1715C66.6394 50.9216 68.0782 52.3605 68.8284 54.1715C69.5785 55.9825 69.5785 58.0173 68.8284 59.8284C68.0782 61.6394 66.6394 63.0782 64.8284 63.8284C63.0173 64.5785 60.9825 64.5785 59.1715 63.8284C57.3605 63.0782 55.9216 61.6394 55.1715 59.8284C54.4214 58.0173 54.4214 55.9825 55.1715 54.1715C55.9216 52.3605 57.3605 50.9216 59.1715 50.1715Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16.1715 50.1715C17.9825 49.4214 20.0173 49.4214 21.8284 50.1715C23.6394 50.9216 25.0782 52.3605 25.8284 54.1715C26.5785 55.9825 26.5785 58.0173 25.8284 59.8284C25.0782 61.6394 23.6394 63.0782 21.8284 63.8284C20.0173 64.5785 17.9825 64.5785 16.1715 63.8284C14.3605 63.0782 12.9216 61.6394 12.1715 59.8284C11.4214 58.0173 11.4214 55.9825 12.1715 54.1715C12.9216 52.3605 14.3605 50.9216 16.1715 50.1715Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 15C7.79086 15 6 16.7909 6 19V55H11.8847C11.9634 54.7198 12.0591 54.4432 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C25.9409 54.4432 26.0366 54.7198 26.1153 55H50V19C50 16.7909 48.2091 15 46 15H10Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 55H54.8847"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 39H74V55H69.1153"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M74 39L63.6262 24.6559C62.874 23.6159 61.6685 23 60.385 23H52C50.8954 23 50 23.8954 50 25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M50 25C50 23.8954 50.8954 23 52 23H60.385C61.6685 23 62.874 23.6159 63.6262 24.6559L74 39H50V25Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 39H50V55H50.7859C50.929 54.1972 51.1591 53.406 51.4761 52.6408C52.6322 49.8497 54.8497 47.6322 57.6408 46.4761C60.432 45.3199 63.568 45.3199 66.3592 46.4761C69.1503 47.6322 71.3678 49.8497 72.5239 52.6408C72.8409 53.406 73.071 54.1972 73.2141 55H74V39ZM64.7385 55C64.3743 54.5014 63.8776 54.1073 63.2977 53.8671C62.4668 53.5229 61.5332 53.5229 60.7023 53.8671C60.1224 54.1073 59.6257 54.5014 59.2615 55H64.7385Z"
            fill="currentColor"
          />
          <path
            d="M50 39V37C48.8954 37 48 37.8954 48 39H50ZM74 39H76C76 37.8954 75.1046 37 74 37V39ZM50 55H48C48 56.1046 48.8954 57 50 57V55ZM50.7859 55V57C51.755 57 52.5847 56.3052 52.7548 55.3511L50.7859 55ZM51.4761 52.6408L53.3238 53.4062V53.4062L51.4761 52.6408ZM57.6408 46.4761L58.4062 48.3238L57.6408 46.4761ZM66.3592 46.4761L67.1245 44.6283V44.6283L66.3592 46.4761ZM72.5239 52.6408L70.6762 53.4062L72.5239 52.6408ZM73.2141 55L71.2452 55.3511C71.4153 56.3052 72.245 57 73.2141 57V55ZM74 55V57C75.1046 57 76 56.1046 76 55H74ZM64.7385 55V57C65.4914 57 66.1806 56.5771 66.5216 55.9057C66.8626 55.2344 66.7977 54.4284 66.3536 53.8204L64.7385 55ZM63.2977 53.8671L62.5323 55.7148H62.5323L63.2977 53.8671ZM60.7023 53.8671L61.4677 55.7149L61.4677 55.7148L60.7023 53.8671ZM59.2615 55L57.6464 53.8204C57.2023 54.4284 57.1374 55.2344 57.4784 55.9057C57.8194 56.5771 58.5086 57 59.2615 57V55ZM50 41H74V37H50V41ZM52 55V39H48V55H52ZM50.7859 53H50V57H50.7859V53ZM52.7548 55.3511C52.8728 54.6893 53.0625 54.0372 53.3238 53.4062L49.6283 51.8755C49.2557 52.7749 48.9853 53.705 48.8169 54.6489L52.7548 55.3511ZM53.3238 53.4062C54.2769 51.1051 56.1051 49.2769 58.4062 48.3238L56.8755 44.6283C53.5943 45.9874 50.9874 48.5943 49.6283 51.8755L53.3238 53.4062ZM58.4062 48.3238C60.7073 47.3707 63.2927 47.3707 65.5938 48.3238L67.1245 44.6283C63.8433 43.2692 60.1567 43.2692 56.8755 44.6283L58.4062 48.3238ZM65.5938 48.3238C67.8949 49.2769 69.7231 51.1051 70.6762 53.4062L74.3717 51.8755C73.0126 48.5943 70.4057 45.9874 67.1245 44.6283L65.5938 48.3238ZM70.6762 53.4062C70.9375 54.0372 71.1272 54.6893 71.2452 55.3511L75.1831 54.6489C75.0147 53.705 74.7443 52.7749 74.3717 51.8755L70.6762 53.4062ZM74 53H73.2141V57H74V53ZM72 39V55H76V39H72ZM66.3536 53.8204C65.7747 53.0278 64.985 52.4012 64.0631 52.0193L62.5323 55.7148C62.7701 55.8134 62.9739 55.975 63.1234 56.1796L66.3536 53.8204ZM64.0631 52.0193C62.7421 51.4722 61.2579 51.4722 59.9369 52.0193L61.4677 55.7148C61.8085 55.5737 62.1915 55.5737 62.5323 55.7148L64.0631 52.0193ZM59.9369 52.0193C59.015 52.4012 58.2253 53.0278 57.6464 53.8204L60.8766 56.1796C61.0261 55.975 61.2299 55.8134 61.4677 55.7149L59.9369 52.0193ZM64.7385 53H59.2615V57H64.7385V53Z"
            fill="currentColor"
          />
          <path
            d="M59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716C69.5786 55.9826 69.5786 58.0174 68.8284 59.8284C68.0783 61.6394 66.6394 63.0783 64.8284 63.8284C63.0174 64.5786 60.9826 64.5786 59.1716 63.8284C57.3606 63.0783 55.9217 61.6394 55.1716 59.8284C54.4214 58.0174 54.4214 55.9826 55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 15C7.79086 15 6 16.7909 6 19V55H7.78587C7.92904 54.1972 8.1591 53.406 8.47605 52.6408C9.63218 49.8497 11.8497 47.6322 14.6408 46.4761C17.432 45.3199 20.568 45.3199 23.3592 46.4761C26.1503 47.6322 28.3678 49.8497 29.5239 52.6408C29.8409 53.406 30.071 54.1972 30.2141 55H50V19C50 16.7909 48.2091 15 46 15H10ZM21.7385 55C21.3743 54.5014 20.8776 54.1073 20.2977 53.8671C19.4668 53.5229 18.5332 53.5229 17.7023 53.8671C17.1224 54.1073 16.6257 54.5014 16.2615 55H21.7385Z"
            fill="currentColor"
          />
          <path
            d="M6 55H4C4 56.1046 4.89543 57 6 57V55ZM7.78587 55V57C8.755 57 9.58468 56.3052 9.75481 55.3511L7.78587 55ZM8.47605 52.6408L10.3238 53.4062L8.47605 52.6408ZM14.6408 46.4761L15.4062 48.3238H15.4062L14.6408 46.4761ZM23.3592 46.4761L22.5938 48.3238L23.3592 46.4761ZM29.5239 52.6408L27.6762 53.4062L29.5239 52.6408ZM30.2141 55L28.2452 55.3511C28.4153 56.3052 29.245 57 30.2141 57V55ZM50 55V57C51.1046 57 52 56.1046 52 55H50ZM21.7385 55V57C22.4914 57 23.1806 56.5771 23.5216 55.9058C23.8626 55.2344 23.7977 54.4284 23.3536 53.8204L21.7385 55ZM20.2977 53.8671L19.5323 55.7149H19.5323L20.2977 53.8671ZM17.7023 53.8671L18.4677 55.7149H18.4677L17.7023 53.8671ZM16.2615 55L14.6464 53.8204C14.2023 54.4284 14.1374 55.2344 14.4784 55.9058C14.8194 56.5771 15.5086 57 16.2615 57V55ZM8 19C8 17.8954 8.89543 17 10 17V13C6.68629 13 4 15.6863 4 19H8ZM8 55V19H4V55H8ZM7.78587 53H6V57H7.78587V53ZM9.75481 55.3511C9.87282 54.6893 10.0625 54.0372 10.3238 53.4062L6.6283 51.8755C6.25573 52.7749 5.98525 53.705 5.81693 54.6489L9.75481 55.3511ZM10.3238 53.4062C11.2769 51.1051 13.1051 49.2769 15.4062 48.3238L13.8755 44.6283C10.5943 45.9874 7.98741 48.5943 6.6283 51.8755L10.3238 53.4062ZM15.4062 48.3238C17.7073 47.3707 20.2927 47.3707 22.5938 48.3238L24.1245 44.6283C20.8433 43.2692 17.1567 43.2692 13.8755 44.6283L15.4062 48.3238ZM22.5938 48.3238C24.8949 49.2769 26.7231 51.1051 27.6762 53.4062L31.3717 51.8755C30.0126 48.5943 27.4057 45.9874 24.1245 44.6283L22.5938 48.3238ZM27.6762 53.4062C27.9375 54.0372 28.1272 54.6893 28.2452 55.3511L32.1831 54.6489C32.0147 53.705 31.7443 52.7749 31.3717 51.8755L27.6762 53.4062ZM50 53H30.2141V57H50V53ZM48 19V55H52V19H48ZM46 17C47.1046 17 48 17.8954 48 19H52C52 15.6863 49.3137 13 46 13V17ZM10 17H46V13H10V17ZM23.3536 53.8204C22.7747 53.0278 21.985 52.4012 21.0631 52.0193L19.5323 55.7149C19.7701 55.8134 19.9739 55.9749 20.1234 56.1796L23.3536 53.8204ZM21.0631 52.0193C19.7421 51.4722 18.2579 51.4722 16.9369 52.0193L18.4677 55.7149C18.8085 55.5737 19.1915 55.5737 19.5323 55.7149L21.0631 52.0193ZM16.9369 52.0193C16.015 52.4012 15.2253 53.0278 14.6464 53.8204L17.8766 56.1796C18.0261 55.9749 18.2299 55.8134 18.4677 55.7149L16.9369 52.0193ZM21.7385 53H16.2615V57H21.7385V53Z"
            fill="currentColor"
          />
          <path
            d="M16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C26.5786 55.9826 26.5786 58.0174 25.8284 59.8284C25.0783 61.6394 23.6394 63.0783 21.8284 63.8284C20.0174 64.5786 17.9826 64.5786 16.1716 63.8284C14.3606 63.0783 12.9217 61.6394 12.1716 59.8284C11.4214 58.0174 11.4214 55.9826 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M50 25C50 23.8954 50.8954 23 52 23H60.385C61.6685 23 62.874 23.6159 63.6262 24.6559L74 39H50V25Z"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 39H50V55H54.8847C54.9634 54.7198 55.0591 54.4432 55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716C68.9409 54.4432 69.0366 54.7198 69.1153 55H74V39Z"
            fill="#F2C94C"
          />
          <path
            d="M50 39V37C48.8954 37 48 37.8954 48 39H50ZM74 39H76C76 37.8954 75.1046 37 74 37V39ZM50 55H48C48 56.1046 48.8954 57 50 57V55ZM54.8847 55V57C55.7808 57 56.5675 56.4039 56.81 55.5412L54.8847 55ZM55.1716 54.1716L53.3238 53.4062H53.3238L55.1716 54.1716ZM59.1716 50.1716L59.9369 52.0193L59.1716 50.1716ZM64.8284 50.1716L65.5938 48.3238H65.5938L64.8284 50.1716ZM68.8284 54.1716L66.9807 54.9369L68.8284 54.1716ZM69.1153 55L67.1899 55.5412C67.4325 56.4039 68.2192 57 69.1153 57V55ZM74 55V57C75.1046 57 76 56.1046 76 55H74ZM50 41H74V37H50V41ZM52 55V39H48V55H52ZM54.8847 53H50V57H54.8847V53ZM56.81 55.5412C56.8675 55.3369 56.9372 55.1351 57.0193 54.9369L53.3238 53.4062C53.1809 53.7512 53.0594 54.1027 52.9593 54.4588L56.81 55.5412ZM57.0193 54.9369C57.5665 53.616 58.616 52.5665 59.9369 52.0193L58.4062 48.3238C56.1051 49.2769 54.2769 51.1051 53.3238 53.4062L57.0193 54.9369ZM59.9369 52.0193C61.2579 51.4722 62.7421 51.4722 64.0631 52.0193L65.5938 48.3238C63.2927 47.3707 60.7073 47.3707 58.4062 48.3238L59.9369 52.0193ZM64.0631 52.0193C65.384 52.5665 66.4335 53.616 66.9807 54.9369L70.6762 53.4062C69.7231 51.1051 67.8949 49.2769 65.5938 48.3238L64.0631 52.0193ZM66.9807 54.9369C67.0628 55.1351 67.1325 55.3369 67.1899 55.5412L71.0407 54.4588C70.9406 54.1027 70.8191 53.7512 70.6762 53.4062L66.9807 54.9369ZM74 53H69.1153V57H74V53ZM72 39V55H76V39H72Z"
            fill="#F2C94C"
          />
          <path
            d="M59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716C69.5786 55.9826 69.5786 58.0174 68.8284 59.8284C68.0783 61.6394 66.6394 63.0783 64.8284 63.8284C63.0174 64.5786 60.9826 64.5786 59.1716 63.8284C57.3606 63.0783 55.9217 61.6394 55.1716 59.8284C54.4214 58.0174 54.4214 55.9826 55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716Z"
            fill="#828282"
            stroke="#828282"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 15C7.79086 15 6 16.7909 6 19V55H11.8847C11.9634 54.7198 12.0591 54.4432 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C25.9409 54.4432 26.0366 54.7198 26.1153 55H50V19C50 16.7909 48.2091 15 46 15H10Z"
            fill="#F2994A"
          />
          <path
            d="M6 55H4C4 56.1046 4.89543 57 6 57V55ZM11.8847 55V57C12.7808 57 13.5675 56.4039 13.81 55.5412L11.8847 55ZM12.1716 54.1716L14.0193 54.9369L14.0193 54.9369L12.1716 54.1716ZM21.8284 50.1716L22.5938 48.3238L21.8284 50.1716ZM25.8284 54.1716L23.9807 54.9369V54.9369L25.8284 54.1716ZM26.1153 55L24.1899 55.5412C24.4325 56.4039 25.2192 57 26.1153 57V55ZM50 55V57C51.1046 57 52 56.1046 52 55H50ZM8 19C8 17.8954 8.89543 17 10 17V13C6.68629 13 4 15.6863 4 19H8ZM8 55V19H4V55H8ZM11.8847 53H6V57H11.8847V53ZM13.81 55.5412C13.8675 55.3369 13.9372 55.1351 14.0193 54.9369L10.3238 53.4062C10.1809 53.7512 10.0594 54.1027 9.95931 54.4588L13.81 55.5412ZM14.0193 54.9369C14.5665 53.616 15.616 52.5665 16.9369 52.0193L15.4062 48.3238C13.1051 49.2769 11.2769 51.1051 10.3238 53.4062L14.0193 54.9369ZM16.9369 52.0193C18.2579 51.4722 19.7421 51.4722 21.0631 52.0193L22.5938 48.3238C20.2927 47.3707 17.7073 47.3707 15.4062 48.3238L16.9369 52.0193ZM21.0631 52.0193C22.384 52.5665 23.4335 53.616 23.9807 54.9369L27.6762 53.4062C26.7231 51.1051 24.8949 49.2769 22.5938 48.3238L21.0631 52.0193ZM23.9807 54.9369C24.0628 55.1351 24.1325 55.3369 24.1899 55.5412L28.0407 54.4588C27.9406 54.1027 27.8191 53.7512 27.6762 53.4062L23.9807 54.9369ZM50 53H26.1153V57H50V53ZM48 19V55H52V19H48ZM46 17C47.1046 17 48 17.8954 48 19H52C52 15.6863 49.3137 13 46 13V17ZM10 17H46V13H10V17Z"
            fill="#F2994A"
          />
          <path
            d="M16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C26.5786 55.9826 26.5786 58.0174 25.8284 59.8284C25.0783 61.6394 23.6394 63.0783 21.8284 63.8284C20.0174 64.5786 17.9826 64.5786 16.1716 63.8284C14.3606 63.0783 12.9217 61.6394 12.1716 59.8284C11.4214 58.0174 11.4214 55.9826 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716Z"
            fill="#828282"
            stroke="#828282"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M50 25C50 23.8954 50.8954 23 52 23H60.385C61.6685 23 62.874 23.6159 63.6262 24.6559L74 39H50V25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M74 39H50V55H54.8847C54.9634 54.7198 55.0591 54.4432 55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716C68.9409 54.4432 69.0366 54.7198 69.1153 55H74V39Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716C69.5786 55.9826 69.5786 58.0174 68.8284 59.8284C68.0783 61.6394 66.6394 63.0783 64.8284 63.8284C63.0174 64.5786 60.9826 64.5786 59.1716 63.8284C57.3606 63.0783 55.9217 61.6394 55.1716 59.8284C54.4214 58.0174 54.4214 55.9826 55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M10 15C7.79086 15 6 16.7909 6 19V55H11.8847C11.9634 54.7198 12.0591 54.4432 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C25.9409 54.4432 26.0366 54.7198 26.1153 55H50V19C50 16.7909 48.2091 15 46 15H10Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716C26.5786 55.9826 26.5786 58.0174 25.8284 59.8284C25.0783 61.6394 23.6394 63.0783 21.8284 63.8284C20.0174 64.5786 17.9826 64.5786 16.1716 63.8284C14.3606 63.0783 12.9217 61.6394 12.1716 59.8284C11.4214 58.0174 11.4214 55.9826 12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M74 39L63.6262 24.6559C62.874 23.6159 61.6685 23 60.385 23H52C50.8954 23 50 23.8954 50 25V39M74 39H50M74 39V55H69.1153C69.0366 54.7198 68.9409 54.4432 68.8284 54.1716M50 39V55M50 55H54.8847C54.9634 54.7198 55.0591 54.4432 55.1716 54.1716M50 55H26.1153C26.0366 54.7198 25.9409 54.4432 25.8284 54.1716M50 55V19C50 16.7909 48.2091 15 46 15H10C7.79086 15 6 16.7909 6 19V55H11.8847C11.9634 54.7198 12.0591 54.4432 12.1716 54.1716M55.1716 54.1716C55.9217 52.3606 57.3606 50.9217 59.1716 50.1716C60.9826 49.4214 63.0174 49.4214 64.8284 50.1716C66.6394 50.9217 68.0783 52.3606 68.8284 54.1716M55.1716 54.1716C54.4214 55.9826 54.4214 58.0174 55.1716 59.8284C55.9217 61.6394 57.3606 63.0783 59.1716 63.8284C60.9826 64.5786 63.0174 64.5786 64.8284 63.8284C66.6394 63.0783 68.0783 61.6394 68.8284 59.8284C69.5786 58.0174 69.5786 55.9826 68.8284 54.1716M12.1716 54.1716C12.9217 52.3606 14.3606 50.9217 16.1716 50.1716C17.9826 49.4214 20.0174 49.4214 21.8284 50.1716C23.6394 50.9217 25.0783 52.3606 25.8284 54.1716M12.1716 54.1716C11.4214 55.9826 11.4214 58.0174 12.1716 59.8284C12.9217 61.6394 14.3606 63.0783 16.1716 63.8284C17.9826 64.5786 20.0174 64.5786 21.8284 63.8284C23.6394 63.0783 25.0783 61.6394 25.8284 59.8284C26.5786 58.0174 26.5786 55.9826 25.8284 54.1716"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3238 60.5938C9.84725 59.4433 9.60896 58.2216 9.60896 57H6C4.89543 57 4 56.1046 4 55V19C4 15.6863 6.68629 13 10 13H46C49.3137 13 52 15.6863 52 19V21H60.385C62.3102 21 64.1185 21.9239 65.2468 23.4839L75.6075 37.8099L75.9997 38.9631L76 55C76 56.1046 75.1046 57 74 57H71.391C71.391 58.2216 71.1528 59.4433 70.6762 60.5938C69.7231 62.8949 67.8949 64.7231 65.5938 65.6762C63.2927 66.6293 60.7073 66.6293 58.4062 65.6762C56.1051 64.7231 54.2769 62.8949 53.3238 60.5938C52.8472 59.4433 52.609 58.2216 52.609 57H28.391C28.391 58.2216 28.1528 59.4433 27.6762 60.5938C26.7231 62.8949 24.8949 64.7231 22.5938 65.6762C20.2927 66.6293 17.7073 66.6293 15.4062 65.6762C13.1051 64.7231 11.2769 62.8949 10.3238 60.5938ZM10 17C8.89543 17 8 17.8954 8 19V53H10.5034C11.4965 50.8904 13.2422 49.2202 15.4062 48.3238C17.7073 47.3707 20.2927 47.3707 22.5938 48.3238C24.7578 49.2202 26.5035 50.8904 27.4966 53H48V19C48 17.8954 47.1046 17 46 17H10ZM23.9807 54.9369C24.0628 55.1351 24.1325 55.3369 24.19 55.5412C24.5155 56.6994 24.4458 57.9402 23.9807 59.0631C23.4335 60.384 22.384 61.4335 21.0631 61.9807C19.7421 62.5278 18.2579 62.5278 16.9369 61.9807C15.616 61.4335 14.5665 60.384 14.0193 59.0631C13.5542 57.9402 13.4845 56.6995 13.81 55.5412C13.8675 55.3369 13.9372 55.1351 14.0193 54.9369C14.5665 53.616 15.616 52.5665 16.9369 52.0193C18.2579 51.4722 19.7421 51.4722 21.0631 52.0193C22.384 52.5665 23.4335 53.616 23.9807 54.9369ZM66.201 31.6291L65.4299 30.5628L62.0056 25.828C61.6295 25.308 61.0267 25 60.385 25H57.6175H57.3442H52V37H70.0853L66.201 31.6291ZM52 53V41H72V53H70.4966C69.5035 50.8904 67.7578 49.2202 65.5938 48.3238C63.2927 47.3707 60.7073 47.3707 58.4062 48.3238C56.2422 49.2202 54.4965 50.8904 53.5034 53H52ZM56.8101 55.5412C56.4845 56.6995 56.5542 57.9402 57.0193 59.0631C57.5665 60.384 58.616 61.4335 59.9369 61.9807C61.2579 62.5278 62.7421 62.5278 64.0631 61.9807C65.384 61.4335 66.4335 60.384 66.9807 59.0631C67.4458 57.9402 67.5155 56.6994 67.1899 55.5412C67.1325 55.3369 67.0628 55.1351 66.9807 54.9369C66.9465 54.8544 66.9103 54.7729 66.8722 54.6925C66.3013 53.4868 65.3015 52.5323 64.0631 52.0193C62.7421 51.4722 61.2579 51.4722 59.9369 52.0193C58.616 52.5665 57.5665 53.616 57.0193 54.9369C56.9372 55.1351 56.8675 55.3369 56.8101 55.5412Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-truck', CoreTruck)
export default CoreTruck