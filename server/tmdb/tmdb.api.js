import axiosClient from "../axios/axios.client.js"
import tmdbEndPoints from "./tmdb.endpoints.js"

/* Quản lí api, tham số truyền vô */
const tmdbApi = {
    mediaList: async ({ mediaType, mediaCategory, page }) => axiosClient.get(
        tmdbEndPoints.mediaList({ mediaType, mediaCategory, page }),
    ),
    mediaDetail: async ({ mediaType, page }) => await axiosClient.get(
        tmdbEndPoints.mediaDetail({ mediaType, page }),
    ),
    mediaGenres: async ({ mediaType }) => await axiosClient.get(
        tmdbEndPoints.mediaGenres({ mediaType }),
    ),
    mediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndPoints.mediaCredits({ mediaType, mediaId }),
    ),
    mediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndPoints.mediaVideos({ mediaType, mediaId }),
    ),
    mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndPoints.mediaImages({ mediaType, mediaId }),
    ),
    mediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndPoints.mediaRecommend({ mediaType, mediaId }),
    ),
    mediaSearch: async ({ mediaType, queyr, page }) => await axiosClient.get(
        tmdbEndPoints.mediaSearch({ mediaType, queyr, page }),
    ),
    personDetail: async ({ personId }) => await axiosClient.get(
        tmdbEndPoints.personDetail({ personId })
    ),
    personMedias: async ({ personId }) => await axiosClient.get(
        tmdbEndPoints.personMedias({ personId })
    ),
}

export default tmdbApi
