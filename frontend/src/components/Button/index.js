import './styles.scss';

export function Button(props) {
  return (
    <button
      {...props}
      className={props.isOutlined ? "button outlined" : "button"}
    >
      {props.children}
    </button>
  );
}