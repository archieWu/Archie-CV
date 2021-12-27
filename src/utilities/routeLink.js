/* Svg Icons */
import {ReactComponent as HomeIcon} from '@images/nav/home.svg';
import {ReactComponent as AboutIcon} from '@images/nav/about.svg';
import {ReactComponent as WorkIcon} from '@images/nav/work.svg';
import {ReactComponent as ProjectIcon} from '@images/nav/project.svg';
import {ReactComponent as ContactIcon} from '@images/nav/contact-email.svg';
import {ReactComponent as SkillsIcon} from '@images/nav/skills.svg';

const routeLink = [
  {text: 'Home', icon: HomeIcon, link: '/'},
  {text: 'About me', icon: AboutIcon, link: '/about'},
  {text: 'Skills', icon: SkillsIcon, link: '/skills'},
  {text: 'Experience', icon: WorkIcon, link: '/experience'},
  {text: 'Project', icon: ProjectIcon, link: '/project'},
  {text: 'Contact', icon: ContactIcon, link: '/contact'},

];

export {
  routeLink,
};
