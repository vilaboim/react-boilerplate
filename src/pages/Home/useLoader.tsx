import { people } from "@services";
import { useQuery } from "@tanstack/react-query";
import { lodash } from "@helpers";

function useLoader({ id }: { id: number }) {
  const result = useQuery({
    queryKey: ["person", id],
    queryFn: async () => await people.getPerson({ id }),
    enabled: !lodash.isNil(id),
  });

  return result;
}

export { useLoader };
