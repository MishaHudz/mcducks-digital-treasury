import { useLocation } from 'react-router';
import {BlockBack, Back} from './GoHomeLink.styled'
import svgBack from './GoHomeLink.svg'

const GoHomeLink = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <BlockBack to={backLink}>
        <Back src={svgBack} alt="Back" />
        Main Page
    </BlockBack>
  );
};

export default GoHomeLink;