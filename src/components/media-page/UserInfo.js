import React from "react";
import classNames from 'classnames';
import { userInfo, avatar, name, nickname, comment_date } from './Media.module.css'

function UserInfo(props) {
  return (
    <div className={classNames(userInfo)}>
      <img className={classNames(avatar)} src={props.user.photo} alt={props.user.name} />
      <div className={classNames(name)}>{props.user.name}</div>
      <div className={classNames(nickname)}>{props.user.nickname}</div>
      <div className={classNames(comment_date)}>{props.user.date}</div>
    </div>
  );
}

export default UserInfo;
