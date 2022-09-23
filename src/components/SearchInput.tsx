import  {Dispatch, SetStateAction, useState} from 'react';
import './SearchInput.css'
type SearchInput = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>

}
const SearchInput = (props: SearchInput): JSX.Element => {
    const {value, setValue} = props
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    return <div>
        <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={value}
        className={'search-input'}/>
    </div>
}
export default SearchInput