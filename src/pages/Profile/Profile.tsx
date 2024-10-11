import "./Profile.scss";

export const Profile = () => {
  return (
    <div className="profile">
      <form className="form" name="about-you">
        <h5 className="title">About you</h5>

        <div className="inputs">
          <div className="field">
            <label className="label" htmlFor="name">
              Full name
            </label>
            <input
              className="input"
              id="name"
              type="text"
              placeholder="John Smith"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="phone">
              Phone number
            </label>
            <input
              className="input"
              id="phone"
              type="tel"
              placeholder="+380 123 45 67"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="birthday">
              Birthday
            </label>
            <input
              className="input"
              id="birthday"
              type="date"
              placeholder="dd/mm/yy"
            />
          </div>
        </div>

        <button className="submit-button" type="submit">
          Save
        </button>
      </form>

      <form className="form" name="about-you">
        <h5 className="title">Change password</h5>

        <div className="inputs">
          <div className="field">
            <label className="label" htmlFor="currentPass">
              Current password
            </label>
            <input
              className="input"
              id="currentPass"
              type="password"
              placeholder="Enter current password"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="newPass">
              New password
            </label>
            <input
              className="input"
              id="newPass"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="againPass">
              Again password
            </label>
            <input
              className="input"
              id="againPass"
              type="password"
              placeholder="Enter the same password"
            />
          </div>
        </div>

        <button className="submit-button" type="submit">
          Change password
        </button>
      </form>

      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/img/profile/profile.png`}
        alt="profile"
      />
    </div>
  );
};
