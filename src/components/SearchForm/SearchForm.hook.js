import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { getCardService } from "../../services/";
import { useCardListStore } from "../../stores/CardListStore";

const useSearchForm = () => {
  const { register, watch } = useForm();
  const { setFetchCardList, fetchCard, setCardList } = useCardListStore();

  const Name = watch("Name");
  const Type = watch("Type");
  const SubType = watch("SubType");
  const Race = watch("Race");
  const Attribute = watch("Attribute");
  const Level = watch("Level");
  const SortBy = watch("SortBy");
  const SortDir = watch("SortDir");

  const callData = useCallback(async () => {
    try {
      const response = await getCardService.getCardList();
      const data = response.data;
      setFetchCardList({ data, loading: false, error: null });
      setCardList({ data, loading: false, error: null });
    } catch (error) {
      setFetchCardList({ data: [], loading: false, error });
    }
  }, [setFetchCardList, setCardList]);

  const sortData = (data, sortBy, sortDir) => {
    const lowerSortBy = String(sortBy).toLowerCase();
    switch (lowerSortBy) {
      case "atk":
        return sortDir === "DESC"
          ? data.sort((a, b) => b.atk - a.atk)
          : data.sort((a, b) => a.atk - b.atk);
      case "def":
        return sortDir === "DESC"
          ? data.sort((a, b) => b.def - a.def)
          : data.sort((a, b) => a.def - b.def);
      case "name":
        return sortDir === "DESC"
          ? data.sort((a, b) => (b.name > a.name ? 1 : -1))
          : data.sort((a, b) => (a.name > b.name ? 1 : -1));
      case "level":
        return sortDir === "DESC"
          ? data.sort((a, b) => b.level - a.level)
          : data.sort((a, b) => a.level - b.level);
      default:
        return data.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  };

  const filterData = useCallback(
    (name, type, subType, race, attribute, level, sortBy, sortDir) => {
      const nameFilter = fetchCard.data.filter((item) =>
        item.name.toLowerCase().includes(name?.toLowerCase())
      );

      const typeFilter =
        type !== null
          ? nameFilter.filter((item) => item.type.includes(type))
          : nameFilter;

      const subTypeFilter =
        subType !== null && type === "Monster"
          ? typeFilter.filter((item) =>
              item.type.includes(`${subType} ${type}`)
            )
          : subType !== null
          ? typeFilter.filter((item) => item.race.includes(subType))
          : typeFilter;

      const raceFilter =
        race !== null
          ? subTypeFilter.filter((item) => item.race.includes(race))
          : subTypeFilter;

      const attributeFilter =
        attribute !== null && type === "Monster"
          ? raceFilter.filter((item) =>
              item.attribute.toUpperCase().includes(attribute.toUpperCase())
            )
          : raceFilter;

      const numLevel = Number(level);
      const levelFilter =
        level !== null && numLevel !== 0
          ? attributeFilter.filter((item) => item.level === numLevel)
          : attributeFilter;

      return sortData(levelFilter, sortBy, sortDir);
    },
    [fetchCard.data]
  );

  useEffect(() => {
    callData();
  }, [callData]);

  useEffect(() => {
    const filteredData = filterData(
      Name,
      Type || "Monster",
      SubType,
      Race,
      Attribute,
      Level,
      SortBy || "name",
      SortDir || "ASC"
    );
    setCardList({ data: filteredData, loading: false, error: null });
  }, [
    Name,
    Type,
    SubType,
    Race,
    Attribute,
    Level,
    SortBy,
    SortDir,
    fetchCard,
    filterData,
    setCardList
  ]);

  return {
    fieldName: register("Name"),
    fieldType: register("Type"),
    fieldSubType: register("SubType"),
    fieldRace: register("Race"),
    fieldAttribute: register("Attribute"),
    fieldLevel: register("Level"),
    fieldSortBy: register("SortBy"),
    fieldSortDir: register("SortDir"),
    Type
  };
};

export { useSearchForm };
