
const CurrentTime = () => {

  let time = new Date();

  return <>
    <h3>This is the Current Time : {time.toLocaleDateString()} </h3>
  </>
}

export default CurrentTime;