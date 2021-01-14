
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12.6566 39.284C9.53243 36.1598 9.53243 31.0945 12.6566 27.9703L23.9703 16.6566C27.0945 13.5324 32.1598 13.5324 35.284 16.6566L46.5977 27.9703C49.7219 31.0945 49.7219 36.1598 46.5977 39.284L35.284 50.5977C32.1598 53.7219 27.0945 53.7219 23.9703 50.5977L12.6566 39.284Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.428 34.5704C15.3866 33.529 15.3866 31.8405 16.428 30.7991C17.4694 29.7577 19.1579 29.7577 20.1993 30.7991C21.2407 31.8405 21.2407 33.529 20.1993 34.5704C19.1579 35.6117 17.4694 35.6117 16.428 34.5704Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26.7991 24.1993C25.7577 23.1579 25.7577 21.4694 26.7991 20.428C27.8405 19.3866 29.529 19.3866 30.5704 20.428C31.6117 21.4694 31.6117 23.1579 30.5704 24.1993C29.529 25.2407 27.8405 25.2407 26.7991 24.1993Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.6844 46.8267C27.643 45.7853 27.643 44.0969 28.6844 43.0555C29.7258 42.0141 31.4142 42.0141 32.4556 43.0555C33.497 44.0969 33.497 45.7853 32.4556 46.8267C31.4142 47.8681 29.7258 47.8681 28.6844 46.8267Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.0555 36.4556C38.0141 35.4142 38.0141 33.7258 39.0555 32.6844C40.0969 31.643 41.7853 31.643 42.8267 32.6844C43.8681 33.7258 43.8681 35.4142 42.8267 36.4556C41.7853 37.497 40.0969 37.497 39.0555 36.4556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.4955 48.3869L36.1022 53.5866C34.9587 57.8543 37.4913 62.241 41.7591 63.3845L57.2139 67.5257C61.4816 68.6692 65.8683 66.1365 67.0118 61.8688L71.1529 46.414C72.2965 42.1463 69.7638 37.7596 65.4961 36.616L50.0413 32.4749C49.6349 32.366 49.2275 32.2905 48.8219 32.2466"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.3781 42.836C60.7593 41.4135 62.2216 40.5692 63.6441 40.9504C65.0667 41.3316 65.9109 42.7938 65.5298 44.2164C65.1486 45.639 63.6863 46.4832 62.2638 46.102C60.8412 45.7208 59.997 44.2586 60.3781 42.836Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M41.7253 55.7828C42.1065 54.3602 43.5687 53.516 44.9913 53.8972C46.4139 54.2784 47.2581 55.7406 46.8769 57.1632C46.4957 58.5858 45.0335 59.43 43.6109 59.0488C42.1884 58.6676 41.3441 57.2054 41.7253 55.7828Z"
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
            d="M41.7591 63.3846C37.5924 62.2681 35.0797 58.0604 36.0271 53.8901C36.5102 53.5437 36.9716 53.1535 37.4057 52.7193L48.7194 41.4056C51.0323 39.0927 52.0999 36.0061 51.9222 32.9789L65.4961 36.616C69.7638 37.7596 72.2965 42.1463 71.153 46.414L67.0118 61.8688C65.8683 66.1366 61.4816 68.6692 57.2139 67.5257L41.7591 63.3846ZM60.3779 42.8362C60.7591 41.4136 62.2214 40.5694 63.6439 40.9506C65.0665 41.3318 65.9107 42.794 65.5295 44.2166C65.1484 45.6392 63.6861 46.4834 62.2636 46.1022C60.841 45.721 59.9968 44.2588 60.3779 42.8362ZM44.9908 53.8973C43.5682 53.5161 42.106 54.3603 41.7248 55.7829C41.3437 57.2055 42.1879 58.6677 43.6104 59.0489C45.033 59.4301 46.4953 58.5859 46.8764 57.1633C47.2576 55.7407 46.4134 54.2785 44.9908 53.8973Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6566 39.284C9.53243 36.1598 9.53243 31.0945 12.6566 27.9703L23.9703 16.6566C27.0945 13.5324 32.1598 13.5324 35.284 16.6566L46.5977 27.9703C49.7219 31.0945 49.7219 36.1598 46.5977 39.284L35.284 50.5977C32.1598 53.7219 27.0945 53.7219 23.9703 50.5977L12.6566 39.284ZM16.4279 34.57C15.3865 33.5286 15.3865 31.8402 16.4279 30.7988C17.4693 29.7574 19.1577 29.7574 20.1991 30.7988C21.2405 31.8402 21.2405 33.5286 20.1991 34.57C19.1577 35.6114 17.4693 35.6114 16.4279 34.57ZM26.7988 20.4279C25.7574 21.4693 25.7574 23.1577 26.7988 24.1991C27.8402 25.2405 29.5286 25.2405 30.57 24.1991C31.6114 23.1577 31.6114 21.4693 30.57 20.4279C29.5286 19.3865 27.8402 19.3865 26.7988 20.4279ZM28.6844 46.8265C27.643 45.7851 27.643 44.0967 28.6844 43.0553C29.7258 42.0139 31.4142 42.0139 32.4556 43.0553C33.497 44.0967 33.497 45.7851 32.4556 46.8265C31.4142 47.8679 29.7258 47.8679 28.6844 46.8265ZM42.8265 32.6844C41.7851 31.643 40.0967 31.643 39.0553 32.6844C38.0139 33.7258 38.0139 35.4142 39.0553 36.4556C40.0967 37.497 41.7851 37.497 42.8265 36.4556C43.8679 35.4142 43.8679 33.7258 42.8265 32.6844Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.1022 53.5866L37.4955 48.3869L46.5981 39.2843C48.5128 37.3696 49.2541 34.7258 48.8219 32.2466C49.2275 32.2905 49.6349 32.366 50.0413 32.4749L65.4961 36.616C69.7638 37.7596 72.2965 42.1463 71.1529 46.414L67.0118 61.8688C65.8683 66.1365 61.4816 68.6692 57.2139 67.5257L41.7591 63.3845C37.4913 62.241 34.9587 57.8543 36.1022 53.5866Z"
            fill="#56CCF2"
          />
          <path
            d="M37.4955 48.3869L36.0812 46.9727C35.833 47.221 35.6545 47.5302 35.5636 47.8693L37.4955 48.3869ZM36.1022 53.5866L34.1704 53.0689L36.1022 53.5866ZM46.5981 39.2843L48.0123 40.6985L46.5981 39.2843ZM48.8219 32.2466L49.0371 30.2582C48.4124 30.1906 47.7923 30.4205 47.3626 30.8789C46.9329 31.3374 46.7437 31.9711 46.8516 32.5901L48.8219 32.2466ZM50.0413 32.4749L50.5589 30.5431V30.5431L50.0413 32.4749ZM65.4961 36.616L64.9785 38.5479L65.4961 36.616ZM71.1529 46.414L69.2211 45.8963L71.1529 46.414ZM67.0118 61.8688L65.08 61.3512L67.0118 61.8688ZM57.2139 67.5257L56.6962 69.4575H56.6962L57.2139 67.5257ZM41.7591 63.3845L42.2767 61.4527H42.2767L41.7591 63.3845ZM35.5636 47.8693L34.1704 53.0689L38.0341 54.1042L39.4273 48.9046L35.5636 47.8693ZM45.1839 37.8701L36.0812 46.9727L38.9097 49.8012L48.0123 40.6985L45.1839 37.8701ZM46.8516 32.5901C47.1768 34.4553 46.6188 36.4352 45.1839 37.8701L48.0123 40.6985C50.4069 38.304 51.3314 34.9963 50.7922 31.9031L46.8516 32.5901ZM50.5589 30.5431C50.053 30.4075 49.5444 30.3131 49.0371 30.2582L48.6067 34.235C48.9105 34.2679 49.2168 34.3246 49.5236 34.4068L50.5589 30.5431ZM66.0137 34.6842L50.5589 30.5431L49.5236 34.4068L64.9785 38.5479L66.0137 34.6842ZM73.0848 46.9316C74.5142 41.597 71.3484 36.1136 66.0137 34.6842L64.9785 38.5479C68.1793 39.4055 70.0787 42.6955 69.2211 45.8963L73.0848 46.9316ZM68.9437 62.3864L73.0848 46.9316L69.2211 45.8963L65.08 61.3512L68.9437 62.3864ZM56.6962 69.4575C62.0309 70.8869 67.5143 67.7211 68.9437 62.3864L65.08 61.3512C64.2223 64.552 60.9323 66.4514 57.7315 65.5938L56.6962 69.4575ZM41.2414 65.3164L56.6962 69.4575L57.7315 65.5938L42.2767 61.4527L41.2414 65.3164ZM34.1704 53.0689C32.7409 58.4036 35.9068 63.887 41.2414 65.3164L42.2767 61.4527C39.0759 60.595 37.1764 57.305 38.0341 54.1042L34.1704 53.0689Z"
            fill="#2F80ED"
          />
          <rect
            x="61.0684"
            y="40.2603"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(15 61.0684 40.2603)"
            fill="#F2F2F2"
          />
          <rect
            x="42.415"
            y="53.207"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(15 42.415 53.207)"
            fill="#F2F2F2"
          />
          <rect
            x="7"
            y="33.6274"
            width="32"
            height="32"
            rx="8"
            transform="rotate(-45 7 33.6274)"
            fill="#56CCF2"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="14.5425"
            y="32.6846"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(-45 14.5425 32.6846)"
            fill="#F2F2F2"
          />
          <rect
            x="24.9136"
            y="22.3135"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(-45 24.9136 22.3135)"
            fill="#F2F2F2"
          />
          <rect
            x="26.7988"
            y="44.9409"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(-45 26.7988 44.9409)"
            fill="#F2F2F2"
          />
          <rect
            x="37.1699"
            y="34.5703"
            width="5.33333"
            height="5.33333"
            rx="2.66667"
            transform="rotate(-45 37.1699 34.5703)"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M36.102 53.5864L37.4952 48.3867L46.5979 39.2841C48.5126 37.3694 49.2538 34.7256 48.8216 32.2463C49.2273 32.2902 49.6347 32.3658 50.041 32.4747L65.4959 36.6158C69.7636 37.7593 72.2962 42.146 71.1527 46.4137L67.0116 61.8686C65.8681 66.1363 61.4814 68.6689 57.2136 67.5254L41.7588 63.3843C37.4911 62.2408 34.9585 57.8541 36.102 53.5864Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.3777 42.836C60.7589 41.4134 62.2211 40.5692 63.6437 40.9503C65.0663 41.3315 65.9105 42.7938 65.5293 44.2163C65.1481 45.6389 63.6859 46.4831 62.2633 46.1019C60.8407 45.7208 59.9965 44.2585 60.3777 42.836Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M41.7246 55.7827C42.1058 54.3601 43.568 53.5159 44.9906 53.897C46.4132 54.2782 47.2574 55.7405 46.8762 57.163C46.495 58.5856 45.0328 59.4298 43.6102 59.0486C42.1876 58.6675 41.3434 57.2052 41.7246 55.7827Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12.6566 39.284C9.53243 36.1598 9.53243 31.0945 12.6566 27.9703L23.9703 16.6566C27.0945 13.5324 32.1598 13.5324 35.284 16.6566L46.5977 27.9703C49.7219 31.0945 49.7221 36.1599 46.5979 39.2841L35.284 50.5977C32.1598 53.7219 27.0945 53.7219 23.9703 50.5977L12.6566 39.284Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.4279 34.57C15.3865 33.5286 15.3865 31.8402 16.4279 30.7988C17.4693 29.7574 19.1577 29.7574 20.1991 30.7988C21.2405 31.8402 21.2405 33.5286 20.1991 34.57C19.1577 35.6114 17.4693 35.6114 16.4279 34.57Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26.7988 24.1991C25.7574 23.1577 25.7574 21.4693 26.7988 20.4279C27.8402 19.3865 29.5286 19.3865 30.57 20.4279C31.6114 21.4693 31.6114 23.1577 30.57 24.1991C29.5286 25.2405 27.8402 25.2405 26.7988 24.1991Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.6844 46.8265C27.643 45.7851 27.643 44.0967 28.6844 43.0553C29.7258 42.0139 31.4142 42.0139 32.4556 43.0553C33.497 44.0967 33.497 45.7851 32.4556 46.8265C31.4142 47.8679 29.7258 47.8679 28.6844 46.8265Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.0553 36.4556C38.0139 35.4142 38.0139 33.7258 39.0553 32.6844C40.0967 31.643 41.7851 31.643 42.8265 32.6844C43.8679 33.7258 43.8679 35.4142 42.8265 36.4556C41.7851 37.497 40.0967 37.497 39.0553 36.4556Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.5979 39.2841L37.4952 48.3867L36.102 53.5864C34.9584 57.8541 37.4911 62.2408 41.7588 63.3843L57.2136 67.5254C61.4814 68.6689 65.8681 66.1363 67.0116 61.8686L71.1527 46.4137C72.2962 42.146 69.7636 37.7593 65.4959 36.6158L50.041 32.4747C49.6347 32.3658 49.2273 32.2902 48.8216 32.2463C49.2538 34.7256 48.5126 37.3694 46.5979 39.2841ZM46.5979 39.2841L35.284 50.5977C32.1598 53.7219 27.0945 53.7219 23.9703 50.5977L12.6566 39.284C9.53243 36.1598 9.53243 31.0945 12.6566 27.9703L23.9703 16.6566C27.0945 13.5324 32.1598 13.5324 35.284 16.6566L46.5977 27.9703C49.7219 31.0945 49.7221 36.1599 46.5979 39.2841ZM62.2633 46.1019C60.8407 45.7208 59.9965 44.2585 60.3777 42.836C60.7589 41.4134 62.2211 40.5692 63.6437 40.9503C65.0663 41.3315 65.9105 42.7938 65.5293 44.2163C65.1481 45.6389 63.6859 46.4831 62.2633 46.1019ZM43.6102 59.0486C42.1876 58.6675 41.3434 57.2052 41.7246 55.7827C42.1058 54.3601 43.568 53.5159 44.9906 53.897C46.4132 54.2782 47.2574 55.7405 46.8762 57.163C46.495 58.5856 45.0328 59.4298 43.6102 59.0486ZM20.1991 34.57C19.1577 35.6114 17.4693 35.6114 16.4279 34.57C15.3865 33.5286 15.3865 31.8402 16.4279 30.7988C17.4693 29.7574 19.1577 29.7574 20.1991 30.7988C21.2405 31.8402 21.2405 33.5286 20.1991 34.57ZM30.57 24.1991C29.5286 25.2405 27.8402 25.2405 26.7988 24.1991C25.7574 23.1577 25.7574 21.4693 26.7988 20.4279C27.8402 19.3865 29.5286 19.3865 30.57 20.4279C31.6114 21.4693 31.6114 23.1577 30.57 24.1991ZM32.4556 46.8265C31.4142 47.8679 29.7258 47.8679 28.6844 46.8265C27.643 45.7851 27.643 44.0967 28.6844 43.0553C29.7258 42.0139 31.4142 42.0139 32.4556 43.0553C33.497 44.0967 33.497 45.7851 32.4556 46.8265ZM42.8265 36.4556C41.7851 37.497 40.0967 37.497 39.0553 36.4556C38.0139 35.4142 38.0139 33.7258 39.0553 32.6844C40.0967 31.643 41.7851 31.643 42.8265 32.6844C43.8679 33.7258 43.8679 35.4142 42.8265 36.4556Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.1616 39.0185C61.6721 38.3514 59.1132 39.8288 58.4461 42.3183C57.779 44.8078 59.2564 47.3667 61.7459 48.0338C64.2354 48.7008 66.7943 47.2234 67.4614 44.7339C68.1285 42.2444 66.6511 39.6855 64.1616 39.0185ZM62.3098 43.3536C62.4051 42.9979 62.7707 42.7869 63.1263 42.8822C63.4819 42.9775 63.693 43.343 63.5977 43.6987C63.5024 44.0543 63.1368 44.2654 62.7812 44.1701C62.4256 44.0748 62.2145 43.7092 62.3098 43.3536Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.793 55.265C40.46 52.7755 43.019 51.2981 45.5085 51.9652C47.998 52.6322 49.4754 55.1911 48.8083 57.6806C48.1412 60.1702 45.5823 61.6475 43.0928 60.9805C40.6033 60.3134 39.1259 57.7545 39.793 55.265ZM44.4732 55.8289C44.1175 55.7336 43.752 55.9446 43.6567 56.3003C43.5614 56.6559 43.7725 57.0215 44.1281 57.1168C44.4837 57.2121 44.8493 57.001 44.9446 56.6454C45.0399 56.2897 44.8288 55.9242 44.4732 55.8289Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0136 35.9842C13.1912 34.1618 13.1912 31.207 15.0136 29.3845C16.8361 27.5621 19.7909 27.5621 21.6133 29.3845C23.4358 31.207 23.4358 34.1618 21.6133 35.9842C19.7909 37.8067 16.8361 37.8067 15.0136 35.9842ZM17.8421 32.213C17.5817 32.4733 17.5817 32.8954 17.8421 33.1558C18.1024 33.4161 18.5245 33.4161 18.7849 33.1558C19.0452 32.8954 19.0452 32.4733 18.7849 32.213C18.5245 31.9526 18.1024 31.9526 17.8421 32.213Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3845 19.0136C23.5621 20.8361 23.5621 23.7909 25.3845 25.6133C27.207 27.4358 30.1618 27.4358 31.9842 25.6133C33.8067 23.7909 33.8067 20.8361 31.9842 19.0136C30.1618 17.1912 27.207 17.1912 25.3845 19.0136ZM28.213 22.7849C27.9526 22.5245 27.9526 22.1024 28.213 21.8421C28.4733 21.5817 28.8954 21.5817 29.1558 21.8421C29.4161 22.1024 29.4161 22.5245 29.1558 22.7849C28.8954 23.0452 28.4733 23.0452 28.213 22.7849Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.2702 48.2407C25.4477 46.4183 25.4477 43.4635 27.2702 41.6411C29.0926 39.8186 32.0474 39.8186 33.8698 41.6411C35.6923 43.4635 35.6923 46.4183 33.8698 48.2407C32.0474 50.0632 29.0926 50.0632 27.2702 48.2407ZM30.0986 44.4695C29.8382 44.7298 29.8382 45.1519 30.0986 45.4123C30.3589 45.6726 30.781 45.6726 31.0414 45.4123C31.3017 45.1519 31.3017 44.7298 31.0414 44.4695C30.781 44.2091 30.3589 44.2091 30.0986 44.4695Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.6411 31.2702C35.8186 33.0926 35.8186 36.0474 37.6411 37.8698C39.4635 39.6923 42.4183 39.6923 44.2407 37.8698C46.0632 36.0474 46.0632 33.0926 44.2407 31.2702C42.4183 29.4477 39.4635 29.4477 37.6411 31.2702ZM40.4695 35.0414C40.2091 34.781 40.2091 34.3589 40.4695 34.0986C40.7298 33.8382 41.1519 33.8382 41.4123 34.0986C41.6726 34.3589 41.6726 34.781 41.4123 35.0414C41.1519 35.3017 40.7298 35.3017 40.4695 35.0414Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2424 26.5561C7.33717 30.4614 7.33717 36.793 11.2424 40.6983L22.5561 52.012C25.6451 55.1009 30.2521 55.7466 33.9757 53.9489C33.0953 58.9939 36.1997 63.9653 41.2412 65.3161L56.696 69.4572C62.0307 70.8867 67.514 67.7208 68.9435 62.3862L73.0846 46.9314C74.514 41.5967 71.3482 36.1133 66.0135 34.6839L50.5587 30.5428C50.5211 30.5327 50.4836 30.5229 50.446 30.5133C49.9733 29.0665 49.1619 27.7061 48.012 26.5561L36.6982 15.2424C32.793 11.3372 26.4614 11.3372 22.5561 15.2424L11.2424 26.5561ZM49.0379 39.4981C50.0721 38.0755 50.6848 36.4417 50.8759 34.7689L64.9782 38.5476C68.179 39.4053 70.0785 42.6953 69.2209 45.8961L65.0798 61.3509C64.2221 64.5517 60.9321 66.4512 57.7313 65.5935L42.2765 61.4524C39.0757 60.5948 37.1762 57.3048 38.0338 54.104L39.2884 49.422L48.0121 40.6982C48.3908 40.3196 48.7327 39.918 49.0379 39.4981ZM14.0708 37.8698C11.7277 35.5267 11.7277 31.7277 14.0708 29.3845L25.3845 18.0708C27.7277 15.7277 31.5267 15.7277 33.8698 18.0708L45.1835 29.3845C47.5267 31.7277 47.5267 35.5267 45.1835 37.8698L33.8698 49.1835C31.5267 51.5267 27.7277 51.5267 25.3845 49.1835L14.0708 37.8698Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDice = forwardRef((props, ref) => {
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

CoreDice.displayName = 'CoreDice'

export default CoreDice
