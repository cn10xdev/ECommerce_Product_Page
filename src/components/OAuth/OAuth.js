import OAuthIcon from "../OAuthIcon/OAuthIcon";
import googleIcon from "../../assets/images/google.png";
import facebookIcon from "../../assets/images/facebook.png";
import githubIcon from "../../assets/images/github.png";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
    } catch (error) {}
  };

  const handleFacebookClick = async () => {
    try {
    } catch (error) {}
  };
  const handleGithubClick = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className=" w-full flex items-center gap-5 justify-center mt-2 mb-3 lg:mb-0">
      <OAuthIcon socialIcon={googleIcon} handleClick={handleGoogleClick} />
      <OAuthIcon socialIcon={facebookIcon} handleClick={handleFacebookClick} />
      <OAuthIcon socialIcon={githubIcon} handleClick={handleGithubClick} />
    </div>
  );
}
