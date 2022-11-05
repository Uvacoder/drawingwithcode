import st from './style.module.scss'
import Link from 'next/link'

const Header = () => (
  <>
    <header className={st.hd}>
      <div className={st.logo}>
        <Link href="/"><a>Drawing with code</a></Link>
      </div>
      <div className={st.gnb}>
        <Link href="/#"><a>3D<span> GRAPHICS</span></a></Link>
        <Link href="/#"><a>UI<span> & VISUALIZATION</span></a></Link>
        <Link href="/typography"><a>TYPO<span>GRAPHY</span></a></Link>
        {/* <Link href="https://github.com/wfedev">
          <a>
            <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2633 27.3373C12.0269 27.3813 11.9236 27.4923 11.9532 27.6692C11.9827 27.8462 12.1155 27.9054 12.3516 27.8462C12.588 27.7873 12.6912 27.6838 12.6615 27.5363C12.6322 27.3741 12.4994 27.3076 12.2633 27.3373V27.3373ZM11.0015 27.5145C10.7653 27.5145 10.6473 27.5952 10.6473 27.7579C10.6473 27.9497 10.7728 28.0307 11.0236 28.0012C11.2597 28.0012 11.3779 27.92 11.3779 27.7579C11.3779 27.5663 11.2524 27.4848 11.0015 27.5145ZM9.27494 27.4476C9.21601 27.6101 9.312 27.7205 9.56265 27.7798C9.784 27.8679 9.92426 27.8238 9.98318 27.6469C10.0275 27.4848 9.93155 27.367 9.69546 27.2927C9.47404 27.2339 9.33394 27.2848 9.27494 27.4476Z" fill="black"></path><path d="M32.1296 1.87028C30.8826 0.623503 29.3814 0 27.6249 0H6.37498C4.61906 0 3.11736 0.623503 1.87028 1.87028C0.623503 3.11728 0 4.61898 0 6.37498V27.6253C0 29.3813 0.623503 30.8829 1.87028 32.1296C3.11728 33.3767 4.61906 34.0002 6.37498 34.0002H11.3333C11.6577 34.0002 11.9014 33.989 12.0636 33.9673C12.2258 33.945 12.388 33.849 12.5505 33.6791C12.713 33.5095 12.7939 33.2623 12.7939 32.9378C12.7939 32.8937 12.79 32.3915 12.7827 31.4323C12.7752 30.4729 12.7716 29.713 12.7716 29.1522L12.2624 29.2408C11.9378 29.2997 11.5283 29.3257 11.0339 29.3182C10.5397 29.3108 10.0268 29.2593 9.49559 29.1633C8.96412 29.0673 8.46994 28.846 8.01243 28.4995C7.55515 28.1524 7.23053 27.6988 7.03864 27.1381L6.81721 26.6287C6.66967 26.2896 6.43739 25.9131 6.12005 25.5003C5.80272 25.0869 5.48182 24.8065 5.1572 24.6589L5.00221 24.5482C4.89902 24.4745 4.80311 24.3856 4.7145 24.2824C4.62603 24.1789 4.55967 24.0754 4.5154 23.9725C4.47113 23.869 4.50788 23.7841 4.62603 23.7175C4.74419 23.6512 4.95794 23.6183 5.26799 23.6183L5.71054 23.6846C6.00577 23.7435 6.37079 23.9204 6.80636 24.2158C7.24162 24.5108 7.59942 24.8945 7.87985 25.3666C8.21944 25.9718 8.62857 26.4326 9.1084 26.7499C9.58786 27.0676 10.0713 27.2262 10.5582 27.2262C11.045 27.2262 11.4656 27.1893 11.8199 27.1158C12.1738 27.0418 12.5059 26.9309 12.8159 26.7834C12.9487 25.7948 13.3103 25.0343 13.9004 24.5032C13.0594 24.4146 12.3031 24.2819 11.6315 24.1047C10.9602 23.9274 10.2666 23.6399 9.55095 23.2413C8.83503 22.8428 8.24114 22.3487 7.7689 21.7581C7.29674 21.1675 6.90924 20.3928 6.60695 19.4339C6.3045 18.4744 6.15324 17.3675 6.15324 16.1133C6.15324 14.3279 6.73635 12.8076 7.9021 11.5534C7.35597 10.2106 7.40753 8.70555 8.05693 7.03787C8.4849 6.90498 9.11957 7.00468 9.96062 7.33675C10.8018 7.66904 11.4177 7.95319 11.809 8.18897C12.2002 8.42482 12.5136 8.62422 12.7498 8.78673C14.1225 8.40303 15.539 8.21122 16.9999 8.21122C18.4606 8.21122 19.8774 8.40303 21.2502 8.78673L22.0913 8.25549C22.6671 7.90117 23.3458 7.57655 24.128 7.28154C24.9101 6.98646 25.5077 6.90521 25.9211 7.0381C26.5849 8.70579 26.6443 10.2108 26.0977 11.5536C27.2635 12.8079 27.8468 14.3281 27.8468 16.1136C27.8468 17.368 27.6955 18.4786 27.3931 19.445C27.0908 20.4116 26.7 21.1866 26.22 21.7694C25.7406 22.3524 25.1428 22.8427 24.4272 23.2414C23.7114 23.6397 23.0178 23.9278 22.3463 24.1045C21.6748 24.2817 20.9186 24.4149 20.0775 24.5036C20.8443 25.1674 21.228 26.2148 21.228 27.6465V32.9371C21.228 33.188 21.2645 33.3908 21.3384 33.5457C21.4126 33.7007 21.5305 33.8073 21.6928 33.8668C21.8557 33.9257 21.9989 33.9626 22.1247 33.9772C22.2504 33.992 22.4308 33.9995 22.667 33.9995H27.6253C29.3813 33.9995 30.883 33.376 32.1295 32.129C33.3765 30.8819 34 29.3802 34 27.6243V6.37498C33.9998 4.61898 33.3763 3.11705 32.1296 1.87028V1.87028Z" fill="black"></path><path d="M6.72914 24.7474C6.62594 24.8209 6.64067 24.939 6.77348 25.1014C6.92126 25.2488 7.03918 25.2711 7.1278 25.1677C7.23099 25.0942 7.21626 24.9761 7.08322 24.8134C6.93576 24.6808 6.81775 24.6586 6.72914 24.7474ZM5.99887 24.194C5.95468 24.2975 6.00632 24.3862 6.15386 24.4596C6.27178 24.5337 6.368 24.5191 6.44157 24.4156C6.48577 24.3121 6.43413 24.2235 6.28659 24.1494C6.13905 24.1051 6.04314 24.12 5.99887 24.194ZM7.41552 25.6108C7.28255 25.6843 7.28255 25.8175 7.41552 26.0091C7.54833 26.2012 7.67354 26.2527 7.79177 26.164C7.92466 26.0606 7.92466 25.9204 7.79177 25.7433C7.67385 25.5519 7.54833 25.5071 7.41552 25.6108V25.6108ZM8.19044 26.6066C8.05755 26.7249 8.08686 26.8645 8.27898 27.0274C8.45583 27.2041 8.60345 27.2263 8.72152 27.0932C8.83968 26.9754 8.81014 26.8354 8.63298 26.673C8.45614 26.4962 8.30852 26.4739 8.19044 26.6066V26.6066Z" fill="black"></path></svg>
            <span className={st.sr}>Github link</span>
          </a>
        </Link> */}
      </div>
    </header>
  </>
)

export default Header