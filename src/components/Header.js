import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center"> 
      <Link to="/" className="text-lg font-bold">
        Marketing Dashboard
      </Link>
      <nav className="flex space-x-4">
        <Link to="/table" className="p-2 hover:text-gray-200">Data Table</Link>
        <Link to="/charts" className="p-2 hover:text-gray-200">Charts</Link>
      </nav>
    </header>
  );
};

export default Header;
