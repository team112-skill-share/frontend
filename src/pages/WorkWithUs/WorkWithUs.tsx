import "./WorkWithUs.scss";

export const WorkWithUs = () => {
  return (
    <div className="work-with-us">
      <div className="start">
        <div className="start_content">
          <img
            className="start_img"
            src={`${process.env.PUBLIC_URL}/img/workwithus/workwithus-1.png`}
            alt="work with us"
          />

          <div className="start_description">
            <h1 className="start_description-1">You are a course creator?</h1>
            <h4 className="start_description-2">
              Do you create high-quality and interesting courses? Are you proud
              of your product?
            </h4>
            <h5 className="start_description-3">
              Place your products in and promote yourself as a professional in
              your field
            </h5>
          </div>
        </div>
      </div>

      <div className="content">
        <h4 className="title">
          Fill out this form and we will connect with your company
        </h4>

        <div className="center">
          <form className="form" method="POST">
            <div className="block">
              <h5 className="block_title">How to contact you</h5>
              <div className="block_fields">
                <div className="field">
                  <label className="label" htmlFor="name">
                    Enter your company name <span className="star">*</span>
                  </label>
                  <input
                    className="input"
                    name="company-name"
                    id="name"
                    type="text"
                    placeholder="GetRespect"
                  />
                </div>

                <div className="field">
                  <label className="label" htmlFor="phone">
                    Enter a phone number for communication{" "}
                    <span className="star">*</span>
                  </label>
                  <input
                    className="input"
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="+38063 234 56 78"
                  />
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">
                    Enter an email to contact your company{" "}
                    <span className="star">*</span>
                  </label>
                  <input
                    className="input"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="company@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="block">
              <h5 className="block_title">Tell us about your company</h5>

              <div className="block_fields">
                <div className="field">
                  <label className="label" htmlFor="service">
                    In what direction does your company work?{" "}
                    <span className="star">*</span>
                  </label>
                  <select name="service" id="service" className="input">
                    <option value="1" disabled selected>
                      Choose a field
                    </option>
                    <option value="2">Economic and Business </option>
                    <option value="3">Foreign languages</option>
                    <option value="4">Inclusivity</option>
                    <option value="5">Civil Education</option>
                    <option value="6">Texnical Education and IT</option>
                    <option value="7">Psychology and Medicine</option>
                    <option value="8">External Independent Evaluation</option>
                    <option value="9">History</option>
                    <option value="10">Culture</option>
                    <option value="11">Other</option>
                  </select>

                  <div className="field">
                    <label className="label" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="input textarea"
                      id="description"
                      name="description"
                      placeholder="Tell something interesting about your company :)"
                    />
                  </div>
                </div>

                <button type="submit" className="button">
                  Send information about your company
                </button>
              </div>
            </div>
          </form>

          <div className="img">
            <img
              className="img"
              src={`${process.env.PUBLIC_URL}/img/workwithus/workwithus-2.png`}
              alt="work with us 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
