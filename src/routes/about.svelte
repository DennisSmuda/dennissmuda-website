<script>
  import { playClick } from "../utils/Sounds";
</script>

<svelte:head>
  <title>About Me | Dennis Smuda</title>
</svelte:head>

<section class="h-padding container">
  <div class="content">
    <h1 class="color-change">About me</h1>
  </div>
</section>

<section class="container container--narrow h-padding">
  <div class="content ">
    <p>
      Nice to meet you! My name is
      <span class="keyword">Dennis</span>
      and I have been working as a <span class="keyword">web developer</span>
      for the
      <em>last {new Date().getFullYear() - 2014}+ years</em>. I have worked on
      projects ranging from small company/personal websites to full fledged web
      applications.
    </p>
    <p>
      I'm always looking for new challenges, ways to improve, and inspiration
      from others.
      <span class="emphasis">Experiences</span>,
      <span class="emphasis">Interactions</span> and their meaning in software has
      pretty much driven me to be a web-developer.
    </p>
    <p>
      I deeply enjoy building things that can be interacted with, especially if
      there is room to make things more <span class="emphasis">fun</span>!
    </p>

    <h2>I use</h2>
    <p>
      Whatever mix of tools gets me there.
      <br />
      Here are some of
      <span class="emphasis">my favorites:</span>
    </p>

    <div class="brands tech-tags">
      <div class="tag tag--js" on:click={playClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 630 630"
        >
          <g id="js-logo">
            <rect
              id="background"
              x="0"
              y="0"
              width="630"
              height="630"
              fill="#f7df1e"
            />
            <path
              id="j"
              d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875
              231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975
              31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32
              -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875
              -88.8075,-54.13"
            />
            <path
              id="s"
              d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375
              29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475
              40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875
              -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125
              -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375
              86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l
              -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125
              -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125
              0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c
              50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875
              -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175
              -107.83625,-60.47375"
            />
          </g>
        </svg>

        <span>javascript</span>
      </div>
      <div class="tag tag--css" on:click={playClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="386.916"
          height="546.133"
          viewBox="0 0 362.734 512"
        >
          <path
            fill="#264de4"
            d="M362.734 100.62l-33.046 370.199L181.145 512 33.011 470.877 0
            100.62z"
          />
          <path
            fill="#2965f1"
            d="M301.397 447.246l28.24-316.352h-148.27v349.629z"
          />
          <path
            fill="#ebebeb"
            d="M75.677 268.217l4.07 45.41h101.62v-45.41zM181.367
            176.305H67.499l4.128 45.411h109.74zM181.367
            433.399v-47.246l-.199.053-50.574-13.656-3.233-36.217H81.776l6.362
            71.301 93.02 25.823z"
          />
          <path
            fill="#fff"
            d="M85.367 0h55v23h-32v23h32v23h-55zM151.367
            0h55v20h-32v4h32v46h-55V49h32v-4h-32zM217.367
            0h55v20h-32v4h32v46h-55V49h32v-4h-32z"
          />
          <path
            fill="#fff"
            d="M237.128 313.627l-5.271 58.894-50.647
            13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194
            8.198-91.912H181.21v45.411h63.988l-4.132 46.501H181.21v45.41z"
          />
        </svg>
        <span>CSS</span>
      </div>

      <div class="tag tag--vue" on:click={playClick}>
        <svg
          version="1.1"
          viewBox="0 0 261.76 226.69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
            <g transform="translate(178.06 235.01)">
              <path
                d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16
                170.02z"
                fill="#41b883"
              />
            </g>
            <g transform="translate(178.06 235.01)">
              <path
                d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896
                102.01z"
                fill="#34495e"
              />
            </g>
          </g>
        </svg>
        <span>vue.js</span>
      </div>

      <div class="tag tag--figma">
        <svg
          height="2500"
          viewBox="0 0 200 300"
          width="1667"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
            fill="#0acf83"
          /><path
            d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
            fill="#a259ff"
          /><path
            d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
            fill="#f24e1e"
          /><path
            d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
            fill="#ff7262"
          /><path
            d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
            fill="#1abcfe"
          /></svg
        >
        <span>Figma</span>
      </div>

      <div class="tag tag--svelte" on:click={playClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="107"
          height="128"
          viewBox="0 0 107 128"
        >
          <title>svelte-logo</title>
          <path
            d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"
            style="fill:#ff3e00"
          />
          <path
            d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"
            style="fill:#fff"
          />
        </svg>
        <span>svelte</span>
      </div>

      <div class="tag tag--godot" on:click={playClick}>
        <svg
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          ><g
            stroke-width=".32031"
            transform="matrix(.017241 0 0 .017241 -.82759 -2.7)"
            ><path
              d="m0 0s-.325 1.994-.515 1.976l-36.182-3.491c-2.879-.278-5.115-2.574-5.317-5.459l-.994-14.247-27.992-1.997-1.904 12.912c-.424 2.872-2.932 5.037-5.835 5.037h-38.188c-2.902 0-5.41-2.165-5.834-5.037l-1.905-12.912-27.992 1.997-.994 14.247c-.202 2.886-2.438 5.182-5.317 5.46l-36.2 3.49c-.187.018-.324-1.978-.511-1.978l-.049-7.83 30.658-4.944 1.004-14.374c.203-2.91 2.551-5.263 5.463-5.472l38.551-2.75c.146-.01.29-.016.434-.016 2.897 0 5.401 2.166 5.825 5.038l1.959 13.286h28.005l1.959-13.286c.423-2.871 2.93-5.037 5.831-5.037.142 0 .284.005.423.015l38.556 2.75c2.911.209 5.26 2.562 5.463 5.472l1.003 14.374 30.645 4.966z"
              fill="#fff"
              transform="matrix(4.1626 0 0 -4.1626 919.24 771.67)"
            /><path
              d="m0 0v-59.041c.108-.001.216-.005.323-.015l36.196-3.49c1.896-.183 3.382-1.709 3.514-3.609l1.116-15.978 31.574-2.253 2.175 14.747c.282 1.912 1.922 3.329 3.856 3.329h38.188c1.933 0 3.573-1.417 3.855-3.329l2.175-14.747 31.575 2.253 1.115 15.978c.133 1.9 1.618 3.425 3.514 3.609l36.182 3.49c.107.01.214.014.322.015v4.711l.015.005v54.325h.134c4.795 6.12 9.232 12.569 13.487 19.449-5.651 9.62-12.575 18.217-19.976 26.182-6.864-3.455-13.531-7.369-19.828-11.534-3.151 3.132-6.7 5.694-10.186 8.372-3.425 2.751-7.285 4.768-10.946 7.118 1.09 8.117 1.629 16.108 1.846 24.448-9.446 4.754-19.519 7.906-29.708 10.17-4.068-6.837-7.788-14.241-11.028-21.479-3.842.642-7.702.88-11.567.926v.006c-.027 0-.052-.006-.075-.006-.024 0-.049.006-.073.006v-.006c-3.872-.046-7.729-.284-11.572-.926-3.238 7.238-6.956 14.642-11.03 21.479-10.184-2.264-20.258-5.416-29.703-10.17.216-8.34.755-16.331 1.848-24.448-3.668-2.35-7.523-4.367-10.949-7.118-3.481-2.678-7.036-5.24-10.188-8.372-6.297 4.165-12.962 8.079-19.828 11.534-7.401-7.965-14.321-16.562-19.974-26.182 4.253-6.88 8.693-13.329 13.487-19.449z"
              fill="#478cbf"
              transform="matrix(4.1626 0 0 -4.1626 104.7 525.91)"
            /><path
              d="m0 0-1.121-16.063c-.135-1.936-1.675-3.477-3.611-3.616l-38.555-2.751c-.094-.007-.188-.01-.281-.01-1.916 0-3.569 1.406-3.852 3.33l-2.211 14.994h-31.459l-2.211-14.994c-.297-2.018-2.101-3.469-4.133-3.32l-38.555 2.751c-1.936.139-3.476 1.68-3.611 3.616l-1.121 16.063-32.547 3.138c.015-3.498.06-7.33.06-8.093 0-34.374 43.605-50.896 97.781-51.086h.133c54.176.19 97.766 16.712 97.766 51.086 0 .777.047 4.593.063 8.093z"
              fill="#478cbf"
              transform="matrix(4.1626 0 0 -4.1626 784.07 817.24)"
            /><path
              d="m0 0c0-12.052-9.765-21.815-21.813-21.815-12.042 0-21.81 9.763-21.81 21.815 0 12.044 9.768 21.802 21.81 21.802 12.048 0 21.813-9.758 21.813-21.802"
              fill="#fff"
              transform="matrix(4.1626 0 0 -4.1626 389.21 625.67)"
            /><path
              d="m0 0c0-7.994-6.479-14.473-14.479-14.473-7.996 0-14.479 6.479-14.479 14.473s6.483 14.479 14.479 14.479c8 0 14.479-6.485 14.479-14.479"
              fill="#414042"
              transform="matrix(4.1626 0 0 -4.1626 367.37 631.06)"
            /><path
              d="m0 0c-3.878 0-7.021 2.858-7.021 6.381v20.081c0 3.52 3.143 6.381 7.021 6.381s7.028-2.861 7.028-6.381v-20.081c0-3.523-3.15-6.381-7.028-6.381"
              fill="#fff"
              transform="matrix(4.1626 0 0 -4.1626 511.99 724.74)"
            /><path
              d="m0 0c0-12.052 9.765-21.815 21.815-21.815 12.041 0 21.808 9.763 21.808 21.815 0 12.044-9.767 21.802-21.808 21.802-12.05 0-21.815-9.758-21.815-21.802"
              fill="#fff"
              transform="matrix(4.1626 0 0 -4.1626 634.79 625.67)"
            /><path
              d="m0 0c0-7.994 6.477-14.473 14.471-14.473 8.002 0 14.479 6.479 14.479 14.473s-6.477 14.479-14.479 14.479c-7.994 0-14.471-6.485-14.471-14.479"
              fill="#414042"
              transform="matrix(4.1626 0 0 -4.1626 656.64 631.06)"
            /></g
          ></svg
        >
        <span>godot</span>
      </div>

      <div class="tag tag--tailwind">
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
          alt="Tailwind Logo"
        />
        <span> tailwind.css </span>
      </div>

      <div class="tag tag--phaser">
        <img
          src="https://phaser.io/images/logo/logo-download-2d-outline.png"
          alt="Phaser Logo"
        />
        <span> phaser </span>
      </div>

      <div class="tag tag--git" on:click={playClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97">
          <path
            fill="#F05133"
            d="M92.71 44.408L52.591 4.291a5.918 5.918 0 00-8.369 0l-8.33
            8.332L46.459 23.19a7.022 7.022 0 017.229 1.685 7.03 7.03 0 011.67
            7.275l10.186 10.185a7.028 7.028 0 017.275 1.671 7.043 7.043 0
            01-9.961 9.958 7.043 7.043 0 01-1.531-7.658l-9.5-9.499v24.997a7.042
            7.042 0 11-8.096 11.291 7.042 7.042 0 012.307-11.496v-25.23a7.041
            7.041 0 01-3.823-9.235L31.798 16.715 4.288 44.222a5.92 5.92 0 000
            8.371l40.121 40.118a5.918 5.918 0 008.369 0L92.71 52.779a5.92 5.92 0
            000-8.371z"
          />
        </svg>
        <span>git</span>
      </div>

      <div class="tag tag--coffee" on:click={playClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-mug"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            stroke="none"
            d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1
            0 0 1 1 -1"
          />
          <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
        </svg>
        <span>hot beverages</span>
      </div>
    </div>

    <!-- I LIke -->
    <h2>I like</h2>
    <ul>
      <li on:click={playClick}>
        <div>
          to play music
          <span class="emoji">🎸</span>
        </div>
      </li>
      <li on:click={playClick}>
        <div>
          learning about new things
          <span class="emoji">🤔</span>
        </div>
      </li>
      <li on:click={playClick}>
        <div>
          being part of a team
          <span class="emoji">🎩🧢</span>
        </div>
      </li>
      <li on:click={playClick}>
        <div>
          riding my bike
          <span class="emoji">🚲</span>
        </div>
      </li>
      <li on:click={playClick}>
        <div>
          cheese
          <span class="emoji">🧀</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<div class="bg">
  <svg
    width="1492"
    height="420"
    viewBox="0 0 1492 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1492"
      height="420"
    >
      <rect width="1492" height="420" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="247" cy="231" r="184" fill="#5C6687" />
      <circle cx="448" cy="239" r="184" fill="#5C6687" />
      <circle cx="566" cy="286" r="184" fill="#5C6687" />
      <circle cx="809" cy="249" r="184" fill="#5C6687" />
      <circle cx="1438" cy="196" r="184" fill="#5C6687" />
      <circle cx="1242" cy="239" r="184" fill="#5C6687" />
      <circle cx="1007" cy="241" r="184" fill="#5C6687" />
      <circle cx="136" cy="213" r="184" fill="#4E5670" />
      <circle cx="407" cy="291" r="184" fill="#4E5670" />
      <circle cx="685" cy="338" r="184" fill="#4E5670" />
      <circle cx="928" cy="271" r="184" fill="#4E5670" />
      <circle cx="1067" cy="298" r="184" fill="#4E5670" />
      <circle cx="1351" cy="271" r="184" fill="#4E5670" />
      <circle cx="76" cy="276" r="184" fill="#41475F" />
      <circle cx="317" cy="334" r="184" fill="#41475F" />
      <circle cx="585" cy="371" r="184" fill="#41475F" />
      <circle cx="837" cy="342" r="184" fill="#41475F" />
      <circle cx="1097" cy="321" r="184" fill="#41475F" />
      <circle cx="1371" cy="304" r="184" fill="#41475F" />
    </g>
  </svg>
</div>

<div class="main-padding" />

<style>
  ul li div {
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .brands {
    display: flex;
    flex-wrap: wrap;
  }

  .tag svg {
    width: 2rem;
    height: 2rem;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: rotate(180deg);
    z-index: 0;
    display: none;
  }
</style>
