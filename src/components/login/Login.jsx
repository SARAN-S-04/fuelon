const Login = () => {
  return (
    <div>
        <div  className="flex justify-end m-10" >
                <butron className=' pr-5 pl-5 pt-2 pb-2  rounded-lg bg-[#5072f5] border-2 '>Signup</butron>
        </div>

        <div className="flex justify-around absolute top-[142px] left-[171px]">
            <div className="flex flex-col gap-6">
                  <h1 className="text-4xl text-[#161439] font-semibold font-poppins">Welcome!</h1>
                  <h3 className="text-3xl text-[#161439] font-semibold font-poppins ">Login to your account</h3>
                  <div className="w-[399.32px ] h-[266px]">
                      <img src="/loginPageImage.png" alt="Image" />
                  </div>
            </div>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Login