import { FlagUs } from '../assets/svg/FlagUs';
import { FlagEu } from '../assets/svg/FlagEU';
import { FlagUa } from '../assets/svg/FlagUA';

export const flagMap: { [key: string]: React.ReactElement | null } = {
  USD: <FlagUs width={40} height={40} />,
  EUR: <FlagEu width={40} height={40} />,
  UAH: <FlagUa width={40} height={40} />,
};