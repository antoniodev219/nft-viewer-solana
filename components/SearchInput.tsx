import { FC } from 'react';
interface ISearchInput {
  className?: string;
  text?: string;
  onChangeHandler?: (x: string) => void;
  onClickHandler?: () => void;
}
 
const SearchInput: FC<ISearchInput> = ({ onChangeHandler=()=>{}, text="", className="", onClickHandler=()=>{} }) => {
  return (
    <div className={`${className} relative`}>
        <input 
          className='w-full text-2 pl-4 pr-10 py-2 rounded-md border-2 border-black' 
          onChange={e => onChangeHandler(e.target.value)} 
          value={text} 
          placeholder='search owner public key'>
        </input>
        <button onClick={onClickHandler} className='absolute right-4'> 
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd" stroke="#200E32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2 2)"><circle cx="9.767" cy="9.767" r="8.989"/><line x1="16.018" x2="19.542" y1="16.485" y2="20"/></g>
          </svg>
        </button>
    </div>
  )
}

export default SearchInput;