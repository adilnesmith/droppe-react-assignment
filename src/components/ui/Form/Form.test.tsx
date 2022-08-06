import React from "react";
import { render, act, screen, fireEvent } from "@testing-library/react";
import Form from "./index";
import { FormProps } from '../../lib/types/common'
const onSubmit = jest.fn();
onSubmit.mockReturnValueOnce({
    payload: {
        title: "some title",
        description: "some description",
        price: "some price"
    }
})
test("Form with mock function", async () => {
    await act(async () => {
        render(
            <Form on-submit={onSubmit} />
        );
    });
});

// could not perform below test because of package dependency issues



// function renderForm(props: Partial<FormProps> = {}) {
//     const defaultProps: FormProps = {
//         onTitleChange() {
//             return;
//         },
//         onPriceChange() {
//             return;
//         },
//         onDescriptionChange() {
//             return;
//         },
//         onSubmit() {
//             return;
//         },
//     };
//     return render(<Form {...defaultProps} {...props} />);
// }
// test("form has button", async () => {
//     const form = await screen.findByText(/Add a product/i);
//     expect(form).toHaveFormValues({
//         tille: "",
//         price: "",
//         description: ""
//     });
// });
// test("should allow entering a title", async () => {
//     const onTitleChange = jest.fn();
//     const { findByTestId } = renderForm({ onTitleChange });
//     const _title = await findByTestId("title");
//     fireEvent.change(_title, { target: { value: "lorem ipsum" } });
//     expect(onTitleChange).toHaveBeenCalledWith("test");
// });