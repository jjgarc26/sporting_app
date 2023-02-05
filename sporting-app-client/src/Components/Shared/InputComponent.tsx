const InputComponent = (props: any) => {
  return (
    <div>
      <label>{props.inputInfo["label"]}</label>
      <input
        type={props.inputInfo["type"]}
        id={props.inputInfo["id"]}
        placeholder={props.inputInfo["placeholder"]}
        onChange={props.onChange}
      />
    </div>
  );
};
export default InputComponent;
