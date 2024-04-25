import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useProductsContext } from "@/app/Context/ProductsContext";
interface IBrands {
  title: string;
  pk: number;
}
interface IModel {
  allegro_title: string;
  pk: number;
}
interface ICategory {
  title: string;
  allegro_id: number;
}

export function CardWithForm() {
  const [brands, setBrands] = useState<Array<IBrands>>([]);
  const [models, setModels] = useState<Array<IModel>>([]);
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [subcategories, setSubCategories] = useState<Array<ICategory>>([]);
  const { products, setProducts } = useProductsContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  useEffect(() => {
    getProducts();
    getCarBrands();
  }, []);
  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {};
  const getProducts = async () => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.result);
      })
      .catch((err) => {});
  };
  const getCarBrands = async () => {
    axios
      .get("/api/brand")
      .then((res) => {
        console.log(res.data);
        setBrands(res.data.brands);
      })
      .catch((err) => {});
  };
  const getCarModels = async (pk: string) => {
    axios
      .post("/api/model", { pk: pk })
      .then((res) => {
        setModels(res.data.models);
        console.log(res.data.models);
      })
      .catch((err) => {});
  };
  const getCarCategories = async (pk: string) => {
    axios
      .post("/api/category", { pk: pk })
      .then((res) => {
        setCategories(res.data.categories.categories);
        console.log(res.data.categories.categories);
      })
      .catch((err) => {});
  };
  const getCarSubCategories = async (pk: string) => {
    axios
      .post("/api/subcategory", { pk: pk })
      .then((res) => {
        setSubCategories(res.data.subcategories.categories);
      })
      .catch((err) => {});
  };
  const handleBrandChange = (pk: string) => {
    setBrand(pk);
    getCarModels(pk);
  };
  const handleModelChange = (pk: string) => {
    console.log(pk);
    setModel(pk);

    getCarCategories(pk);
  };
  const handleCategoryChange = (pk: string) => {
    setCategory(pk);
    getCarSubCategories(pk);
  };
  const handleSubCategoryChange = (pk: string) => {
    setSubcategory(pk);
  };

  return (
    <Card className="lg:w-[421px] w-full">
      <CardHeader>
        <CardTitle className="flex justify-center">Фільтр запчастин</CardTitle>
      </CardHeader>
      <CardContent className="bg-secondary">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select onValueChange={(e) => handleBrandChange(e)} value={brand}>
                <SelectTrigger
                  id="framework"
                  className="mt-4"
                  style={{ borderRadius: "45px" }}
                >
                  <SelectValue placeholder="Марка авто" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {brands?.map((brand, index) => {
                    return (
                      <SelectItem value={brand.pk.toString()} key={index}>
                        {brand.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select onValueChange={(e) => handleModelChange(e)} value={model}>
                <SelectTrigger
                  id="framework"
                  className="mt-3"
                  style={{ borderRadius: "45px" }}
                >
                  <SelectValue placeholder="Модель авто" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {models?.map((model, index) => {
                    return (
                      <SelectItem value={model.pk.toString()} key={index}>
                        {model.allegro_title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select
                onValueChange={(e) => handleCategoryChange(e)}
                value={category}
              >
                <SelectTrigger
                  id="framework"
                  className="mt-3"
                  style={{ borderRadius: "45px" }}
                >
                  <SelectValue placeholder="Тип запчастини" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {categories?.map((category) => {
                    return (
                      <SelectItem value={category.allegro_id.toString()}>
                        {category.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select
                onValueChange={(e) => handleSubCategoryChange(e)}
                value={subcategory}
              >
                <SelectTrigger
                  id="framework"
                  className="mt-3"
                  style={{ borderRadius: "45px" }}
                >
                  <SelectValue placeholder="Оберіть запчастину" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {subcategories?.map((category) => {
                    return (
                      <SelectItem value={category.allegro_id.toString()}>
                        {category.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="mt-3 flex justify-between">
        <Button
          className="w-full text-white"
          style={{ borderRadius: "45px" }}
          onClick={(e) => handleSearch(e)}
        >
          Знайти
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardWithForm;
