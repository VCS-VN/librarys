import { IOption, IProduct, IVariant } from '@/interfaces';

export function mapProduct(products: any[], resource: any[]): IProduct[] {
  const result = (resource || [])?.map((p) => {
    const product = products.find((pr) => pr?.id === p.id);
    return {
      id: product.id,
      name: product.name,
      quantity: 0,
      price: product.price,
      variants: mapVariants(product.variants),
      category: product.category,
    };
  });

  return result;
}

export function mapVariants(variants: any[]): IVariant[] {
  const result: IVariant[] = (variants || [])?.map((v) => {
    return {
      id: v.id,
      type: v.type,
      name: v.name,
      options: mapOptions(v.options),
    };
  });

  return result;
}

export function mapOptions(options: any[]): IOption[] {
  const result = (options || [])?.map((o) => {
    return {
      id: o.id,
      value: o.value,
      price: o.price,
      metadata: o.metadata,
      quantity: 0,
    };
  });

  return result;
}
