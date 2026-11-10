function FilterBar({ options, active, onChange, query, onQuery }) {
  return (
    <div className="filters" role="group" aria-label="Filter courses">
      <div className="filters__tabs">
        {options.map((option) => (
          <button key={option} className={`tab ${active === option ? "is-active" : ""}`}
            aria-pressed={active === option} onClick={() => onChange(option)}>
            {option}
          </button>
        ))}
      </div>
      <input className="filters__search" type="search" placeholder="Search courses" value={query}
        aria-label="Search courses" onChange={(e) => onQuery(e.target.value)} />
    </div>
  );
}

export default FilterBar;
