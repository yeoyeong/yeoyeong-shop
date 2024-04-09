interface Props {
  title: string;
  toggleHandler: () => void;
  modalToggle: boolean;
  Page: React.ReactNode;
}
const ModalToggleButton = ({
  title,
  toggleHandler,
  modalToggle,
  Page,
}: Props) => {
  return (
    <>
      <button onClick={toggleHandler}>{title}</button>
      {modalToggle && Page}
    </>
  );
};

export default ModalToggleButton;

// Page: (props: LoginPageProps) => JSX.Element; // Props가 필요할 때
/* {modalToggle &&
        Page({})}
  /* LoginPage에 전달할 props */
