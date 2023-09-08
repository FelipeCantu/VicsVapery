import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '9la5iz9r',
  dataset: 'production',
  useCdn: false, // Set to true for production
});

export async function fetchProducts() {
  const query = '*[_type == "post"]'; // Adjust your query based on your schema
  const products = await client.fetch(query);
  return products;
}