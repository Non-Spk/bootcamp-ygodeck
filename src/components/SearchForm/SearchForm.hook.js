import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { getCardService } from "../../services";
import { useCardListStore } from "../../stores/CardListStore";

const useSearchForm = () => {
  const { register, watch } = useForm();
  const { setFetchCardList, fetchCard, setCardList } = useCardListStore();

  const Name = watch("Name");
  const Type = watch("Type") || "";
  const SubType = watch("SubType") || "";
  const Race = watch("Race") || "";
  const Attribute = watch("Attribute") || "";
  const Level = watch("Level") || "";
  const SortBy = watch("SortBy") || "name";
  const SortDir = watch("SortDir") || "ASC";

  const callData = useCallback(async () => {
    try {
      const response = await getCardService.getCardList();
      const data = response.data;
      setFetchCardList({ data: data, loading: false, error: null });
      setCardList({ data: data, loading: false, error: null });
    } catch (error) {
      setFetchCardList({ data: [], loading: false, error: error });
      console.error("Error fetching data", error);
    }
  }, [getCardService, setFetchCardList, setCardList]);

  const sortData = useCallback((data, sortBy, sortDir) => {
    switch (sortBy.toLowerCase()) {
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
          ? data.sort((a, b) => b.name.localeCompare(a.name))
          : data.sort((a, b) => a.name.localeCompare(b.name));
      case "level":
        return sortDir === "DESC"
          ? data.sort((a, b) => b.level - a.level)
          : data.sort((a, b) => a.level - b.level);
      default:
        return data;
    }
  }, []);

  const filterData = useCallback(() => {
    if (!fetchCard?.data) return [];

    let filteredData = fetchCard.data;

    if (Name) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(Name.toLowerCase())
      );
    }

    if (Type) {
      filteredData = filteredData.filter((item) => item.type.includes(Type));
    }

    if (SubType) {
      filteredData =
        Type === "Monster"
          ? filteredData.filter((item) =>
              item.type.includes(`${SubType} ${Type}`)
            )
          : filteredData.filter((item) => item.race.includes(SubType));
    }

    if (Race) {
      filteredData = filteredData.filter((item) => item.race.includes(Race));
    }

    if (Attribute && Type === "Monster") {
      filteredData = filteredData.filter((item) =>
        item.attribute.toUpperCase().includes(Attribute.toUpperCase())
      );
    }

    const NumLvl = Number(Level);
    if (Level && NumLvl !== 0) {
      filteredData = filteredData.filter((item) => item.level === NumLvl);
    }

    return sortData(filteredData, SortBy, SortDir);
  }, [
    fetchCard.data,
    Name,
    Type,
    SubType,
    Race,
    Attribute,
    Level,
    SortBy,
    SortDir,
    sortData
  ]);

  useEffect(() => {
    const fetchData = async () => {
      await callData();
    };
    fetchData();
  }, [callData]);

  useEffect(() => {
    const filteredData = filterData();
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
    setCardList,
    filterData
  ]);

  return {
    fieldName: register("Name"),
    fieldType: register("Type"),
    fieldSubType: register("SubType"),
    fieldRace: register("Race"),
    fieldAttribute: register("Attribute"),
    fieldLevel: register("Level"),
    fieldSortBy: register("SortBy"),
    fieldSortDir: register("SortDir")
  };
};

export { useSearchForm };
