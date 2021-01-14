
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40.0388 14.0498L40.0427 38.963M40.0427 39.0002L40.0427 67.0002"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 39.0002L36.2877 14.7125C38.3379 12.6622 41.6621 12.6622 43.7123 14.7125L68 39.0002"
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
            d="M36.9642 17.8945C36.9653 16.2377 38.3093 14.8954 39.9662 14.8965C41.623 14.8976 42.9653 16.2416 42.9642 17.8984L36.9642 17.8945ZM39.9637 18.6663L36.9637 18.6643V18.6643L39.9637 18.6663ZM39.9632 19.5552L42.9632 19.5571L39.9632 19.5552ZM39.9626 20.4441L42.9626 20.446V20.446L39.9626 20.4441ZM39.962 21.3329L36.962 21.331V21.331L39.962 21.3329ZM39.9614 22.2218L36.9614 22.2218L36.9614 22.2199L39.9614 22.2218ZM42.9614 42.2958C42.9614 43.9527 41.6183 45.2958 39.9614 45.2958C38.3045 45.2958 36.9614 43.9527 36.9614 42.2958L42.9614 42.2958ZM36.9614 42.3329C36.9614 40.6761 38.3045 39.3329 39.9614 39.3329C41.6183 39.3329 42.9614 40.6761 42.9614 42.3329L36.9614 42.3329ZM42.9614 63.9996C42.9614 65.6565 41.6182 66.9996 39.9614 66.9996C38.3045 66.9996 36.9614 65.6565 36.9614 63.9996L42.9614 63.9996ZM42.9642 17.8984L42.9637 18.6682L36.9637 18.6643L36.9642 17.8945L42.9642 17.8984ZM42.9637 18.6682L42.9632 19.5571L36.9632 19.5532L36.9637 18.6643L42.9637 18.6682ZM42.9632 19.5571L42.9626 20.446L36.9626 20.4421L36.9632 19.5532L42.9632 19.5571ZM42.9626 20.446L42.962 21.3349L36.962 21.331L36.9626 20.4421L42.9626 20.446ZM42.962 21.3349L42.9614 22.2238L36.9614 22.2199L36.962 21.331L42.962 21.3349ZM42.9614 22.2218L42.9614 42.2958L36.9614 42.2958L36.9614 22.2218L42.9614 22.2218ZM42.9614 42.3329L42.9614 63.9996L36.9614 63.9996L36.9614 42.3329L42.9614 42.3329Z"
            fill="currentColor"
          />
          <path
            d="M15.1104 39.1106L36.287 17.934C38.3372 15.8837 41.6614 15.8837 43.7116 17.934L64.8882 39.1106"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M37.9607 14.6735C37.9614 13.5689 38.8574 12.6741 39.962 12.6748C41.0666 12.6755 41.9614 13.5715 41.9607 14.6761L37.9607 14.6735ZM39.9605 15.0001L41.9605 15.0015L39.9605 15.0001ZM39.9598 16.0001L41.9598 16.0015L39.9598 16.0001ZM39.9592 17.0001L41.9592 17.0015L39.9592 17.0001ZM39.9585 18.0001L37.9585 17.9988L39.9585 18.0001ZM39.9579 19.0001L37.9579 18.9988L39.9579 19.0001ZM39.9572 20.0001L37.9572 20.0001L37.9572 19.9988L39.9572 20.0001ZM41.9572 38.963C41.9572 40.0676 41.0618 40.963 39.9572 40.963C38.8526 40.963 37.9572 40.0676 37.9572 38.963L41.9572 38.963ZM37.9572 39.0001C37.9572 37.8956 38.8526 37.0001 39.9572 37.0001C41.0618 37.0001 41.9572 37.8956 41.9572 39.0002L37.9572 39.0001ZM41.9572 67.0002C41.9572 68.1047 41.0618 69.0002 39.9572 69.0002C38.8526 69.0002 37.9572 68.1047 37.9572 67.0002H41.9572ZM41.9607 14.6761L41.9605 15.0015L37.9605 14.9988L37.9607 14.6735L41.9607 14.6761ZM41.9605 15.0015L41.9598 16.0015L37.9598 15.9988L37.9605 14.9988L41.9605 15.0015ZM41.9598 16.0015L41.9592 17.0015L37.9592 16.9988L37.9598 15.9988L41.9598 16.0015ZM41.9592 17.0015L41.9585 18.0015L37.9585 17.9988L37.9592 16.9988L41.9592 17.0015ZM41.9585 18.0015L41.9579 19.0015L37.9579 18.9988L37.9585 17.9988L41.9585 18.0015ZM41.9579 19.0015L41.9572 20.0015L37.9572 19.9988L37.9579 18.9988L41.9579 19.0015ZM41.9572 20.0001L41.9572 38.963L37.9572 38.963L37.9572 20.0001L41.9572 20.0001ZM41.9572 39.0002L41.9572 67.0002H37.9572L37.9572 39.0001L41.9572 39.0002Z"
            fill="#56CCF2"
          />
          <path
            d="M12 39L36.2877 14.7123C38.3379 12.6621 41.6621 12.6621 43.7123 14.7123L68 39"
            stroke="#2F80ED"
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
            d="M40.0393 14.675L40.0428 38.9632M40.0428 39.0003L40.0428 67.0004M12 39.0002L36.2877 14.7125C38.3379 12.6622 41.6621 12.6622 43.7123 14.7125L68 39.0002"
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
            d="M42.4963 16.7892L66.2322 40.5252C67.2085 41.5015 68.7915 41.5015 69.7678 40.5252C70.7441 39.5489 70.7441 37.9659 69.7678 36.9896L46.0104 13.2323C42.6909 9.91281 37.309 9.91282 33.9896 13.2323L10.2322 36.9896C9.25592 37.9659 9.25592 39.5489 10.2322 40.5252C11.2085 41.5015 12.7915 41.5015 13.7678 40.5252L37.4963 16.7966L37.4944 19.7559L37.4944 19.7575L37.4943 66.7576C37.4943 68.1383 38.6136 69.2576 39.9943 69.2576C41.375 69.2576 42.4943 68.1383 42.4943 66.7576L42.4963 16.7892Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrow = forwardRef((props, ref) => {
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

CoreArrow.displayName = 'CoreArrow'

export default CoreArrow
