import { useEffect, useState } from "react"
import api from "../libs/api"
import { set } from "zod/v4"

interface ItemInterface {
    id: number
    name: string
    price: number
}
const Jonas = () => {
    const [productList, setProductList] = useState<ItemInterface[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            api.get("/products").then((response) => {
                setProductList(response.data);
            }).catch((error) => {
                console.error(error);
            });
        }

        fetchProducts();
    }, []);
    // const listFood: ItemInterface[] = [
    //     {
    //         id: 1,
    //         name: "payagua",
    //         description: 'food'
    //     },
    //     {
    //         id: 2,
    //         name: "pastel mandi'o",
    //         description: 'food'
    //     }
    // ]
    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Jonas
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {productList.map((food, id) => (
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96" key={id}>
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                            <span className="text-sm text-slate-600 font-medium">
                                {food.name}
                            </span>
                        </div>

                        <div className="p-4">
                            <p className="text-slate-600 leading-normal font-light">
                                {food.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Jonas
