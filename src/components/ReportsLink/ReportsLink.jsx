import { BoxReport, BoxReportTitle } from './Reports.styled';
import Vector from '../../images/vector.png';

function ReportsLink() {
  return (
    <>
      <BoxReport to="/report">
        <BoxReportTitle>Reports</BoxReportTitle>
        <img src={Vector} alt="vector" width="14px" height="14px" />
      </BoxReport>
    </>
  );
}

export default ReportsLink;
