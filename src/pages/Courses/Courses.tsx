import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Card } from "../../components/Card";
import "./Courses.scss";

export const Courses = () => {
  return (
    <div className="page">
      <Breadcrumbs />

      <ul className="list">
        <li className="item">All courses</li>
        <li className="item">Economic and Business </li>
        <li className="item">Foreign languages</li>
        <li className="item">Inclusivity</li>
        <li className="item">Civil Education</li>
        <li className="item">Texnical Education and IT</li>
        <li className="item">Psychology and Medicine</li>
        <li className="item">External Independent Evaluation</li>
        <li className="item">History</li>
        <li className="item">Culture</li>
      </ul>

      <div className="input-field">
        <input
          className="input"
          type="text"
          placeholder="Enter the name of the course or area of ​​interest here"
        />
        <button type="submit" className="button" />
      </div>

      <div className="about-courses">
        <p className="text">
          Online Course Catalog in 2024. We select and check lessons from more
          than 400 schools, rank them according to a special formula so that you
          can choose the best training option for yourself. The rating is
          updated every day based on all reviews on the RuNet. Choose the best
          course
        </p>
        <div className="stats">
          <span>Total courses: 30 Last</span>
          <span>Update: 03.10.2024</span>
        </div>
      </div>

      <div className="sorting">
        <div className="sort-item">
          <label className="text" htmlFor="select1">
            Sort By1
          </label>
          <select className="select" id="select1" name="select1">
            <option className="option" value="1">
              Popularity
            </option>
            <option className="option" value="2">
              From cheap to expensive
            </option>
            <option className="option" value="3">
              From expensive to cheap
            </option>
          </select>
        </div>

        <div className="sort-item">
          <label className="text" htmlFor="select1">
            Sort By2
          </label>
          <select className="select" id="select1" name="select1">
            <option className="option" value="1">
              Popularity
            </option>
            <option className="option" value="2">
              From cheap to expensive
            </option>
            <option className="option" value="3">
              From expensive to cheap
            </option>
          </select>
        </div>
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
