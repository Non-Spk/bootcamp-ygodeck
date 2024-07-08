import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input
} from "@chakra-ui/react";
import { cardGameData, sortCard } from "../../utils/optionList";
import { useSearchForm } from "./SearchForm.hook";
import { useEffect } from "react";

function SearchForm() {
  const {
    onSubmit,
    fieldName,
    fieldType,
    fieldSubType,
    fieldRace,
    fieldAttribute,
    fieldLevel,
    fieldSortBy,
    fieldSortDir,
    Type
  } = useSearchForm();

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <Flex minWidth="1200" alignItems="center" gap="2">
          <Box p="4" flex="1">
            <FormLabel>Type</FormLabel>
            <Select
              {...fieldType}
              defaultValue="Monster"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {cardGameData.cardTypes.map((item, index) => (
                <option
                  key={`type-${index}`}
                  value={item}
                  sx={{ color: "primary.400" }}
                >
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>SubType</FormLabel>
            <Select
              {...fieldSubType}
              placeholder="Select All"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {Type &&
                cardGameData.subTypes[Type.replace(/\s+/g, "")]?.map(
                  (item, index) => (
                    <option
                      key={`subType-${index}`}
                      value={item}
                      style={{ color: "var(--primary-400)" }}
                    >
                      {item}
                    </option>
                  )
                )}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>Race</FormLabel>
            <Select
              {...fieldRace}
              placeholder="Select All"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {Type === "Monster" &&
                cardGameData.race.map((item, index) => (
                  <option
                    key={`race-${index}`}
                    value={item}
                    sx={{ color: "primary.400" }}
                  >
                    {item}
                  </option>
                ))}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>Attribute</FormLabel>
            <Select
              {...fieldAttribute}
              placeholder="Select All"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {cardGameData.attribute.map((item, index) => (
                <option
                  key={`attribute-${index}`}
                  value={item}
                  sx={{ color: "primary.400" }}
                >
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>Level</FormLabel>
            <Select
              {...fieldLevel}
              placeholder="Select All"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {[...Array(12)].map((_, index) => (
                <option
                  key={`level-${index + 1}`}
                  value={index + 1}
                  sx={{ color: "primary.400" }}
                >
                  {index + 1}
                </option>
              ))}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>SortBy</FormLabel>
            <Select
              {...fieldSortBy}
              defaultValue="Name"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {sortCard.sortBy.map((item, index) => (
                <option
                  key={`sortBy-${index}`}
                  value={item}
                  sx={{ color: "primary.400" }}
                >
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Box p="4" flex="1">
            <FormLabel>SortDir</FormLabel>
            <Select
              {...fieldSortDir}
              defaultValue="ASC"
              sx={{ _focus: { color: "primary.400" } }}
            >
              {sortCard.sortDir.map((item, index) => (
                <option
                  key={`sortDir-${index}`}
                  value={item}
                  sx={{ color: "primary.400" }}
                >
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Box p="4" flex="2">
            <FormLabel>Search</FormLabel>
            <Flex align="center">
              <Input {...fieldName} placeholder="Search" flex="1" mr={2} />
            </Flex>
          </Box>
        </Flex>
      </FormControl>
    </form>
  );
}

export default SearchForm;
