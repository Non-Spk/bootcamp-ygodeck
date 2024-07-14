import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { cardGameData, sortCard } from "../../utils/optionList";
import { useSearchForm } from "./SearchForm.hook";
import { useBreakpointValue } from "@chakra-ui/react";

export default function SearchForm() {
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

  const isMenu = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    "2xl": false
  });

  const renderForm = () => (
    <FormControl>
      <Flex
        direction={{ base: "column", "2xl": "row" }}
        alignItems="left"
        gap="auto"
      >
        <Flex p={1}>
          <FormLabel fontSize="15px">Type</FormLabel>
          <Select
            {...fieldType}
            defaultValue="Monster"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {cardGameData.cardTypes.map((item, index) => (
              <option key={`type-${index}`} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">SubType</FormLabel>
          <Select
            {...fieldSubType}
            placeholder="Select All"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {Type &&
              cardGameData.subTypes[Type.replace(/\s+/g, "")]?.map(
                (item, index) => (
                  <option key={`subType-${index}`} value={item}>
                    {item}
                  </option>
                )
              )}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">Race</FormLabel>
          <Select
            {...fieldRace}
            placeholder="Select All"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {Type === "Monster" &&
              cardGameData.race.map((item, index) => (
                <option key={`race-${index}`} value={item}>
                  {item}
                </option>
              ))}
          </Select>
        </Flex>
        <Flex p={1} fontSize="15px">
          <FormLabel>Attribute</FormLabel>
          <Select
            {...fieldAttribute}
            placeholder="Select All"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {cardGameData.attribute.map((item, index) => (
              <option key={`attribute-${index}`} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">Level</FormLabel>
          <Select
            {...fieldLevel}
            placeholder="Select All"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {[...Array(12)].map((_, index) => (
              <option key={`level-${index + 1}`} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">SortBy</FormLabel>
          <Select
            {...fieldSortBy}
            defaultValue="Name"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {sortCard.sortBy.map((item, index) => (
              <option key={`sortBy-${index}`} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">SortDir</FormLabel>
          <Select
            {...fieldSortDir}
            defaultValue="ASC"
            sx={{ _focus: { color: "primary.400" } }}
            size="xs"
          >
            {sortCard.sortDir.map((item, index) => (
              <option key={`sortDir-${index}`} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex p={1}>
          <FormLabel fontSize="15px">Search</FormLabel>
          <Flex align="top">
            <Input
              {...fieldName}
              placeholder="Search"
              flex="1"
              mr={2}
              size="xs"
            />
          </Flex>
        </Flex>
      </Flex>
    </FormControl>
  );

  return isMenu ? (
    <Menu>
      <MenuButton
        as={Button}
        p="8px"
        boxSize={{
          base: "4px",
          sm: "8px",
          md: "30px",
          lg: "30px",
          xl: "50px",
          "2xl": "60px"
        }}
        transition="all 0.5s"
        borderRadius="md"
        borderWidth="1px"
      >
        <SearchIcon />
      </MenuButton>
      <MenuList>
        <form onSubmit={onSubmit}>{renderForm()}</form>
      </MenuList>
    </Menu>
  ) : (
    <form onSubmit={onSubmit}>{renderForm()}</form>
  );
}
