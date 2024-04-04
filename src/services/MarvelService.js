import { useHttp } from "../hooks/http.hook";
import nextId from "react-id-generator";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=e51b46617e4ee1112fd68018d5328f78";
  const _BaseOffset = 210;

  const getAllCharacters = async (offset = _BaseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (character) => {
    const uniqeId = parseInt(nextId(character.id));

    console.log(uniqeId);

    return {
      id: character.id,
      uniqeId: uniqeId,
      name: character.name,
      description: character.description
        ? `${character.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    };
  };

  const _transformComics = (comics) => {
    const uniqeId = parseInt(nextId(comics.id));

    return {
      id: comics.id,
      uniqeId: uniqeId,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      // optional chaining operator
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
    };
  };

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    getAllComics,
    getComic,
    clearError,
  };
};

export default useMarvelService;
