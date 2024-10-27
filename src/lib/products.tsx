import fs from 'fs';
import path from 'path';

interface Products {
  mainCategoryId: number
  mainCategoryName: string
  subCategory: SubCategory[]
}
interface SubCategory {
  id: number
  name: string
  items: SubCategoryItem[]
}
interface SubCategoryItem {
  id: number
  name: string,
  description: string
  price: number
  inventory: number
  brandId: number
  brandName: number
}

const jsonDirectory = path.join(process.cwd(), './src/json');

export function getSortedProductsData(): Products[] {
  if (!fs.existsSync(jsonDirectory)) {
    throw new Error(`Directory not found: ${jsonDirectory}`);
  }

  const fileNames = fs.readdirSync(jsonDirectory);
  
  const allData: Products[] = fileNames.flatMap((fileName) => {
    const fullPath = path.join(jsonDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const data = JSON.parse(fileContents);
    
    return Object.values(data);
  });

  return allData;
}