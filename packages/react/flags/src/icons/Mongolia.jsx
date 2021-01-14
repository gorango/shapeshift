
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M78.9991 0H41V80H78.9991V0Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 40C19.674 40 18.4022 40.5268 17.4646 41.4645C16.5269 42.4022 16 43.6741 16 45.0001C16 46.3262 16.5268 47.5979 17.4644 48.5356C17.73 48.8012 18.0224 49.0338 18.3353 49.2308C18.0676 48.7671 17.9231 48.2372 17.9231 47.6924V47.6922C17.9231 47.6668 17.9234 47.6414 17.924 47.616C17.9435 46.8276 18.2652 46.0756 18.8242 45.5166C19.3652 44.9756 20.087 44.6569 20.8474 44.6192C20.895 44.6168 20.9426 44.6155 20.9904 44.6154L21 44.6154C21.0383 44.6154 21.0764 44.6144 21.1144 44.6125C21.6848 44.5842 22.226 44.3452 22.6317 43.9395C23.0645 43.5067 23.3077 42.9196 23.3077 42.3076C23.3077 42.2885 23.3075 42.2695 23.307 42.2505C23.2923 41.6592 23.051 41.0952 22.6317 40.6759C22.248 40.2922 21.743 40.0575 21.2068 40.0093C21.1383 40.0031 21.0693 40 21 40ZM19.8211 42.3077C19.8211 41.6704 20.3377 41.1538 20.9749 41.1538C21.6122 41.1538 22.1288 41.6704 22.1288 42.3077C22.1288 42.9449 21.6122 43.4615 20.9749 43.4615C20.3377 43.4615 19.8211 42.9449 19.8211 42.3077Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0769 42.2982C24.0768 42.2723 24.0764 42.2465 24.0757 42.2207C24.0612 41.7066 23.9182 41.2082 23.6647 40.7692C23.9776 40.9662 24.27 41.1988 24.5356 41.4644C25.4732 42.4021 26 43.6738 26 44.9999C26 46.3259 25.4731 47.5978 24.5354 48.5355C23.5978 49.4732 22.326 50 21 50C20.9011 50 20.8029 49.9937 20.7059 49.9812C20.2024 49.9165 19.7311 49.6869 19.3683 49.3241C18.9491 48.9049 18.7077 48.3409 18.693 47.7497C18.6925 47.7306 18.6923 47.7115 18.6923 47.6924L18.6923 47.6852C18.6924 47.6686 18.6926 47.6519 18.693 47.6353C18.7077 47.0439 18.949 46.4798 19.3683 46.0605C19.774 45.6548 20.3153 45.4158 20.8856 45.3875C20.9236 45.3856 20.9618 45.3846 21 45.3846C21.0986 45.3846 21.1968 45.3799 21.2941 45.3705C22.0022 45.3026 22.6685 44.9907 23.1758 44.4834C23.7528 43.9064 24.0769 43.1238 24.0769 42.3078V42.3076L24.0769 42.2982ZM22.1789 47.6923C22.1789 48.3296 21.6623 48.8462 21.0251 48.8462C20.3878 48.8462 19.8712 48.3296 19.8712 47.6923C19.8712 47.0551 20.3878 46.5385 21.0251 46.5385C21.6623 46.5385 22.1789 47.0551 22.1789 47.6923Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 33C11.4477 33 11 33.4477 11 34V56C11 56.5523 11.4477 57 12 57H14C14.5523 57 15 56.5523 15 56V34C15 33.4477 14.5523 33 14 33H12ZM16 37C16 37.5523 16.4477 38 17 38H25C25.5523 38 26 37.5523 26 37V35C26 34.4477 25.5523 34 25 34H17C16.4477 34 16 34.4477 16 35V37ZM26 55C26 55.5523 25.5523 56 25 56H17C16.4477 56 16 55.5523 16 55V53C16 52.4477 16.4477 52 17 52H25C25.5523 52 26 52.4477 26 53V55ZM30 57C30.5523 57 31 56.5523 31 56V34C31 33.4477 30.5523 33 30 33H28C27.4477 33 27 33.4477 27 34V56C27 56.5523 27.4477 57 28 57H30Z"
            fill="#F2C94C"
          />
          <path
            d="M26.6569 28.6569C25.1566 30.1571 23.1217 31 21 31C18.8783 31 16.8434 30.1571 15.3431 28.6569"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <circle
            cx="21"
            cy="25"
            r="4"
            fill="#F2C94C"
          />
          <circle
            cx="21"
            cy="18"
            r="2"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M58.9991 0H21V80H58.9991V0Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 40C-0.326003 40 -1.5978 40.5268 -2.53544 41.4645C-3.47313 42.4022 -4 43.6741 -4 45.0001C-4 46.3262 -3.47323 47.5979 -2.53559 48.5356C-2.26999 48.8012 -1.97758 49.0338 -1.66472 49.2308C-1.93245 48.7671 -2.07692 48.2372 -2.07692 47.6924V47.6922C-2.07692 47.6668 -2.0766 47.6414 -2.07598 47.616C-2.05647 46.8276 -1.73478 46.0756 -1.17575 45.5166C-0.634791 44.9756 0.0869646 44.6569 0.847431 44.6192C0.894961 44.6168 0.942642 44.6155 0.99044 44.6154L1 44.6154C1.03825 44.6154 1.07641 44.6144 1.11443 44.6125C1.68475 44.5842 2.22602 44.3452 2.63172 43.9395C3.0645 43.5067 3.30769 42.9196 3.30769 42.3076C3.30769 42.2885 3.30745 42.2695 3.30698 42.2505C3.29231 41.6592 3.05098 41.0952 2.63172 40.6759C2.24799 40.2922 1.74299 40.0575 1.20683 40.0093C1.13833 40.0031 1.06933 40 1 40ZM-0.178918 42.3077C-0.178918 41.6704 0.337677 41.1538 0.974929 41.1538C1.61218 41.1538 2.12877 41.6704 2.12877 42.3077C2.12877 42.9449 1.61218 43.4615 0.974929 43.4615C0.337677 43.4615 -0.178918 42.9449 -0.178918 42.3077Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.07691 42.2982C4.07683 42.2723 4.07642 42.2465 4.07569 42.2207C4.06118 41.7066 3.91819 41.2082 3.66472 40.7692C3.97758 40.9662 4.26999 41.1988 4.53559 41.4644C5.47323 42.4021 6 43.6738 6 44.9999C6 46.3259 5.47313 47.5978 4.53544 48.5355C3.5978 49.4732 2.326 50 1 50C0.901143 50 0.802937 49.9937 0.705927 49.9812C0.202405 49.9165 -0.268874 49.6869 -0.631719 49.3241C-1.05093 48.9049 -1.29226 48.3409 -1.30698 47.7497C-1.30745 47.7306 -1.30769 47.7115 -1.30769 47.6924L-1.30768 47.6852C-1.30763 47.6686 -1.3074 47.6519 -1.30698 47.6353C-1.29235 47.0439 -1.05101 46.4798 -0.631719 46.0605C-0.226014 45.6548 0.315255 45.4158 0.88558 45.3875C0.923602 45.3856 0.961753 45.3846 1 45.3846C1.09862 45.3846 1.19676 45.3799 1.29411 45.3705C2.0022 45.3026 2.66847 44.9907 3.17575 44.4834C3.75277 43.9064 4.07692 43.1238 4.07692 42.3078V42.3076L4.07691 42.2982ZM2.17892 47.6923C2.17892 48.3296 1.66232 48.8462 1.02507 48.8462C0.387819 48.8462 -0.128775 48.3296 -0.128775 47.6923C-0.128775 47.0551 0.387819 46.5385 1.02507 46.5385C1.66232 46.5385 2.17892 47.0551 2.17892 47.6923Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-8 33C-8.55228 33 -9 33.4477 -9 34V56C-9 56.5523 -8.55228 57 -8 57H-6C-5.44772 57 -5 56.5523 -5 56V34C-5 33.4477 -5.44772 33 -6 33H-8ZM-4 37C-4 37.5523 -3.55228 38 -3 38H5C5.55229 38 6 37.5523 6 37V35C6 34.4477 5.55228 34 5 34H-3C-3.55228 34 -4 34.4477 -4 35V37ZM6 55C6 55.5523 5.55228 56 5 56H-3C-3.55228 56 -4 55.5523 -4 55V53C-4 52.4477 -3.55228 52 -3 52H5C5.55229 52 6 52.4477 6 53V55ZM10 57C10.5523 57 11 56.5523 11 56V34C11 33.4477 10.5523 33 10 33H8C7.44772 33 7 33.4477 7 34V56C7 56.5523 7.44772 57 8 57H10Z" fill="#F2C94C"/><path d="M6.65685 28.6569C5.15656 30.1571 3.12173 31 1 31C-1.12173 31 -3.15656 30.1571 -4.65685 28.6569" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><circle cx="1" cy="25" r="4" fill="#F2C94C"/><circle cx="1" cy="18" r="2" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M58.9991 0H21V80H58.9991V0Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 40C-0.326003 40 -1.5978 40.5268 -2.53544 41.4645C-3.47313 42.4022 -4 43.6741 -4 45.0001C-4 46.3262 -3.47323 47.5979 -2.53559 48.5356C-2.26999 48.8012 -1.97758 49.0338 -1.66472 49.2308C-1.93245 48.7671 -2.07692 48.2372 -2.07692 47.6924V47.6922C-2.07692 47.6668 -2.0766 47.6414 -2.07598 47.616C-2.05647 46.8276 -1.73478 46.0756 -1.17575 45.5166C-0.634791 44.9756 0.0869646 44.6569 0.847431 44.6192C0.894961 44.6168 0.942642 44.6155 0.99044 44.6154L1 44.6154C1.03825 44.6154 1.07641 44.6144 1.11443 44.6125C1.68475 44.5842 2.22602 44.3452 2.63172 43.9395C3.0645 43.5067 3.30769 42.9196 3.30769 42.3076C3.30769 42.2885 3.30745 42.2695 3.30698 42.2505C3.29231 41.6592 3.05098 41.0952 2.63172 40.6759C2.24799 40.2922 1.74299 40.0575 1.20683 40.0093C1.13833 40.0031 1.06933 40 1 40ZM-0.178918 42.3077C-0.178918 41.6704 0.337677 41.1538 0.974929 41.1538C1.61218 41.1538 2.12877 41.6704 2.12877 42.3077C2.12877 42.9449 1.61218 43.4615 0.974929 43.4615C0.337677 43.4615 -0.178918 42.9449 -0.178918 42.3077Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.07691 42.2982C4.07683 42.2723 4.07642 42.2465 4.07569 42.2207C4.06118 41.7066 3.91819 41.2082 3.66472 40.7692C3.97758 40.9662 4.26999 41.1988 4.53559 41.4644C5.47323 42.4021 6 43.6738 6 44.9999C6 46.3259 5.47313 47.5978 4.53544 48.5355C3.5978 49.4732 2.326 50 1 50C0.901143 50 0.802937 49.9937 0.705927 49.9812C0.202405 49.9165 -0.268874 49.6869 -0.631719 49.3241C-1.05093 48.9049 -1.29226 48.3409 -1.30698 47.7497C-1.30745 47.7306 -1.30769 47.7115 -1.30769 47.6924L-1.30768 47.6852C-1.30763 47.6686 -1.3074 47.6519 -1.30698 47.6353C-1.29235 47.0439 -1.05101 46.4798 -0.631719 46.0605C-0.226014 45.6548 0.315255 45.4158 0.88558 45.3875C0.923602 45.3856 0.961753 45.3846 1 45.3846C1.09862 45.3846 1.19676 45.3799 1.29411 45.3705C2.0022 45.3026 2.66847 44.9907 3.17575 44.4834C3.75277 43.9064 4.07692 43.1238 4.07692 42.3078V42.3076L4.07691 42.2982ZM2.17892 47.6923C2.17892 48.3296 1.66232 48.8462 1.02507 48.8462C0.387819 48.8462 -0.128775 48.3296 -0.128775 47.6923C-0.128775 47.0551 0.387819 46.5385 1.02507 46.5385C1.66232 46.5385 2.17892 47.0551 2.17892 47.6923Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-8 33C-8.55228 33 -9 33.4477 -9 34V56C-9 56.5523 -8.55228 57 -8 57H-6C-5.44772 57 -5 56.5523 -5 56V34C-5 33.4477 -5.44772 33 -6 33H-8ZM-4 37C-4 37.5523 -3.55228 38 -3 38H5C5.55229 38 6 37.5523 6 37V35C6 34.4477 5.55228 34 5 34H-3C-3.55228 34 -4 34.4477 -4 35V37ZM6 55C6 55.5523 5.55228 56 5 56H-3C-3.55228 56 -4 55.5523 -4 55V53C-4 52.4477 -3.55228 52 -3 52H5C5.55229 52 6 52.4477 6 53V55ZM10 57C10.5523 57 11 56.5523 11 56V34C11 33.4477 10.5523 33 10 33H8C7.44772 33 7 33.4477 7 34V56C7 56.5523 7.44772 57 8 57H10Z" fill="#F2C94C"/><path d="M6.65685 28.6569C5.15656 30.1571 3.12173 31 1 31C-1.12173 31 -3.15656 30.1571 -4.65685 28.6569" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><circle cx="1" cy="25" r="4" fill="#F2C94C"/><circle cx="1" cy="18" r="2" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsMongolia = forwardRef((props, ref) => {
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

FlagsMongolia.displayName = 'FlagsMongolia'

export default FlagsMongolia
