import React from "react";
import Input from "../Input/Input";
import Box from "@material-ui/core/Box";

export default function Home(props) {
  const { age = 0, name = "Unknown", onChangeProfileName } = props;

  const handleNameSubmit = (newName) => {
    onChangeProfileName(newName);
  };

  return (
      <Box sx={{ padding: "20px" }}>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Age: </b>
          {age}
        </p>

        <Input
          label="Имя"
          placeholder="Введите новое имя"
          type="name"
          onSubmit={handleNameSubmit}
        />
      </Box>

    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
    //     distinctio ipsum nam porro! Eaque impedit laudantium dolore fuga enim ea
    //     repellat, maiores magni atque ut, culpa asperiores. Quasi, debitis
    //     vitae. Et quod id iusto repellat molestias repudiandae pariatur, quas
    //     veritatis officiis placeat vel. Est ipsum expedita odio perferendis
    //     repellat officia sint quod, non velit iusto asperiores id dignissimos
    //     earum nobis. Esse molestias aspernatur culpa earum voluptatibus
    //     voluptatum perspiciatis fuga expedita natus, perferendis error aliquam
    //     explicabo aut voluptatem, rem, laborum nam. Doloremque velit asperiores
    //     enim beatae illo odio distinctio totam iusto. Ipsum facere ipsa amet
    //     quos, voluptatum dignissimos veniam atque a exercitationem, voluptas
    //     magnam consequuntur natus distinctio aliquid id libero ut. Blanditiis
    //     culpa fuga voluptate beatae eius voluptates iste vitae itaque. Tempora
    //     excepturi sapiente eum perspiciatis aperiam aliquam, qui nobis doloribus
    //     placeat error aliquid. Voluptate beatae in ea, ullam totam repudiandae
    //     ipsa dicta quasi animi quas dolores nostrum error laudantium impedit.
    //   </p>
  );
}
