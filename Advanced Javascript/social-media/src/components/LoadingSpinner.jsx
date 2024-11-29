const LoadingSpinner = () => {
  return (
    <>
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{ height: "300px", width: "100%" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
