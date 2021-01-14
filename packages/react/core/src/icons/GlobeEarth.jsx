
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
            d="M14.3989 29.3842C13.8355 30.7445 13.3849 32.1385 13.0471 33.5527L13.3205 33.8591C14.0436 34.6694 15.0225 35.2074 16.0941 35.3834L17.1356 35.5546C17.6188 35.634 18.0558 35.8888 18.3628 36.2704C18.9714 37.0268 18.9449 38.1121 18.3001 38.838L18.2204 38.9278C17.8582 39.3355 17.6662 39.8665 17.6837 40.4115L17.745 42.3174C17.7869 43.6187 18.2398 44.8733 19.0387 45.9014C19.8793 46.983 20.3356 48.3138 20.3356 49.6836V53.1928C20.3356 53.9049 20.4626 54.6113 20.7108 55.2788L21.2374 56.6952C21.3043 56.8753 21.4229 57.0317 21.5783 57.1447C22.2238 57.6144 23.1296 57.1532 23.1296 56.3549V53.5331C23.1296 52.9118 23.3693 52.3143 23.7987 51.8652L30.166 45.2065C30.7103 44.6373 31.0141 43.8801 31.0141 43.0925V42.7081C31.0141 41.5991 30.2934 40.6186 29.2349 40.2877C28.7962 40.1505 28.4031 39.8967 28.0975 39.5534L27.684 39.0889C26.8257 38.1246 25.6139 37.5484 24.3243 37.4913L23.9035 37.4726C22.6023 37.415 21.3811 36.8285 20.5227 35.849L20.1524 35.4265C19.797 35.021 19.3337 34.725 18.8165 34.573L17.8668 34.2939C17.2202 34.1038 16.7761 33.5104 16.7761 32.8364C16.7761 31.9975 17.4562 31.3173 18.2952 31.3173H19.6075C19.8504 31.3173 20.0804 31.4261 20.2345 31.6138C20.7376 32.2267 21.7307 31.8279 21.6701 31.0373L21.6652 30.9733C21.6472 30.7381 21.7299 30.5064 21.8928 30.3358L27.6576 24.2964C28.0522 23.883 28.1924 23.2887 28.0241 22.7426C27.8407 22.1473 27.3241 21.7157 26.7057 21.641L25.7413 21.5245C25.5372 21.4998 25.3475 21.4066 25.2031 21.2602C24.6752 20.7245 23.7622 21.0254 23.6563 21.77L23.5664 22.4013C23.4873 22.9574 23.0401 23.3883 22.4815 23.4467L21.7963 23.5183C21.1412 23.5868 20.4919 23.3451 20.041 22.865L19.3395 22.1179C19.2442 22.0164 19.1665 21.9043 19.1066 21.7854"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.6873 17.5873C24.2921 17.1467 24.9157 16.73 25.5567 16.3384L26.6772 17.8756C27.0776 18.4249 26.6974 19.198 26.0179 19.2163C25.8166 19.2217 25.62 19.1549 25.4636 19.0281L23.6873 17.5873Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.0738 13.7528C31.5575 13.5881 32.0446 13.4372 32.5346 13.3L35.7875 13.1093C37.9314 12.9836 39.7699 14.6226 39.8902 16.7668C39.9523 17.8734 39.5384 18.9537 38.7529 19.7355L36.6195 21.8589C35.5233 22.9499 33.7222 22.8576 32.7366 21.6657C32.3301 21.174 32.1167 20.5483 32.1398 19.9107C32.1647 19.2235 31.9166 18.5544 31.4498 18.0494L30.7209 17.2609C30.2271 16.7267 30.008 15.9941 30.1274 15.2765C30.2324 14.6459 30.583 14.1065 31.0738 13.7528Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56.6152 17.8022C56.5806 17.834 56.5466 17.8664 56.5131 17.8996L55.2701 19.1329C55.0222 19.3789 54.93 19.7415 55.0304 20.076C55.229 20.7375 56.0466 20.9699 56.5634 20.5118L57.7301 19.4776C57.9964 19.2415 58.406 19.276 58.6291 19.5533C58.8228 19.794 58.8109 20.1402 58.6013 20.3671L57.5598 21.494C57.3902 21.6776 57.2861 21.9122 57.2638 22.1612C57.2125 22.7353 56.7378 23.179 56.1616 23.1916L54.6851 23.2239C54.0105 23.2387 53.3642 23.4982 52.8666 23.954L51.1649 25.5129L50.2197 27.5528C50.01 28.0053 49.6212 28.35 49.1467 28.5038L48.4454 28.7312C48.0133 28.8713 47.7468 29.3041 47.8161 29.7529C47.8802 30.1679 48.2156 30.4877 48.6332 30.532L49.339 30.6069C49.8862 30.665 50.4309 30.4761 50.8247 30.0917L51.3501 29.5788C52.002 28.9424 52.8815 28.5934 53.7924 28.6097L53.8128 28.61M64.4018 26.8366C64.248 26.8057 64.0887 26.7953 63.928 26.8074L63.3816 26.8487C62.4057 26.9224 61.5462 27.519 61.1358 28.4075L60.7088 29.332L59.6412 29.3961C59.2225 29.4212 58.8277 29.5996 58.5321 29.8972C58.2496 30.1817 57.876 30.3577 57.4768 30.3943L55.5025 30.5755M55.5025 30.5755L53.8128 28.61M55.5025 30.5755C54.9548 30.0254 53.8128 28.61 53.8128 28.61"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.6375 29.4453C65.2831 29.7708 64.7587 29.8306 64.3399 29.5925L63.8949 29.3395C63.5677 29.1534 63.1905 29.0743 62.8161 29.1132L60.709 29.3322L61.8482 30.6263C62.5089 31.3768 62.471 32.5119 61.7618 33.2167C61.3918 33.5844 60.8863 33.7828 60.365 33.7651L58.7724 33.711C58.5581 33.7037 58.3579 33.8177 58.2549 34.0058C58.1208 34.2505 57.8287 34.3616 57.5658 34.2679L54.9522 33.336C54.693 33.2436 54.5083 33.0125 54.4753 32.7392C54.4302 32.3652 54.1065 32.0879 53.73 32.1007L51.2229 32.1858C51.0668 32.1911 50.9174 32.1223 50.82 32.0002C50.6207 31.7505 50.2403 31.7528 50.044 32.005L48.62 33.8356C48.3543 34.177 48.1894 34.5859 48.1438 35.0161L47.9274 37.0554C47.7448 38.7761 48.3466 40.4876 49.566 41.7154L50.3497 42.5046C50.9099 43.0687 51.6692 43.3902 52.4641 43.4C54.1032 43.4202 55.4296 44.7392 55.4589 46.3781L55.4822 47.6754C55.4951 48.3967 55.8303 49.0744 56.3958 49.5224C56.9523 49.9633 57.2863 50.627 57.3086 51.3367L57.3983 54.1846C57.4142 54.6912 57.5834 55.1838 57.8807 55.5944C58.3432 56.233 59.0809 56.6223 59.8693 56.6395C60.5785 56.655 61.2614 56.3707 61.7502 55.8565L62.6605 54.899C63.6295 53.8797 64.1719 52.5282 64.1764 51.1217L64.1887 47.2942C64.1923 46.1758 64.6305 45.1027 65.4107 44.3015L66.1676 43.5243C66.7507 42.9255 66.9781 42.0654 66.7671 41.2567C66.6636 40.86 66.4596 40.4966 66.1748 40.2016L62.6159 36.5157C62.3615 36.2521 62.4068 35.8226 62.7107 35.618C62.9492 35.4575 63.2688 35.4925 63.4667 35.701L65.3139 37.6457C65.8413 38.201 66.564 38.5292 67.3291 38.5609L67.6859 38.5757"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.1648 25.5129L47.6932 25.4059C46.5906 25.3719 45.7367 24.4291 45.8117 23.3285C45.8491 22.7797 46.117 22.2724 46.5492 21.932L46.7101 21.8053C48.0725 20.7324 50.0882 21.4084 50.5282 23.0858L51.1648 25.5129Z"
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
            d="M29.3934 14.3934C36.1847 11.5804 43.8153 11.5804 50.6066 14.3934V14.3934C57.3979 17.2064 62.7936 22.6021 65.6066 29.3934V29.3934C68.4196 36.1847 68.4196 43.8153 65.6066 50.6066V50.6066C62.7936 57.3979 57.3979 62.7936 50.6066 65.6066V65.6066C43.8153 68.4196 36.1847 68.4196 29.3934 65.6066V65.6066C22.6021 62.7936 17.2064 57.3979 14.3934 50.6066V50.6066C11.5804 43.8153 11.5804 36.1847 14.3934 29.3934V29.3934C17.2064 22.6021 22.6021 17.2064 29.3934 14.3934V14.3934Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6872 17.5872C24.292 17.1466 24.9156 16.7299 25.5567 16.3383L26.6771 17.8755C27.0775 18.4248 26.6973 19.1979 26.0178 19.2162C25.8165 19.2216 25.6199 19.1548 25.4635 19.028L23.6872 17.5872ZM13.0471 33.5526C13.3849 32.1384 13.8355 30.7444 14.3989 29.384C15.5576 26.5867 17.1545 24.0261 19.1066 21.7853C19.1665 21.9041 19.2442 22.0163 19.3395 22.1178L20.041 22.8648C20.4919 23.3449 21.1412 23.5866 21.7963 23.5182L22.4815 23.4465C23.0401 23.3882 23.4873 22.9572 23.5664 22.4012L23.6563 21.7699C23.7622 21.0253 24.6752 20.7243 25.2031 21.26C25.3475 21.4065 25.5372 21.4997 25.7413 21.5243L26.7057 21.6409C27.3241 21.7156 27.8407 22.1472 28.0241 22.7424C28.1924 23.2885 28.0522 23.8829 27.6576 24.2963L21.8928 30.3356C21.7299 30.5062 21.6472 30.738 21.6652 30.9731L21.6701 31.0372C21.7307 31.8278 20.7376 32.2266 20.2345 31.6137C20.0804 31.426 19.8504 31.3172 19.6076 31.3172H18.2952C17.4562 31.3172 16.7761 31.9973 16.7761 32.8363C16.7761 33.5103 17.2202 34.1037 17.8668 34.2938L18.8165 34.5729C19.3337 34.7249 19.797 35.0209 20.1524 35.4263L20.5227 35.8489C21.3811 36.8284 22.6023 37.4149 23.9035 37.4725L24.3243 37.4912C25.6139 37.5483 26.8257 38.1245 27.684 39.0887L28.0975 39.5532C28.4031 39.8965 28.7962 40.1504 29.2349 40.2875C30.2934 40.6185 31.0141 41.5989 31.0141 42.708V43.0923C31.0141 43.8799 30.7103 44.6372 30.166 45.2064L23.7987 51.8651C23.3693 52.3142 23.1296 52.9116 23.1296 53.533V56.3547C23.1296 57.1531 22.2238 57.6142 21.5783 57.1446C21.4229 57.0316 21.3043 56.8752 21.2374 56.6951L20.7108 55.2787C20.4626 54.6112 20.3356 53.9048 20.3356 53.1927V49.6835C20.3356 48.3137 19.8793 46.9829 19.0387 45.9013C18.2398 44.8732 17.7869 43.6186 17.745 42.3173L17.6837 40.4114C17.6662 39.8663 17.8582 39.3353 18.2204 38.9276L18.3001 38.8378C18.9449 38.112 18.9714 37.0267 18.3628 36.2702C18.0558 35.8887 17.6188 35.6338 17.1356 35.5544L16.0941 35.3833C15.0225 35.2073 14.0436 34.6692 13.3205 33.859L13.0471 33.5526ZM31.0739 13.7528C31.5576 13.5881 32.0447 13.4372 32.5347 13.3L35.7875 13.1093C37.9314 12.9836 39.7699 14.6226 39.8903 16.7668C39.9524 17.8734 39.5385 18.9537 38.753 19.7355L36.6195 21.8589C35.5234 22.9499 33.7223 22.8576 32.7367 21.6657C32.3301 21.174 32.1168 20.5483 32.1399 19.9107C32.1647 19.2235 31.9167 18.5544 31.4499 18.0494L30.721 17.2609C30.2271 16.7267 30.008 15.9941 30.1275 15.2765C30.2325 14.6459 30.583 14.1065 31.0739 13.7528ZM56.6152 17.8024C59.8226 20.2034 62.4855 23.2823 64.4018 26.8367C64.248 26.8058 64.0887 26.7954 63.928 26.8076L63.3816 26.8488C62.4057 26.9225 61.5462 27.5191 61.1358 28.4076L60.7089 29.3321L59.6412 29.3962C59.2225 29.4213 58.8277 29.5997 58.5321 29.8974C58.2496 30.1818 57.8761 30.3578 57.4768 30.3944L56.7987 30.4567L55.5025 30.5756L53.8128 28.6101L53.7924 28.6098C52.8815 28.5935 52.002 28.9425 51.3501 29.5789L50.8247 30.0918C50.4309 30.4762 49.8862 30.6651 49.339 30.607L48.6332 30.5321C48.2156 30.4878 47.8802 30.168 47.8161 29.7531C47.7468 29.3042 48.0133 28.8714 48.4454 28.7313L49.1467 28.5039C49.6212 28.3501 50.01 28.0054 50.2197 27.5529L51.1649 25.5131L52.8667 23.9541C53.3642 23.4983 54.0105 23.2388 54.6851 23.2241L56.1616 23.1917C56.7378 23.1791 57.2125 22.7354 57.2638 22.1613C57.2861 21.9123 57.3902 21.6777 57.5599 21.4941L58.6013 20.3672C58.8109 20.1403 58.8228 19.7941 58.6291 19.5534C58.406 19.2761 57.9964 19.2417 57.7301 19.4777L56.5634 20.5119C56.0466 20.97 55.229 20.7376 55.0304 20.0761C54.93 19.7416 55.0222 19.379 55.2701 19.133L56.5131 17.8997C56.5466 17.8665 56.5806 17.8341 56.6152 17.8024ZM51.1649 25.5131L47.6933 25.406C46.5907 25.3721 45.7368 24.4293 45.8118 23.3287C45.8492 22.7798 46.1171 22.2725 46.5493 21.9322L46.7102 21.8054C48.0726 20.7325 50.0882 21.4085 50.5282 23.0859L51.1649 25.5131ZM65.6374 29.4453C66.8441 32.3783 67.5269 35.4667 67.6858 38.5756L67.329 38.5608C66.5639 38.5291 65.8411 38.2009 65.3138 37.6457L63.4666 35.7009C63.2686 35.4925 62.9491 35.4574 62.7106 35.618C62.4067 35.8226 62.3614 36.2521 62.6158 36.5157L66.1747 40.2016C66.4595 40.4966 66.6635 40.8599 66.767 41.2567C66.978 42.0654 66.7506 42.9255 66.1675 43.5243L65.4106 44.3015C64.6304 45.1027 64.1922 46.1758 64.1886 47.2941L64.1763 51.1217C64.1718 52.5282 63.6294 53.8796 62.6604 54.899L61.7501 55.8565C61.2613 56.3706 60.5784 56.6549 59.8692 56.6394C59.0808 56.6222 58.3431 56.233 57.8806 55.5943C57.5833 55.1838 57.4141 54.6912 57.3982 54.1846L57.3085 51.3366C57.2862 50.627 56.9522 49.9632 56.3957 49.5223C55.8302 49.0743 55.495 48.3967 55.4821 47.6753L55.4588 46.3781C55.4295 44.7392 54.1031 43.4202 52.464 43.4C51.6691 43.3902 50.9098 43.0686 50.3496 42.5045L49.5658 41.7153C48.3465 40.4875 47.7447 38.776 47.9273 37.0553L48.1437 35.016C48.1893 34.5858 48.3542 34.177 48.6199 33.8355L50.0439 32.005C50.2402 31.7528 50.6206 31.7504 50.8199 32.0002C50.9173 32.1223 51.0667 32.1911 51.2228 32.1858L53.7299 32.1006C54.1064 32.0879 54.4301 32.3652 54.4752 32.7392C54.5082 33.0124 54.6929 33.2435 54.9521 33.336L57.5657 34.2679C57.8286 34.3616 58.1207 34.2505 58.2548 34.0058C58.3578 33.8177 58.558 33.7037 58.7723 33.711L60.3649 33.7651C60.8862 33.7828 61.3917 33.5843 61.7617 33.2166C62.4709 32.5119 62.5088 31.3767 61.8481 30.6263L60.7089 29.3321L62.816 29.1131C63.1904 29.0742 63.5676 29.1533 63.8948 29.3394L64.3398 29.5924C64.7586 29.8306 65.283 29.7708 65.6374 29.4453Z"
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
            d="M23.6872 17.5874C24.292 17.1469 24.9156 16.7301 25.5567 16.3385L27.6228 19.1733L25.7059 19.2248L23.6872 17.5874ZM13.0471 33.5529C13.3849 32.1387 13.8355 30.7447 14.3989 29.3843C15.5501 26.6052 17.1337 24.0598 19.0685 21.8295L20.7566 23.6271L23.4318 23.3475L23.9148 19.953L25.426 21.4865L27.7225 21.764L28.2966 23.6271L21.6369 30.6039L21.8665 33.6023L19.9911 31.3175H16.7761V33.9734L19.6084 34.8059L21.8665 37.3826L26.3415 37.5808L28.5645 40.0782L31.0141 40.8441V44.3198L23.1296 52.5651V58.2734L21.34 56.9715L20.3356 54.2697V47.5703L17.8095 44.3198L17.6564 39.5628L19.417 37.5808L17.886 35.678L14.438 35.1115L13.0471 33.5529ZM30.3375 14.0154C31.062 13.7457 31.7951 13.5073 32.5347 13.3003L39.6722 12.8818L39.9879 18.5067L34.5773 23.8918L32.104 20.9008L32.1787 18.8381L29.9381 16.4143L30.3375 14.0154ZM56.613 17.8009C57.1538 18.2057 57.6791 18.6297 58.188 19.0721L55.4559 21.4939L54.8673 19.5329L56.613 17.8009ZM58.3702 19.2318L58.9662 19.9726L57.2982 21.7775L57.1737 23.1699L53.6386 23.2472L51.1649 25.5133L49.5962 19.5329L45.8705 22.467L45.6744 25.3441L51.1649 25.5133L49.8909 28.2629L47.6958 28.9746L47.9249 30.4573L50.203 30.699L52.3689 28.5846L53.8128 28.6104L55.5025 30.5759L56.7987 30.4569L58.0948 30.338L58.9911 29.4355L60.7089 29.3324L63.0241 31.9624L61.1819 33.7931L58.4228 33.6994L58.022 34.4308L54.529 33.1854L54.3954 32.0783L50.9747 32.1945L50.4289 31.5104L48.2135 34.3582L47.6388 39.7751L51.2237 43.3849L55.4061 43.4365L55.5025 48.8149L57.2733 50.2178L57.4227 54.9622L58.6176 56.6124L60.9827 56.664L64.1693 53.312L64.1942 45.5508L67.107 42.5598L66.6091 40.6518L62.1279 36.0106L63.1237 35.3402L66.1361 38.5117L67.6858 38.5759C67.5269 35.467 66.8441 32.3786 65.6374 29.4456L65.0477 29.9952L63.3917 29.0536L60.7089 29.3324L61.8006 26.9685L64.368 26.7746C62.8172 23.9157 60.7827 21.3662 58.3702 19.2318Z"
            fill="#6FCF97"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M23.6873 17.5874C24.2922 17.1468 24.9157 16.7301 25.5568 16.3385L26.6772 17.8757C27.0776 18.425 26.6975 19.1981 26.018 19.2164C25.8167 19.2218 25.6201 19.1551 25.4637 19.0282L23.6873 17.5874Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13.0472 33.5528C13.385 32.1386 13.8356 30.7446 14.399 29.3843C15.5578 26.5869 17.1546 24.0263 19.1068 21.7855C19.1666 21.9044 19.2443 22.0165 19.3396 22.118L20.0411 22.8651C20.492 23.3452 21.1413 23.5869 21.7964 23.5184L22.4816 23.4468C23.0402 23.3884 23.4874 22.9575 23.5665 22.4015L23.6564 21.7701C23.7623 21.0255 24.6753 20.7246 25.2032 21.2603C25.3476 21.4067 25.5373 21.4999 25.7415 21.5246L26.7059 21.6411C27.3242 21.7158 27.8408 22.1474 28.0242 22.7427C28.1925 23.2888 28.0523 23.8831 27.6577 24.2965L21.8929 30.3359C21.73 30.5065 21.6473 30.7382 21.6653 30.9734L21.6702 31.0374C21.7308 31.828 20.7377 32.2268 20.2346 31.6139C20.0805 31.4262 19.8505 31.3174 19.6077 31.3174H18.2953C17.4563 31.3174 16.7762 31.9976 16.7762 32.8365C16.7762 33.5105 17.2203 34.1039 17.8669 34.294L18.8166 34.5731C19.3339 34.7251 19.7972 35.0211 20.1525 35.4266L20.5228 35.8491C21.3812 36.8286 22.6024 37.4151 23.9036 37.4727L24.3244 37.4914C25.6141 37.5485 26.8258 38.1247 27.6842 39.089L28.0976 39.5535C28.4032 39.8968 28.7964 40.1506 29.235 40.2878C30.2935 40.6187 31.0142 41.5992 31.0142 42.7082V43.0926C31.0142 43.8802 30.7104 44.6374 30.1661 45.2066L23.7988 51.8653C23.3694 52.3144 23.1297 52.9119 23.1297 53.5332V56.355C23.1297 57.1533 22.224 57.6145 21.5784 57.1448C21.423 57.0318 21.3044 56.8754 21.2375 56.6953L20.7109 55.2789C20.4628 54.6114 20.3357 53.905 20.3357 53.1929V49.6838C20.3357 48.3139 19.8794 46.9831 19.0388 45.9015C18.2399 44.8734 17.787 43.6188 17.7452 42.3175L17.6838 40.4116C17.6663 39.8666 17.8584 39.3356 18.2205 38.9279L18.3003 38.8381C18.945 38.1122 18.9715 37.0269 18.3629 36.2705C18.0559 35.8889 17.619 35.6341 17.1357 35.5547L16.0942 35.3835C15.0226 35.2075 14.0437 34.6695 13.3206 33.8592L13.0472 33.5528Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.074 13.753C31.5577 13.5883 32.0448 13.4374 32.5348 13.3002L35.7876 13.1095C37.9315 12.9839 39.77 14.6229 39.8904 16.767C39.9525 17.8736 39.5386 18.9539 38.7531 19.7358L36.6197 21.8591C35.5235 22.9502 33.7224 22.8578 32.7368 21.6659C32.3302 21.1742 32.1169 20.5486 32.14 19.911C32.1649 19.2238 31.9168 18.5546 31.45 18.0496L30.7211 17.2611C30.2272 16.7269 30.0081 15.9943 30.1276 15.2767C30.2326 14.6462 30.5832 14.1067 31.074 13.753Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56.6154 17.8026C59.8227 20.2037 62.4856 23.2825 64.4019 26.837C64.2481 26.806 64.0888 26.7956 63.9281 26.8078L63.3817 26.849C62.4058 26.9228 61.5463 27.5193 61.136 28.4078L60.709 29.3323L59.6413 29.3964C59.2226 29.4216 58.8278 29.6 58.5323 29.8976C58.2498 30.182 57.8762 30.358 57.4769 30.3946L55.5026 30.5758L53.8129 28.6104L53.7925 28.61C52.8816 28.5937 52.0021 28.9427 51.3502 29.5791L50.8248 30.092C50.431 30.4764 49.8864 30.6653 49.3391 30.6073L48.6333 30.5324C48.2158 30.4881 47.8803 30.1682 47.8162 29.7533C47.7469 29.3044 48.0135 28.8716 48.4455 28.7315L49.1468 28.5041C49.6213 28.3503 50.0102 28.0057 50.2198 27.5531L51.165 25.5133L52.8668 23.9543C53.3643 23.4985 54.0106 23.239 54.6852 23.2243L56.1617 23.192C56.738 23.1794 57.2126 22.7356 57.264 22.1615C57.2862 21.9125 57.3903 21.6779 57.56 21.4943L58.6014 20.3674C58.811 20.1405 58.8229 19.7943 58.6293 19.5537C58.4061 19.2764 57.9965 19.2419 57.7302 19.478L56.5635 20.5121C56.0467 20.9702 55.2291 20.7378 55.0306 20.0763C54.9301 19.7418 55.0223 19.3792 55.2702 19.1332L56.5133 17.8999C56.5467 17.8668 56.5808 17.8343 56.6154 17.8026Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.165 25.5133L47.6934 25.4063C46.5908 25.3723 45.7369 24.4295 45.8119 23.3289C45.8493 22.7801 46.1172 22.2727 46.5494 21.9324L46.7103 21.8057C48.0727 20.7327 50.0884 21.4087 50.5284 23.0861L51.165 25.5133Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M65.6375 29.4455C66.8442 32.3785 67.527 35.467 67.6859 38.5758L67.3291 38.5611C66.564 38.5294 65.8413 38.2011 65.3139 37.6459L63.4667 35.7012C63.2688 35.4927 62.9492 35.4577 62.7108 35.6182C62.4068 35.8228 62.3615 36.2523 62.616 36.5159L66.1748 40.2018C66.4596 40.4968 66.6636 40.8602 66.7671 41.2569C66.9781 42.0656 66.7507 42.9257 66.1676 43.5245L65.4108 44.3017C64.6305 45.1029 64.1923 46.176 64.1887 47.2943L64.1765 51.1219C64.1719 52.5284 63.6295 53.8799 62.6605 54.8992L61.7502 55.8567C61.2614 56.3709 60.5785 56.6551 59.8693 56.6397C59.0809 56.6225 58.3432 56.2332 57.8807 55.5945C57.5834 55.184 57.4142 54.6914 57.3983 54.1848L57.3086 51.3369C57.2863 50.6272 56.9523 49.9635 56.3958 49.5225C55.8303 49.0745 55.4951 48.3969 55.4822 47.6755L55.459 46.3783C55.4296 44.7394 54.1032 43.4204 52.4642 43.4002C51.6692 43.3904 50.9099 43.0688 50.3497 42.5048L49.566 41.7155C48.3466 40.4878 47.7448 38.7763 47.9274 37.0555L48.1438 35.0163C48.1894 34.5861 48.3544 34.1772 48.62 33.8358L50.0441 32.0052C50.2403 31.753 50.6207 31.7506 50.82 32.0004C50.9175 32.1225 51.0668 32.1913 51.2229 32.186L53.73 32.1009C54.1065 32.0881 54.4302 32.3654 54.4753 32.7394C54.5083 33.0126 54.693 33.2437 54.9522 33.3362L57.5659 34.2681C57.8287 34.3618 58.1208 34.2507 58.2549 34.006C58.358 33.8179 58.5581 33.7039 58.7724 33.7112L60.365 33.7653C60.8863 33.783 61.3918 33.5845 61.7618 33.2168C62.471 32.5121 62.5089 31.377 61.8483 30.6265L60.709 29.3323L62.8161 29.1134C63.1905 29.0745 63.5677 29.1536 63.895 29.3396L64.3399 29.5927C64.7588 29.8308 65.2831 29.771 65.6375 29.4455Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.709 29.3323L61.136 28.4078C61.5463 27.5193 62.4058 26.9228 63.3817 26.849L63.9281 26.8078C64.0888 26.7956 64.2481 26.806 64.4019 26.837C62.4856 23.2825 59.8227 20.2037 56.6154 17.8026C56.5808 17.8343 56.5467 17.8668 56.5133 17.8999L55.2702 19.1332C55.0223 19.3792 54.9301 19.7418 55.0306 20.0763C55.2291 20.7378 56.0467 20.9702 56.5635 20.5121L57.7302 19.478C57.9965 19.2419 58.4061 19.2764 58.6293 19.5537C58.8229 19.7943 58.811 20.1405 58.6014 20.3674L57.56 21.4943C57.3903 21.6779 57.2862 21.9125 57.264 22.1615C57.2126 22.7356 56.738 23.1794 56.1617 23.192L54.6852 23.2243C54.0106 23.239 53.3643 23.4985 52.8668 23.9543L51.165 25.5133M60.709 29.3323L59.6413 29.3964C59.2226 29.4216 58.8278 29.6 58.5323 29.8976C58.2498 30.182 57.8762 30.358 57.4769 30.3946L55.5026 30.5758M60.709 29.3323L61.8483 30.6265C62.5089 31.377 62.471 32.5121 61.7618 33.2168C61.3918 33.5845 60.8863 33.783 60.365 33.7653L58.7724 33.7112C58.5581 33.7039 58.358 33.8179 58.2549 34.006C58.1208 34.2507 57.8287 34.3618 57.5659 34.2681L54.9522 33.3362C54.693 33.2437 54.5083 33.0126 54.4753 32.7394C54.4302 32.3654 54.1065 32.0881 53.73 32.1009L51.2229 32.186C51.0668 32.1913 50.9175 32.1225 50.82 32.0004C50.6207 31.7506 50.2403 31.753 50.0441 32.0052L48.62 33.8358C48.3544 34.1772 48.1894 34.5861 48.1438 35.0163L47.9274 37.0555C47.7448 38.7763 48.3466 40.4878 49.566 41.7155L50.3497 42.5048C50.9099 43.0688 51.6692 43.3904 52.4642 43.4002C54.1032 43.4204 55.4296 44.7394 55.459 46.3783L55.4822 47.6755C55.4951 48.3969 55.8303 49.0745 56.3958 49.5225C56.9523 49.9635 57.2863 50.6272 57.3086 51.3369L57.3983 54.1848C57.4142 54.6914 57.5834 55.184 57.8807 55.5945C58.3432 56.2332 59.0809 56.6225 59.8693 56.6397C60.5785 56.6551 61.2614 56.3709 61.7502 55.8567L62.6605 54.8992C63.6295 53.8799 64.1719 52.5284 64.1765 51.1219L64.1887 47.2943C64.1923 46.176 64.6305 45.1029 65.4108 44.3017L66.1676 43.5245C66.7507 42.9257 66.9781 42.0656 66.7671 41.2569C66.6636 40.8602 66.4596 40.4968 66.1748 40.2018L62.616 36.5159C62.3615 36.2523 62.4068 35.8228 62.7108 35.6182C62.9492 35.4577 63.2688 35.4927 63.4667 35.7012L65.3139 37.6459C65.8413 38.2011 66.564 38.5294 67.3291 38.5611L67.6859 38.5758C67.527 35.467 66.8442 32.3785 65.6375 29.4455C65.2831 29.771 64.7588 29.8308 64.3399 29.5927L63.895 29.3396C63.5677 29.1536 63.1905 29.0745 62.8161 29.1134L60.709 29.3323ZM55.5026 30.5758L53.8129 28.6104M55.5026 30.5758C54.9549 30.0258 53.8129 28.6104 53.8129 28.6104M53.8129 28.6104L53.7925 28.61C52.8816 28.5937 52.0021 28.9427 51.3502 29.5791L50.8248 30.092C50.431 30.4764 49.8864 30.6653 49.3391 30.6073L48.6333 30.5324C48.2158 30.4881 47.8803 30.1682 47.8162 29.7533C47.7469 29.3044 48.0135 28.8716 48.4455 28.7315L49.1468 28.5041C49.6213 28.3503 50.0102 28.0057 50.2198 27.5531L51.165 25.5133M51.165 25.5133L47.6934 25.4063C46.5908 25.3723 45.7369 24.4295 45.8119 23.3289C45.8493 22.7801 46.1172 22.2727 46.5494 21.9324L46.7103 21.8057C48.0727 20.7327 50.0884 21.4087 50.5284 23.0861L51.165 25.5133ZM14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935ZM23.6873 17.5874C24.2922 17.1468 24.9157 16.7301 25.5568 16.3385L26.6772 17.8757C27.0776 18.425 26.6975 19.1981 26.018 19.2164C25.8167 19.2218 25.6201 19.1551 25.4637 19.0282L23.6873 17.5874ZM13.0472 33.5528C13.385 32.1386 13.8356 30.7446 14.399 29.3843C15.5578 26.5869 17.1546 24.0263 19.1068 21.7855C19.1666 21.9044 19.2443 22.0165 19.3396 22.118L20.0411 22.8651C20.492 23.3452 21.1413 23.5869 21.7964 23.5184L22.4816 23.4468C23.0402 23.3884 23.4874 22.9575 23.5665 22.4015L23.6564 21.7701C23.7623 21.0255 24.6753 20.7246 25.2032 21.2603C25.3476 21.4067 25.5373 21.4999 25.7415 21.5246L26.7059 21.6411C27.3242 21.7158 27.8408 22.1474 28.0242 22.7427C28.1925 23.2888 28.0523 23.8831 27.6577 24.2965L21.8929 30.3359C21.73 30.5065 21.6473 30.7382 21.6653 30.9734L21.6702 31.0374C21.7308 31.828 20.7377 32.2268 20.2346 31.6139C20.0805 31.4262 19.8505 31.3174 19.6077 31.3174H18.2953C17.4563 31.3174 16.7762 31.9976 16.7762 32.8365C16.7762 33.5105 17.2203 34.1039 17.8669 34.294L18.8166 34.5731C19.3339 34.7251 19.7972 35.0211 20.1525 35.4266L20.5228 35.8491C21.3812 36.8286 22.6024 37.4151 23.9036 37.4727L24.3244 37.4914C25.6141 37.5485 26.8258 38.1247 27.6842 39.089L28.0976 39.5535C28.4032 39.8968 28.7964 40.1506 29.235 40.2878C30.2935 40.6187 31.0142 41.5992 31.0142 42.7082V43.0926C31.0142 43.8802 30.7104 44.6374 30.1661 45.2066L23.7988 51.8653C23.3694 52.3144 23.1297 52.9119 23.1297 53.5332V56.355C23.1297 57.1533 22.224 57.6145 21.5784 57.1448C21.423 57.0318 21.3044 56.8754 21.2375 56.6953L20.7109 55.2789C20.4628 54.6114 20.3357 53.905 20.3357 53.1929V49.6838C20.3357 48.3139 19.8794 46.9831 19.0388 45.9015C18.2399 44.8734 17.787 43.6188 17.7452 42.3175L17.6838 40.4116C17.6663 39.8666 17.8584 39.3356 18.2205 38.9279L18.3003 38.8381C18.945 38.1122 18.9715 37.0269 18.3629 36.2705C18.0559 35.8889 17.619 35.6341 17.1357 35.5547L16.0942 35.3835C15.0226 35.2075 14.0437 34.6695 13.3206 33.8592L13.0472 33.5528ZM31.074 13.753C31.5577 13.5883 32.0448 13.4374 32.5348 13.3002L35.7876 13.1095C37.9315 12.9839 39.77 14.6229 39.8904 16.767C39.9525 17.8736 39.5386 18.9539 38.7531 19.7358L36.6197 21.8591C35.5235 22.9502 33.7224 22.8578 32.7368 21.6659C32.3302 21.1742 32.1169 20.5486 32.14 19.911C32.1649 19.2238 31.9168 18.5546 31.45 18.0496L30.7211 17.2611C30.2272 16.7269 30.0081 15.9943 30.1276 15.2767C30.2326 14.6462 30.5832 14.1067 31.074 13.753Z"
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
            d="M29.4842 12.206C29.1976 12.3145 28.9121 12.4276 28.6281 12.5452C27.2425 13.1192 25.9111 13.7934 24.6426 14.5591C24.5992 14.5814 24.5564 14.6055 24.5142 14.6313C23.8269 15.0511 23.1583 15.498 22.5098 15.9703C22.4738 15.9965 22.4389 16.0238 22.4051 16.0521C20.6513 17.3407 19.0461 18.8168 17.6177 20.4523C17.5973 20.4739 17.5773 20.4959 17.5578 20.5184C16.4619 21.7817 15.471 23.1394 14.5981 24.5785C13.8164 25.8661 13.1293 27.2188 12.5457 28.6276C9.52968 35.909 9.52968 44.0902 12.5457 51.3716C15.5617 58.6529 21.3468 64.4379 28.6281 67.4539C35.9095 70.47 44.0907 70.47 51.372 67.4539C58.6534 64.4379 64.4384 58.6529 67.4544 51.3716C69.1401 47.3019 69.8837 42.9512 69.6851 38.6336C69.6866 38.5803 69.686 38.5269 69.6833 38.4733C69.513 35.1401 68.7809 31.8287 67.4871 28.6841C67.4625 28.6241 67.435 28.5658 67.405 28.5091C67.0453 27.6511 66.6471 26.8141 66.2124 26.0001C66.1868 25.9392 66.1581 25.8792 66.1262 25.8204C64.4634 22.7551 62.282 20.0217 59.6955 17.7334C59.6627 17.7044 59.6292 17.6766 59.5951 17.6502C59.5645 17.6199 59.5329 17.5905 59.5002 17.5621C58.9546 17.0879 58.3913 16.6332 57.8115 16.1992C57.7534 16.1557 57.6937 16.1159 57.6325 16.0796C55.7121 14.6639 53.6129 13.4734 51.372 12.5452C45.2506 10.0097 38.4932 9.60573 32.1691 11.3335C32.1108 11.3443 32.0529 11.3578 31.9957 11.3738C31.2027 11.5958 30.4167 11.8513 29.6399 12.1405C29.5868 12.1603 29.5349 12.1821 29.4842 12.206ZM32.0908 15.6626C32.1052 15.5763 32.1665 15.5051 32.2499 15.4788C32.4267 15.4229 32.604 15.3689 32.7817 15.317C32.8629 15.2932 32.9465 15.279 33.0309 15.2741L35.9047 15.1056C36.944 15.0447 37.8352 15.8392 37.8935 16.8786V16.8786C37.9236 17.415 37.723 17.9387 37.3422 18.3177L35.2088 20.4411C34.947 20.7017 34.5179 20.6809 34.2825 20.3962V20.3962C34.1845 20.2777 34.1334 20.1273 34.139 19.9736L34.1775 18.9099C34.1966 18.3819 34.0061 17.8679 33.6474 17.4799L32.1498 15.8598C32.1007 15.8067 32.0789 15.7339 32.0908 15.6626V15.6626ZM17.9963 26.689C18.3445 26.1134 18.7145 25.5527 19.1052 25.0082C19.1514 24.9439 19.2446 24.938 19.2988 24.9957V24.9957C19.7267 25.4513 20.343 25.6807 20.9646 25.6157L23.6399 25.3361V25.3361C23.7303 25.3267 23.7966 25.4444 23.7338 25.5102L20.1903 29.2225C20.1859 29.2271 20.1815 29.2317 20.1772 29.2363C20.1291 29.2877 20.0616 29.317 19.9912 29.317V29.317H16.7762V29.317C16.6998 29.317 16.6448 29.2383 16.6769 29.1689C17.0728 28.3153 17.5136 27.4877 17.9963 26.689ZM15.3055 37.2803C14.8366 37.2032 14.3976 37.5348 14.3609 38.0084C14.0503 42.0088 14.6771 46.0646 16.2412 49.8408V49.8408C16.7483 51.065 18.3357 50.6465 18.3357 49.3215V48.7659C18.3357 48.4351 18.2255 48.1138 18.0225 47.8526L16.2304 45.5465C15.9712 45.2129 15.8242 44.8058 15.8106 44.3836L15.6575 39.6266C15.6411 39.1151 15.8213 38.6167 16.1612 38.2341V38.2341C16.4348 37.9261 16.2615 37.4374 15.855 37.3706L15.3055 37.2803ZM24.0261 60.1532C23.9928 60.1268 23.9993 60.0745 24.0371 60.0552V60.0552C24.7076 59.7139 25.1297 59.0252 25.1297 58.2729V56.5763C25.1297 54.5165 25.9242 52.5361 27.3477 51.0474L32.4597 45.7015C32.8156 45.3293 33.0142 44.8342 33.0142 44.3192V40.8436C33.0142 39.969 32.4459 39.1958 31.6111 38.9348V38.9348C30.3542 38.5417 29.2277 37.8145 28.3521 36.8308L27.8355 36.2505C27.4765 35.8471 26.9696 35.6061 26.4301 35.5822L22.8207 35.4223C22.8126 35.422 22.8051 35.4184 22.7998 35.4123V35.4123C22.7871 35.3978 22.7915 35.3753 22.8085 35.3662C23.5025 34.9962 23.9219 34.2466 23.8608 33.449V33.449C23.758 32.1064 24.2303 30.7832 25.1601 29.8092L29.7434 25.0075C30.2436 24.4835 30.4214 23.7299 30.208 23.0376L29.6339 21.1745C29.5871 21.0224 29.5231 20.8788 29.4443 20.7456C29.3213 20.5375 29.311 20.2722 29.4177 20.0553V20.0553C29.4753 19.9382 29.5206 19.8172 29.5539 19.694C29.6128 19.4758 29.9303 19.3515 30.0837 19.5174V19.5174C30.1263 19.5636 30.149 19.6247 30.1467 19.6875L30.1054 20.8279C30.0877 21.3178 30.2505 21.7971 30.5628 22.1748L33.0361 25.1658C33.3945 25.5993 33.9188 25.8617 34.4806 25.889C35.0424 25.9162 35.5896 25.7056 35.9883 25.3089L41.3989 19.9237C41.8036 19.5209 42.0169 18.9642 41.9849 18.3941V18.3941C41.8642 16.2432 43.6672 14.4549 45.7666 14.938C47.1497 15.2562 48.5128 15.6905 49.8413 16.2407C51.1007 16.7624 52.3084 17.3798 53.4555 18.0841C53.4656 18.0903 53.4672 18.1043 53.4588 18.1126V18.1126C52.9344 18.6329 52.7395 19.3998 52.9519 20.1074L52.9731 20.1781C53.1481 20.761 52.7364 21.3609 52.2877 21.772V21.772V21.772C52.2744 21.7841 52.253 21.7778 52.2484 21.7604L51.5309 19.0249C51.3598 18.3727 50.8716 17.8506 50.2323 17.6362C49.593 17.4218 48.8887 17.5439 48.3589 17.9611L44.6332 20.8952C44.1891 21.245 43.9137 21.7664 43.8753 22.3304L43.6792 25.2076C43.6422 25.7497 43.8274 26.2834 44.1922 26.6862C44.5569 27.0889 45.0698 27.3259 45.6129 27.3426V27.3426C45.9063 27.3516 46.065 27.7799 45.9278 28.0393C45.7324 28.4086 45.6516 28.8405 45.7194 29.2794L45.9484 30.7621C46.0087 31.1526 46.1802 31.504 46.4292 31.7844C46.7568 32.1534 46.9381 32.7401 46.635 33.1296V33.1296C46.4062 33.4238 46.2641 33.776 46.2248 34.1466L45.65 39.5636C45.5866 40.1619 45.7958 40.757 46.2198 41.1839L49.8047 44.7937C50.1742 45.1657 50.6749 45.3778 51.1992 45.3843V45.3843C52.4483 45.3997 53.4591 46.4049 53.4815 47.6539L53.5029 48.8503C53.5136 49.4485 53.7916 50.0105 54.2606 50.3821V50.3821C54.9221 50.9061 55.3189 51.6949 55.3455 52.5383L55.4238 55.0246C55.4363 55.4242 55.5684 55.8109 55.8029 56.1347L56.9979 57.7849V57.7849C57.3113 58.2177 57.4511 58.8961 57.0511 59.2505C54.9343 61.1254 52.5034 62.6558 49.8413 63.7584C43.5401 66.3685 36.4601 66.3685 30.1588 63.7584C27.9376 62.8384 25.8773 61.6205 24.0261 60.1532ZM64.434 33.3805C64.5685 33.2469 64.8258 33.287 64.8739 33.4703C64.8993 33.5669 64.924 33.6637 64.9483 33.7605C65.004 33.9834 64.7322 34.1289 64.574 33.9623V33.9623C64.5392 33.9256 64.5032 33.8906 64.4663 33.8571C64.3284 33.732 64.3019 33.5118 64.434 33.3805V33.3805V33.3805ZM59.1659 23.3474C59.1811 23.1771 59.3917 23.1079 59.5031 23.2376C59.8124 23.5974 60.1119 23.966 60.4012 24.3429C60.7131 24.7493 60.5309 25.34 60.2178 25.7455C60.1271 25.8629 60.0488 25.9914 59.9851 26.1294L59.6148 26.931C59.4794 27.2242 59.1937 27.4192 58.8713 27.4386V27.4386C58.3808 27.468 57.9183 27.677 57.5721 28.0257L57.4343 28.1644C57.2753 28.3245 57.065 28.4236 56.8403 28.4442V28.4442C56.5307 28.4726 56.2265 28.3495 56.0239 28.1137L55.3344 27.3117C55.0101 26.9313 54.572 26.7016 54.111 26.6322C54.0643 26.6252 54.0173 26.6198 53.9702 26.6161C53.9248 26.6125 53.8793 26.6104 53.8337 26.6099V26.6099C53.5134 26.6042 53.3643 26.2104 53.6005 25.994L54.2403 25.4079C54.3657 25.2931 54.5285 25.2277 54.6984 25.224L57.2176 25.1689C58.2361 25.1466 59.0751 24.3622 59.1659 23.3474V23.3474ZM25.412 23.6287L25.4209 23.5662C25.426 23.53 25.4592 23.5045 25.4955 23.5089L25.5031 23.5098C25.5549 23.5161 25.5774 23.5788 25.5414 23.6166L25.4913 23.669C25.4611 23.7007 25.4058 23.672 25.412 23.6287V23.6287ZM19.6979 40.8175C19.6871 40.4818 19.8055 40.1546 20.0286 39.9035L20.0723 39.8543C20.4781 39.3974 21.1677 39.353 21.7782 39.3801V39.3801L22.9129 39.4303C24.5089 39.501 26.0085 40.2141 27.0708 41.4074V41.4074C27.3118 41.6781 27.6218 41.8783 27.9677 41.9865L28.2713 42.0814C28.7133 42.2196 29.0142 42.629 29.0142 43.0921V43.0921C29.0142 43.3647 28.909 43.6269 28.7206 43.8239L24.3615 48.3825C23.6287 49.1489 22.3357 48.6302 22.3357 47.5698V47.5698C22.3357 47.1253 22.1876 46.6935 21.9149 46.3426L20.7006 44.78C20.1073 44.0165 19.7709 43.0847 19.7398 42.1181L19.6979 40.8175ZM59.8509 31.7462C59.727 31.742 59.6676 31.5922 59.7549 31.5042V31.5042C59.8128 31.4459 59.908 31.4488 59.9623 31.5104V31.5104C60.0445 31.6039 59.9753 31.7504 59.8509 31.7462V31.7462ZM59.4087 35.872C59.493 35.791 59.6038 35.7401 59.7206 35.7441L60.1021 35.757C60.1245 35.7578 60.1414 35.7777 60.1391 35.8V35.8C60.077 36.3882 60.2784 36.9737 60.6892 37.3992L64.736 41.5905C64.7821 41.6383 64.8151 41.6971 64.8319 41.7614V41.7614C64.8661 41.8924 64.8293 42.0317 64.7348 42.1286L62.7615 44.155C62.3994 44.5268 62.196 45.0249 62.1943 45.5439L62.1765 51.115C62.1736 52.0108 61.8281 52.8715 61.211 53.5207L60.3007 54.4782C60.1999 54.5842 60.0591 54.6428 59.9129 54.6396V54.6396C59.7503 54.6361 59.5988 54.5567 59.5034 54.425L59.4988 54.4186C59.436 54.3319 59.4007 54.2284 59.3973 54.1214L59.2724 50.1544C59.2539 49.5658 58.9769 49.0153 58.5154 48.6497V48.6497C57.8633 48.1331 57.4767 47.3516 57.4618 46.5198L57.4059 43.4002C57.3866 42.3193 56.5118 41.4495 55.4309 41.4361L53.601 41.4136C52.6175 41.4015 51.6781 41.0036 50.9851 40.3058V40.3058C50.1897 39.5049 49.7972 38.3885 49.9163 37.2661L50.0976 35.557C50.1268 35.2816 50.2324 35.0198 50.4025 34.8012L50.7748 34.3226C50.8387 34.2404 50.9387 34.1963 51.0427 34.1928V34.1928L51.3022 34.184C52.2006 34.1535 53.0108 34.7668 53.8575 35.0687V35.0687L57.3504 36.3141C58.0804 36.5744 58.8742 36.386 59.4087 35.872ZM48.2459 23.1416C48.1296 23.2332 48.1911 23.4202 48.3392 23.4247V23.4247C48.4451 23.428 48.5244 23.3285 48.4975 23.2259V23.2259C48.4685 23.1154 48.3357 23.0709 48.2459 23.1416V23.1416Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGlobeEarth = forwardRef((props, ref) => {
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

CoreGlobeEarth.displayName = 'CoreGlobeEarth'

export default CoreGlobeEarth
