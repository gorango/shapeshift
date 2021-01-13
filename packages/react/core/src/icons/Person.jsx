
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M38.1546 23.8705C39.6368 24.5843 41.3634 24.5843 42.8456 23.8705C44.3278 23.1567 45.4043 21.8068 45.7704 20.203C46.1365 18.5991 45.7523 16.9158 44.7265 15.6296C43.7008 14.3434 42.1452 13.5942 40.5001 13.5942C38.855 13.5942 37.2994 14.3434 36.2737 15.6296C35.2479 16.9158 34.8637 18.5991 35.2298 20.203C35.5959 21.8068 36.6724 23.1567 38.1546 23.8705Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.4043 25.5761C39.1028 25.0918 40.9034 25.095 42.5986 25.5824C44.8365 26.2258 46.7617 27.6744 47.9985 29.6513L49.4413 31.9575L53.987 40.0388C55.0701 41.9643 54.3872 44.4031 52.4618 45.4862C50.5363 46.5692 48.0975 45.8864 47.0144 43.9609L45.5007 41.2699V45.4277L50.3382 61.8746C50.9615 63.9939 49.7488 66.2174 47.6294 66.8407C45.51 67.4641 43.2866 66.2513 42.6633 64.132L40.0007 55.0796L37.3382 64.132C36.7148 66.2513 34.4914 67.4641 32.372 66.8407C30.2526 66.2174 29.0399 63.9939 29.6633 61.8746L34.5007 45.4277V41.2712L32.9866 43.9617C31.9031 45.8869 29.4641 46.5692 27.5389 45.4858C25.6137 44.4023 24.9314 41.9633 26.0148 40.0381L30.5553 31.9701L31.9676 29.6863C33.2042 27.6865 35.1431 26.2207 37.4043 25.5761Z"
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
            d="M36.9043 25.5761C38.6028 25.0918 40.4034 25.095 42.0986 25.5824C44.3365 26.2258 46.2617 27.6744 47.4985 29.6513L48.8918 31.8784L48.9413 31.9575L48.987 32.0388L53.487 40.0388C54.5701 41.9643 53.8872 44.4031 51.9618 45.4862C50.0363 46.5692 47.5975 45.8864 46.5144 43.9609L45.0007 41.2699V45.4277L49.8382 61.8746C50.4615 63.9939 49.2488 66.2174 47.1294 66.8407C45.01 67.4641 42.7866 66.2513 42.1633 64.132L39.5007 55.0796L36.8382 64.132C36.2148 66.2513 33.9914 67.4641 31.872 66.8407C29.7526 66.2174 28.5399 63.9939 29.1633 61.8746L34.0007 45.4277V41.2712L32.4866 43.9617C31.4031 45.8869 28.9641 46.5692 27.0389 45.4858C25.1137 44.4023 24.4314 41.9633 25.5148 40.0381L30.0148 32.042L30.0553 31.9701L30.0987 31.9L31.4676 29.6863C32.7042 27.6865 34.6431 26.2207 36.9043 25.5761Z"
            fill="currentColor"
          />
          <path
            d="M37.6545 23.8705C39.1367 24.5843 40.8633 24.5843 42.3455 23.8705C43.8277 23.1567 44.9042 21.8068 45.2703 20.2029C45.6364 18.599 45.2522 16.9157 44.2264 15.6295C43.2007 14.3433 41.6451 13.5942 40 13.5942C38.3549 13.5942 36.7993 14.3433 35.7736 15.6295C34.7478 16.9157 34.3636 18.599 34.7297 20.2029C35.0958 21.8068 36.1723 23.1567 37.6545 23.8705Z"
            fill="currentColor"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.9043 25.5761C38.6028 25.0918 40.4034 25.095 42.0986 25.5824C44.3365 26.2258 46.2617 27.6744 47.4985 29.6513L48.8918 31.8784L48.9413 31.9575L48.987 32.0388L53.487 40.0388C54.5701 41.9643 53.8872 44.4031 51.9618 45.4862C50.0363 46.5692 47.5975 45.8864 46.5144 43.9609L45.0007 41.2699V45.4277L49.8382 61.8746C50.4615 63.9939 49.2488 66.2174 47.1294 66.8407C45.01 67.4641 42.7866 66.2513 42.1633 64.132L39.5007 55.0796L36.8382 64.132C36.2148 66.2513 33.9914 67.4641 31.872 66.8407C29.7526 66.2174 28.5399 63.9939 29.1633 61.8746L34.0007 45.4277V41.2712L32.4866 43.9617C31.4031 45.8869 28.9641 46.5692 27.0389 45.4858C25.1137 44.4023 24.4314 41.9633 25.5148 40.0381L30.0148 32.042L30.0553 31.9701L30.0987 31.9L31.4676 29.6863C32.7042 27.6865 34.6431 26.2207 36.9043 25.5761Z"
            fill="#F2C94C"
          />
          <path
            d="M42.0986 25.5824L41.9604 26.0629L42.0986 25.5824ZM36.9043 25.5761L36.7672 25.0952L36.9043 25.5761ZM47.4985 29.6513L47.9223 29.3861V29.3861L47.4985 29.6513ZM48.8918 31.8784L48.4679 32.1436L48.8918 31.8784ZM48.9413 31.9575L49.377 31.7124L49.3713 31.7022L49.3651 31.6923L48.9413 31.9575ZM48.987 32.0388L49.4228 31.7937L49.4228 31.7937L48.987 32.0388ZM53.487 40.0388L53.9228 39.7937L53.487 40.0388ZM51.9618 45.4862L52.2069 45.922L52.2069 45.922L51.9618 45.4862ZM46.5144 43.9609L46.0786 44.2061L46.5144 43.9609ZM45.0007 41.2699L45.4365 41.0248L44.5007 39.3612V41.2699H45.0007ZM45.0007 45.4277H44.5007V45.4997L44.521 45.5688L45.0007 45.4277ZM49.8382 61.8746L49.3585 62.0157L49.8382 61.8746ZM47.1294 66.8407L47.2705 67.3204L47.1294 66.8407ZM42.1633 64.132L41.6836 64.2731L42.1633 64.132ZM39.5007 55.0796L39.9804 54.9385L39.5007 53.3076L39.021 54.9385L39.5007 55.0796ZM36.8382 64.132L36.3585 63.9909L36.8382 64.132ZM31.872 66.8407L31.7309 67.3204L31.872 66.8407ZM29.1633 61.8746L29.6429 62.0157L29.1633 61.8746ZM34.0007 45.4277L34.4804 45.5688L34.5007 45.4997V45.4277H34.0007ZM34.0007 41.2712H34.5007V39.3633L33.565 41.026L34.0007 41.2712ZM32.4866 43.9617L32.0509 43.7164H32.0509L32.4866 43.9617ZM27.0389 45.4858L26.7937 45.9215H26.7937L27.0389 45.4858ZM25.5148 40.0381L25.9506 40.2833H25.9506L25.5148 40.0381ZM30.0148 32.042L29.5791 31.7968V31.7968L30.0148 32.042ZM30.0553 31.9701L29.63 31.7072L29.6246 31.7159L29.6195 31.7249L30.0553 31.9701ZM30.0987 31.9L29.6734 31.637L29.6734 31.637L30.0987 31.9ZM31.4676 29.6863L31.8928 29.9493L31.4676 29.6863ZM42.2367 25.1018C40.4518 24.5886 38.5558 24.5853 36.7672 25.0952L37.0413 26.0569C38.6498 25.5984 40.355 25.6013 41.9604 26.0629L42.2367 25.1018ZM47.9223 29.3861C46.6201 27.3045 44.593 25.7793 42.2367 25.1018L41.9604 26.0629C44.08 26.6723 45.9033 28.0443 47.0746 29.9165L47.9223 29.3861ZM49.3157 31.6132L47.9223 29.3861L47.0746 29.9165L48.4679 32.1436L49.3157 31.6132ZM49.3651 31.6923L49.3157 31.6132L48.4679 32.1436L48.5174 32.2227L49.3651 31.6923ZM49.4228 31.7937L49.377 31.7124L48.5055 32.2026L48.5512 32.284L49.4228 31.7937ZM53.9228 39.7937L49.4228 31.7937L48.5512 32.284L53.0512 40.284L53.9228 39.7937ZM52.2069 45.922C54.373 44.7035 55.1412 41.9598 53.9228 39.7937L53.0512 40.284C53.9989 41.9687 53.4014 44.1027 51.7166 45.0504L52.2069 45.922ZM46.0786 44.2061C47.2971 46.3722 50.0408 47.1404 52.2069 45.922L51.7166 45.0504C50.0319 45.9981 47.8979 45.4006 46.9502 43.7158L46.0786 44.2061ZM44.5649 41.515L46.0786 44.2061L46.9502 43.7158L45.4365 41.0248L44.5649 41.515ZM45.5007 45.4277V41.2699H44.5007V45.4277H45.5007ZM50.3178 61.7335L45.4804 45.2867L44.521 45.5688L49.3585 62.0157L50.3178 61.7335ZM47.2705 67.3204C49.6548 66.6191 51.0191 64.1178 50.3178 61.7335L49.3585 62.0157C49.9039 63.8701 48.8428 65.8156 46.9883 66.361L47.2705 67.3204ZM41.6836 64.2731C42.3849 66.6573 44.8862 68.0217 47.2705 67.3204L46.9883 66.361C45.1339 66.9065 43.1884 65.8453 42.6429 63.9909L41.6836 64.2731ZM39.021 55.2207L41.6836 64.2731L42.6429 63.9909L39.9804 54.9385L39.021 55.2207ZM37.3178 64.2731L39.9804 55.2207L39.021 54.9385L36.3585 63.9909L37.3178 64.2731ZM31.7309 67.3204C34.1152 68.0217 36.6166 66.6573 37.3178 64.2731L36.3585 63.9909C35.813 65.8453 33.8675 66.9065 32.0131 66.361L31.7309 67.3204ZM28.6836 61.7335C27.9823 64.1178 29.3466 66.6191 31.7309 67.3204L32.0131 66.361C30.1587 65.8156 29.0975 63.8701 29.6429 62.0157L28.6836 61.7335ZM33.521 45.2867L28.6836 61.7335L29.6429 62.0157L34.4804 45.5688L33.521 45.2867ZM33.5007 41.2712V45.4277H34.5007V41.2712H33.5007ZM32.9223 44.2069L34.4364 41.5164L33.565 41.026L32.0509 43.7164L32.9223 44.2069ZM26.7937 45.9215C28.9596 47.1404 31.7034 46.3727 32.9223 44.2069L32.0509 43.7164C31.1028 45.401 28.9687 45.9981 27.2842 45.05L26.7937 45.9215ZM25.0791 39.7929C23.8602 41.9587 24.6279 44.7026 26.7937 45.9215L27.2842 45.05C25.5996 44.102 25.0025 41.9679 25.9506 40.2833L25.0791 39.7929ZM29.5791 31.7968L25.0791 39.7929L25.9506 40.2833L30.4506 32.2872L29.5791 31.7968ZM29.6195 31.7249L29.5791 31.7968L30.4506 32.2872L30.491 32.2154L29.6195 31.7249ZM29.6734 31.637L29.63 31.7072L30.4805 32.2331L30.5239 32.163L29.6734 31.637ZM31.0423 29.4233L29.6734 31.637L30.5239 32.163L31.8928 29.9493L31.0423 29.4233ZM36.7672 25.0952C34.3862 25.774 32.3445 27.3176 31.0423 29.4233L31.8928 29.9493C33.0639 28.0555 34.9001 26.6674 37.0413 26.0569L36.7672 25.0952Z"
            fill="#F2C94C"
          />
          <path
            d="M37.6545 23.8705C39.1367 24.5843 40.8633 24.5843 42.3455 23.8705C43.8277 23.1567 44.9042 21.8068 45.2703 20.2029C45.6364 18.599 45.2522 16.9157 44.2264 15.6295C43.2007 14.3433 41.6451 13.5942 40 13.5942C38.3549 13.5942 36.7993 14.3433 35.7736 15.6295C34.7478 16.9157 34.3636 18.599 34.7297 20.2029C35.0958 21.8068 36.1723 23.1567 37.6545 23.8705Z"
            fill="#F2994A"
            stroke="#F2994A"
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
            d="M37.4043 25.5761C39.1028 25.0919 40.9034 25.095 42.5986 25.5824C44.8365 26.2259 46.7617 27.6744 47.9985 29.6513L49.4413 31.9576L53.987 40.0389C55.0701 41.9643 54.3872 44.4032 52.4618 45.4862C50.5363 46.5693 48.0975 45.8864 47.0144 43.961L45.5007 41.27V45.4278L50.3382 61.8746C50.9615 63.994 49.7488 66.2174 47.6294 66.8408C45.51 67.4641 43.2866 66.2514 42.6633 64.132L40.0007 55.0796L37.3382 64.132C36.7148 66.2514 34.4914 67.4641 32.372 66.8408C30.2526 66.2174 29.0399 63.994 29.6633 61.8746L34.5007 45.4278V41.2713L32.9866 43.9617C31.9031 45.8869 29.4641 46.5693 27.5389 45.4858C25.6137 44.4024 24.9314 41.9634 26.0148 40.0382L30.5553 31.9702L31.9676 29.6863C33.2042 27.6866 35.1431 26.2208 37.4043 25.5761Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.1545 23.8705C39.6367 24.5843 41.3633 24.5843 42.8455 23.8705C44.3277 23.1567 45.4042 21.8068 45.7703 20.203C46.1364 18.5991 45.7522 16.9158 44.7264 15.6296C43.7007 14.3434 42.1451 13.5942 40.5 13.5942C38.8549 13.5942 37.2993 14.3434 36.2736 15.6296C35.2478 16.9158 34.8636 18.5991 35.2297 20.203C35.5958 21.8068 36.6723 23.1567 38.1545 23.8705Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.4043 25.5761C39.1028 25.0919 40.9034 25.095 42.5986 25.5824C44.8365 26.2259 46.7617 27.6744 47.9985 29.6513L49.4413 31.9576L53.987 40.0389C55.0701 41.9643 54.3872 44.4032 52.4618 45.4862C50.5363 46.5693 48.0975 45.8864 47.0144 43.961L45.5007 41.27V45.4278L50.3382 61.8746C50.9615 63.994 49.7488 66.2174 47.6294 66.8408C45.51 67.4641 43.2866 66.2514 42.6633 64.132L40.0007 55.0796L37.3382 64.132C36.7148 66.2514 34.4914 67.4641 32.372 66.8408C30.2526 66.2174 29.0399 63.994 29.6633 61.8746L34.5007 45.4278V41.2713L32.9866 43.9617C31.9031 45.8869 29.4641 46.5693 27.5389 45.4858C25.6137 44.4024 24.9314 41.9634 26.0148 40.0382L30.5553 31.9702L31.9676 29.6863C33.2042 27.6866 35.1431 26.2208 37.4043 25.5761Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.1545 23.8705C39.6367 24.5843 41.3633 24.5843 42.8455 23.8705C44.3277 23.1567 45.4042 21.8068 45.7703 20.203C46.1364 18.5991 45.7522 16.9158 44.7264 15.6296C43.7007 14.3434 42.1451 13.5942 40.5 13.5942C38.8549 13.5942 37.2993 14.3434 36.2736 15.6296C35.2478 16.9158 34.8636 18.5991 35.2297 20.203C35.5958 21.8068 36.6723 23.1567 38.1545 23.8705Z"
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
            d="M44.885 24.566C46.0438 23.5489 46.8697 22.1832 47.2202 20.6475C47.7218 18.4502 47.1954 16.1442 45.7902 14.3821C44.385 12.62 42.2539 11.5938 40.0001 11.5938C37.7463 11.5938 35.6152 12.62 34.21 14.3821C32.8048 16.1442 32.2785 18.4502 32.78 20.6475C33.094 22.0232 33.7895 23.2625 34.764 24.2369C32.7105 25.1692 30.9661 26.6944 29.7667 28.6339L28.3327 30.9529L23.772 39.0568C22.1468 41.9446 23.1704 45.6031 26.0582 47.2283C27.7262 48.167 29.6514 48.222 31.2934 47.5445L27.2446 61.3098C26.3096 64.4888 28.1287 67.824 31.3078 68.759C34.4868 69.6941 37.822 67.8749 38.757 64.6959L39.5008 62.167L40.2446 64.6959C41.1797 67.8749 44.5148 69.6941 47.6939 68.759C50.8729 67.824 52.692 64.4888 51.757 61.3098L47.7082 47.5445C49.3498 48.2219 51.2745 48.1671 52.9424 47.2289C55.8305 45.6043 56.8549 41.946 55.2303 39.0579L50.6616 30.9359L49.1941 28.5901C48.1261 26.883 46.6349 25.5013 44.885 24.566ZM36.6797 19.7574C36.9103 20.7679 37.5886 21.6184 38.5224 22.0681C39.4562 22.5178 40.544 22.5178 41.4778 22.0681C42.4117 21.6184 43.0899 20.7679 43.3205 19.7574C43.5512 18.7469 43.3091 17.6864 42.6629 16.8761C42.0167 16.0657 41.0366 15.5938 40.0001 15.5938C38.9636 15.5938 37.9836 16.0657 37.3373 16.8761C36.6911 17.6864 36.4491 18.7469 36.6797 19.7574ZM37.4527 27.499C38.7908 27.1175 40.21 27.1199 41.546 27.504C43.3106 28.0114 44.8284 29.1537 45.803 30.7116L47.2211 32.9783L51.744 41.0189C52.2855 41.9816 51.9441 43.2011 50.9813 43.7426C50.0186 44.2841 48.7992 43.9427 48.2577 42.98L43.0008 33.6345V45.7153L47.9195 62.4385C48.2312 63.4982 47.6249 64.6099 46.5652 64.9216C45.5055 65.2332 44.3938 64.6269 44.0821 63.5672L39.5008 47.9913L34.9195 63.5672C34.6079 64.6269 33.4962 65.2332 32.4365 64.9216C31.3768 64.6099 30.7704 63.4982 31.0821 62.4385L36.0008 45.7153V33.639L30.7438 42.9803C30.202 43.9429 28.9825 44.2841 28.0199 43.7424C27.0573 43.2007 26.7161 41.9812 27.2579 41.0186L31.7781 32.9865L33.1687 30.7378C34.1432 29.162 35.671 28.007 37.4527 27.499Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePerson = forwardRef((props, ref) => {
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

CorePerson.displayName = 'CorePerson'

export default CorePerson