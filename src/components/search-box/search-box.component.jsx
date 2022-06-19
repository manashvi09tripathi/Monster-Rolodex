import './search-box.styles.css';

const SearchBox= ({onChangeHandler,placeholder,className}) => {
   
       return (
        <input 
            onChange={onChangeHandler}
            type='search'
            placeholder={placeholder}
            className={` search-box ${className}`} 
           
            
            
         / >
        
    );
}

export default SearchBox; 