import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div>Header</div>
      <Link to="/">Logo</Link>
      <Link to="/authorization">Authorization</Link>
    </>
  );
}

export default Header;
