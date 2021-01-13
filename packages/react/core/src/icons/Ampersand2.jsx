
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M55.2689 59.5827L30.0183 34.332C28.5097 32.8234 27.6648 30.7666 27.6708 28.6331C27.6832 24.2206 31.2723 20.6334 35.6847 20.6495C37.7923 20.6571 39.8114 21.4978 41.3018 22.9881L42.2759 23.9622"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29.249 33.3828C26.4111 36.2611 24.7604 40.1772 24.7604 44.3284C24.7604 49.8976 27.7315 55.0438 32.5546 57.8284C37.3777 60.613 43.32 60.613 48.1431 57.8284C52.9661 55.0438 55.9373 49.8976 55.9373 44.3284C55.9373 41.6507 55.2504 39.0708 54.0012 36.8041"
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
            d="M55.2689 59.5824L30.0183 34.3317C28.5096 32.8231 27.6648 30.7663 27.6708 28.6328V28.6328C27.6832 24.2203 31.2722 20.6331 35.6847 20.6492V20.6492C37.7923 20.6568 39.8114 21.4975 41.3018 22.9878L41.9517 23.6378L42.2758 23.9619"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.5546 57.8285L34.0546 55.2305L32.5546 57.8285ZM27.1128 31.2767C28.2761 30.0969 30.1755 30.0835 31.3553 31.2467C32.5351 32.41 32.5485 34.3095 31.3853 35.4893L27.1128 31.2767ZM51.3738 38.2524C50.574 36.8014 51.102 34.9767 52.5531 34.1769C54.0041 33.3772 55.8288 33.9052 56.6285 35.3562L51.3738 38.2524ZM48.1431 57.8285L49.6431 60.4266V60.4266L48.1431 57.8285ZM27.7604 44.3285C27.7604 48.826 30.1597 52.9817 34.0546 55.2305L31.0546 60.4266C25.3033 57.1061 21.7604 50.9695 21.7604 44.3285H27.7604ZM21.7604 44.3285C21.7604 39.378 23.7292 34.7084 27.1128 31.2767L31.3853 35.4893C29.0929 37.8142 27.7604 40.9768 27.7604 44.3285H21.7604ZM52.9373 44.3285C52.9373 42.166 52.3829 40.0832 51.3738 38.2524L56.6285 35.3562C58.118 38.0587 58.9373 41.1357 58.9373 44.3285H52.9373ZM46.6431 55.2305C50.5379 52.9817 52.9373 48.826 52.9373 44.3285H58.9373C58.9373 50.9696 55.3943 57.1061 49.6431 60.4266L46.6431 55.2305ZM49.6431 60.4266C43.8918 63.7471 36.8059 63.7471 31.0546 60.4266L34.0546 55.2305C37.9495 57.4792 42.7482 57.4792 46.6431 55.2305L49.6431 60.4266Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M55.2689 59.5824L30.0183 34.3317C28.5096 32.8231 27.6648 30.7663 27.6708 28.6328V28.6328C27.6832 24.2203 31.2722 20.6331 35.6847 20.6492V20.6492C37.7923 20.6568 39.8114 21.4975 41.3018 22.9878L41.9517 23.6378L42.2758 23.9619"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.5546 57.8285L33.5546 56.0965L32.5546 57.8285ZM27.8249 31.9788C28.6004 31.1922 29.8667 31.1833 30.6532 31.9588C31.4398 32.7343 31.4487 34.0006 30.6732 34.7872L27.8249 31.9788ZM52.2496 37.7697C51.7164 36.8023 52.0684 35.5859 53.0358 35.0527C54.0031 34.5196 55.2196 34.8715 55.7527 35.8389L52.2496 37.7697ZM48.1431 57.8285L49.1431 59.5606V59.5606L48.1431 57.8285ZM26.7604 44.3285C26.7604 49.1832 29.3503 53.6691 33.5546 56.0965L31.5546 59.5606C26.1127 56.4187 22.7604 50.6123 22.7604 44.3285H26.7604ZM22.7604 44.3285C22.7604 39.6444 24.6232 35.226 27.8249 31.9788L30.6732 34.7872C28.199 37.2966 26.7604 40.7103 26.7604 44.3285H22.7604ZM53.9373 44.3285C53.9373 41.9943 53.3387 39.7458 52.2496 37.7697L55.7527 35.8389C57.1622 38.3961 57.9373 41.3074 57.9373 44.3285H53.9373ZM47.1431 56.0965C51.3473 53.6691 53.9373 49.1832 53.9373 44.3285H57.9373C57.9373 50.6123 54.5849 56.4187 49.1431 59.5606L47.1431 56.0965ZM49.1431 59.5606C43.7012 62.7025 36.9965 62.7025 31.5546 59.5606L33.5546 56.0965C37.7589 58.5238 42.9388 58.5238 47.1431 56.0965L49.1431 59.5606Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M42.2758 23.9622L41.3018 22.9881C39.8114 21.4978 37.7923 20.6571 35.6847 20.6495C31.2723 20.6334 27.6832 24.2206 27.6708 28.6331C27.6648 30.7666 28.5097 32.8234 30.0183 34.332L55.2689 59.5827M29.249 33.3827C26.4111 36.261 24.7604 40.1771 24.7604 44.3283C24.7604 49.8975 27.7315 55.0436 32.5546 57.8283C37.3777 60.6129 43.32 60.6129 48.1431 57.8283C52.9661 55.0436 55.9373 49.8975 55.9373 44.3283C55.9373 41.6506 55.2504 39.0707 54.0012 36.804"
            stroke="currentColor"
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
            d="M29.3219 28.3555C29.3313 25.0413 32.0283 22.3543 35.3285 22.3663C36.9083 22.372 38.4216 23.0021 39.5387 24.1191L40.5128 25.0932C41.2938 25.8742 42.5601 25.8742 43.3412 25.0932C44.1222 24.3121 44.1222 23.0458 43.3412 22.2648L42.3671 21.2907C40.5035 19.4271 37.9786 18.3759 35.3431 18.3663C29.8185 18.3462 25.3375 22.8336 25.3219 28.3442C25.3174 29.9366 25.6924 31.4951 26.3978 32.8942C23.86 35.9906 22.4115 39.9145 22.4115 44.0451C22.4115 50.3288 25.7638 56.1352 31.2057 59.2771C36.6476 62.419 43.3523 62.419 48.7942 59.2771C49.4819 58.88 50.1363 58.4404 50.7548 57.9626L53.5058 60.7137C54.2869 61.4947 55.5532 61.4947 56.3343 60.7137C57.1153 59.9326 57.1153 58.6663 56.3343 57.8853L53.6214 55.1724C56.1474 52.0794 57.5884 48.1648 57.5884 44.0451C57.5884 41.0239 56.8133 38.1126 55.4039 35.5554C54.8707 34.5881 53.6542 34.2361 52.6869 34.7693C51.7195 35.3024 51.3675 36.5189 51.9007 37.4862C52.9899 39.4623 53.5884 41.7108 53.5884 44.0451C53.5884 47.089 52.5702 49.9879 50.7743 52.3253L31.0836 32.6346C30.9421 32.4931 30.8084 32.3452 30.6827 32.1914C30.588 32.0056 30.4624 31.8316 30.306 31.677C29.6663 30.6983 29.3186 29.5429 29.3219 28.3555ZM28.941 36.1489C27.3224 38.4164 26.4115 41.166 26.4115 44.0451C26.4115 48.8997 29.0014 53.3857 33.2057 55.813C37.41 58.2403 42.5899 58.2403 46.7942 55.813C47.175 55.5931 47.5426 55.3564 47.8962 55.104L28.941 36.1489Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAmpersand2 = forwardRef((props, ref) => {
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

CoreAmpersand2.displayName = 'CoreAmpersand2'

export default CoreAmpersand2