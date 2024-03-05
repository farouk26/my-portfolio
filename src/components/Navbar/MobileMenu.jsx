import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import React, { Fragment } from "react"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"

function MobileMenu() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <Menu as="div" className="text-left block lg:hidden">
      <div>
        <Menu.Button className="w-full justify-center bg-zing-800 px-3 py-2 text-sm font-semibold text-white btn-circle btn-ghost">
          {({ open }) =>
            //I used the Built-In state from Headless UI to harmonize between the two icons down below
            open ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )
          }
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute px-8 right-0 z-10 lg:mr-4 w-full md:max-w-full md:w-screen divide-y divide-white mt-4 origin-top-0 bg-dark-200 text-white focus:outline-none py-2 rounded-3xl">
          <div className="py-6 mb-2 flex flex-col gap-6">
            <Menu.Item>
              <Link
                href="/"
                className="block px-4 py-2 mb-2 text-center text-2xl uppercase font-bold"
              >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/projects"
                className="block px-4 py-2 mb-2 text-center text-2xl uppercase font-bold"
              >
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/education"
                className="block px-4 py-2 mb-2 text-center text-2xl uppercase font-bold"
              >
                Education
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/stack"
                className="block px-4 py-2 mb-2 text-center text-2xl uppercase font-bold"
              >
                Skills
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/contact"
                className="block px-4 py-2 mb-2 text-center text-2xl uppercase font-bold"
              >
                Contact
              </Link>
            </Menu.Item>
          </div>
          <div className="flex gap-6 items-center justify-center py-2 text-white">
            <Link
              className="btn btn-circle btn-ghost"
              href="https://github.com/farouk26"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              className="btn btn-circle btn-ghost"
              href="https://www.linkedin.com/in/faroukisme/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiLinkedin className="text-3xl" />
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileMenu
