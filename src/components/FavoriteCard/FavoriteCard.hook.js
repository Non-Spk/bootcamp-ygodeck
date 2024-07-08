import { useFavoriteStore } from "../../stores/CardFavStore";

const useFavoriteCard = () => {
  const { setFavorite, Favorite } = useFavoriteStore();

  const setFavoriteCard = (data) => {
    if (!Favorite.data.some((item) => item.id === data.id)) {
      const updatedData = [...Favorite.data, data];

      setFavorite({
        data: updatedData,
        loading: false,
        error: null
      });

      console.log("FavoriteCard", updatedData);
    } else {
      console.log(`Data with id ${data.id} already exists in favorites.`);
    }
  };

  const editFavoriteCard = (index) => {
    const newData = Favorite.data.filter((item, idx) => idx !== index);

    setFavorite({
      data: newData,
      loading: false,
      error: null
    });

    console.log("FavoriteCard", newData);
  };

  return { setFavoriteCard, editFavoriteCard };
};

export default useFavoriteCard;
