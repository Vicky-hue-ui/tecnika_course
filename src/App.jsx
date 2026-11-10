import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import CourseList from "./components/CourseList.jsx";
import { courses, FIELDS, LANGUAGES } from "./data/courses.js";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Technical Fields", href: "#fields" },
  { label: "Programming Languages", href: "#languages" },
];
const FILTERS = ["All", FIELDS, LANGUAGES];

function App() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = courses.filter((c) =>
    (filter === "All" || c.category === filter) &&
    (c.name + " " + c.description).toLowerCase().includes(query.trim().toLowerCase())
  );
  const fields = visible.filter((c) => c.category === FIELDS);
  const languages = visible.filter((c) => c.category === LANGUAGES);

  return (
    <div id="top">
      <Navbar brand="Technika" links={NAV_LINKS} />
      <main>
        <section className="hero">
          <div className="hero__copy">
            <h1>Learn the tools behind modern software</h1>
            <p>Technika Course Central brings {courses.length} technical courses together: five fields to specialise in and five languages to build with.</p>
            <a className="btn btn--solid" href="#courses">Browse courses</a>
          </div>
          <pre className="hero__code" aria-hidden="true">{`courses.map(course =>
  <CourseCard
    {...course}
  />
)

// ${courses.length} courses
// ${courses.filter((c) => c.category === FIELDS).length} fields
// ${courses.filter((c) => c.category === LANGUAGES).length} languages`}</pre>
        </section>

        <section className="catalog" id="courses">
          <FilterBar options={FILTERS} active={filter} onChange={setFilter} query={query} onQuery={setQuery} />
          <p className="total" aria-live="polite">
            Showing <strong>{visible.length}</strong> of <strong>{courses.length}</strong> available courses
          </p>

          {visible.length === 0 ? (
            <div className="empty">
              <h2>No courses found</h2>
              <p>Nothing matches “{query}”. Clear the search or choose another category.</p>
              <button className="btn" onClick={() => { setQuery(""); setFilter("All"); }}>Show all courses</button>
            </div>
          ) : (
            <>
              {fields.length > 0 && <CourseList id="fields" title={FIELDS} courses={fields} />}
              {languages.length > 0 && <CourseList id="languages" title={LANGUAGES} courses={languages} />}
            </>
          )}
        </section>
      </main>
      <footer className="footer">Technika Course Central. Built with React.</footer>
    </div>
  );
}

export default App;
