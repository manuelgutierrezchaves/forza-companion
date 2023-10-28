import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="w-full h-1/2 grid place-items-center">
      <SignIn />
    </div>
  )
}

export default SignInPage
