import { Link, useNavigate, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate()
  const error = useRouteError();
  const handleGoBack = () => {
    navigate(-1)
}
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="https://i.ibb.co/56vRqP1/404-Error-Page-not-Found-with-people-connecting-a-plug-bro.webp"
          className="h-[600px] w-[600px]"
          alt=""
        />
        <p className=" mb-4 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
      <div className="flex justify-center items-center gap-4">
      <button onClick={handleGoBack} className="btn  hover:bg-main bg-main border-none rounded-sm  text-white">
            Go Back
          </button>
        <Link to="/">
          <button className="btn  hover:bg-main bg-main border-none rounded-sm  text-white">
            Go Home
          </button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default ErrorPage;
