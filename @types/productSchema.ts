type ProductSizesNumber = {
    [key: number]: boolean | number;
}

type ProductSizesLetter = {
    P: number | boolean,
    M: number | boolean,
    G: number | boolean,
    GG: number | boolean,
}

type ProductTypes = ProductSizesNumber | ProductSizesLetter;

type ProductSchema = {
    id?: string | number,
    created_at?: string,
    title: string,
    description?: string,
    product_categories: string,
    bucket_name: string;
    bucket_folder: string;
    // sizes_available?: ProductTypes[],
    sizes_available?: any,
    price?: number,
    product_available: boolean,
    type_product_sizes?: "letter" | "numeric",
}

type BucketProps = Pick<ProductSchema, "bucket_name" | "bucket_folder">;

export type {
    ProductSchema,
    BucketProps,
    ProductTypes,
    ProductSizesNumber,
    ProductSizesLetter,
};