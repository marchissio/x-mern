const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0C1A] via-[#1A1033] to-[#160C29] flex items-center justify-center">
      <div className="bg-[#121212] rounded-2xl shadow-xl p-10 flex gap-8 max-w-4xl w-full">
        {/* Left panel */}
        <div className="w-1/2 text-white flex flex-col items-center justify-center gap-6">
          <img src="/logo.svg" alt="Social Bloom" className="w-16 h-16" />
          <h1 className="text-3xl font-bold">SOCIAL BLOOM</h1>
          <p className="text-center text-[#A0DDFD]">
            Bloom where you’re planted
          </p>
          <button className="btn bg-gradient-to-r from-pink-500 to-blue-500 text-white w-40">
            Log in
          </button>
          <p>
            Don’t have an account?{" "}
            <span className="text-blue-400 cursor-pointer">Sign up</span>
          </p>
        </div>

        {/* Right panel */}
        <div className="w-1/2 bg-[#1E1E1E] p-8 rounded-lg">
          {/* login or signup form here */}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
