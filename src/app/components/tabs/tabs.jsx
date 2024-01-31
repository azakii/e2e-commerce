
const Tabs = ({ items, onChange, uniqueCategories }) => {

  return (
    <div className="links">
      <select onChange={onChange}>
        {uniqueCategories &&
          uniqueCategories.map((item, i) => {
            return (
              <>
                <option key={i} value={item}>
                  {item}
                </option>
              </>
            );
          })}
      </select>
    </div>
  );
};

export default Tabs;
