'use client';

import Image from 'next/image';
import { SearchManufacturerProps } from '@types';
import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className={'search-manufacturer'}>
      <Combobox>
        <div className={'relative w-full'}>
          <Combobox.Button className={'absolute top-[14px]'}>
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo" />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Volkswagen...'
          />

          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >

          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
