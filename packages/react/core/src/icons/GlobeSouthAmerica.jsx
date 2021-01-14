
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.0796 13.1924L43.2452 17.1856C42.9819 17.4598 42.8481 17.8333 42.8773 18.2123L42.8841 18.3007C42.9821 19.5724 41.3864 20.2163 40.5743 19.2328C40.3261 18.9323 39.9567 18.7582 39.567 18.7582H37.4366C36.0952 18.7582 35.0078 19.8456 35.0078 21.187C35.0078 22.2661 35.7197 23.2157 36.7554 23.5184L38.2957 23.9684C39.1258 24.2109 39.87 24.684 40.4418 25.3327L41.0391 26.0101C42.4205 27.577 44.3801 28.5143 46.467 28.6062L47.1691 28.6371C49.2376 28.7281 51.1821 29.6489 52.5633 31.1914L53.2301 31.9361C53.7218 32.4853 54.3533 32.8909 55.0572 33.1097C56.7623 33.6397 57.9241 35.2175 57.9241 37.0031V37.5952C57.9241 38.857 57.4355 40.0698 56.5608 40.9792L46.3147 51.6308C45.6213 52.3517 45.2339 53.3132 45.2339 54.3135V58.8084C45.2339 60.0923 43.779 60.8356 42.7387 60.0832C42.4875 59.9016 42.2956 59.6498 42.187 59.3595L41.2437 56.837C40.9085 55.9407 40.7369 54.9916 40.7369 54.0348V47.5187C40.7369 45.7329 40.1394 43.9985 39.0395 42.5916L38.2797 41.6196C37.2344 40.2825 36.6415 38.6476 36.5865 36.9513L36.4687 33.3111C36.4404 32.4379 36.7494 31.5873 37.3315 30.9358L37.4563 30.7962C38.4952 29.6336 38.5378 27.8892 37.5569 26.6773C37.0657 26.0704 36.3684 25.6655 35.5979 25.5397L33.9097 25.2639C32.1849 24.9822 30.608 24.1196 29.4405 22.819L24.334 17.1304"
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
            d="M29.3929 14.3924C36.1842 11.5794 43.8148 11.5794 50.6061 14.3924V14.3924C57.3974 17.2055 62.7931 22.6011 65.6061 29.3924V29.3924C68.4192 36.1837 68.4192 43.8143 65.6061 50.6056V50.6056C62.7931 57.3969 57.3974 62.7926 50.6061 65.6056V65.6056C43.8148 68.4187 36.1842 68.4187 29.3929 65.6056V65.6056C22.6016 62.7926 17.206 57.3969 14.3929 50.6056V50.6056C11.5799 43.8143 11.5799 36.1837 14.3929 29.3924V29.3924C17.206 22.6011 22.6016 17.2055 29.3929 14.3924V14.3924Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.0791 13.1913L43.2447 17.1845C42.9814 17.4587 42.8476 17.8322 42.8768 18.2112L42.8836 18.2996C42.9816 19.5713 41.3859 20.2152 40.5738 19.2317C40.3256 18.9311 39.9562 18.7571 39.5665 18.7571L37.4361 18.7571C36.0947 18.7571 35.0073 19.8445 35.0073 21.1859C35.0073 22.265 35.7192 23.2146 36.7549 23.5173L38.2952 23.9673C39.1253 24.2098 39.8695 24.6829 40.4413 25.3316L41.0386 26.009C42.42 27.5759 44.3796 28.5132 46.4665 28.605L47.1686 28.636C49.2371 28.727 51.1816 29.6478 52.5628 31.1903L53.2296 31.935C53.7214 32.4842 54.3528 32.8898 55.0568 33.1086C56.7618 33.6386 57.9237 35.2164 57.9237 37.002V37.5941C57.9237 38.8559 57.435 40.0687 56.5603 40.9781L46.3143 51.6297C45.6208 52.3506 45.2334 53.3121 45.2334 54.3124V58.8073C45.2334 60.0912 43.7785 60.8345 42.7382 60.0821C42.487 59.9005 42.2951 59.6487 42.1865 59.3584L41.2432 56.8359C40.908 55.9396 40.7364 54.9905 40.7364 54.0337V47.5176C40.7364 45.7318 40.1389 43.9974 39.039 42.5905L38.2792 41.6185C37.2339 40.2814 36.641 38.6465 36.586 36.9502L36.4682 33.31C36.4399 32.4368 36.7489 31.5862 37.331 30.9347L37.4558 30.7951C38.4947 29.6325 38.5373 27.8881 37.5564 26.6761C37.0652 26.0693 36.368 25.6644 35.5975 25.5385L33.9093 25.2628C32.1844 24.9811 30.6075 24.1185 29.44 22.8179L24.3335 17.1293C25.91 16.0485 27.6056 15.1259 29.3985 14.3832C35.0338 12.049 41.247 11.6517 47.0791 13.1913Z"
            fill="currentColor"
          />
          <path
            d="M47.0791 13.1913L47.4397 13.5376C47.5624 13.4098 47.6084 13.2266 47.5605 13.0561C47.5126 12.8855 47.378 12.753 47.2067 12.7078L47.0791 13.1913ZM43.2447 17.1845L42.8841 16.8381V16.8381L43.2447 17.1845ZM42.8768 18.2112L43.3753 18.1728V18.1728L42.8768 18.2112ZM42.8836 18.2996L42.3851 18.338V18.338L42.8836 18.2996ZM40.5738 19.2317L40.1883 19.55L40.1883 19.55L40.5738 19.2317ZM36.7549 23.5173L36.6147 23.9972L36.7549 23.5173ZM38.2952 23.9673L38.4355 23.4874H38.4355L38.2952 23.9673ZM40.4413 25.3316L40.0663 25.6622L40.4413 25.3316ZM41.0386 26.009L41.4136 25.6784L41.0386 26.009ZM46.4665 28.605L46.4885 28.1055L46.4665 28.605ZM47.1686 28.636L47.1906 28.1364L47.1686 28.636ZM52.5628 31.1903L52.1903 31.5239L52.5628 31.1903ZM53.2296 31.935L53.6021 31.6015L53.6021 31.6014L53.2296 31.935ZM55.0568 33.1086L54.9083 33.586L55.0568 33.1086ZM56.5603 40.9781L56.9206 41.3247L56.5603 40.9781ZM46.3143 51.6297L46.6746 51.9763L46.3143 51.6297ZM42.7382 60.0821L42.4452 60.4873H42.4452L42.7382 60.0821ZM42.1865 59.3584L41.7182 59.5335L42.1865 59.3584ZM41.2432 56.8359L40.7749 57.011V57.011L41.2432 56.8359ZM39.039 42.5905L38.6451 42.8984L39.039 42.5905ZM38.2792 41.6185L38.6731 41.3105H38.6731L38.2792 41.6185ZM36.586 36.9502L36.0863 36.9664V36.9664L36.586 36.9502ZM36.4682 33.31L35.9685 33.3262L36.4682 33.31ZM37.331 30.9347L37.7039 31.2679V31.2679L37.331 30.9347ZM37.4558 30.7951L37.083 30.4619H37.083L37.4558 30.7951ZM37.5564 26.6761L37.1677 26.9907V26.9907L37.5564 26.6761ZM35.5975 25.5385L35.678 25.0451H35.678L35.5975 25.5385ZM33.9093 25.2628L33.8287 25.7563L33.9093 25.2628ZM29.44 22.8179L29.8121 22.4839L29.44 22.8179ZM24.3335 17.1293L24.0508 16.7169C23.932 16.7983 23.8542 16.9269 23.837 17.0698C23.8199 17.2128 23.8653 17.3561 23.9614 17.4633L24.3335 17.1293ZM29.3985 14.3832L29.5898 14.8452L29.3985 14.3832ZM46.7184 12.845L42.8841 16.8381L43.6054 17.5308L47.4397 13.5376L46.7184 12.845ZM42.8841 16.8381C42.5221 17.2151 42.3381 17.7285 42.3783 18.2496L43.3753 18.1728C43.357 17.9358 43.4407 17.7022 43.6054 17.5308L42.8841 16.8381ZM42.3783 18.2496L42.3851 18.338L43.3821 18.2612L43.3753 18.1728L42.3783 18.2496ZM42.3851 18.338C42.4455 19.1229 41.4606 19.5204 40.9594 18.9133L40.1883 19.55C41.3112 20.91 43.5176 20.0196 43.3821 18.2612L42.3851 18.338ZM40.9594 18.9133C40.6162 18.4978 40.1054 18.2571 39.5665 18.2571V19.2571C39.8071 19.2571 40.0351 19.3645 40.1883 19.55L40.9594 18.9133ZM39.5665 18.2571L37.4361 18.2571V19.2571L39.5665 19.2571V18.2571ZM37.4361 18.2571C35.8186 18.2571 34.5073 19.5684 34.5073 21.1859H35.5073C35.5073 20.1207 36.3708 19.2571 37.4361 19.2571V18.2571ZM34.5073 21.1859C34.5073 22.4871 35.3657 23.6323 36.6147 23.9972L36.8951 23.0373C36.0726 22.797 35.5073 22.0428 35.5073 21.1859H34.5073ZM36.6147 23.9972L38.155 24.4472L38.4355 23.4874L36.8951 23.0373L36.6147 23.9972ZM38.155 24.4472C38.8942 24.6632 39.557 25.0845 40.0663 25.6622L40.8164 25.0009C40.182 24.2813 39.3563 23.7564 38.4355 23.4874L38.155 24.4472ZM40.0663 25.6622L40.6635 26.3397L41.4136 25.6784L40.8164 25.0009L40.0663 25.6622ZM40.6635 26.3397C42.1348 28.0085 44.2219 29.0067 46.4445 29.1046L46.4885 28.1055C44.5373 28.0196 42.7052 27.1433 41.4136 25.6784L40.6635 26.3397ZM46.4445 29.1046L47.1466 29.1355L47.1906 28.1364L46.4885 28.1055L46.4445 29.1046ZM47.1466 29.1355C49.0807 29.2206 50.8988 30.0816 52.1903 31.5239L52.9353 30.8568C51.4643 29.2141 49.3935 28.2334 47.1906 28.1364L47.1466 29.1355ZM52.1903 31.5239L52.8571 32.2685L53.6021 31.6014L52.9353 30.8568L52.1903 31.5239ZM52.8571 32.2685C53.4092 32.8851 54.1181 33.3404 54.9083 33.586L55.2052 32.6311C54.5876 32.4391 54.0335 32.0833 53.6021 31.6015L52.8571 32.2685ZM54.9083 33.586C56.4043 34.0511 57.4237 35.4354 57.4237 37.002L58.4237 37.002C58.4237 34.9974 57.1193 33.2261 55.2052 32.6311L54.9083 33.586ZM57.4237 37.002V37.5941L58.4237 37.5941V37.002L57.4237 37.002ZM57.4237 37.5941C57.4237 38.7267 56.9851 39.8152 56.1999 40.6315L56.9206 41.3247C57.885 40.3222 58.4237 38.9852 58.4237 37.5941L57.4237 37.5941ZM56.1999 40.6315L45.9539 51.283L46.6746 51.9763L56.9206 41.3247L56.1999 40.6315ZM45.9539 51.283C45.1708 52.0971 44.7334 53.1828 44.7334 54.3124H45.7334C45.7334 53.4413 46.0707 52.6041 46.6746 51.9763L45.9539 51.283ZM44.7334 54.3124V58.8073H45.7334V54.3124H44.7334ZM44.7334 58.8073C44.7334 59.6831 43.7409 60.1902 43.0312 59.677L42.4452 60.4873C43.8162 61.4787 45.7334 60.4992 45.7334 58.8073H44.7334ZM43.0312 59.677C42.8599 59.5531 42.7289 59.3813 42.6549 59.1832L41.7182 59.5335C41.8613 59.9161 42.1142 60.2479 42.4452 60.4873L43.0312 59.677ZM42.6549 59.1832L41.7115 56.6607L40.7749 57.011L41.7182 59.5335L42.6549 59.1832ZM41.7115 56.6607C41.3973 55.8205 41.2364 54.9307 41.2364 54.0337H40.2364C40.2364 55.0503 40.4188 56.0588 40.7749 57.011L41.7115 56.6607ZM41.2364 54.0337V47.5176H40.2364V54.0337H41.2364ZM41.2364 47.5176C41.2364 45.6202 40.6015 43.7773 39.433 42.2825L38.6451 42.8984C39.6762 44.2174 40.2364 45.8434 40.2364 47.5176H41.2364ZM39.433 42.2825L38.6731 41.3105L37.8853 41.9264L38.6451 42.8984L39.433 42.2825ZM38.6731 41.3105C37.6932 40.057 37.1373 38.5243 37.0858 36.934L36.0863 36.9664C36.1447 38.7687 36.7747 40.5058 37.8853 41.9264L38.6731 41.3105ZM37.0858 36.934L36.9679 33.2938L35.9685 33.3262L36.0863 36.9664L37.0858 36.934ZM36.9679 33.2938C36.9438 32.549 37.2074 31.8236 37.7039 31.2679L36.9582 30.6016C36.2905 31.3489 35.936 32.3246 35.9685 33.3262L36.9679 33.2938ZM37.7039 31.2679L37.8287 31.1282L37.083 30.4619L36.9582 30.6016L37.7039 31.2679ZM37.8287 31.1282C39.0309 29.7828 39.0802 27.7641 37.945 26.3616L37.1677 26.9907C37.9944 28.0121 37.9585 29.4821 37.083 30.4619L37.8287 31.1282ZM37.945 26.3616C37.3766 25.6593 36.5697 25.1907 35.678 25.0451L35.5169 26.032C36.1662 26.1381 36.7538 26.4793 37.1677 26.9907L37.945 26.3616ZM35.678 25.0451L33.9899 24.7694L33.8287 25.7563L35.5169 26.032L35.678 25.0451ZM33.9899 24.7694C32.3775 24.506 30.9035 23.6996 29.8121 22.4839L29.068 23.1519C30.3116 24.5373 31.9913 25.4562 33.8287 25.7563L33.9899 24.7694ZM29.8121 22.4839L24.7056 16.7953L23.9614 17.4633L29.068 23.1519L29.8121 22.4839ZM24.6162 17.5417C26.1643 16.4804 27.8293 15.5744 29.5898 14.8452L29.2071 13.9213C27.3819 14.6773 25.6557 15.6166 24.0508 16.7169L24.6162 17.5417ZM29.5898 14.8452C35.1235 12.5531 41.2246 12.1629 46.9515 13.6747L47.2067 12.7078C41.2694 11.1405 34.9441 11.5449 29.2071 13.9213L29.5898 14.8452Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M29.3934 14.3934C36.1847 11.5804 43.8153 11.5804 50.6066 14.3934C57.3979 17.2064 62.7936 22.6021 65.6066 29.3934C68.4196 36.1847 68.4196 43.8153 65.6066 50.6066C62.7936 57.3979 57.3979 62.7936 50.6066 65.6066C43.8153 68.4196 36.1847 68.4196 29.3934 65.6066C22.6021 62.7936 17.2064 57.3979 14.3934 50.6066C11.5804 43.8153 11.5804 36.1847 14.3934 29.3934C17.2064 22.6021 22.6021 17.2064 29.3934 14.3934Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.0796 13.1922L43.2452 17.1854C42.9819 17.4596 42.8481 17.8331 42.8773 18.2122L42.8841 18.3005C42.9821 19.5722 41.3864 20.2162 40.5743 19.2327C40.3261 18.9321 39.9567 18.7581 39.567 18.7581L37.4366 18.7581C36.0952 18.7581 35.0078 19.8455 35.0078 21.1869C35.0078 22.2659 35.7197 23.2156 36.7554 23.5182L38.2957 23.9683C39.1258 24.2108 39.87 24.6839 40.4418 25.3325L41.0391 26.01C42.4205 27.5769 44.3801 28.5141 46.467 28.606L47.1691 28.6369C49.2376 28.728 51.1821 29.6488 52.5633 31.1913L53.2301 31.936C53.7218 32.4852 54.3533 32.8907 55.0572 33.1096C56.7623 33.6396 57.9241 35.2174 57.9241 37.0029V37.5951C57.9241 38.8569 57.4355 40.0697 56.5608 40.9791L46.3147 51.6306C45.6213 52.3516 45.2339 53.313 45.2339 54.3134V58.8083C45.2339 60.0921 43.779 60.8354 42.7387 60.0831C42.4875 59.9015 42.2956 59.6497 42.187 59.3593L41.2437 56.8369C40.9085 55.9406 40.7369 54.9915 40.7369 54.0346V47.5185C40.7369 45.7328 40.1394 43.9983 39.0395 42.5914L38.2797 41.6194C37.2344 40.2824 36.6415 38.6475 36.5865 36.9512L36.4687 33.311C36.4404 32.4378 36.7494 31.5872 37.3315 30.9357L37.4563 30.796C38.4952 29.6334 38.5378 27.889 37.5569 26.6771C37.0657 26.0703 36.3684 25.6654 35.5979 25.5395L33.9097 25.2638C32.1849 24.9821 30.608 24.1194 29.4405 22.8189L24.334 17.1302C25.9105 16.0495 27.6061 15.1268 29.399 14.3842C35.0343 12.05 41.2475 11.6527 47.0796 13.1922Z"
            fill="#6FCF97"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M29.3935 14.3934C36.1848 11.5804 43.8154 11.5804 50.6067 14.3934C57.398 17.2064 62.7936 22.6021 65.6067 29.3934C68.4197 36.1847 68.4197 43.8153 65.6067 50.6066C62.7936 57.3979 57.398 62.7936 50.6067 65.6066C43.8154 68.4196 36.1848 68.4196 29.3935 65.6066C22.6022 62.7936 17.2065 57.3979 14.3935 50.6066C11.5804 43.8153 11.5804 36.1847 14.3935 29.3934C17.2065 22.6021 22.6022 17.2064 29.3935 14.3934Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.0797 13.1922L43.2453 17.1854C42.982 17.4596 42.8482 17.8331 42.8774 18.2122L42.8842 18.3005C42.9821 19.5722 41.3865 20.2162 40.5744 19.2327C40.3262 18.9321 39.9568 18.7581 39.5671 18.7581H37.4367C36.0953 18.7581 35.0079 19.8455 35.0079 21.1869C35.0079 22.2659 35.7198 23.2156 36.7555 23.5182L38.2958 23.9683C39.1259 24.2108 39.8701 24.6839 40.4419 25.3325L41.0392 26.01C42.4206 27.5769 44.3802 28.5141 46.4671 28.606L47.1692 28.6369C49.2376 28.728 51.1822 29.6488 52.5634 31.1913L53.2302 31.936C53.7219 32.4852 54.3534 32.8907 55.0573 33.1096C56.7624 33.6396 57.9242 35.2174 57.9242 37.0029V37.5951C57.9242 38.8569 57.4356 40.0697 56.5609 40.9791L46.3148 51.6306C45.6213 52.3516 45.234 53.313 45.234 54.3134V58.8083C45.234 60.0921 43.7791 60.8355 42.7388 60.0831C42.4876 59.9015 42.2957 59.6497 42.1871 59.3593L41.2438 56.8369C40.9086 55.9406 40.7369 54.9915 40.7369 54.0346V47.5185C40.7369 45.7328 40.1395 43.9983 39.0396 42.5914L38.2798 41.6194C37.2345 40.2824 36.6415 38.6475 36.5866 36.9512L36.4688 33.311C36.4405 32.4378 36.7495 31.5872 37.3316 30.9357L37.4564 30.796C38.4953 29.6334 38.5379 27.889 37.557 26.6771C37.0658 26.0703 36.3685 25.6654 35.598 25.5395L33.9098 25.2638C32.185 24.9821 30.6081 24.1194 29.4406 22.8189L24.3341 17.1302C25.9106 16.0495 27.6062 15.1268 29.3991 14.3842C35.0344 12.05 41.2476 11.6527 47.0797 13.1922Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.3935 14.3934C36.1848 11.5804 43.8154 11.5804 50.6067 14.3934C57.398 17.2064 62.7936 22.6021 65.6067 29.3934C68.4197 36.1847 68.4197 43.8153 65.6067 50.6066C62.7936 57.3979 57.398 62.7936 50.6067 65.6066C43.8154 68.4196 36.1848 68.4196 29.3935 65.6066C22.6022 62.7936 17.2065 57.3979 14.3935 50.6066C11.5804 43.8153 11.5804 36.1847 14.3935 29.3934C17.2065 22.6021 22.6022 17.2064 29.3935 14.3934Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.0797 13.1922L43.2453 17.1854C42.982 17.4596 42.8482 17.8331 42.8774 18.2122L42.8842 18.3005C42.9821 19.5722 41.3865 20.2162 40.5744 19.2327C40.3262 18.9321 39.9568 18.7581 39.5671 18.7581H37.4367C36.0953 18.7581 35.0079 19.8455 35.0079 21.1869C35.0079 22.2659 35.7198 23.2156 36.7555 23.5182L38.2958 23.9683C39.1259 24.2108 39.8701 24.6839 40.4419 25.3325L41.0392 26.01C42.4206 27.5769 44.3802 28.5141 46.4671 28.606L47.1692 28.6369C49.2376 28.728 51.1822 29.6488 52.5634 31.1913L53.2302 31.936C53.7219 32.4852 54.3534 32.8907 55.0573 33.1096C56.7624 33.6396 57.9242 35.2174 57.9242 37.0029V37.5951C57.9242 38.8569 57.4356 40.0697 56.5609 40.9791L46.3148 51.6306C45.6213 52.3516 45.234 53.313 45.234 54.3134V58.8083C45.234 60.0921 43.7791 60.8355 42.7388 60.0831C42.4876 59.9015 42.2957 59.6497 42.1871 59.3593L41.2438 56.8369C40.9086 55.9406 40.7369 54.9915 40.7369 54.0346V47.5185C40.7369 45.7328 40.1395 43.9983 39.0396 42.5914L38.2798 41.6194C37.2345 40.2824 36.6415 38.6475 36.5866 36.9512L36.4688 33.311C36.4405 32.4378 36.7495 31.5872 37.3316 30.9357L37.4564 30.796C38.4953 29.6334 38.5379 27.889 37.557 26.6771C37.0658 26.0703 36.3685 25.6654 35.598 25.5395L33.9098 25.2638C32.185 24.9821 30.6081 24.1194 29.4406 22.8189L24.3341 17.1302C25.9106 16.0495 27.6062 15.1268 29.3991 14.3842C35.0344 12.05 41.2476 11.6527 47.0797 13.1922Z"
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
            d="M47.7908 11.3229C47.7255 11.2981 47.6586 11.2766 47.5902 11.2585C41.3373 9.6078 34.6757 10.0337 28.6337 12.5364C26.7115 13.3326 24.8935 14.3218 23.2032 15.4806C23.1653 15.5066 23.1285 15.5338 23.0928 15.5621C18.4301 18.788 14.749 23.3088 12.5457 28.628C9.52968 35.9094 9.52968 44.0906 12.5457 51.372C15.5617 58.6533 21.3468 64.4383 28.6281 67.4544C35.9095 70.4704 44.0907 70.4704 51.372 67.4544C58.6534 64.4383 64.4384 58.6533 67.4544 51.372C70.4705 44.0906 70.4705 35.9094 67.4544 28.628C64.4384 21.3467 58.6534 15.5617 51.372 12.5456C50.1991 12.0598 49.0029 11.6522 47.7908 11.3229ZM41.3888 16.2312C42.0854 15.5058 41.6504 14.3169 40.6451 14.2917C37.0856 14.2024 33.512 14.8522 30.1588 16.2412V16.2412C28.7144 16.8395 28.41 18.6768 29.4544 19.8403L32.1494 22.8425C32.2225 22.9238 32.3211 22.9778 32.429 22.9954L32.928 23.0769C32.9701 23.0838 33.0079 23.0503 33.0079 23.0076V23.0076V18.7581C33.0079 17.6535 33.9033 16.7581 35.0079 16.7581H40.1825V16.7581C40.6174 16.7581 41.0789 16.5592 41.3776 16.243C41.3813 16.2391 41.3851 16.2351 41.3888 16.2312V16.2312ZM46.0716 17.1296C47.0484 16.1124 48.5384 15.7015 49.8413 16.2412V16.2412C56.1425 18.8512 61.1489 23.8575 63.7589 30.1588C66.369 36.46 66.369 43.54 63.7589 49.8412C61.1489 56.1425 56.1425 61.1488 49.8413 63.7588C43.5401 66.3689 36.4601 66.3689 30.1588 63.7588C23.8576 61.1488 18.8513 56.1425 16.2412 49.8412C13.6312 43.54 13.6312 36.46 16.2412 30.1588C16.9611 28.4209 17.8631 26.7816 18.9244 25.2639C21.3442 21.8032 26.2572 22.2665 29.078 25.4089L29.7563 26.1645C30.0609 26.5038 30.4722 26.7288 30.9222 26.8023L35.2756 27.5134C35.5615 27.56 35.8202 27.7103 36.0024 27.9354V27.9354C36.3663 28.385 36.3505 29.0321 35.9651 29.4634L34.9334 30.618C34.5909 31.0013 34.4091 31.5016 34.4258 32.0153L34.6722 39.6264C34.6859 40.0505 34.8342 40.4592 35.0955 40.7935L37.0396 43.2804C38.1395 44.6873 38.7369 46.4217 38.7369 48.2075V55.4816C38.7369 55.7208 38.7799 55.9581 38.8637 56.1821L40.4803 60.5051C40.6183 60.8742 40.8623 61.1943 41.1816 61.4252L44.062 63.5082C44.6708 63.9485 45.4749 64.0104 46.1439 63.6686C46.813 63.3268 47.234 62.6389 47.234 61.8876V56.7832C47.234 54.7152 48.0348 52.7275 49.4684 51.2372L59.3656 40.9482C59.724 40.5756 59.9242 40.0787 59.9242 39.5617V34.0007C59.9242 33.1248 59.3543 32.3509 58.5179 32.0909L57.2137 31.6854C55.8324 31.2561 54.5934 30.4603 53.6285 29.3827L51.8936 27.4452C51.5346 27.0443 51.0292 26.8049 50.4916 26.7813L47.5378 26.6512C45.366 26.5556 43.3265 25.5802 41.8888 23.9494L41.7149 23.7522C42.275 24.3744 43.1675 24.584 43.9495 24.2684C44.7581 23.9421 45.2622 23.1295 45.1952 22.2601L45.0239 20.0374C44.9415 18.9674 45.3283 17.9037 46.0716 17.1296V17.1296ZM40.7498 30.112C40.809 30.0458 40.863 29.9766 40.9119 29.9049C41.0872 29.6478 41.4951 29.5514 41.7008 29.7848V29.7848C42.0603 30.1925 42.5701 30.4364 43.1131 30.4603L46.1124 30.5923C48.2628 30.687 50.2844 31.6443 51.7203 33.2479L52.4917 34.1093C52.7329 34.3787 53.0426 34.5777 53.388 34.685L53.8982 34.8436C55.1032 35.2182 55.9242 36.3332 55.9242 37.5951V37.5951C55.9242 38.3399 55.6358 39.0558 55.1195 39.5926L43.7926 51.3678C43.4342 51.7404 43.234 52.2373 43.234 52.7543V55.0749C43.234 55.3517 42.8496 55.4212 42.7527 55.1619V55.1619C42.7423 55.1341 42.7369 55.1046 42.7369 55.0749V44.7626C42.7369 44.3162 42.5876 43.8826 42.3126 43.5308L40.2576 40.9021C39.2123 39.565 38.6194 37.9301 38.5644 36.2339L38.5532 35.8873C38.4867 33.8325 39.2138 31.831 40.5836 30.298L40.7498 30.112ZM41.6589 23.6872C41.6683 23.6986 41.6779 23.71 41.6876 23.7212L41.0667 23.0169C40.8164 22.733 40.4907 22.526 40.1274 22.4198L37.3164 21.5985C37.1335 21.5451 37.0079 21.3774 37.0079 21.1869V21.1869C37.0079 20.9501 37.1998 20.7581 37.4367 20.7581H38.5253C38.9781 20.7581 39.4072 20.9602 39.6955 21.3094L41.6589 23.6872Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGlobeSouthAmerica = forwardRef((props, ref) => {
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

CoreGlobeSouthAmerica.displayName = 'CoreGlobeSouthAmerica'

export default CoreGlobeSouthAmerica
