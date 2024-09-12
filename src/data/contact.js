import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/mcc5635',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/michael-chase-57a0b5182/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://signal.nfx.com/current_investor',
    label: 'Signal',
    icon: faAngellist,
  },
  {
    link: 'https://twitter.com/mikechase_',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:themikechase@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
