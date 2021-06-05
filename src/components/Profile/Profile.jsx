import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props);

  return (
    <div className="content">
      <header className="content__header">
        <img src="https://static9.depositphotos.com/1656823/1156/i/950/depositphotos_11563134-stock-photo-blue-water.jpg" alt="background"/>
      </header>

      <div className="content__wrapper">
        <ProfileInfo/>
        <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}/>
      </div>
    </div>
  );
}

export default Profile;