const Register = () => {
  return (
    <div className="w-full h-auto md:w-[40%] max-w-md mx-auto my-10 border-blue-100 border-solid border-2 rounded-md px-4 shadow-2xl">
        <h1 className="text-2xl text-center my-10">Đăng ký tài khoản</h1>
      <form action="" className="w-full flex flex-col">
        <label htmlFor="username">Họ tên: </label>
        <input type="text" id="username" name="username" required className="border-2 border-red-950 rounded-md pl-2 h-[30px]"/>

        <label htmlFor="phone">Số điện thoại: </label>
        <input type="tel" id="tel" name="tel" required className="mb-4 border-2 border-red-950 rounded-md pl-2 h-[30px]"/>

        <label htmlFor="password">Mật khẩu: </label>
        <input type="password" id="password" name="password" required className="border-2 border-red-950 rounded-md pl-2 h-[30px]"/>

        <label htmlFor="password">Nhập lại mật khẩu: </label>
        <input type="password" id="password" name="password" required className="border-2 border-red-950 rounded-md pl-2 h-[30px]"/>

        <button type="submit" className="text-xl text-white my-5 p-2 bg-orange-600 rounded-xl">Đăng ký</button>
      </form>
    </div>
  )
}

export default Register