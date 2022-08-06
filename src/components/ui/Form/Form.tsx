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
    if (!titleRef?.current?.value) {
      alert("Your product needs a title");
      return;
    }
    if (!descriptionRef?.current?.value || !priceRef?.current?.value) {
      alert("Your product needs some content");
      return;
    }
    props["on-submit"]({
      title: titleRef?.current?.value,
      description: descriptionRef?.current.value,
      /*
          This below line can be changed into the integer using 
          price: parseInt(priceRef?.current?.value),
          but as its lable says "description" 
          so i am not chaing into the integer
         
      */
      price: priceRef?.current?.value,

    });
    formRef?.current?.reset();
  };

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <Label className={styles.form__label} children={'Product title: *'}></Label>
      <Input
        inputRef={titleRef}
        placeholder="Title..."
        defaultValue=""
        className={styles.form__input}
      />
      <Label className={styles.form__label} children={'Product details: *'}></Label>
      <Input
        inputRef={priceRef}
        placeholder="Price..."
        defaultValue=""
        className={styles.form__input}
      />
      <TextArea
        inputRef={descriptionRef}
        placeholder="Start typing product description here..."
        defaultValue=""
        className={styles.form__textarea}
      />
      <Button children={'Add a product'}></Button>
    </form>
  );
};

export default Form