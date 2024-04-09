interface Props {
  category: string | null;
}
const List = ({ category }: Props) => {
  console.log(category);
  return <div></div>;
};

export default List;
