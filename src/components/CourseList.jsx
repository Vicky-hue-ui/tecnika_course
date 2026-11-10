import CourseCard from "./CourseCard.jsx";

// Renders one titled group of cards dynamically with map().
function CourseList({ id, title, courses }) {
  return (
    <section className="group" id={id}>
      <div className="group__head">
        <h2>{title}</h2>
        <span className="group__count">{courses.length} {courses.length === 1 ? "course" : "courses"}</span>
      </div>
      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
