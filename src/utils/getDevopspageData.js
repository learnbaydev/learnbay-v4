import fs from "fs";
import path from "path";

export async function getPageData(id) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "pageData",
    "devops",
    `${id}.json`
  );

  try {
    if (!fs.existsSync(filePath)) {
      return { error: "404 Error: Page data not found" };
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data;
  } catch (error) {
    console.error("Error loading page data:", error);
    return { error: error.message };
  }
}
