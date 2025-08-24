const input = [
  {
    id: "p1",
    name: "Cotton T‑Shirt",
    variants: [
      { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 10 },
      { sku: "TS-RED-L", color: "red", size: "L", price: 499, stock: 0 },
    ],
  },
  {
    id: "p2",
    name: "Cotton T‑Shirt",
    variants: [
      { sku: "TS-BLK-M", color: "black", size: "M", price: 549, stock: 2 },
      { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 5 },
    ],
  },
];

function countUniqueAndDuplicates(arr) {
  const unique = new Set(arr);
  const uniqueCount = unique.size;
  const duplicateCount = arr.length - uniqueCount;

  return { uniqueCount, duplicateCount };
}

const getSkuDetails = () => {
  const variants = input.flatMap((product) =>
    product.variants.map((variant) => ({
      ...variant,
      productId: product.id,
      productName: product.name,
    }))
  );

  console.log("variants", variants);
  const skus = variants.map((variant) => variant.sku);

  console.log("skus", skus);
  const { uniqueCount, duplicateCount } = countUniqueAndDuplicates(skus);
  const result = {};

  variants.forEach((variant) => {
    const key = variant.sku;
    if (!result[key]) {
      result[key] = {
        productId: [variant.productId],
        productName: variant.productName,
        attributes: {
          color: variant.color,
          size: variant.size,
        },
        price: variant.price,
        stock: variant.stock,
      };
    } else {
      result[key].stock += variant.stock;
      if (!result[key].productId.includes(variant.productId)) {
        result[key].productId.push(variant.productId);
      }
    }
  });
  result.status = { totalSkus: uniqueCount, duplicated: duplicateCount };

  console.log(result);
};
getSkuDetails();