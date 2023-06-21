import { Link } from 'react-router-dom';
import diagramSvg from './diagram.svg';
import {Center, Image } from './ReportsLink.styled';

const ReportsLink = () => {
  return(
    <Center to="/report"> 
      <Link>Reports
        <Image src={diagramSvg} alt="diagrama"/>
      </Link>
    </Center>
  );
};

export default ReportsLink;
