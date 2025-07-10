const RegistrationPage = () => {
  return (
    <div className="h-screen font-geist text-[#303030] bg-white">
      <p className="text-base w-[335px] block mx-auto pt-8">
        You are signing up to join the
        <br /> <span className="font-semibold">Akili Dada Chama.</span>
      </p>
      <div className="flex flex-col items-center justify-center pt-2 ">
        <div className=" w-[335px] flex flex-col items-center gap-[37px]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-sm">First Name</p>
            <input
              type="text"
              name=""
              id=""
              className="flex items-center gap-1.5 self-stretch h-[40px] py-1.5 px-3 rounded-lg bg-input-gray"
            />
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-sm">Last name</p>
            <input
              type="text"
              name=""
              id=""
              className="flex items-center gap-1.5 self-stretch h-[40px] py-1.5 px-3 rounded-lg bg-input-gray"
            />
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-sm">Password</p>
            <input
              type="text"
              name=""
              id=""
              className="flex items-center gap-1.5 self-stretch h-[40px] py-1.5 px-3 rounded-lg bg-input-gray"
            />
            <p className="w-[214px] text-[#5A5A5A] text-tiny">
              Your password should be at least 8 characters long with one
              special character ($, #, !, *, &, @)
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-sm">Confirm Password</p>
            <input
              type="text"
              name=""
              id=""
              className="flex items-center gap-1.5 self-stretch h-[40px] py-1.5 px-3 rounded-lg bg-input-gray"
            />
          </div>
        </div>
        {/* join button and terms */}
        <div className="w-[335px] h-[120px] flex flex-col items-start gap-[23px] shrink-0 my-8">
          <button className="w-full h-[48.5px] bg-primary rounded-lg text-white font-medium text-sm">
            Join
          </button>
          <span className="inline-block w-[294px]  text-[#64646A] text-tiny">
            By clicking Sign up, you agree to Akili Dada’s
            <br />
            <span className="text-primary">Constitution</span> and{" "}
            <span className="text-primary">Privacy Policy</span> and you
            acknowledge that 10% <br /> of your begging proceeds goes to Begr.
          </span>
        </div>
        {/* footer */}
        <div
          className="flex justify-center items-center gap-1.5 w-full 
        bg-[rgba(231,228,235,0.40)] pt-4 pb-6"
        >
          <p className="text-[#4d4d4d] text-center text-tiny ">
            Already a member?
            <span className="text-primary font-medium underline underline-offset-auto decoration-solid">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
