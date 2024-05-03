import React, {FC} from 'react';

const Header: FC = () => {
  return (
    <header className="max-w-[1290px] w-full flex justify-between items-center text-white mx-auto">
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
