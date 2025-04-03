import {
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiGithub,
  SiJest,
  SiCypress,
  SiVuedotjs,
  SiGraphql,
  SiRedis,
} from "@icons-pack/react-simple-icons";

import { Button } from "./ui/button";

const TechnologyButton = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <Button asChild variant="outline" size="sm" className="text-md">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        {name}
      </a>
    </Button>
  );
};

export const Technologies = () => {
  const buttons = [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript color="default" className="inline-block" />,
      name: "JavaScript",
    },
    {
      href: "https://typescriptlang.org/",
      icon: <SiTypescript color="default" className="inline-block" />,
      name: "TypeScript",
    },
    {
      href: "https://reactjs.org/",
      icon: <SiReact color="default" className="inline-block" />,
      name: "React",
    },
    {
      href: "https://nextjs.org/",
      icon: <SiNextdotjs color="default" className="inline-block" />,
      name: "Next.js",
    },
    {
      href: "https://vuejs.org/",
      icon: <SiVuedotjs color="default" className="inline-block" />,
      name: "Vue.js",
    },
    {
      href: "https://tailwindcss.com/",
      icon: <SiTailwindcss color="default" className="inline-block" />,
      name: "Tailwind CSS",
    },
    {
      href: "https://mui.com/",
      icon: <SiMui color="default" className="inline-block" />,
      name: "Material UI",
    },
    {
      href: "https://nodejs.org/",
      icon: <SiNodedotjs color="default" className="inline-block" />,
      name: "Node.js",
    },
    {
      href: "https://expressjs.com/",
      icon: <SiExpress color="default" className="inline-block" />,
      name: "Express.js",
    },
    {
      href: "https://git-scm.com/",
      icon: <SiGit color="default" className="inline-block" />,
      name: "Git",
    },
    {
      href: "https://github.com/ung-trung",
      icon: <SiGithub color="default" className="inline-block" />,
      name: "GitHub",
    },
    {
      href: "https://azure.microsoft.com/",
      icon: (
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M5.33492 1.37491C5.44717 1.04229 5.75909 0.818359 6.11014 0.818359H11.25L5.91513 16.6255C5.80287 16.9581 5.49095 17.182 5.13991 17.182H1.13968C0.579936 17.182 0.185466 16.6325 0.364461 16.1022L5.33492 1.37491Z"
            fill="url(#paint0_linear_6102_134469)"
          />
          <path
            d="M13.5517 11.4546H5.45126C5.1109 11.4546 4.94657 11.8715 5.19539 12.1037L10.4005 16.9618C10.552 17.1032 10.7515 17.1819 10.9587 17.1819H15.5453L13.5517 11.4546Z"
            fill="#0078D4"
          />
          <path
            d="M6.11014 0.818359C5.75909 0.818359 5.44717 1.04229 5.33492 1.37491L0.364461 16.1022C0.185466 16.6325 0.579936 17.182 1.13968 17.182H5.13991C5.49095 17.182 5.80287 16.9581 5.91513 16.6255L6.90327 13.6976L10.4005 16.9617C10.552 17.1032 10.7515 17.1818 10.9588 17.1818H15.5454L13.5517 11.4545H7.66032L11.25 0.818359H6.11014Z"
            fill="url(#paint1_linear_6102_134469)"
          />
          <path
            d="M12.665 1.37478C12.5528 1.04217 12.2409 0.818237 11.8898 0.818237H6.13629H6.16254C6.51358 0.818237 6.82551 1.04217 6.93776 1.37478L11.9082 16.1021C12.0872 16.6324 11.6927 17.1819 11.133 17.1819H11.0454H16.8603C17.42 17.1819 17.8145 16.6324 17.6355 16.1021L12.665 1.37478Z"
            fill="url(#paint2_linear_6102_134469)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6102_134469"
              x1="6.07512"
              y1="1.38476"
              x2="0.738178"
              y2="17.1514"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#114A8B" />
              <stop offset="1" stop-color="#0669BC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_6102_134469"
              x1="10.3402"
              y1="11.4564"
              x2="9.107"
              y2="11.8734"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.3" />
              <stop offset="0.0711768" stop-opacity="0.2" />
              <stop offset="0.321031" stop-opacity="0.1" />
              <stop offset="0.623053" stop-opacity="0.05" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_6102_134469"
              x1="9.45858"
              y1="1.38467"
              x2="15.3168"
              y2="16.9926"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3CCBF4" />
              <stop offset="1" stop-color="#2892DF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      name: "Azure",
    },
    {
      href: "https://aws.amazon.com/",
      icon: (
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="inline-block"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#252F3E"
              d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"
            ></path>
            <g fill="#F90" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z"></path>{" "}
              <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"></path>{" "}
            </g>
          </g>
        </svg>
      ),
      name: "AWS",
    },
    {
      href: "https://restapi.com/",
      icon: null,
      name: "REST API",
    },
    {
      href: "https://graphql.org/",
      icon: <SiGraphql color="default" className="inline-block" />,
      name: "GraphQL",
    },
    {
      href: "https://www.postgresql.org/",
      icon: <SiPostgresql color="default" className="inline-block" />,
      name: "PostgreSQL",
    },
    {
      href: "https://www.mysql.com/",
      icon: <SiMysql color="default" className="inline-block" />,
      name: "MySQL",
    },
    {
      href: "https://www.mongodb.com/",
      icon: <SiMongodb color="default" className="inline-block" />,
      name: "MongoDB",
    },
    {
      href: "https://redis.io/",
      icon: <SiRedis color="default" className="inline-block" />,
      name: "Redis",
    },
    {
      href: "https://jestjs.io/",
      icon: <SiJest color="default" className="inline-block" />,
      name: "Jest",
    },
    {
      href: "https://playwright.dev/",
      icon: (
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z"
            fill="#2D4552"
          />
          <path
            d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z"
            fill="#2D4552"
          />
          <path
            d="M161.661 262.296V239.863L99.3324 257.537C99.3324 257.537 103.938 230.777 136.444 221.556C146.302 218.762 154.713 218.781 161.661 220.123V128.11H192.869C189.471 117.61 186.184 109.526 183.423 103.909C178.856 94.612 174.174 100.775 163.545 109.665C156.059 115.919 137.139 129.261 108.668 136.933C80.1966 144.61 57.179 142.574 47.5752 140.911C33.9601 138.562 26.8387 135.572 27.5049 145.928C28.0847 155.062 30.2605 169.224 35.2445 187.928C46.0272 228.433 81.663 306.481 149.01 288.342C166.602 283.602 179.019 274.233 187.626 262.291H161.661V262.296ZM61.0848 188.484L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6614 203.743 61.0848 188.484 61.0848 188.484Z"
            fill="#E2574C"
          />
          <path
            d="M341.786 129.174C329.345 131.355 299.498 134.072 262.612 124.185C225.716 114.304 201.236 97.0224 191.537 88.8994C177.788 77.3834 171.74 69.3802 165.788 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.098C297.093 344.47 343.53 242.92 357.644 190.238C364.157 165.917 367.013 147.5 367.799 135.625C368.695 122.173 359.455 126.078 341.786 129.174ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756ZM223.42 268.713C182.403 256.698 176.077 223.99 176.077 223.99L286.262 254.796C286.262 254.791 264.021 280.578 223.42 268.713ZM262.377 201.495C262.377 201.495 276.107 180.126 299.422 186.773C322.736 193.411 324.572 219.208 324.572 219.208L262.377 201.495Z"
            fill="#2EAD33"
          />
          <path
            d="M139.88 246.04L99.3324 257.532C99.3324 257.532 103.737 232.44 133.607 222.496L110.647 136.33L108.663 136.933C80.1918 144.611 57.1742 142.574 47.5704 140.911C33.9554 138.563 26.834 135.572 27.5001 145.929C28.08 155.063 30.2557 169.224 35.2397 187.929C46.0225 228.433 81.6583 306.481 149.005 288.342L150.989 287.719L139.88 246.04ZM61.0848 188.485L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6615 203.743 61.0848 188.485 61.0848 188.485Z"
            fill="#D65348"
          />
          <path
            d="M225.27 269.163L223.415 268.712C182.398 256.698 176.072 223.99 176.072 223.99L232.89 239.872L262.971 124.281L262.607 124.185C225.711 114.304 201.232 97.0224 191.532 88.8994C177.783 77.3834 171.735 69.3802 165.783 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.097L211.655 321.5L225.27 269.163ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756Z"
            fill="#1D8D22"
          />
          <path
            d="M141.946 245.451L131.072 248.537C133.641 263.019 138.169 276.917 145.276 289.195C146.513 288.922 147.74 288.687 149 288.342C152.302 287.451 155.364 286.348 158.312 285.145C150.371 273.361 145.118 259.789 141.946 245.451ZM137.7 143.451C132.112 164.307 127.113 194.326 128.489 224.436C130.952 223.367 133.554 222.371 136.444 221.551L138.457 221.101C136.003 188.939 141.308 156.165 147.284 133.866C148.799 128.225 150.318 122.978 151.832 118.085C149.393 119.637 146.767 121.228 143.776 122.867C141.759 129.093 139.722 135.898 137.7 143.451Z"
            fill="#C04B41"
          />
        </svg>
      ),
      name: "Playwright",
    },
    {
      href: "https://www.cypress.io/",
      icon: <SiCypress color="default" className="inline-block" />,
      name: "Cypress",
    },
  ];
  return (
    <section id="technologies" className="mt-20 mb-16 scroll-mt-20">
      <h2 className="mb-2 box-decoration-clone bg-clip-text text-[1.7rem] font-bold">
        Technologies I use
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 box-decoration-clone bg-clip-text text-transparent">
          .
        </span>
      </h2>
      <div className="max-w-prose">
        <p className="mt-4">
          I work across the stack with modern frameworks, libraries, and tools.
          Below is a selection of the technologies I use regularly in
          development.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {buttons.map((button) => (
          <TechnologyButton key={button.name} {...button} />
        ))}
      </div>
      <p className="mt-4 text-center">...and many more!</p>
    </section>
  );
};
