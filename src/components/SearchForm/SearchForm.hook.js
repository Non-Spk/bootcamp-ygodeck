import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getCardService } from "../../services/";
import { useCardListStore } from "../../stores/CardListStore";

const useSearchForm = () => {
  const { register, watch } = useForm();

  const { setFetchCardList, fetchCard, setCardList, card } = useCardListStore();
  const Name = watch("Name");
  const Type = watch("Type");
  const SubType = watch("SubType");
  const Race = watch("Race");
  const Attribute = watch("Attribute");
  const Level = watch("Level");
  const SortBy = watch("SortBy");
  const SortDir = watch("SortDir");

  const callData = async () => {
    try {
      const response = await getCardService.getCardList();
      const data = response.data;
      setFetchCardList({ data: data, loading: false, error: null });
      setCardList({ data: data, loading: false, error: null });
      console.log("RAW_data", data);
    } catch (error) {
      setFetchCardList({ data: [], loading: false, error: error });
      console.error("Error fetching data", error);
    }
  };

  const sortData = (data, SortBy, SortDir) => {
    const LowerSortBy = String(SortBy).toLowerCase();
    switch (LowerSortBy) {
      case "atk":
        return SortDir === "DESC"
          ? data.sort((a, b) => b.atk - a.atk)
          : data.sort((a, b) => a.atk - b.atk);
      case "def":
        return SortDir === "DESC"
          ? data.sort((a, b) => b.def - a.def)
          : data.sort((a, b) => a.def - b.def);
      case "name":
        return SortDir === "DESC"
          ? data.sort((a, b) =>
              b.name > a.name ? 1 : a.name > b.name ? -1 : 0
            )
          : data.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            );
      case "level":
        return SortDir === "DESC"
          ? data.sort((a, b) => b.level - a.level)
          : data.sort((a, b) => a.level - b.level);
      default:
        return data.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
    }
  };

  const filterData = (
    Name,
    Type,
    SubType,
    Race,
    Attribute,
    Level,
    SortBy,
    SortDir
  ) => {
    const nameFilter = fetchCard.data.filter((item) =>
      item.name.toLowerCase().includes(Name?.toLowerCase())
    );

    const typeFilter =
      Type !== null
        ? nameFilter.filter((item) => item.type.includes(Type))
        : nameFilter;

    const subTypeFilter =
      SubType !== null && Type === "Monster"
        ? typeFilter.filter((item) => item.type.includes(`${SubType} ${Type}`))
        : SubType !== null
        ? typeFilter.filter((item) => item.race.includes(SubType))
        : typeFilter;

    const raceFilter =
      Race !== null
        ? subTypeFilter.filter((item) => item.race.includes(Race))
        : subTypeFilter;

    const attributeFilter =
      Attribute !== null && Type === "Monster"
        ? raceFilter.filter((item) =>
            item.attribute.toUpperCase().includes(Attribute.toUpperCase())
          )
        : raceFilter;

    const NumLvl = Number(Level);
    const levelFilter =
      Level !== null && NumLvl !== 0
        ? attributeFilter.filter((item) => item.level === NumLvl)
        : attributeFilter;

    return sortData(levelFilter, SortBy, SortDir);
  };

  useEffect(() => {
    callData();
  }, []);

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
    console.log("filteredData", filteredData);
  }, [Name, Type, SubType, Race, Attribute, Level, SortBy, SortDir, fetchCard]);

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
