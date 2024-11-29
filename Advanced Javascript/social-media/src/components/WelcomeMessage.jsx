const WelcomeMesaage = ({ onGetPostClick }) => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">There are No Post</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Please add some post for listing the details of post by user.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={onGetPostClick}>
              Get Posts from Server
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMesaage;
