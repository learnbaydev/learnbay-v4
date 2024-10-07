import fs from 'fs/promises';
import path from 'path';

export async function getPageData(id) {
  try {
    const filePath = path.resolve(process.cwd(), 'src', 'pageData', 'datascience', `${id}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { error: '404 Error: Page data not found' };
    }
    console.error('Error loading page data:', error);
    return { error: 'An unexpected error occurred while loading page data' };
  }
}
