import { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { AUTHORS } from "../App/constants";

const Input = (props) => {
  const {
    label = "Сообщение",
    placeholder = "Введите сообщение",
    type,
    onSubmit,
  } = props;
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    switch (type) {
      case "message": {
        onSubmit({
          id: `messages${Date.now()}`,
          author: AUTHORS.ME,
          text: inputValue,
        });
        break;
      }
      case "chat": {
        onSubmit(inputValue);
        break;
      }
      case "name": {
        onSubmit(inputValue);
        break;
      }
      default: {
        break;
      }
    }
  

    inputRef.current?.focus();

    setInputValue("");
  };

  return (
    <Box
      className="app__form bordered"
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
    >
      <TextField
        required
        ref={inputRef}
        className="child__text-field bordered"
        variant="outlined"
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        variant="contained"
        tabIndex={-1}
        title="Отправить"
      >
        <AddCircle style={{ fontSize: "40px" }} />
      </IconButton>
    </Box>
  );
};

export default Input;
