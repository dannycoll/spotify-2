import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
const Login = ({ providers }: any) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center space-y-5">
      <Image
        src="https://links.papareact.com/9xl"
        alt=""
        width={208}
        height={208}
      />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-md font-semibold"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers: providers,
    },
  };
}
