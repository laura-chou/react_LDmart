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

const jsonDirectory = path.join(process.cwd(), './src/json');

export function getSortedProductsData(): ProductsData[] {
  if (!fs.existsSync(jsonDirectory)) {
    throw new Error(`Directory not found: ${jsonDirectory}`);
  }

  const fileNames = fs.readdirSync(jsonDirectory);
  
  const allData: ProductsData[] = fileNames.flatMap((fileName) => {
    const fullPath = path.join(jsonDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const data = JSON.parse(fileContents);
    
    return Object.values(data);
  });

  return allData;
}