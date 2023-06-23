import { useLocation } from 'react-router';
import {MLink, Back} from './GoHomeLink.styled'
import svgBack from './GoHomeLink.svg'

const GoHomeLink = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <MLink to= {backLink}>
        <Back src={svgBack} alt="Back" />
        Main Page
    </MLink>
  );
};

export default GoHomeLink;