// src/components/Navbar.js
import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Function to disable and re-enable AOS animations
function handleLinkClick() {
  // Remove AOS attributes
  document.querySelectorAll('[data-aos]').forEach((element) => {
    element.setAttribute('data-aos-disabled', element.getAttribute('data-aos'));
    element.removeAttribute('data-aos');
  });

  // Re-enable AOS attributes after a short delay (300ms in this case)
  setTimeout(() => {
    document.querySelectorAll('[data-aos-disabled]').forEach((element) => {
      element.setAttribute('data-aos', element.getAttribute('data-aos-disabled'));
      element.removeAttribute('data-aos-disabled');
    });
  }, 300); // Adjust the delay as needed
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-white font-bold text-2xl">My Portfolio</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80} // Adjust the offset to match the navbar height
                    onClick={handleLinkClick} // Disable AOS animations on click
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'cursor-pointer rounded-md px-4 py-2 text-lg font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/nickpkj/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </a>
            <a href="https://github.com/nickphoon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
            </a>
            <a href="https://instagram.com/nicpkj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* DisclosurePanel for mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80} // Adjust the offset to match the navbar height
              onClick={handleLinkClick} // Disable AOS animations on click
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-4 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
