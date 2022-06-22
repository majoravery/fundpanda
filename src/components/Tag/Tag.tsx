import cls from "classnames";
import "./Tag.scss";

interface Props {
  content: string;
  type?: "filled";
  onClick?: () => void;
}

const Tag = ({ content, type, onClick }: Props) => {
  return (
    <div className={cls("tag", type)} onClick={onClick}>
      {content}
    </div>
  );
};

export default Tag;
