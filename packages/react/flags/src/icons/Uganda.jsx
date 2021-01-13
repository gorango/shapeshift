
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g opacity="0.9"><path d="M120 0H0V13.3333H120V0Z" fill="#333333"/><path d="M120 13.3333H0V26.6666H120V13.3333Z" fill="#F2C94C"/><path d="M120 26.6667H0V40.0001H120V26.6667Z" fill="#EB5757"/><path d="M120 40H0V53.3333H120V40Z" fill="#333333"/><path d="M120 53.3333H0V66.6666H120V53.3333Z" fill="#F2C94C"/><path d="M120 66.6667H0V80.0001H120V66.6667Z" fill="#EB5757"/></g>
          <circle
            cx="60"
            cy="40"
            r="14"
            fill="#F2F2F2"
          />
          <path
            d="M60.0708 42.855C60.1063 44.6725 60.22 48.6479 60.3901 50.0096M60.3901 50.0096C59.8758 50.3111 58.7089 51.0469 58.1557 51.5789M60.3901 50.0096C60.7713 49.983 61.6612 49.983 62.1719 50.1958M60.3901 50.0096C59.6098 49.9742 57.8791 49.9618 57.1982 50.1958"
            stroke="#333333"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.1499 42.4561L62.3043 45.7275H57.0116M54.8568 47.4563C54.8355 46.3073 55.8409 45.825 56.3462 45.7275H57.0116M57.0116 45.7275C56.7279 45.9048 56.1286 46.4562 56.0009 47.2435"
            stroke="#333333"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <circle
            cx="57.9988"
            cy="33.7083"
            r="1.03692"
            fill="#EB5757"
          />
          <path
            d="M56.841 29.1002C57.2877 28.7597 57.8135 28.5382 58.3692 28.4563C58.9248 28.3745 59.4921 28.435 60.018 28.6322C60.5439 28.8294 61.0111 29.1568 61.376 29.5838C61.7408 30.0109 61.9913 30.5235 62.104 31.0737L60.4884 31.4046C60.4317 31.1278 60.3057 30.8699 60.1221 30.6551C59.9386 30.4403 59.7035 30.2755 59.439 30.1763C59.1744 30.0771 58.889 30.0467 58.6095 30.0879C58.33 30.1291 58.0655 30.2405 57.8408 30.4118L56.841 29.1002Z"
            fill="#EB5757"
          />
          <circle
            cx="58.8533"
            cy="31.7395"
            r="1.68725"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.8919 41.29C64.7136 41.308 64.5328 41.3172 64.3498 41.3172C61.3957 41.3172 59.001 38.9224 59.001 35.9684C59.001 34.649 59.4787 33.4412 60.2705 32.5085C57.5711 32.7803 55.4639 35.0591 55.4639 37.8302C55.4639 40.7842 57.8586 43.179 60.8126 43.179C62.4473 43.179 63.9108 42.4456 64.8919 41.29Z"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.1085 49.2563C66.2009 48.2604 67.6472 46.1266 67.6472 43.6549C67.6472 40.2308 64.8715 37.4551 61.4474 37.4551C59.7625 37.4551 58.2346 38.1272 57.1172 39.2179C61.2084 39.41 64.4663 42.7878 64.4663 46.9265C64.4663 47.7385 64.3409 48.5212 64.1085 49.2563Z"
            fill="#333333"
          />
          <path
            d="M57.7528 32.6713L55.3398 32.8024L55.4844 32.7195C56.1585 32.3329 56.8954 32.0679 57.6614 31.9368L57.7528 32.6713Z"
            fill="#333333"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0lnsm)"><g opacity="0.9"><path d="M120 0H0V13.3333H120V0Z" fill="#333333"/><path d="M120 13.3333H0V26.6666H120V13.3333Z" fill="#F2C94C"/><path d="M120 26.6667H0V40.0001H120V26.6667Z" fill="#EB5757"/><path d="M120 40H0V53.3333H120V40Z" fill="#333333"/><path d="M120 53.3333H0V66.6666H120V53.3333Z" fill="#F2C94C"/><path d="M120 66.6667H0V80.0001H120V66.6667Z" fill="#EB5757"/></g><circle cx="40" cy="40" r="14" fill="#F2F2F2"/><path d="M40.0708 42.855C40.1063 44.6725 40.22 48.6479 40.3901 50.0096M40.3901 50.0096C39.8758 50.3111 38.7089 51.0469 38.1557 51.5789M40.3901 50.0096C40.7713 49.983 41.6612 49.983 42.1719 50.1958M40.3901 50.0096C39.6098 49.9742 37.8791 49.9618 37.1982 50.1958" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><path d="M40.1499 42.4561L42.3043 45.7275H37.0116M34.8568 47.4563C34.8355 46.3073 35.8409 45.825 36.3462 45.7275H37.0116M37.0116 45.7275C36.7279 45.9048 36.1286 46.4562 36.0009 47.2435" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><circle cx="37.9988" cy="33.7083" r="1.03692" fill="#EB5757"/><path d="M36.841 29.1002C37.2877 28.7597 37.8135 28.5382 38.3692 28.4563C38.9248 28.3745 39.4921 28.435 40.018 28.6322C40.5439 28.8294 41.0111 29.1568 41.376 29.5838C41.7408 30.0109 41.9913 30.5235 42.104 31.0737L40.4884 31.4046C40.4317 31.1278 40.3057 30.8699 40.1221 30.6551C39.9386 30.4403 39.7035 30.2755 39.439 30.1763C39.1744 30.0771 38.889 30.0467 38.6095 30.0879C38.33 30.1291 38.0655 30.2405 37.8408 30.4118L36.841 29.1002Z" fill="#EB5757"/><circle cx="38.8533" cy="31.7395" r="1.68725" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.8919 41.29C44.7136 41.308 44.5328 41.3172 44.3498 41.3172C41.3957 41.3172 39.001 38.9224 39.001 35.9684C39.001 34.649 39.4787 33.4412 40.2705 32.5085C37.5711 32.7803 35.4639 35.0591 35.4639 37.8302C35.4639 40.7842 37.8586 43.179 40.8126 43.179C42.4473 43.179 43.9108 42.4456 44.8919 41.29Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1085 49.2563C46.2009 48.2604 47.6472 46.1266 47.6472 43.6549C47.6472 40.2308 44.8715 37.4551 41.4474 37.4551C39.7625 37.4551 38.2346 38.1272 37.1172 39.2179C41.2084 39.41 44.4663 42.7878 44.4663 46.9265C44.4663 47.7385 44.3409 48.5212 44.1085 49.2563Z" fill="#333333"/><path d="M37.7528 32.6713L35.3398 32.8024L35.4844 32.7195C36.1585 32.3329 36.8954 32.0679 37.6614 31.9368L37.7528 32.6713Z" fill="#333333"/></g>
          <defs><clipPath id="clip0lnsm"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0v5mC" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0v5mC)"><g clip-path="url(#clip0v5mC)"><g opacity="0.9"><path d="M120 0H0V13.3333H120V0Z" fill="#333333"/><path d="M120 13.3333H0V26.6666H120V13.3333Z" fill="#F2C94C"/><path d="M120 26.6667H0V40.0001H120V26.6667Z" fill="#EB5757"/><path d="M120 40H0V53.3333H120V40Z" fill="#333333"/><path d="M120 53.3333H0V66.6666H120V53.3333Z" fill="#F2C94C"/><path d="M120 66.6667H0V80.0001H120V66.6667Z" fill="#EB5757"/></g><circle cx="40" cy="40" r="14" fill="#F2F2F2"/><path d="M40.0708 42.855C40.1063 44.6725 40.22 48.6479 40.3901 50.0096M40.3901 50.0096C39.8758 50.3111 38.7089 51.0469 38.1557 51.5789M40.3901 50.0096C40.7713 49.983 41.6612 49.983 42.1719 50.1958M40.3901 50.0096C39.6098 49.9742 37.8791 49.9618 37.1982 50.1958" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><path d="M40.1499 42.4561L42.3043 45.7275H37.0116M34.8568 47.4563C34.8355 46.3073 35.8409 45.825 36.3462 45.7275H37.0116M37.0116 45.7275C36.7279 45.9048 36.1286 46.4562 36.0009 47.2435" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><circle cx="37.9988" cy="33.7083" r="1.03692" fill="#EB5757"/><path d="M36.841 29.1002C37.2877 28.7597 37.8135 28.5382 38.3692 28.4563C38.9248 28.3745 39.4921 28.435 40.018 28.6322C40.5439 28.8294 41.0111 29.1568 41.376 29.5838C41.7408 30.0109 41.9913 30.5235 42.104 31.0737L40.4884 31.4046C40.4317 31.1278 40.3057 30.8699 40.1221 30.6551C39.9386 30.4403 39.7035 30.2755 39.439 30.1763C39.1744 30.0771 38.889 30.0467 38.6095 30.0879C38.33 30.1291 38.0655 30.2405 37.8408 30.4118L36.841 29.1002Z" fill="#EB5757"/><circle cx="38.8533" cy="31.7395" r="1.68725" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.8919 41.29C44.7136 41.308 44.5328 41.3172 44.3498 41.3172C41.3957 41.3172 39.001 38.9224 39.001 35.9684C39.001 34.649 39.4787 33.4412 40.2705 32.5085C37.5711 32.7803 35.4639 35.0591 35.4639 37.8302C35.4639 40.7842 37.8586 43.179 40.8126 43.179C42.4473 43.179 43.9108 42.4456 44.8919 41.29Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1085 49.2563C46.2009 48.2604 47.6472 46.1266 47.6472 43.6549C47.6472 40.2308 44.8715 37.4551 41.4474 37.4551C39.7625 37.4551 38.2346 38.1272 37.1172 39.2179C41.2084 39.41 44.4663 42.7878 44.4663 46.9265C44.4663 47.7385 44.3409 48.5212 44.1085 49.2563Z" fill="#333333"/><path d="M37.7528 32.6713L35.3398 32.8024L35.4844 32.7195C36.1585 32.3329 36.8954 32.0679 37.6614 31.9368L37.7528 32.6713Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0v5mC"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsUganda = forwardRef((props, ref) => {
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

FlagsUganda.displayName = 'FlagsUganda'

export default FlagsUganda