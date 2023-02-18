const SpinComment = (props) => {
  let comment = "";

  if (
    props.getSpins[0] === props.getSpins[1] &&
    props.getSpins[1] === props.getSpins[2]
  ) {
    comment = "WIN! WIN! WIN!";
  } else if (
    props.getSpins[0] !== props.getSpins[1] &&
    props.getSpins[1] !== props.getSpins[2] &&
    props.getSpins[0] !== props.getSpins[2]
  ) {
    comment = "UNLUCKY!";
  } else {
    comment = "ALMOST!";
  }

  if (props.renderComments) {
    return (
      <>
        <div className="spin-comment-container">
          <h2
            data-cy="spin-comment"
            className=" text-red-600 text-3xl font-bold normal-case font-mono animate-bounce"
          >
            {comment}
          </h2>
        </div>
      </>
    );
  }
};

export default SpinComment;
