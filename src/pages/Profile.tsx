export const Profile = () => {
  return (
    <div className="my-9 flex justify-between items-center">
      <form className="w-96 flex flex-col gap-4" name="about-you">
        <h5 className="text-h5 uppercase">About you</h5>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="name">
              Full name
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="name"
              type="text"
              placeholder="John Smith"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="phone">
              Phone number
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="phone"
              type="tel"
              placeholder="+380 123 45 67"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="birthday">
              Birthday
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="birthday"
              type="date"
              placeholder="dd/mm/yy"
            />
          </div>
        </div>

        <button
          className="bg-primary-blue text-lightgrey h-14 p-2 rounded-xl"
          type="submit"
        >
          Save
        </button>
      </form>

      <img
        className="w-[392px] h-80 object-cover"
        src={`${process.env.PUBLIC_URL}/img/profile/profile.png`}
        alt="profile"
      />

      <form className="w-96 flex flex-col gap-4" name="changePassword">
        <h5 className="text-h5 uppercase">Change password</h5>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="currentPass">
              Current password
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="currentPass"
              type="password"
              placeholder="Enter current password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="newPass">
              New password
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="newPass"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary text-grey" htmlFor="againPass">
              Again password
            </label>
            <input
              className="bg-transparent py-2 px-4 h-14 border rounded-xl"
              id="againPass"
              type="password"
              placeholder="Enter the same password"
            />
          </div>
        </div>

        <button
          className="bg-primary-blue text-lightgrey h-14 p-2 rounded-xl"
          type="submit"
        >
          Change password
        </button>
      </form>
    </div>
  );
};
