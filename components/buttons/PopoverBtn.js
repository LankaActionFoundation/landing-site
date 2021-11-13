import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const PopoverBtn = ({ name = "Nav link", links = [] }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`px-3 py-2 text-sm text-white rounded-xl ${
              open ? "bg-white/20 backdrop-filter backdrop-blur-sm" : ""
            }`}
          >
            {name}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {links.length > 0 && (
              <Popover.Panel className="absolute mt-3 z-10 bg-white p-1 rounded-xl">
                <div className="flex items-start justify-start flex-col text-gray-800">
                  {links.map((link) => (
                    <Link key={link} href={link.url}>
                      <span className="w-full px-10 py-2 hover:bg-customYellow text-sm text-gray-800 rounded-lg flex-shrink-0 whitespace-nowrap cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            )}
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverBtn;
