<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  ></button>

  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#" class="flex items-center p-2 text-white dark:text-white pb-20">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            ></svg>
            <img src="src/assets/BLINC-05-white.png" alt="blinc" class="ml-3 h-15 w-40" />
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <svg
              width="24px"
              height="24px"
              class="ml-6"
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#ffffff" d="M5 11h3v5h-3v-5z"></path>
                <path fill="#ffffff" d="M1 14h3v2h-3v-2z"></path>
                <path fill="#ffffff" d="M13 12h3v4h-3v-4z"></path>
                <path fill="#ffffff" d="M9 9h3v7h-3v-7z"></path>
                <path
                  fill="#ffffff"
                  d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"
                ></path>
              </g></svg
            ><span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <svg
              width="24px"
              height="24px"
              class="ml-6"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <title>ic_fluent_notebook_error_24_filled</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="🔍-Product-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="ic_fluent_notebook_error_24_filled" fill="#ffffff" fill-rule="nonzero">
                    <path
                      d="M6.5,12 C9.53756612,12 12,14.4624339 12,17.5 C12,20.5375661 9.53756612,23 6.5,23 C3.46243388,23 1,20.5375661 1,17.5 C1,14.4624339 3.46243388,12 6.5,12 Z M16.748832,2 C17.9914727,2 18.998832,3.00735931 18.998832,4.25 L18.998832,19.75 C18.998832,20.9926407 17.9914727,22 16.748832,22 L11.1896412,22.0008195 C12.3108737,20.8328473 13,19.2469007 13,17.5 C13,13.9101491 10.0898509,11 6.5,11 C5.61412742,11 4.76964604,11.1772168 4,11.4981326 L4,4.25 C4,3.00735931 5.00735931,2 6.25,2 L16.748832,2 Z M6.5,19.88 C6.15509206,19.88 5.87548893,20.1596031 5.87548893,20.5045111 C5.87548893,20.849419 6.15509206,21.1290221 6.5,21.1290221 C6.84490794,21.1290221 7.12451107,20.849419 7.12451107,20.5045111 C7.12451107,20.1596031 6.84490794,19.88 6.5,19.88 Z M6.5000438,14.0030924 C6.25458391,14.0030924 6.05043543,14.1799676 6.00809947,14.4132168 L6.0000438,14.5030924 L6.0000438,18.5006005 L6.00809947,18.5904761 C6.05043543,18.8237254 6.25458391,19.0006005 6.5000438,19.0006005 C6.74550369,19.0006005 6.94965217,18.8237254 6.99198813,18.5904761 L7.0000438,18.5006005 L7.0000438,14.5030924 L6.99198813,14.4132168 C6.94965217,14.1799676 6.74550369,14.0030924 6.5000438,14.0030924 Z M20.75,15.001939 C21.1296958,15.001939 21.443491,15.2840929 21.4931534,15.6501685 L21.5,15.751939 L21.5,17.25 C21.5,17.6296958 21.2178461,17.943491 20.8517706,17.9931534 L20.75,18 L20,18 L20,15.001939 L20.75,15.001939 Z M20.75,11.001939 C21.1296958,11.001939 21.443491,11.2840929 21.4931534,11.6501685 L21.5,11.751939 L21.5,13.25 C21.5,13.6296958 21.2178461,13.943491 20.8517706,13.9931534 L20.75,14 L20,14 L20,11.001939 L20.75,11.001939 Z M20.75,7.00193905 C21.1296958,7.00193905 21.443491,7.28409293 21.4931534,7.65016849 L21.5,7.75193905 L21.5,9.25 C21.5,9.62969577 21.2178461,9.94349096 20.8517706,9.99315338 L20.75,10 L20,10 L20,7.00193905 L20.75,7.00193905 Z M14.7479601,5.50057985 L8.24808647,5.50057985 C7.8683907,5.50057985 7.55459551,5.78273373 7.50493309,6.14880929 L7.49808647,6.25057985 L7.49808647,7.75096952 C7.49808647,8.13066529 7.78024035,8.44446048 8.14631591,8.49412291 L8.24808647,8.50096952 L14.7479601,8.50096952 C15.1276559,8.50096952 15.4414511,8.21881564 15.4911135,7.85274008 L15.4979601,7.75096952 L15.4979601,6.25057985 C15.4979601,5.83636628 15.1621737,5.50057985 14.7479601,5.50057985 Z"
                      id="🎨-Color"
                    ></path>
                  </g>
                </g>
              </g></svg
            ><span class="flex-1 ml-3 whitespace-nowrap">Attendance</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <svg
              width="24px"
              height="24px"
              class="ml-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z"
                  fill="#ffffff"
                ></path>
              </g></svg
            ><span class="flex-1 ml-3 whitespace-nowrap">Requests</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <svg
              width="24px"
              height="24px"
              class="ml-6"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_fill</title>
                <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="File" transform="translate(0.000000, -336.000000)" fill-rule="nonzero">
                    <g id="profile_fill" transform="translate(0.000000, 336.000000)">
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      ></path>
                      <path
                        d="M20,3 C21.1046,3 22,3.89543 22,5 L22,19 C22,20.1046 21.1046,21 20,21 L4,21 C2.89543,21 2,20.1046 2,19 L2,5 C2,3.89543 2.89543,3 4,3 L20,3 Z M17,15 L7,15 C6.44772,15 6,15.4477 6,16 C6,16.5523 6.44772,17 7,17 L17,17 C17.5523,17 18,16.5523 18,16 C18,15.4477 17.5523,15 17,15 Z M10,7 L8,7 C6.94563773,7 6.08183483,7.81587733 6.00548573,8.85073759 L6,9 L6,11 C6,12.0543909 6.81587733,12.9181678 7.85073759,12.9945144 L8,13 L10,13 C11.0543909,13 11.9181678,12.18415 11.9945144,11.1492661 L12,11 L12,9 C12,7.94563773 11.18415,7.08183483 10.1492661,7.00548573 L10,7 Z M17,11 L14,11 C13.4477,11 13,11.4477 13,12 C13,12.51285 13.386027,12.9355092 13.8833761,12.9932725 L14,13 L17,13 C17.5523,13 18,12.5523 18,12 C18,11.48715 17.613973,11.0644908 17.1166239,11.0067275 L17,11 Z M10,9 L10,11 L8,11 L8,9 L10,9 Z M17,7 L14,7 C13.4477,7 13,7.44772 13,8 C13,8.55228 13.4477,9 14,9 L17,9 C17.5523,9 18,8.55228 18,8 C18,7.44772 17.5523,7 17,7 Z"
                        id="形状"
                        fill="#fcfcfc"
                      ></path>
                    </g>
                  </g>
                </g>
              </g></svg
            ><span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
          </a>
        </li>
        <div class="pb-40"></div>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <span class="flex-1 ml-6 whitespace-nowrap">About</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad"
          >
            <span class="ml-6 w-2 whitespace-nowrap">Logout</span>
            <svg
              class="ml-12"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 20.7499H6C5.65324 20.7647 5.30697 20.7109 4.98101 20.5917C4.65505 20.4725 4.3558 20.2902 4.10038 20.0552C3.84495 19.8202 3.63837 19.5371 3.49246 19.2222C3.34654 18.9073 3.26415 18.5667 3.25 18.2199V5.77994C3.26415 5.43316 3.34654 5.09256 3.49246 4.77765C3.63837 4.46274 3.84495 4.17969 4.10038 3.9447C4.3558 3.70971 4.65505 3.52739 4.98101 3.40818C5.30697 3.28896 5.65324 3.23519 6 3.24994H9C9.19891 3.24994 9.38968 3.32896 9.53033 3.46961C9.67098 3.61027 9.75 3.80103 9.75 3.99994C9.75 4.19886 9.67098 4.38962 9.53033 4.53027C9.38968 4.67093 9.19891 4.74994 9 4.74994H6C5.70307 4.72412 5.4076 4.81359 5.17487 4.99977C4.94213 5.18596 4.78999 5.45459 4.75 5.74994V18.2199C4.78999 18.5153 4.94213 18.7839 5.17487 18.9701C5.4076 19.1563 5.70307 19.2458 6 19.2199H9C9.19891 19.2199 9.38968 19.299 9.53033 19.4396C9.67098 19.5803 9.75 19.771 9.75 19.9699C9.75 20.1689 9.67098 20.3596 9.53033 20.5003C9.38968 20.6409 9.19891 20.7199 9 20.7199V20.7499Z"
                  fill="white"
                ></path>
                <path
                  d="M16 16.7499C15.9015 16.7504 15.8038 16.7312 15.7128 16.6934C15.6218 16.6556 15.5392 16.6 15.47 16.5299C15.3296 16.3893 15.2507 16.1987 15.2507 15.9999C15.2507 15.8012 15.3296 15.6105 15.47 15.4699L18.94 11.9999L15.47 8.52991C15.3963 8.46125 15.3372 8.37845 15.2962 8.28645C15.2552 8.19445 15.2332 8.09513 15.2314 7.99443C15.2296 7.89373 15.2482 7.7937 15.2859 7.70031C15.3236 7.60692 15.3797 7.52209 15.451 7.45087C15.5222 7.37965 15.607 7.32351 15.7004 7.28579C15.7938 7.24807 15.8938 7.22954 15.9945 7.23132C16.0952 7.23309 16.1945 7.25514 16.2865 7.29613C16.3785 7.33712 16.4613 7.39622 16.53 7.46991L20.53 11.4699C20.6705 11.6105 20.7493 11.8012 20.7493 11.9999C20.7493 12.1987 20.6705 12.3893 20.53 12.5299L16.53 16.5299C16.4608 16.6 16.3782 16.6556 16.2872 16.6934C16.1962 16.7312 16.0985 16.7504 16 16.7499Z"
                  fill="white"
                ></path>
                <path
                  d="M20 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style>
/* Hide the sidebar by default */
#default-sidebar {
  transform: translateX(-90%);
}

/* Show the sidebar when the button is hovered */
[data-drawer-target="default-sidebar"]:hover + #default-sidebar {
  transform: translateX(0);
}

/* Slide the sidebar out when the mouse leaves the sidebar */
#default-sidebar:hover {
  transform: translateX(-10%);
}

/* Add transitions for smooth animation */
#default-sidebar {
  transition: transform 0.3s ease-in-out;
}
</style>
