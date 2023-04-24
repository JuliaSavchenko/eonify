export const Button = (props) => {
  const { btnName, isValid } = props;
  return (
    <>
      <button type='submit' disabled={!isValid}>{btnName}</button> 
    </>
  );
};
