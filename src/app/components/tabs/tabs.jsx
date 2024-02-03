const Tabs = ({ onChange, uniqueCategories }) => {

  return (
    <div className="filter ms-3">
      <label>Search by Category</label>
      <select className='mt-2 form-control' onChange={onChange}>
        {uniqueCategories &&
          uniqueCategories.map((item, i) => (
                <option key={i}  value={item}>
                  {item}
                </option>
            )
          )}
      </select>
    </div>
  );
};

export default Tabs;