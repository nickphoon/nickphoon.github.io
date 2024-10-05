import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function handleLinkClick() {
  document.querySelectorAll('[data-aos]').forEach((element) => {
    element.setAttribute('data-aos-disabled', element.getAttribute('data-aos'));
    element.removeAttribute('data-aos');
  });

  setTimeout(() => {
    document.querySelectorAll('[data-aos-disabled]').forEach((element) => {
      element.setAttribute('data-aos', element.getAttribute('data-aos-disabled'));
      element.removeAttribute('data-aos-disabled');
    });
  }, 300);
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Hamburger menu for mobile */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and navigation links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
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
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={handleLinkClick}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-4 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
