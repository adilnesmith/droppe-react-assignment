import React from "react";
import { render, act } from "@testing-library/react";
import ProductList from "./index";
const EmptyData = [
    {
        title: "",
        description: "",
        price: 0,
        isFavorite: true,
        rating: {
            rate: 0,
            count: 0
        }
    }, {
        title: "",
        description: "",
        price: 0,
        isFavorite: true,
        rating: {
            rate: 0,
            count: 0
        }
    }
]
const onFav = jest.fn();
test("Product list empty data", async () => {
    await act(async () => {
        render(
            <ProductList products={EmptyData} onFav={onFav} />
        );
    });
});
const FilledData = [
    {
        title: "Lorem ipsum",
        description: "some dummy text",
        price: 23,
        isFavorite: true,
        rating: {
            rate: 2,
            count: 3
        }
    },
    {
        title: "Lorem ipsum2",
        description: "some dummy text3",
        price: 23,
        isFavorite: false,
        rating: {
            rate: 4,
            count: 2
        }
    },
]
test("Product list with mock data", async () => {
    await act(async () => {
        render(
            <ProductList products={FilledData} onFav={onFav} />
        );
    });
});