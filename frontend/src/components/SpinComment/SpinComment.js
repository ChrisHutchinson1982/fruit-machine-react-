const SpinComment = (props) => {
  return (
    <div className="spin-comment-container">
      <h2 data-cy="spin-comment" className="spin-comment">
        {props.spinComment}
      </h2>
    </div>
  );
};

export default SpinComment;
