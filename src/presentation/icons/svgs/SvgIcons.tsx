import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="m20.517 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78ZM13.227 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
    />
  </Svg>
);

const Community = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="M10.673 10.093a4.206 4.206 0 1 0 0-8.41 4.206 4.206 0 0 0 0 8.41ZM17.898 18.505c0-3.256-3.238-5.888-7.225-5.888-3.987 0-7.225 2.632-7.225 5.887"
    />
  </Svg>
);

const Wallet = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="M18.738 10.093V14.3c0 2.523-1.682 4.206-4.206 4.206h-8.41c-2.524 0-4.206-1.683-4.206-4.206v-4.206c0-2.288 1.379-3.886 3.524-4.155.219-.033.446-.05.681-.05h8.411c.219 0 .43.008.631.042 2.17.252 3.575 1.859 3.575 4.163Z"
    />
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="M15.164 5.93a3.848 3.848 0 0 0-.63-.042H6.121c-.235 0-.462.017-.681.05a2.56 2.56 0 0 1 .488-.656L8.662 2.54a2.965 2.965 0 0 1 4.172 0l1.472 1.489c.539.53.825 1.203.858 1.9ZM18.738 10.514h-2.523c-.926 0-1.683.757-1.683 1.682 0 .926.757 1.683 1.683 1.683h2.523"
    />
  </Svg>
);

const Rewards = (props: SvgProps) => (
  <Svg width={22} height={21} fill="none" {...props}>
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="M16.297 10.093c2.187 0 3.095-.84 2.288-3.6-.547-1.858-2.145-3.457-4.004-4.003-2.759-.808-3.6.1-3.6 2.288V7.2c0 2.052.841 2.893 2.523 2.893h2.793Z"
    />
    <Path
      stroke="#9DB2CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.262}
      fill={props.color}
      d="M17.71 12.364a7.647 7.647 0 0 1-8.764 6.031c-3.188-.513-5.754-3.079-6.275-6.266a7.655 7.655 0 0 1 6.006-8.756"
    />
  </Svg>
);
const LeftBackButton = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      fill="#EBEBEB"
      d="M13.567 16.768a.624.624 0 1 1-.884.884l-6.25-6.25a.625.625 0 0 1 0-.884l6.25-6.25a.626.626 0 0 1 .884.884L7.76 10.96l5.808 5.808Z"
    />
  </Svg>
);

const VerifyIcon = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      fill="#63FFB1"
      d="M6 1.625a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75ZM8.14 5.64 5.515 8.265a.375.375 0 0 1-.53 0L3.86 7.14a.375.375 0 1 1 .53-.53l.86.86 2.36-2.36a.375.375 0 1 1 .53.53Z"
    />
  </Svg>
);
const DangerIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#CA3A31"
      d="M10.04 1.875A8.125 8.125 0 1 0 18.163 10a8.134 8.134 0 0 0-8.125-8.125ZM9.413 6.25a.625.625 0 1 1 1.25 0v4.375a.625.625 0 0 1-1.25 0V6.25Zm.625 8.125a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875Z"
    />
  </Svg>
);
const WarningIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#FFDD5C"
      d="M18.539 14.695 11.707 2.83a1.935 1.935 0 0 0-3.336 0L1.539 14.695a1.836 1.836 0 0 0 0 1.853 1.902 1.902 0 0 0 1.668.952H16.87a1.901 1.901 0 0 0 1.918-1.879c0-.325-.086-.645-.25-.926Zm-9.125-6.57a.625.625 0 0 1 1.25 0v3.125a.625.625 0 1 1-1.25 0V8.125ZM10.039 15a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Z"
    />
  </Svg>
);

const ChevronUp = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m15 8-5 5-5-5"
    />
  </Svg>
);

const Calendar = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#B4B4B4"
      d="M13 2.5h-1.5V2a.5.5 0 0 0-1 0v.5h-5V2a.5.5 0 1 0-1 0v.5H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Zm-8.5 1V4a.5.5 0 1 0 1 0v-.5h5V4a.5.5 0 0 0 1 0v-.5H13v2H3v-2h1.5Zm8.5 10H3v-7h10v7Z"
    />
  </Svg>
);

const Clock = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill="#B4B4B4"
      d="M7 .5A6.5 6.5 0 1 0 13.5 7 6.507 6.507 0 0 0 7 .5Zm0 12A5.5 5.5 0 1 1 12.5 7 5.507 5.507 0 0 1 7 12.5ZM11 7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V3.5a.5.5 0 1 1 1 0v3h3a.5.5 0 0 1 .5.5Z"
    />
  </Svg>
);

const StarIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill="#FFD60A"
      d="M14 7a.988.988 0 0 1-.656.938L9.379 9.38l-1.441 3.964a1 1 0 0 1-1.875 0L4.62 9.379.656 7.938a1 1 0 0 1 0-1.875L4.621 4.62 6.063.656a1 1 0 0 1 1.875 0L9.38 4.621l3.964 1.442A.987.987 0 0 1 14 7Z"
    />
  </Svg>
);

const SvgIcons = {
  HomeIcon,
  Community,
  Wallet,
  Rewards,
  LeftBackButton,
  VerifyIcon,
  DangerIcon,
  WarningIcon,
  ChevronUp,
  Calendar,
  Clock,
  StarIcon,
};

export {SvgIcons};
