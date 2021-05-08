import UserInfo from "./UserInfo";
import classNames from "classnames";
import { comment, comment_text, image, p, social } from "./Media.module.css";

export default function Post(props) {
  return (
    <div className={classNames(comment)}>
      <UserInfo user={props.author} />
      <div>
        <div className={classNames(comment_text)}>{props.comment}</div>
        <img
          className={classNames(image)}
          src={props.image}
          alt={props.image}
        />
        <div className={classNames(social)}>
          <div className={classNames(p)}>
            <i class="fa fa-heart"></i>
            <p>0</p>
          </div>
          <div className={classNames(p)}>
          <i class="fa fa-comment"></i>
            <p>0</p>
          </div>
          <div className={classNames(p)}>
          <i class="fa fa-retweet"></i>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
