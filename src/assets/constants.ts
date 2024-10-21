export const requirements = [
  { text: "Minimum 8 characters", isTrue: (pass: string) => pass.length > 7 },
  {
    text: "At least 1 uppercase letter",
    isTrue: (pass: string) => /[A-Z]/.test(pass),
  },
  {
    text: "At least 1 lowercase letter",
    isTrue: (pass: string) => /[a-z]/.test(pass),
  },
  { text: "At least 1 digit", isTrue: (pass: string) => /\d/.test(pass) },
  {
    text: "Must be the same",
    isTrue: (pass: string, repeatPass: string) =>
      pass === repeatPass && regexPassword.test(pass) && pass.length > 7,
  },
];

export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

export const nav = [
  { link: "courses", name: "Courses" },
  { link: "/", name: "About us" },
  { link: "work-with-us", name: "Work with us" },
];
