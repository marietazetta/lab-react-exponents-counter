const ExponentFive = ({ count }) => {

  const calculateExponentFive = count * count * count * count * count

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{calculateExponentFive}</span></p>
    </div>
  )
};

export default ExponentFive;