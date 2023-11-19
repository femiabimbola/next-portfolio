const SectionHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h2 className="text-4xl font-bold capitalize mb-5 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
