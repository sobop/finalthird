import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={logo} alt="" className="mx-auto h-20 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          파이널서드에 로그인하세요
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-green-600 hover:text-green-500"
                  >
                    비밀번호를 잊어버렸나요?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500 items-center">
          회원이 아니신가요? {""}
          <Link
            href="signup"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
