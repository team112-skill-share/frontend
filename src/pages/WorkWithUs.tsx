import { useForm } from "react-hook-form";
import { regexEmail } from "../assets/constants";
import { RequestCourse } from "../types/courses";
import { apiRequestCourse } from "../api/coursesApi";
import { useState } from "react";

export const WorkWithUs = () => {
  const token = localStorage.getItem("token");
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      company: "",
      phoneNumber: "",
      email: "",
      workField: "1",
      description: "",
    },
  });

  const onSubmit = (data: RequestCourse) => {
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    apiRequestCourse({
      company: data.company,
      phoneNumber: data.phoneNumber,
      email: data.email,
      workField: data.workField,
      description: data.description,
    }).then(() => {
      setIsSuccess(true);
      reset();
    });
  };

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
          <form
            className="flex justify-between flex-grow"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
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
                    id="name"
                    type="text"
                    placeholder="GetRespect"
                    {...register("company", {
                      required: "Enter your company name!",
                    })}
                  />
                  {errors.company && (
                    <p className="text-red text-small">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="phone">
                    Enter a phone number for communication{" "}
                    <span className="text-red">*</span>
                  </label>
                  <input
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    id="phone"
                    type="tel"
                    placeholder="+38(063) 234 56 78"
                    {...register("phoneNumber", {
                      required: "Enter your phone number!",
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red text-small">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-grey" htmlFor="email">
                    Enter an email to contact your company{" "}
                    <span className="text-red">*</span>
                  </label>
                  <input
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    id="email"
                    type="email"
                    placeholder="company@gmail.com"
                    {...register("email", {
                      required: "Enter company/your email!",
                      pattern: {
                        value: regexEmail,
                        message: "Enter valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red text-small">
                      {errors.email.message}
                    </p>
                  )}
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
                    id="service"
                    className="bg-transparent border rounded-xl h-14 py-2 px-4 leading-10 placeholder:text-grey50"
                    defaultValue="1"
                    {...register("workField", {
                      required: "Please select a valid option",
                      validate: (value) =>
                        value !== "1" || "Please select a valid option",
                    })}
                  >
                    <option value="1" disabled>
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
                  {errors.workField && (
                    <p className="text-red text-small">
                      {errors.workField.message}
                    </p>
                  )}

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
                      placeholder="Tell something interesting about your company :)"
                      {...register("description")}
                    />
                  </div>
                </div>

                {!isAuthorized && (
                  <p className="text-red text-secondary">
                    You unauthorized. Please log in or sign up and try again
                  </p>
                )}

                {isSuccess && (
                  <p className="text-green text-secondary">
                    Thanks for your request! We will contact you soon
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-primary-blue text-lightgrey py-2 h-14 text-button text-center uppercase hover:bg-dark-blue transition-all"
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
