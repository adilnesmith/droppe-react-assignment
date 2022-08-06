import React from "react";
import { render, act } from "@testing-library/react";
import Product from "./index";
const EmptyData = {
    title: "",
    description: "",
    price: 0,
    isFavorite: true,
    rating: {
        rate: 0,
        count: 0
    }
}
const onFav = jest.fn();
test("Product empty data", async () => {
    await act(async () => {
        render(
            <Product index={Math.random()} product={EmptyData} onFav={onFav} />
        );
    });
});
const FilledData = {
    title: "Lorem ipsum",
    description: "some dummy text",
    price: 23,
    isFavorite: true,
    rating: {
        rate: 2,
        count: 3
    }
}
test("Product with mock data", async () => {
    await act(async () => {
        render(
            <Product index={Math.random()} product={FilledData} onFav={onFav} />
        );
    });
});