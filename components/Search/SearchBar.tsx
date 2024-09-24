import { Input } from '@/components/ui/input';
import SearchIcon from './SearchIcon';

const SearchBar = () => {
  return (
    <div className='flex items-center rounded-full bg-white dark:bg-gray-800 p-2 shadow-md'>
      <Input
        type='text'
        placeholder='Search...'
        className='flex-1 rounded-full py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none'
      />
      <SearchIcon className='w-5 h-5 text-gray-800 dark:text-white' />
    </div>
  );
};

export default SearchBar;
