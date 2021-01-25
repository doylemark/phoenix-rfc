export interface MdxQuery {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string;
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
}
