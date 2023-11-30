import santaImg from "/src/assets/errorSanta.png";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  return (
    <div className="flex justify-center gap-10 items-center min-h-screen">
      <Helmet>
        <title>AssetIT | 404</title>
      </Helmet>
      <img src={santaImg} alt="Santa Upset Emoji" />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold">Uh-oh!</h1>
        <p className=" text-gray-500">We can&apos;t find what you wished.</p>
        <Link to="/">
          <Button variant="outlined">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
