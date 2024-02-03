const PriceRange = ( {value, onChange} ) => {
    return (
        <div className='price-filter ms-3'>
            <label>Filter by Price</label>
            <select className='form-select mt-2' value={value} onChange={onChange}>
                <option value="All">All</option>
                <option value="less25">Less than $25</option>
                <option value="25to50">$25 - $50</option>
                <option value="more50">More than $50</option>
            </select>
        </div>
    );
}

export default PriceRange;
