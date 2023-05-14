import Form from "react-bootstrap/Form";

const InputComponent = (props: any) => {
  return (
    <div>
      <Form.Label>{props.inputInfo["label"]}</Form.Label>
      <Form.Control
        type={props.inputInfo["type"]}
        id={props.inputInfo["id"]}
        placeholder={props.inputInfo["placeholder"]}
        onChange={props.onChange}
        isInvalid={props.inputInfo["isInvalid"]}
      />
    </div>
  );
};
export default InputComponent;
