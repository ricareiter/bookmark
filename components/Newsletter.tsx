"use client";
import { useState, FormEvent } from "react";

const Newsletter = () => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  function validEmail(str: string) {
    var pattern = new RegExp(
      "^" + "[a-zA-Z0-9._%+-]+@" + "[a-zA-Z0-9.-]+\\." + "[a-zA-Z]{2,}$",
      "i"
    );
    return !!pattern.test(str);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (url === "") {
      setIsValid(false);
      setErrorMsg("Please enter something");
      return;
    } else if (!validEmail(url)) {
      setIsValid(false);
      setErrorMsg("Whoops, make sure its an email");
      return;
    }

    setIsValid(true);
    setErrorMsg("");
  }

  return (
    <section className="mx-auto mt-14 p-14 bg-softBlue">
      <div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-center uppercase text-sm tracking-superWide">
            35.000+ already joined
          </p>
          <h4 className="text-white text-3xl text-center max-w-sm">
            Stay up-to-date with what we're doing
          </h4>
        </div>
        <div className="max-w-4xl flex items-center justify-center mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`relative flex flex-col justify-center space-y-9 mt-8 md:flex-row md:space-x-3 md:space-y-0 ${
              isValid ? "space-y-3" : "space-y-10"
            }`}
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className={`rounded-md w-full pl-4 h-12 placeholder:text-xs placeholder:mr-2 placeholder:text-gray-300 focus:outline-none md:w-3/5 md:h-12 ${
                !isValid ? "border-2 border-softRed" : ""
              }`}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="text-white bg-softRed border-2 border-softRed py-3 px-6 text-sm rounded-md hover:bg-white hover:text-softRed focus:outline-none">
              Contact Us
            </button>

            <div
              className={`${
                isValid ? "hidden" : ""
              } absolute bottom-16 w-full md:-left-2 md:-bottom-6 bg-softRed text-white md:w-3/5 text-[9px] italic py-2 px-4 rounded-b-md`}
            >
              {errorMsg}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
