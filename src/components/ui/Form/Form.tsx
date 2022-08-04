import React, { useRef } from "react";
import Button from "../Button";
import styles from "./Form.module.scss";
import Label from 'components/ui/Label'
import Input from 'components/ui/Input'
import TextArea from 'components/ui/TextArea'
import { FormProps } from 'lib/types/common'

export const Form: React.FC<FormProps> = (props) => {
  let formRef = useRef<HTMLFormElement>(null);
  let titleRef = useRef<HTMLInputElement>(null);
  let priceRef = useRef<HTMLInputElement>(null);
  let descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!titleRef.current?.value) {
      alert("Your product needs a title");

      return;
    }

    if (!descriptionRef.current?.value || !priceRef.current?.value) {
      alert("Your product needs some content");

      return;
    }

    props["on-submit"]({
      title: titleRef.current && titleRef.current.value,
      description: descriptionRef.current && descriptionRef.current.value,
      price: priceRef.current && priceRef.current.value,
    });

    formRef.current?.reset();
  };

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <Label className={styles.label} children={'Product title: *'}></Label>

      <Input
        inputRef={titleRef}
        placeholder="Title..."
        defaultValue=""
        className={styles.input}
      />

      <Label className={styles.label} children={'Product details: *'}></Label>

      <Input
        inputRef={priceRef}
        placeholder="Price..."
        defaultValue=""
        className={styles.input}
      />

      <TextArea
        inputRef={descriptionRef}
        placeholder="Start typing product description here..."
        defaultValue=""
        className={styles.textarea}
      />

      <Button children={'Add a product'}></Button>
    </form>
  );
};

export default Form