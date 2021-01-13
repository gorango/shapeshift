
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M67.5 35L40 13L12.5 35"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 29V47.8908C59.1741 48.1972 58.3753 48.6019 57.6211 49.1047L56.7151 49.7087C55.4606 50.545 54.0393 51.0138 52.5977 51.1152H51.4026C49.961 51.0138 48.5397 50.545 47.2852 49.7087L46.3792 49.1047C42.5164 46.5294 37.484 46.5294 33.6211 49.1047L32.7151 49.7087C31.4606 50.545 30.0393 51.0138 28.5977 51.1152H27.4026C25.961 51.0138 24.5397 50.545 23.2852 49.7087L22.3792 49.1047C21.6249 48.6018 20.8261 48.1971 20 47.8907V29"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 41V29H34V41H46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55 25V15C55 14.4477 54.5523 14 54 14H50C49.4477 14 49 14.4477 49 15V20.2"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M7.5 58.3501C8.21059 58.0846 8.89788 57.7354 9.54716 57.3025L10.4532 56.6985C13.8122 54.4592 18.1882 54.4592 21.5472 56.6985L22.4532 57.3025C25.8122 59.5419 30.1882 59.5419 33.5472 57.3025L34.4532 56.6985C37.8122 54.4592 42.1882 54.4592 45.5472 56.6985L46.4532 57.3025C49.8122 59.5419 54.1882 59.5419 57.5472 57.3025L58.4532 56.6985C61.8122 54.4592 66.1882 54.4592 69.5472 56.6985L70.4532 57.3025C71.1023 57.7353 71.7895 58.0845 72.5 58.35"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.5 63.4205C20.2106 63.686 20.8979 64.0352 21.5472 64.4681L22.4532 65.0721C25.8122 67.3114 30.1882 67.3114 33.5472 65.0721L34.4532 64.4681C37.8122 62.2287 42.1882 62.2287 45.5472 64.4681L46.4532 65.0721C49.8122 67.3114 54.1882 67.3114 57.5472 65.0721L58.4532 64.4681C59.1023 64.0353 59.7895 63.6861 60.5 63.4206"
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
            d="M41.5617 12.0478C40.6487 11.3174 39.3513 11.3174 38.4383 12.0478L10.9383 34.0478C9.86011 34.9104 9.68531 36.4836 10.5478 37.5617C11.4104 38.6399 12.9836 38.8147 14.0617 37.9522L17.5 35.2016V48.3589C17.5 49.4183 18.1678 50.3628 19.1667 50.7159C19.8973 50.9742 20.604 51.3249 21.2698 51.7688L22.1758 52.3728C25.7028 54.724 30.2976 54.724 33.8245 52.3728L34.7305 51.7688C37.9216 49.6414 42.0788 49.6414 45.2698 51.7688L46.1758 52.3728C49.7028 54.724 54.2976 54.724 57.8245 52.3727L58.7305 51.7688C59.3962 51.3249 60.1029 50.9743 60.8334 50.716C61.8322 50.3628 62.5 49.4184 62.5 48.359V35.2016L65.9383 37.9522C67.0164 38.8147 68.5897 38.6399 69.4522 37.5617C70.3147 36.4836 70.1399 34.9104 69.0617 34.0478L57.5 24.7984V15C57.5 13.6193 56.3807 12.5 55 12.5H49C47.6193 12.5 46.5 13.6193 46.5 15V15.9984L41.5617 12.0478ZM34.5 41.5V30.5H45.5V41.5H34.5Z"
            fill="currentColor"
          />
          <path
            d="M11.8399 59.7786C14.3592 58.0991 17.6412 58.0991 20.1604 59.7786L21.0664 60.3826C25.2652 63.1817 30.7352 63.1817 34.9339 60.3826L35.8399 59.7786C38.3592 58.0991 41.6412 58.0991 44.1604 59.7786L45.0664 60.3826C49.2652 63.1817 54.7352 63.1817 58.9339 60.3826L59.8399 59.7786C62.3592 58.0991 65.6412 58.0991 68.1604 59.7786L69.0664 60.3826C69.877 60.923 70.7361 61.3596 71.6249 61.6917C72.9182 62.175 74.3585 61.5184 74.8418 60.225C75.3252 58.9316 74.6685 57.4914 73.3751 57.008C72.843 56.8092 72.3277 56.5475 71.8399 56.2223L70.9339 55.6183C66.7352 52.8191 61.2652 52.8192 57.0664 55.6183L56.1604 56.2223C53.6412 57.9018 50.3592 57.9018 47.8399 56.2223L46.9339 55.6183C42.7352 52.8191 37.2652 52.8191 33.0664 55.6183L32.1604 56.2223C29.6412 57.9018 26.3592 57.9018 23.8399 56.2223L22.9339 55.6183C18.7352 52.8191 13.2652 52.8191 9.06641 55.6183L8.16041 56.2223C7.6726 56.5475 7.15722 56.8093 6.62496 57.0081C5.33159 57.4914 4.67488 58.9317 5.15815 60.225C5.64142 61.5184 7.08168 62.1751 8.37505 61.6918C9.26398 61.3597 10.1232 60.9231 10.9339 60.3826L11.8399 59.7786Z"
            fill="currentColor"
          />
          <path
            d="M35.8399 67.5481C38.3592 65.8686 41.6412 65.8686 44.1604 67.5481L45.0664 68.1521C49.2652 70.9513 54.7352 70.9513 58.9339 68.1521L59.8399 67.5481C60.3277 67.2229 60.843 66.9612 61.3751 66.7624C62.6685 66.279 63.3252 64.8388 62.8418 63.5454C62.3585 62.252 60.9182 61.5954 59.6249 62.0787C58.7361 62.4108 57.877 62.8474 57.0664 63.3878L56.1604 63.9918C53.6412 65.6713 50.3592 65.6713 47.8399 63.9918L46.9339 63.3878C42.7352 60.5887 37.2652 60.5887 33.0664 63.3878L32.1604 63.9918C29.6412 65.6713 26.3592 65.6713 23.8399 63.9918L22.9339 63.3878C22.1232 62.8473 21.264 62.4107 20.3751 62.0785C19.0817 61.5953 17.6414 62.252 17.1581 63.5454C16.6749 64.8387 17.3316 66.279 18.625 66.7623C19.1572 66.9611 19.6726 67.2229 20.1604 67.5481L21.0664 68.1521C25.2652 70.9513 30.7352 70.9513 34.9339 68.1521L35.8399 67.5481Z"
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
            d="M40 14L60 30L60 48.359C59.0763 48.6855 58.1836 49.1288 57.3438 49.6886L56.4378 50.2926C53.7506 52.0841 50.2498 52.0841 47.5626 50.2926L46.9415 51.2243L47.5626 50.2926L47.1096 49.9906L46.6566 49.6886C42.6258 47.0014 37.3746 47.0014 33.3438 49.6886L32.4378 50.2926C29.7506 52.0841 26.2498 52.0841 23.5626 50.2926L23.1096 49.9906L22.6566 49.6886C21.8167 49.1287 20.9238 48.6854 20 48.3589L20 30L40 14Z"
            fill="#F2C94C"
          />
          <path
            d="M60 30H62C62 29.3924 61.7238 28.8178 61.2494 28.4383L60 30ZM40 14L41.2494 12.4383C40.519 11.8539 39.481 11.8539 38.7506 12.4383L40 14ZM60 48.359L60.6667 50.2446C61.4658 49.9621 62 49.2065 62 48.359H60ZM57.3438 49.6886L56.2344 48.0245L56.2343 48.0245L57.3438 49.6886ZM56.4378 50.2926L57.5472 51.9567L57.5472 51.9567L56.4378 50.2926ZM47.5626 50.2926L48.672 48.6285C47.7529 48.0158 46.5112 48.2642 45.8985 49.1832L47.5626 50.2926ZM45.2774 50.1149C44.6647 51.0339 44.913 52.2757 45.8321 52.8884C46.7511 53.5011 47.9929 53.2527 48.6056 52.3337L45.2774 50.1149ZM47.5626 50.2926L49.2267 51.402C49.8394 50.483 49.591 49.2412 48.672 48.6285L47.5626 50.2926ZM47.1096 49.9906L46.0002 51.6547L46.0002 51.6547L47.1096 49.9906ZM46.6566 49.6886L47.766 48.0245L47.766 48.0245L46.6566 49.6886ZM33.3438 49.6886L32.2344 48.0245H32.2344L33.3438 49.6886ZM32.4378 50.2926L33.5472 51.9567H33.5472L32.4378 50.2926ZM23.5626 50.2926L22.4532 51.9567L22.4532 51.9567L23.5626 50.2926ZM23.1096 49.9906L24.219 48.3265L24.219 48.3265L23.1096 49.9906ZM22.6566 49.6886L21.5472 51.3527H21.5472L22.6566 49.6886ZM20 48.3589H18C18 49.2064 18.5343 49.962 19.3334 50.2445L20 48.3589ZM20 30L18.7506 28.4383C18.2762 28.8178 18 29.3924 18 30H20ZM61.2494 28.4383L41.2494 12.4383L38.7506 15.5617L58.7506 31.5617L61.2494 28.4383ZM62 48.359L62 30H58L58 48.359H62ZM58.4532 51.3527C59.1537 50.8857 59.8975 50.5165 60.6667 50.2446L59.3333 46.4734C58.2551 46.8546 57.2134 47.3718 56.2344 48.0245L58.4532 51.3527ZM57.5472 51.9567L58.4532 51.3527L56.2343 48.0245L55.3284 48.6285L57.5472 51.9567ZM46.4532 51.9567C49.8122 54.1961 54.1882 54.1961 57.5472 51.9567L55.3284 48.6285C53.313 49.9721 50.6874 49.9721 48.672 48.6285L46.4532 51.9567ZM48.6056 52.3337L49.2267 51.402L45.8985 49.1832L45.2774 50.1149L48.6056 52.3337ZM45.8985 49.1832L45.2774 50.1149L48.6056 52.3337L49.2267 51.402L45.8985 49.1832ZM46.0002 51.6547L46.4532 51.9567L48.672 48.6285L48.219 48.3265L46.0002 51.6547ZM45.5472 51.3527L46.0002 51.6547L48.219 48.3265L47.766 48.0245L45.5472 51.3527ZM34.4532 51.3527C37.8122 49.1134 42.1882 49.1134 45.5472 51.3527L47.766 48.0245C43.0634 44.8895 36.937 44.8895 32.2344 48.0245L34.4532 51.3527ZM33.5472 51.9567L34.4532 51.3527L32.2344 48.0245L31.3284 48.6285L33.5472 51.9567ZM22.4532 51.9567C25.8122 54.1961 30.1882 54.1961 33.5472 51.9567L31.3284 48.6285C29.313 49.9721 26.6874 49.9721 24.672 48.6285L22.4532 51.9567ZM22.0002 51.6547L22.4532 51.9567L24.672 48.6285L24.219 48.3265L22.0002 51.6547ZM21.5472 51.3527L22.0002 51.6547L24.219 48.3265L23.766 48.0245L21.5472 51.3527ZM19.3334 50.2445C20.1026 50.5164 20.8465 50.8857 21.5472 51.3527L23.766 48.0245C22.7868 47.3717 21.745 46.8545 20.6666 46.4732L19.3334 50.2445ZM18 30L18 48.3589H22L22 30H18ZM38.7506 12.4383L18.7506 28.4383L21.2494 31.5617L41.2494 15.5617L38.7506 12.4383Z"
            fill="#F2C94C"
          />
          <path
            d="M67.5 36L64.5 33.6L40 14L15.5 33.6L12.5 36"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55 26V15L49 15V21.2L55 26Z"
            fill="#EB5757"
          />
          <path
            d="M55 15H57C57 13.8954 56.1046 13 55 13V15ZM55 26L53.7506 27.5617C54.3509 28.042 55.1734 28.1356 55.8664 27.8026C56.5593 27.4696 57 26.7688 57 26H55ZM49 15V13C47.8954 13 47 13.8954 47 15H49ZM49 21.2H47C47 21.8076 47.2762 22.3822 47.7506 22.7617L49 21.2ZM53 15V26H57V15L53 15ZM49 17H55V13H49V17ZM51 21.2V15H47V21.2H51ZM47.7506 22.7617L53.7506 27.5617L56.2494 24.4383L50.2494 19.6383L47.7506 22.7617Z"
            fill="#EB5757"
          />
          <path
            d="M10.4532 57.6985L11.5626 59.3626L11.5626 59.3626L10.4532 57.6985ZM9.54716 58.3025L8.43776 56.6384L8.43776 56.6384L9.54716 58.3025ZM22.0002 58.0005L23.1096 56.3364L23.1096 56.3364L22.0002 58.0005ZM21.5472 57.6985L20.4378 59.3626L20.4378 59.3626L21.5472 57.6985ZM6.79996 57.4766C5.76527 57.8632 5.23989 59.0154 5.62651 60.0501C6.01313 61.0848 7.16534 61.6102 8.20004 61.2236L6.79996 57.4766ZM34.4532 57.6985L33.3438 56.0344V56.0344L34.4532 57.6985ZM33.5472 58.3025L32.4378 56.6384L32.4378 56.6384L33.5472 58.3025ZM22.4532 58.3025L21.3438 59.9666V59.9666L22.4532 58.3025ZM45.5472 57.6985L44.4378 59.3626L44.4378 59.3626L45.5472 57.6985ZM58.4532 57.6985L57.3438 56.0344V56.0344L58.4532 57.6985ZM57.5472 58.3025L58.6566 59.9666V59.9666L57.5472 58.3025ZM46.4532 58.3025L47.5626 56.6384L47.5626 56.6384L46.4532 58.3025ZM69.5472 57.6985L68.4378 59.3626L68.4378 59.3626L69.5472 57.6985ZM70.4532 58.3025L71.5626 56.6384V56.6384L70.4532 58.3025ZM71.7999 61.2234C72.8346 61.6101 73.9868 61.0848 74.3735 60.0501C74.7601 59.0154 74.2348 57.8632 73.2001 57.4765L71.7999 61.2234ZM9.34376 56.0344L8.43776 56.6384L10.6566 59.9666L11.5626 59.3626L9.34376 56.0344ZM23.1096 56.3364L22.6566 56.0344L20.4378 59.3626L20.8908 59.6646L23.1096 56.3364ZM11.5626 59.3626C14.2498 57.5712 17.7506 57.5712 20.4378 59.3626L22.6566 56.0344C18.6258 53.3472 13.3745 53.3472 9.34376 56.0344L11.5626 59.3626ZM8.43776 56.6384C7.91765 56.9852 7.36789 57.2644 6.79996 57.4766L8.20004 61.2236C9.0533 60.9048 9.8781 60.4856 10.6566 59.9666L8.43776 56.6384ZM33.3438 56.0344L32.4378 56.6384L34.6566 59.9666L35.5626 59.3626L33.3438 56.0344ZM23.5626 56.6384L23.1096 56.3364L20.8908 59.6646L21.3438 59.9666L23.5626 56.6384ZM47.1096 56.3364L46.6566 56.0344L44.4378 59.3626L44.8908 59.6646L47.1096 56.3364ZM35.5626 59.3626C38.2498 57.5712 41.7506 57.5712 44.4378 59.3626L46.6566 56.0344C42.6258 53.3472 37.3746 53.3472 33.3438 56.0344L35.5626 59.3626ZM32.4378 56.6384C29.7506 58.4299 26.2498 58.4299 23.5626 56.6384L21.3438 59.9666C25.3746 62.6538 30.6258 62.6538 34.6566 59.9666L32.4378 56.6384ZM57.3438 56.0344L56.4378 56.6384L58.6566 59.9666L59.5626 59.3626L57.3438 56.0344ZM47.5626 56.6384L47.1096 56.3364L44.8908 59.6646L45.3438 59.9666L47.5626 56.6384ZM71.1096 56.3364L70.6566 56.0344L68.4378 59.3626L68.8908 59.6646L71.1096 56.3364ZM59.5626 59.3626C62.2498 57.5712 65.7506 57.5712 68.4378 59.3626L70.6566 56.0344C66.6258 53.3472 61.3745 53.3472 57.3438 56.0344L59.5626 59.3626ZM56.4378 56.6384C53.7506 58.4299 50.2498 58.4299 47.5626 56.6384L45.3438 59.9666C49.3745 62.6538 54.6258 62.6538 58.6566 59.9666L56.4378 56.6384ZM71.5626 56.6384L71.1096 56.3364L68.8908 59.6646L69.3438 59.9666L71.5626 56.6384ZM73.2001 57.4765C72.6323 57.2643 72.0826 56.9851 71.5626 56.6384L69.3438 59.9666C70.1221 60.4855 70.9468 60.9046 71.7999 61.2234L73.2001 57.4765Z"
            fill="#2F80ED"
          />
          <path
            d="M22.0002 65.7701L23.1096 64.106L23.1096 64.106L22.0002 65.7701ZM21.5472 65.4681L20.4378 67.1322L20.4378 67.1322L21.5472 65.4681ZM20.2 62.547C19.1653 62.1604 18.0131 62.6858 17.6265 63.7205C17.2399 64.7552 17.7653 65.9074 18.8 66.294L20.2 62.547ZM34.4532 65.4681L35.5626 67.1322L35.5626 67.1322L34.4532 65.4681ZM33.5472 66.0721L32.4378 64.408L32.4378 64.408L33.5472 66.0721ZM22.4532 66.0721L21.3438 67.7362L21.3438 67.7362L22.4532 66.0721ZM45.5472 65.4681L44.4378 67.1322L44.4378 67.1322L45.5472 65.4681ZM58.4532 65.4681L59.5626 67.1322L59.5626 67.1322L58.4532 65.4681ZM57.5472 66.0721L56.4378 64.408L56.4378 64.408L57.5472 66.0721ZM46.4532 66.0721L47.5626 64.408V64.408L46.4532 66.0721ZM61.2001 66.2941C62.2348 65.9074 62.7601 64.7552 62.3735 63.7205C61.9868 62.6858 60.8346 62.1605 59.7999 62.5472L61.2001 66.2941ZM23.1096 64.106L22.6566 63.804L20.4378 67.1322L20.8908 67.4342L23.1096 64.106ZM18.8 66.294C19.3679 66.5062 19.9177 66.7854 20.4378 67.1322L22.6566 63.804C21.8781 63.285 21.0533 62.8659 20.2 62.547L18.8 66.294ZM33.3438 63.804L32.4378 64.408L34.6566 67.7362L35.5626 67.1322L33.3438 63.804ZM23.5626 64.408L23.1096 64.106L20.8908 67.4342L21.3438 67.7362L23.5626 64.408ZM47.1096 64.106L46.6566 63.804L44.4378 67.1322L44.8908 67.4342L47.1096 64.106ZM35.5626 67.1322C38.2498 65.3407 41.7506 65.3407 44.4378 67.1322L46.6566 63.804C42.6258 61.1168 37.3746 61.1168 33.3438 63.804L35.5626 67.1322ZM32.4378 64.408C29.7506 66.1994 26.2498 66.1994 23.5626 64.408L21.3438 67.7362C25.3746 70.4234 30.6258 70.4234 34.6566 67.7362L32.4378 64.408ZM57.3438 63.804L56.4378 64.408L58.6566 67.7362L59.5626 67.1322L57.3438 63.804ZM47.5626 64.408L47.1096 64.106L44.8908 67.4342L45.3438 67.7362L47.5626 64.408ZM59.5626 67.1322C60.0826 66.7855 60.6323 66.5063 61.2001 66.2941L59.7999 62.5472C58.9468 62.866 58.1221 63.2851 57.3438 63.804L59.5626 67.1322ZM56.4378 64.408C53.7506 66.1994 50.2498 66.1994 47.5626 64.408L45.3438 67.7362C49.3746 70.4234 54.6258 70.4234 58.6566 67.7362L56.4378 64.408Z"
            fill="#2F80ED"
          />
          <rect
            x="34"
            y="29"
            width="12"
            height="12"
            rx="1"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60 29L40 13L20 29V47.3589C20.9238 47.6854 21.8167 48.1287 22.6566 48.6886L23.5626 49.2926C26.2498 51.0841 29.7506 51.0841 32.4378 49.2926L33.3438 48.6886C37.3745 46.0014 42.6258 46.0014 46.6566 48.6886L47.5626 49.2926C50.2498 51.0841 53.7506 51.0841 56.4378 49.2926L57.3438 48.6886C58.1836 48.1288 59.0763 47.6855 60 47.359V29ZM46 41V29H34V41H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55 25V14H49V20.2L55 25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 13L60 29V47.359C59.0763 47.6855 58.1836 48.1288 57.3438 48.6886L56.4378 49.2926C53.7506 51.0841 50.2498 51.0841 47.5626 49.2926L46.6566 48.6886C42.6258 46.0014 37.3745 46.0014 33.3438 48.6886L32.4378 49.2926C29.7506 51.0841 26.2498 51.0841 23.5626 49.2926L22.6566 48.6886C21.8167 48.1287 20.9238 47.6854 20 47.3589V29L40 13ZM40 13L12.5 35M40 13L67.5 35M7.5 58.35C8.21059 58.0845 8.89788 57.7353 9.54716 57.3024L10.4532 56.6984C13.8122 54.4591 18.1882 54.4591 21.5472 56.6984L22.4532 57.3024C25.8122 59.5418 30.1882 59.5418 33.5472 57.3024L34.4532 56.6984C37.8122 54.4591 42.1882 54.4591 45.5472 56.6984L46.4532 57.3024C49.8122 59.5418 54.1882 59.5418 57.5472 57.3024L58.4532 56.6984C61.8122 54.4591 66.1882 54.4591 69.5472 56.6984L70.4532 57.3024C71.1023 57.7352 71.7895 58.0844 72.5 58.3499M19.5 63.4204C20.2106 63.6859 20.8979 64.0351 21.5472 64.468L22.4532 65.072C25.8122 67.3113 30.1882 67.3113 33.5472 65.072L34.4532 64.468C37.8122 62.2286 42.1882 62.2286 45.5472 64.468L46.4532 65.072C49.8122 67.3113 54.1882 67.3113 57.5472 65.072L58.4532 64.468C59.1023 64.0352 59.7895 63.686 60.5 63.4205M46 29V41H34V29H46ZM55 14V25L49 20.2V14H55Z"
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
            d="M32 29C32 27.8954 32.8954 27 34 27H46C47.1046 27 48 27.8954 48 29V41C48 42.1046 47.1046 43 46 43H34C32.8954 43 32 42.1046 32 41V29ZM36 31V39H44V31H36Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.7506 11.4383C39.4811 10.8539 40.519 10.8539 41.2494 11.4383L47 16.0388V15C47 13.3431 48.3432 12 50 12H54C55.6569 12 57 13.3431 57 15V24.0388L68.7494 33.4383C69.6119 34.1283 69.7518 35.3869 69.0617 36.2494C68.3717 37.1119 67.1131 37.2518 66.2506 36.5617L62 33.1613V47.8908C62 48.727 61.4797 49.475 60.6957 49.7659C60.014 50.0188 59.3542 50.353 58.7305 50.7688L57.8245 51.3728C56.2752 52.4056 54.5186 52.985 52.7381 53.1103C52.6914 53.1136 52.6446 53.1152 52.5977 53.1152H51.4026C51.3558 53.1152 51.309 53.1136 51.2623 53.1103C49.4817 52.985 47.7251 52.4056 46.1758 51.3728L45.2698 50.7688C42.0788 48.6414 37.9216 48.6414 34.7305 50.7688L33.8245 51.3728C32.2752 52.4056 30.5186 52.985 28.7381 53.1103C28.6914 53.1136 28.6446 53.1152 28.5977 53.1152H27.4026C27.3558 53.1152 27.309 53.1136 27.2623 53.1103C25.4817 52.985 23.7251 52.4056 22.1758 51.3728L21.2698 50.7688C20.646 50.3529 19.9862 50.0187 19.3043 49.7658C18.5203 49.4749 18 48.7269 18 47.8907V33.1613L13.7494 36.5617C12.8869 37.2518 11.6283 37.1119 10.9383 36.2494C10.2482 35.3869 10.3881 34.1283 11.2506 33.4383L38.7506 11.4383ZM53 20.8388L51 19.2388V16H53V20.8388ZM40 15.5612L58 29.9612V46.5796C57.4904 46.8325 56.9932 47.1196 56.5117 47.4406L55.6057 48.0446C54.6651 48.6717 53.6029 49.0283 52.5227 49.1152H51.4776C50.3975 49.0283 49.3353 48.6717 48.3946 48.0445L47.4886 47.4406C42.954 44.4175 37.0464 44.4175 32.5117 47.4406L31.6057 48.0446C30.665 48.6717 29.6029 49.0283 28.5227 49.1152H27.4776C26.3975 49.0283 25.3353 48.6717 24.3946 48.0445L23.4886 47.4406C23.007 47.1195 22.5097 46.8324 22 46.5794V29.9612L40 15.5612Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4378 58.3625C17.7506 56.5711 14.2497 56.5711 11.5626 58.3625L10.6566 58.9665C9.8781 59.4855 9.05329 59.9047 8.20003 60.2235C7.16533 60.6101 6.01313 60.0847 5.62651 59.05C5.23989 58.0153 5.76526 56.8631 6.79996 56.4765C7.36788 56.2643 7.91764 55.9851 8.43775 55.6383L9.34375 55.0343C13.3745 52.3471 18.6258 52.3471 22.6566 55.0343L23.5626 55.6383C26.2497 57.4298 29.7506 57.4298 32.4378 55.6383L33.3438 55.0343C37.3745 52.3471 42.6258 52.3471 46.6566 55.0343L47.5625 55.6383C50.2497 57.4298 53.7506 57.4298 56.4378 55.6383L57.3437 55.0343C61.3745 52.3471 66.6258 52.3471 70.6566 55.0343L71.5625 55.6383C72.0826 55.985 72.6323 56.2642 73.2001 56.4764C74.2348 56.8631 74.7601 58.0153 74.3735 59.05C73.9868 60.0847 72.8346 60.61 71.7999 60.2233C70.9468 59.9045 70.1221 59.4854 69.3438 58.9665L68.4378 58.3625C65.7506 56.5711 62.2497 56.5711 59.5625 58.3625L58.6566 58.9665C54.6258 61.6537 49.3745 61.6537 45.3438 58.9665L44.4378 58.3625C41.7506 56.5711 38.2497 56.5711 35.5625 58.3625L34.6566 58.9665C30.6258 61.6537 25.3745 61.6537 21.3437 58.9665L20.4378 58.3625Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9594 64.7886C41.52 64.7806 43.0824 65.2285 44.4378 66.1321L45.3438 66.7361C49.3745 69.4233 54.6258 69.4233 58.6566 66.7361L59.5626 66.1321C60.0826 65.7854 60.6323 65.5062 61.2001 65.294C62.2348 64.9073 62.7601 63.7551 62.3735 62.7204C61.9868 61.6857 60.8346 61.1604 59.7999 61.5471C58.9468 61.8659 58.1221 62.285 57.3438 62.8039L56.4378 63.4079C53.7506 65.1993 50.2497 65.1993 47.5626 63.4079L46.6566 62.8039C42.6258 60.1167 37.3745 60.1167 33.3438 62.8039L32.4378 63.4079C29.7506 65.1993 26.2497 65.1993 23.5626 63.4079L22.6566 62.8039C21.8781 62.2849 21.0533 61.8657 20.2 61.5469C19.1653 61.1603 18.0131 61.6857 17.6265 62.7204C17.2399 63.7551 17.7653 64.9073 18.8 65.2939C19.3679 65.5061 19.9176 65.7853 20.4378 66.1321L21.3438 66.7361C25.3745 69.4233 30.6258 69.4233 34.6566 66.7361L35.5626 66.1321C36.8944 65.2442 38.426 64.7964 39.9594 64.7886Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHouseFlood = forwardRef((props, ref) => {
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

CoreHouseFlood.displayName = 'CoreHouseFlood'

export default CoreHouseFlood