import "./Card.scss";

export const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="top_left">
          <div className="stat">
            <div className="stat_icon stat_icon-star" />
            <span className="stat_num">4.7</span>
          </div>

          <div className="stat">
            <div className="stat_icon stat_icon-comment" />
            <span className="stat_num">2</span>
          </div>
        </div>

        <div className="top_right">
          <div className="icon icon-share" />
          <div className="icon icon-like" />
        </div>
      </div>

      <div className="center">
        <div className="description">
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/img/courses/card-img.png`}
            alt="course img"
          />

          <div className="name">
            <h5 className="title">Fullstack Python Developer (from scratch)</h5>
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/img/homepage/eduquest.png`}
              alt="company logo"
            />
          </div>
        </div>

        <div className="details">
          <ul className="specs">
            <li className="spec">
              <div className="spec_icon spec_icon-time" />
              <span className="spec_text">9 months</span>
            </li>

            <li className="spec">
              <div className="spec_icon spec_icon-group" />
              <span className="spec_text">Group</span>
            </li>

            <li className="spec">
              <div className="spec_icon spec_icon-certificate" />
              <span className="spec_text">Certificate is issued</span>
            </li>
          </ul>

          <h3 className="price">
            <span className="price_from">From</span> 22 000
          </h3>
        </div>
      </div>

      <button type="button" className="go-button">
        Go to course <div className="icon" />
      </button>
    </div>
  );
};
