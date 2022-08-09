type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="w-3/4">{children}</div>;
};

export default Wrapper;
