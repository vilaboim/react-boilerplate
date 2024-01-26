import { GET } from "./base";

const getPerson = async ({ id }: { id: number }) => {
  return await GET({ endpoint: `people/${id}` });
};

export { getPerson };
