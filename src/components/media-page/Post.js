import UserInfo from './UserInfo'
import classNames from 'classnames';
import { comment, comment_text, image } from './Media.module.css'

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
          </div>
      </div>
  );
}
