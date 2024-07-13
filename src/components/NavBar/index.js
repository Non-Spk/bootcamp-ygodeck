import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavBar() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        px={4}
        py={2}
        transition="all 0.5s"
        borderRadius="md"
        borderWidth="1px"
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
        <Link to="/">
          <MenuItem>HOME</MenuItem>
        </Link>
        <Link to="/card-database">
          <MenuItem>DATABASE</MenuItem>
        </Link>
        <Link to="/deck-builder">
          <MenuItem>BUILDER</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
