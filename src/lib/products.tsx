import fs from 'fs';
import path from 'path';

interface ProductsData {
  id: number;
  name: string;
  description: string;
  mainCategoryId: number;
  mainCategoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  price: number;
  inventory: number;
  brandId: number;
  brandName: string;
}

const jsonDirectory = path.join(process.cwd(), 'json');

export function getSortedProductsData(): ProductsData[] {
  const fileNames = fs.readdirSync(jsonDirectory);
  
  const allPostsData: ProductsData[] = fileNames.map((fileName) => {
    const id = parseInt(fileName.replace(/\.json$/, ''), 10);

    const fullPath = path.join(jsonDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const postData = JSON.parse(fileContents) as Omit<ProductsData, 'id'>;

    return {
      id,
      ...postData,
    };
  });

  return allPostsData
}