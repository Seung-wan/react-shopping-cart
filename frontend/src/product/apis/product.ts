import axiosInstance from '@/apis/axiosInstance';

import { ProductsDto, TProduct } from '@/types/product';

class ProductApi {
  async getProducts() {
    const { data } = await axiosInstance.instance.get<ProductsDto>('/products');

    return data;
  }

  async getProductById(id: number) {
    const { data } = await axiosInstance.instance.get<TProduct>(`/products/${id}`);

    return data;
  }
}

const productApi = new ProductApi();

export default productApi;
