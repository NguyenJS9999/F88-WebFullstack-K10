export const generateSKU = (productName, attributes) => {
  const formattedName = productName.replace(/\s+/g, "-").toUpperCase();
  const formattedAttributes = attributes.replace(/\s+/g, "-").toUpperCase();
  return `${formattedName}_${formattedAttributes}_${Date.now()}`;
};
