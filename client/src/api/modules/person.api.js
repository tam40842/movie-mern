import publicClient from "../client/public.client.js";

const personEndpoitns = {
  detail: ({ personId }) => `reviews/${personId}`,
  medias: ({ personId }) => `reviews/${personId}/medias`,
};

const personApi = {
  detail: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndpoitns.detail({ personId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  medias: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndpoitns.medias({ personId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  getList: async () => {
    try {
      const response = await publicClient.get(personEndpoitns.list);
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default personApi;
