export type IconType = keyof typeof icons;

export const icons = {
  filledPerson: (
    <>
      <path
        d="M60.02 57.4916C75.35 57.4916 87.83 45.0116 87.83 29.6816C87.83 14.3516 75.35 1.84158 60.02 1.84158C44.69 1.84158 32.21 14.3216 32.21 29.6816C32.21 45.0416 44.69 57.4916 60.02 57.4916Z"
        fill="currentColor"
      />
      <path
        d="M112.5 105.298C106.95 80.578 85.3499 63.298 59.9999 63.298C34.6499 63.298 13.0499 80.578 7.49986 105.298C6.77986 108.448 7.52986 111.718 9.56986 114.238C11.5799 116.728 14.5499 118.168 17.7599 118.168H102.3C105.51 118.168 108.48 116.728 110.49 114.238C112.5 111.718 113.25 108.478 112.56 105.298H112.5Z"
        fill="currentColor"
      />
    </>
  ),
  filledMail: (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.8019 28.9152L59.9872 68.7481L113.161 28.9235C111.042 22.5703 105.046 17.9904 97.9802 17.9904H21.9802C14.9176 17.9904 8.92381 22.5663 6.8019 28.9152ZM113.98 40.7035L65.95 76.6755C62.417 79.3216 57.5574 79.3216 54.0244 76.6755L5.98022 40.6931V85.9904C5.98022 94.8269 13.1437 101.99 21.9802 101.99H97.9802C106.817 101.99 113.98 94.8269 113.98 85.9904V40.7035Z"
      fill="currentColor"
    />
  ),
  filledDocument: (
    <>
      <path
        d="M76.1133 23.9604C76.1133 28.1584 79.5333 31.5767 83.7333 31.5767H105.333C105.063 31.2469 104.823 30.887 104.523 30.5872L77.4633 3.54041C77.0433 3.12062 76.5933 2.79078 76.1433 2.46094V23.9904L76.1133 23.9604Z"
        fill="currentColor"
      />
      <path
        d="M107.873 37.5717H83.7527C76.2527 37.5717 70.1327 31.4547 70.1327 23.9583V0.119967C69.7427 0.0899817 69.3527 0 68.9627 0H30.0227C20.0927 0 12.0227 8.06606 12.0227 17.9912V101.95C12.0227 111.875 20.0927 119.941 30.0227 119.941H90.0227C99.9527 119.941 108.023 111.875 108.023 101.95V39.0409C108.023 38.5312 107.933 38.0514 107.873 37.5717ZM38.4527 59.7608H66.2027C67.8527 59.7608 69.2027 61.1102 69.2027 62.7594C69.2027 64.4086 67.8527 65.7579 66.2027 65.7579H38.4527C36.8027 65.7579 35.4527 64.4086 35.4527 62.7594C35.4527 61.1102 36.8027 59.7608 38.4527 59.7608ZM81.6227 86.2679H38.4527C36.8027 86.2679 35.4527 84.9186 35.4527 83.2694C35.4527 81.6202 36.8027 80.2708 38.4527 80.2708H81.6227C83.2727 80.2708 84.6227 81.6202 84.6227 83.2694C84.6227 84.9186 83.2727 86.2679 81.6227 86.2679Z"
        fill="currentColor"
      />
    </>
  ),
  GitHub: (
    <path
      d="M44.9837 105.098C44.9837 106.024 44.9762 106.848 44.9837 107.671C45.0135 110.303 45.0434 112.936 45.0807 115.568C45.0956 116.668 44.8842 117.688 43.9536 118.382C43.6078 118.638 43.1674 118.832 42.7445 118.907C41.4308 119.138 40.2266 118.663 39.0522 118.173C36.9474 117.295 34.8276 116.436 32.775 115.441C30.1501 114.167 27.6521 112.66 25.2835 110.94C23.1637 109.403 21.1435 107.756 19.2227 105.972C16.2097 103.17 13.5003 100.1 11.1566 96.7313C9.6314 94.5368 8.27542 92.2205 6.92941 89.9066C5.06339 86.6996 3.75718 83.2412 2.63259 79.7182C1.86131 77.3023 1.33882 74.8218 0.92581 72.3163C0.472991 69.582 0.144572 66.8427 0.142084 64.0636C0.142084 62.7374 -0.0320776 61.4063 0.00524271 60.0827C0.045051 58.6845 0.224189 57.2912 0.380934 55.8979C0.545143 54.4424 0.716817 52.9869 0.950691 51.5438C1.16715 50.2028 1.43088 48.8667 1.74935 47.5456C2.12504 45.9931 2.52063 44.4405 3.01575 42.9253C3.48847 41.4848 4.03335 40.0591 4.66779 38.6833C5.71027 36.4216 6.77515 34.1625 7.97935 31.983C8.89992 30.316 10.0295 28.7635 11.0993 27.1811C12.8484 24.5936 14.8687 22.2175 17.0581 20.0007C19.4466 17.5823 21.9471 15.271 24.8058 13.3925C26.4355 12.3227 27.9955 11.1384 29.6799 10.1656C31.6479 9.02853 33.6781 7.97112 35.7581 7.05553C37.9451 6.09267 40.2042 5.26913 42.4733 4.51526C43.9064 4.04005 45.4116 3.78378 46.8945 3.46781C48.5216 3.12197 50.1488 2.75872 51.7934 2.50992C56.038 1.8705 60.3174 1.9526 64.5868 2.09691C66.2339 2.15164 67.8735 2.49499 69.5131 2.7413C70.8964 2.9503 72.2798 3.16924 73.6457 3.46781C74.9096 3.74398 76.1636 4.07737 77.3926 4.48043C79.291 5.10244 81.1968 5.71946 83.038 6.48826C86.2077 7.81189 89.2879 9.33456 92.1292 11.2877C93.7912 12.4297 95.4681 13.5493 97.0804 14.756C99.7923 16.7862 102.278 19.0876 104.49 21.6428C106.371 23.8148 108.199 26.064 109.797 28.4475C111.416 30.8684 112.797 33.4609 114.148 36.0484C115.454 38.5464 116.509 41.1688 117.238 43.9031C117.825 46.1025 118.435 48.3019 118.9 50.5287C119.251 52.2131 119.435 53.9373 119.612 55.654C119.764 57.1294 119.811 58.6148 119.888 60.0952C119.943 61.1426 119.998 62.1901 120 63.2375C120 63.8322 119.908 64.4268 119.851 65.0214C119.607 67.5443 119.48 70.0846 119.077 72.58C118.724 74.767 118.079 76.9092 117.524 79.0613C116.683 82.3231 115.377 85.4108 113.894 88.4263C112.183 91.9045 110.142 95.1812 107.746 98.2266C106.463 99.8587 105.089 101.421 103.726 102.989C101.474 105.574 98.8692 107.768 96.1697 109.868C93.3807 112.035 90.4025 113.899 87.2427 115.441C84.8293 116.618 82.3214 117.608 79.8234 118.603C79.1566 118.87 78.3729 118.917 77.6414 118.927C76.2108 118.947 75.1161 117.822 75.1086 116.377C75.0937 112.376 75.0987 108.375 75.0962 104.374C75.0962 102.489 75.1584 100.598 75.0663 98.7167C74.9295 95.8804 74.4195 93.1112 72.8943 90.6456C72.4539 89.9365 71.8593 89.3219 71.2821 88.5979C71.7921 88.4909 72.2599 88.379 72.7301 88.2994C73.8671 88.1103 75.0166 87.9859 76.1412 87.7495C77.5817 87.446 79.0273 87.1275 80.428 86.6846C83.349 85.7591 86.0883 84.418 88.5813 82.6391C90.4324 81.3205 92.0695 79.7605 93.3981 77.877C95.1198 75.4313 96.2095 72.7069 97.0505 69.8781C97.4287 68.6067 97.6825 67.2831 97.8467 65.9644C98.1079 63.8421 98.3318 61.7099 98.4139 59.5752C98.4935 57.5375 98.3045 55.5048 97.889 53.487C97.3292 50.7676 96.2892 48.2596 94.7914 45.9458C94.1793 45.0003 93.4528 44.1196 92.7313 43.2513C92.3929 42.8432 92.3481 42.465 92.5148 41.9973C93.2737 39.8875 93.6817 37.7055 93.5772 35.4712C93.4827 33.4584 93.2264 31.4531 92.5895 29.5224C92.3108 28.6839 92.0421 27.8405 91.7361 27.0119C91.6789 26.8552 91.4823 26.696 91.3156 26.6437C90.0243 26.2357 88.7355 26.4098 87.5015 26.8328C85.4812 27.527 83.4385 28.1987 81.5028 29.0894C79.7115 29.913 77.9773 30.9082 76.3551 32.0253C75.2803 32.7643 74.3199 32.6871 73.1879 32.4159C71.4886 32.0079 69.7669 31.6695 68.0427 31.3784C64.3131 30.749 60.5438 30.7987 56.7819 30.8957C55.4931 30.9281 54.2068 31.1595 52.923 31.3187C51.8382 31.4531 50.7459 31.5725 49.6736 31.7765C48.3425 32.0303 47.0288 32.3886 45.6977 32.6473C45.3519 32.7145 44.8941 32.6797 44.608 32.503C41.9259 30.836 39.2015 29.2611 36.2234 28.1639C35.1809 27.7807 34.1757 27.2483 33.1034 26.9995C31.6927 26.6711 30.2795 26.166 28.7618 26.5964C28.2517 26.7408 28.1597 27.0841 28.0651 27.4125C27.5825 29.0944 27.0276 30.7689 26.7365 32.4881C26.4753 34.0232 26.3658 35.6255 26.4877 37.1755C26.6097 38.7355 27.065 40.2731 27.4506 41.8032C27.6098 42.4377 27.6123 42.883 27.1396 43.4229C25.388 45.4183 23.9773 47.6501 23.1239 50.1704C22.6064 51.6956 22.2855 53.2929 21.9421 54.8703C21.3425 57.6171 21.6361 60.3987 21.763 63.1629C21.8252 64.5064 22.1984 65.835 22.4024 67.1761C22.8229 69.9502 23.7609 72.5626 24.975 75.0706C26.3285 77.8721 28.2493 80.2307 30.7273 82.149C33.1954 84.0598 35.9547 85.4058 38.8532 86.4707C40.1669 86.9533 41.5577 87.2494 42.9336 87.5405C44.8244 87.9411 46.7303 88.2571 48.7182 88.6253C48.2704 89.1876 47.8151 89.7001 47.4244 90.2599C46.377 91.7502 45.7226 93.4023 45.439 95.2036C45.3196 95.965 45.0907 96.5471 44.2024 96.8706C41.3064 97.9205 38.3481 98.341 35.3327 97.7514C33.3995 97.3732 31.8245 96.2163 30.4014 94.8454C29.1897 93.6785 28.3562 92.2578 27.4581 90.8745C26.2763 89.0557 24.664 87.7445 22.8055 86.6548C21.1634 85.6919 19.4541 85.1844 17.5607 85.3535C17.1154 85.3934 16.6675 85.5028 16.247 85.6496C15.8166 85.8014 15.7295 86.3139 15.9659 86.8115C16.471 87.8739 17.302 88.6004 18.3071 89.1776C19.9318 90.1057 21.1136 91.484 22.171 93.0042C23.3777 94.7384 24.1938 96.6517 25.0198 98.5774C25.9752 100.804 27.5899 102.464 29.7122 103.665C32.2798 105.123 35.1162 105.352 37.95 105.559C39.9952 105.708 42.0478 105.616 44.0681 105.183C44.3268 105.128 44.598 105.136 44.9862 105.103L44.9837 105.098Z"
      fill="currentColor"
    />
  ),
  sun: (
    <>
      <path
        d="M59.994 93.6984C78.6085 93.6984 93.6985 78.6084 93.6985 59.994C93.6985 41.3795 78.6085 26.2895 59.994 26.2895C41.3796 26.2895 26.2896 41.3795 26.2896 59.994C26.2896 78.6084 41.3796 93.6984 59.994 93.6984Z"
        fill="currentColor"
      />
      <path
        d="M59.994 16.8522C57.9958 16.8522 56.3828 15.2392 56.3828 13.241V3.61119C56.3828 1.613 57.9958 0 59.994 0C61.9922 0 63.6052 1.613 63.6052 3.61119V13.241C63.6052 15.2392 61.9922 16.8522 59.994 16.8522Z"
        fill="currentColor"
      />
      <path
        d="M26.9396 30.5507C26.0127 30.5507 25.0859 30.2016 24.3877 29.4914L17.5746 22.6783C16.1662 21.2699 16.1662 18.9829 17.5746 17.5745C18.983 16.1661 21.27 16.1661 22.6784 17.5745L29.4915 24.3876C30.8999 25.796 30.8999 28.0831 29.4915 29.4914C28.7813 30.2016 27.8665 30.5507 26.9396 30.5507Z"
        fill="currentColor"
      />
      <path
        d="M13.241 63.6052H3.61119C1.613 63.6052 0 61.9922 0 59.994C0 57.9958 1.613 56.3828 3.61119 56.3828H13.241C15.2392 56.3828 16.8522 57.9958 16.8522 59.994C16.8522 61.9922 15.2392 63.6052 13.241 63.6052Z"
        fill="currentColor"
      />
      <path
        d="M20.1265 103.485C19.1996 103.485 18.2727 103.136 17.5746 102.426C16.1662 101.017 16.1662 98.7301 17.5746 97.3217L24.3877 90.5086C25.7961 89.1002 28.0832 89.1002 29.4915 90.5086C30.8999 91.9169 30.8999 94.204 29.4915 95.6124L22.6784 102.426C21.9682 103.136 21.0534 103.485 20.1265 103.485Z"
        fill="currentColor"
      />
      <path
        d="M59.994 120C57.9958 120 56.3828 118.387 56.3828 116.389V106.759C56.3828 104.761 57.9958 103.148 59.994 103.148C61.9922 103.148 63.6052 104.761 63.6052 106.759V116.389C63.6052 118.387 61.9922 120 59.994 120Z"
        fill="currentColor"
      />
      <path
        d="M99.8737 103.485C98.9468 103.485 98.0199 103.136 97.3218 102.426L90.5087 95.6124C89.1003 94.204 89.1003 91.9169 90.5087 90.5086C91.917 89.1002 94.2041 89.1002 95.6125 90.5086L102.426 97.3217C103.834 98.7301 103.834 101.017 102.426 102.426C101.715 103.136 100.801 103.485 99.8737 103.485Z"
        fill="currentColor"
      />
      <path
        d="M116.389 63.6052H106.759C104.761 63.6052 103.148 61.9922 103.148 59.994C103.148 57.9958 104.761 56.3828 106.759 56.3828H116.389C118.387 56.3828 120 57.9958 120 59.994C120 61.9922 118.387 63.6052 116.389 63.6052Z"
        fill="currentColor"
      />
      <path
        d="M93.0606 30.5507C92.1337 30.5507 91.2068 30.2016 90.5087 29.4914C89.1003 28.0831 89.1003 25.796 90.5087 24.3876L97.3218 17.5745C98.7301 16.1661 101.017 16.1661 102.426 17.5745C103.834 18.9829 103.834 21.2699 102.426 22.6783L95.6125 29.4914C94.9023 30.2016 93.9874 30.5507 93.0606 30.5507Z"
        fill="currentColor"
      />
    </>
  ),
  moon: (
    <path
      d="M93.6688 80.471C63.9864 80.471 39.5289 56.0136 39.5289 26.3312C39.5289 19.4907 40.8008 12.9423 43.121 6.9096C44.7882 2.57841 40.1992 -1.4606 36.0055 0.515938C13.284 11.2236 -1.96112 35.1654 0.204478 62.4072C2.62788 92.7943 27.2056 117.372 57.5927 119.795C84.8345 121.961 108.759 106.716 119.484 83.9944C121.461 79.8007 117.422 75.2117 113.09 76.8789C107.058 79.1992 100.526 80.471 93.6688 80.471Z"
      fill="currentColor"
    />
  ),
  arrowDown: (
    <path
      d="M60.4496 90.3598C58.5296 90.3598 56.6096 89.6398 55.1396 88.1698L9.38965 42.4198L20.0096 31.7998L60.4496 72.2398L100.02 32.6698L110.64 43.2898L65.7896 88.1398C64.3196 89.6098 62.3996 90.3298 60.4796 90.3298L60.4496 90.3598Z"
      fill="currentColor"
    />
  ),
  cancel: (
    <path
      d="M99.1803 27.1784L92.8203 20.8184L60.0003 53.6384L27.1803 20.8184L20.8203 27.1784L53.6403 59.9984L20.8203 92.8184L27.1803 99.1784L60.0003 66.3584L92.8203 99.1784L99.1803 92.8184L66.3603 59.9984L99.1803 27.1784Z"
      fill="currentColor"
    />
  ),
  plus: (
    <path
      d="M102.75 52.5H67.5V17.25H52.5V52.5H17.25V67.5H52.5V102.75H67.5V67.5H102.75V52.5Z"
      fill="currentColor"
    />
  ),
};
