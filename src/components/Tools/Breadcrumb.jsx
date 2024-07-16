import React from 'react';

const Breadcrumb = ({ links }) => {
  return (
    <div className="flex justify-center py-4 bg-gray-100">
      <nav className="flex items-center space-x-2">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.href} className="text-sm text-gray-600 hover:text-[#0fa968] no-underline">
              {link.label}
            </a>
            {index < links.length - 1 && <span>&gt;</span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;
