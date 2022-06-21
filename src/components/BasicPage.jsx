export const BasicPage = ({ title, icon }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <span>{icon}</span>
    </div>
  );
};
