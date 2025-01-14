const SearchBox = ({
  searchChange,
}: {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className='pa2'>
      <input
        className='ba br4 pa2 b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
