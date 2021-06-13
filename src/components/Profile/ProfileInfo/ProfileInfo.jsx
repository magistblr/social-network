import React from 'react';




const ProfileInfo = () => {
  return (
    <div className="content__user">
    <img src="https://avatars.mds.yandex.net/get-zen_doc/2417275/pub_5eced23140754c5d2151b198_5eced35a9b2a524be9e516ba/scale_1200" alt="avatar" />
    <div className="content__user-wrapper">
      <div className="content__user-name">Max C.</div>
      <div className="content__user-description">
        <ul className="content__user-description-list">
          <li>Date of Birth: 4 february</li>
          <li>City: Krasnodar</li>
          <li>Education: KUBSTU</li>
          <li>Web Site: https://vk.com/Max3425124</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ProfileInfo;
