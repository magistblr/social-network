import React from 'react'
import userPhoto from '../../assets/img/users.png'

let Users = (props) => {
  // let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize); допилить вывод пользователей через кнопку ещё (сейчас ограничение страниц 25)

  let pages = [];
  for (let i=1; i <= 25; i++) {
    pages.push(i);
  }

  return ( <div>

    <div className="users__pagination">
      {pages.map( p => {
        return <span  className={props.currentPage === p && "users__pagination-item_selected"}
                      onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
      })}

      </div>
        {props.users.map( u => <div key={u.id}>
        <div className="users-wrapper">
          <div className="users__logo">
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
            <div className="users__btn">
            {u.followed
              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>
            }
            </div>
          </div>
          <div className="users__descr-wrapper-outer">
            <div className="users__descr-wrapper-inner">
              <div className="users__descr">
                <div className="users__descr-name">{u.name}</div>
                <div className="users__descr-status">{u.status}</div>
              </div>
              <div className="users__location">
                <div className="users__location-country">{"u.location.country"},</div>
                <div className="users__location-city">{"u.location.city"}</div>
              </div>
            </div>
          </div>
        </div>
    </div>)}
  </div>
  )
}

export default Users;