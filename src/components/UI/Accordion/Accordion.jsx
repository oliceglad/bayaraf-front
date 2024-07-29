export const Accordion = ({
  classNameHeader,
  classNameContent,
  theme,
  isOpened,
  isOpenedName,
  title,
  children,
  toggle = () => {},
}) => {
  const toggleSection = (section) => {
    toggle((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <div
        className={`${classNameHeader} ${theme}`}
        onClick={() => toggleSection(`${isOpenedName}`)}
      >
        <span style={isOpened ? { fontWeight: "bold" } : {}}>{title}</span>
      </div>

      {isOpened && (
        <div className={`${classNameContent} ${theme}`}>{children}</div>
      )}
    </div>
  );
};
