import { useState } from "react";

// Reusable card: every detail arrives through props, nothing is hardcoded here.
function CourseCard({ name, description, category, badge, topics }) {
  const [expanded, setExpanded] = useState(false);
  const tone = category === "Technical Fields" ? "field" : "language";

  return (
    <article className={`card card--${tone}`}>
      <div className="card__top">
        <span className="card__badge">{badge}</span>
        <span className="card__category">{category}</span>
      </div>
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{description}</p>
      {expanded && (
        <ul className="card__topics">
          {topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      )}
      <button className="btn" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide topics" : "Explore"}
      </button>
    </article>
  );
}

export default CourseCard;
