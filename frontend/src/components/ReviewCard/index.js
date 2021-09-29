import { BsFillChatSquareQuoteFill } from 'react-icons/bs';

import './styles.scss';

export function ReviewCard({ review }) {
  return(
    <div className="review-card">
      <div className="card-icon">
        <BsFillChatSquareQuoteFill />
      </div>
      <div className="card-header">
        <img src={review.avatar} alt="User avatar" />
        <div className="texts">
          <h1>{review.name}</h1>
          <p>{review.stack}</p>
        </div>
      </div>
      <div className="card-body">
        <p>{review.review}</p>
      </div>
    </div>    
  );
}