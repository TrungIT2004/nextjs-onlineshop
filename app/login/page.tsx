'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from "react"

const Login = () => {
  const router = useRouter();


  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({}); // State to store validation errors

  const handleLogin = (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    let isValid = true;
    setErrors({}); // Clear errors before re-validation

    if (!phoneNumber) {
      isValid = false;
      setErrors({ phoneNumber: "Số điện thoại là bắt buộc" });
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      isValid = false;
      setErrors({ phoneNumber: "Số điện thoại không hợp lệ (10 chữ số)" });
    }

    if (!password) {
      isValid = false;
      setErrors({ password: "Mật khẩu là bắt buộc" });
    } else if (password.length < 8) {
      isValid = false;
      setErrors({ password: "Mật khẩu phải ít nhất 8 ký tự" });
    }

    if (!isValid) {
      return; // Prevent further processing if validation fails
    }

    localStorage.setItem("phoneNumber", phoneNumber); // Save phone number in local storage (SECURITY WARNING)
    localStorage.setItem("password", password); // Save password in local storage (SECURITY WARNING)

    // If validation passes, clear inputs, perform login logic, and redirect
    setPhoneNumber("");
    setPassword("");
    console.log("Login data:", { phoneNumber, password }); // Replace with your actual login logic (e.g., sending data to a server)
    router.push('/');
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "tel":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-auto md:w-[40%] max-w-[400px] mx-auto my-10 border-blue-100 border-solid border-2 rounded-md px-4 shadow-2xl">
      <h1 className="text-2xl text-center my-10">Đăng nhập hệ thống</h1>
      <form action="" className="w-full flex flex-col" onSubmit={handleLogin}>
        <label htmlFor="phone">Số điện thoại: </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          required
          className={`mb-4 border-2 border-red-950 rounded-md pl-2 h-[30px] ${
            errors.phoneNumber ? "border-red-500" : ""
          }`}
          value={phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
        )}

        <label htmlFor="password">Mật khẩu: </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className={`border-2 border-red-950 rounded-md pl-2 h-[30px] ${
            errors.password ? "border-red-500" : ""
          }`}
          value={password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}

        <div className="flex justify-between">
          <span>
            <Link href="/signup" className="text-blue-600">
              Chưa có tài khoản?
            </Link>
          </span>
          <span>
            <Link href="/" className="text-blue-600">
              Quên mật khẩu?
            </Link>
          </span>
        </div>

        <button type="submit" className="text-xl text-white my-5 p-2 bg-orange-600 rounded-xl">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;