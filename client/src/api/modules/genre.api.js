import publicClient from "../client/public.client";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

const genreApi = {
  detail: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        genreEndpoints.list({ mediaType })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;
