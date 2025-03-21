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

const SvgIcons = {
  HomeIcon,
  Community,
  Wallet,
  Rewards,
};

export {SvgIcons};
