import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content">
      <header className="content__header">
        <img src="https://images.wallpaperscraft.ru/image/kapli_steklo_fon_72327_3840x2400.jpg" alt="background"/>
      </header>

      <div className="content__wrapper">
        <ProfileInfo/>
        <MyPosts />
      </div>
    </div>

  );
}

export default Profile;