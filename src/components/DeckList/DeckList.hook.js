import { useDeckStore } from "../../stores/CardDeckStore";

const useMainDeckCard = () => {
  const { setMainDeck, MainDeck } = useDeckStore();

  const setMainDeckCard = (data) => {
    const updatedMainDeck = MainDeck.data;

    const cardCount = updatedMainDeck.filter(
      (item) => item.id === data.id
    ).length;

    if (cardCount < 3) {
      updatedMainDeck.push(data);

      setMainDeck({
        ...MainDeck,
        data: updatedMainDeck
      });

      console.log("Added to MainDeck:", updatedMainDeck);
    } else {
      console.log(
        `Cannot add more than 3 duplicates of card ${data.id} to MainDeck.`
      );
    }
  };

  const editMainDeckCard = (index) => {
    const updatedMainDeck = MainDeck.data.filter((item, idx) => idx !== index);

    setMainDeck({
      ...MainDeck,
      data: updatedMainDeck
    });

    console.log("Edited MainDeck:", updatedMainDeck);
  };

  return { setMainDeckCard, editMainDeckCard };
};

const useExtraDeckCard = () => {
  const { setExtraDeck, ExtraDeck } = useDeckStore();

  const setExtraDeckCard = (data) => {
    const updatedExtraDeck = ExtraDeck.data;

    const cardCount = updatedExtraDeck.filter(
      (item) => item.id === data.id
    ).length;

    if (cardCount < 3) {
      updatedExtraDeck.push(data);

      setExtraDeck({
        ...ExtraDeck,
        data: updatedExtraDeck
      });

      console.log("Added to ExtraDeck:", updatedExtraDeck);
    } else {
      console.log(
        `Cannot add more than 3 duplicates of card ${data.id} to ExtraDeck.`
      );
    }
  };

  const editExtraDeckCard = (index) => {
    const updatedExtraDeck = ExtraDeck.data.filter(
      (item, idx) => idx !== index
    );

    setExtraDeck({
      ...ExtraDeck,
      data: updatedExtraDeck
    });

    console.log("Edited ExtraDeck:", updatedExtraDeck);
  };

  return { setExtraDeckCard, editExtraDeckCard };
};

const useSideDeckCard = () => {
  const { setSideDeck, SideDeck } = useDeckStore();

  const setSideDeckCard = (data) => {
    const updatedSideDeck = SideDeck.data;

    const cardCount = updatedSideDeck.filter(
      (item) => item.id === data.id
    ).length;

    if (cardCount < 3) {
      updatedSideDeck.push(data);

      setSideDeck({
        ...SideDeck,
        data: updatedSideDeck
      });

      console.log("Added to SideDeck:", updatedSideDeck);
    } else {
      console.log(
        `Cannot add more than 3 duplicates of card ${data.id} to SideDeck.`
      );
    }
  };

  const editSideDeckCard = (index) => {
    const updatedSideDeck = SideDeck.data.filter((item, idx) => idx !== index);

    setSideDeck({
      ...SideDeck,
      data: updatedSideDeck
    });

    console.log("Edited SideDeck:", updatedSideDeck);
  };

  return { setSideDeckCard, editSideDeckCard };
};

export { useMainDeckCard, useExtraDeckCard, useSideDeckCard };
