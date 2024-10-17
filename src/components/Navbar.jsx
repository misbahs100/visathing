'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import {
  QuestionMarkCircleIcon,
  BriefcaseIcon,
  NewspaperIcon,
  PhotoIcon,
  UsersIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

const menuItems = [
  { name: 'Company', href: '#' },
  { name: 'Information', href: '#' },
  { name: 'Services', href: '#' }
]

const countryOptions = [
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Palastine', flag: String.fromCodePoint(0x1F1E7, 0x1F1E9) },
  // Add more countries
]

const dropdownItems = [
  { name: 'About VISAThing', description: 'Learn more about us', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Career', description: 'Join our team', href: '#', icon: BriefcaseIcon },
  { name: 'News & Press', description: 'Latest updates and news', href: '#', icon: NewspaperIcon },
  { name: 'Media Library', description: 'View our media resources', href: '#', icon: PhotoIcon },
  { name: 'Business Networks', description: 'Our partners and networks', href: '#', icon: UsersIcon },
  { name: 'Contact Us', description: 'Get in touch with us', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])

  return (
    <header className="bg-white shadow" style={{border: '1px solid red'}}>
      {/* Upper Part - Social Icons and Country Dropdown */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-600">📞</a>
          <a href="#" className="hover:text-gray-600">✉️</a>
          <a href="#" className="hover:text-gray-600">📍</a>
        </div>
        <div className="relative">
          <Popover>
            <PopoverButton className="inline-flex items-center space-x-2">
              <span>{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </PopoverButton>
            <PopoverPanel className="absolute right-0 mt-2 w-40 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {countryOptions.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  {country.flag} {country.name}
                </button>
              ))}
            </PopoverPanel>
          </Popover>
        </div>
      </div>

      {/* Lower Part - Logo, Menu, Mobile Icon */}
      <nav  className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Bars3Icon className="h-6 w-6 lg:hidden mr-2" onClick={() => setMobileMenuOpen(true)} />
          <a href="#" className="text-lg font-semibold">VISAThing</a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:space-x-8">
          {menuItems.map((item) => (
            <Popover key={item.name} className="relative">
              <PopoverButton className="inline-flex items-center space-x-1 text-sm font-semibold text-gray-900">
                {item.name}
                <ChevronDownIcon className="h-4 w-4" />
              </PopoverButton>
              <PopoverPanel className="absolute z-10 mt-2 w-[600%] bg-red-400 shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  {dropdownItems.map((dropdown) => (
                    <a
                      key={dropdown.name}
                      href={dropdown.href}
                      className="flex items-center space-x-3 p-3 bg-white hover:bg-gray-100 rounded-lg transition"
                    >
                      <dropdown.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">{dropdown.name}</span>
                        <span className="text-xs text-gray-500">{dropdown.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:items-center">
          <button className="text-sm font-semibold text-gray-900">Log In</button>
          <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Create Profile</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <DialogPanel className="fixed inset-y-0 left-0 w-full max-w-sm bg-white p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold">VISAThing</a>
            <XMarkIcon className="h-6 w-6" onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="mt-6 space-y-6">
            {menuItems.map((item) => (
              <Disclosure key={item.name}>
                <DisclosureButton className="flex w-full justify-between items-center text-sm font-semibold text-gray-900">
                  {item.name}
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2">
                {/* <div className="grid grid-cols-2 gap-4"> */}
                  {dropdownItems.map((dropdown) => (
                    <a
                      key={dropdown.name}
                      href={dropdown.href}
                      className="flex items-center space-x-3 p-3 bg-white hover:bg-gray-100 rounded-lg transition"
                    >
                      <dropdown.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">{dropdown.name}</span>
                        <span className="text-xs text-gray-500">{dropdown.description}</span>
                      </div>
                    </a>
                  ))}
                {/* </div> */}
                </DisclosurePanel>
              </Disclosure>
            ))}
            <button className="w-full text-sm font-semibold text-gray-900">Log In</button>
            <button className="w-full bg-blue-600 text-white rounded py-2">Create Profile</button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
