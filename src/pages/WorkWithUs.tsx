export const WorkWithUs = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-lightblue h-[480px] rounded-br-[200px] rounded-bl-[200px]">
        <div className="max-w-screen-xl mx-auto my-0 flex items-center justify-center">
          <img
            className="w-[416px] h-[455px] object-contain"
            src={`${process.env.PUBLIC_URL}/img/workwithus/workwithus-1.png`}
            alt="work with us"
          />

          <div className="flex flex-col gap-8 uppercase">
            <h1 className="font-libre-baskerville text-h1">
              You are a course creator?
            </h1>
            <h4 className="font-libre-baskerville text-h4">
              Do you create high-quality and interesting courses? Are you proud
              of your product?
            </h4>
            <h5 className="font-libre-baskerville text-h5">
              Place your products in and promote yourself as a professional in
              your field
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <h4 className="font-libre-baskerville text-h4 text-black uppercase">
          Fill out this form and we will connect with your company
        </h4>

        <div className="flex gap-6 justify-between">
          <form className="flex justify-between flex-grow" method="POST">
            <div className="w-96 flex flex-col gap-8">
              <h5 className="font-libre-baskerville text-h5 uppercase">
                How to contact you
              </h5>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="name">
                    Enter your company name <span className="text-red">*</span>
                  </label>
                  <input
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    name="company-name"
                    id="name"
                    type="text"
                    placeholder="GetRespect"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="phone">
                    Enter a phone number for communication{" "}
                    <span className="text-red">*</span>
                  </label>
                  <input
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="+38063 234 56 78"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="email">
                    Enter an email to contact your company{" "}
                    <span className="text-red">*</span>
                  </label>
                  <input
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="company@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="w-96 flex flex-col gap-8">
              <h5 className="font-libre-baskerville text-h5 uppercase">
                Tell us about your company
              </h5>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="service">
                    In what direction does your company work?{" "}
                    <span className="text-red">*</span>
                  </label>
                  <select
                    name="service"
                    id="service"
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                  >
                    <option value="1" disabled selected>
                      Choose a field
                    </option>
                    {/* Try to map existing list (maybe create an object with value) */}
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

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-secondary text-grey"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="bg-transparent border rounded-xl py-2 px-4 leading-10 placeholder:text-grey50 h-44"
                      id="description"
                      name="description"
                      placeholder="Tell something interesting about your company :)"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary-blue text-lightgrey py-2 h-14 text-button text-center uppercase"
                >
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
