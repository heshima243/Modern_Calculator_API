const Fom = ({ setTotal, total }) => {
  const handleChange = (e) => {
    setTotal(e.target.value);
  };

  return (
    <form action="">
      <input type="text" onChange={handleChange} value={total} />
    </form>
  );
};

export default Fom;
