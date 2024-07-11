import React from "react";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Fragment, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ChakraProvider,
  Flex,
  Box,
} from "@chakra-ui/react";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-center items-center gap-10 py-2 px-3">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
        <input
          placeholder="Search for Products, Brand and More"
          className="w-6/12 px-2 py-2 bg-gray-50 border-none"
        />
        <ChakraProvider>
          <Menu>
            <MenuButton
              as={Button}
              className="px-4 py-3 text-white rounded-lg"
              backgroundColor={"blue"}
              textColor={"white"}
            >
              Login
            </MenuButton>
            <MenuList className="border">
              <Flex justify="space-between" px="4" py="2">
                <Box>New customer?</Box>
                <Box color="blue.500" fontWeight="bold">
                  Sign Up
                </Box>
              </Flex>
              <MenuItem icon={<CgProfile />}>My Profile</MenuItem>
              <MenuItem icon={<SiMaterialdesignicons />}>
                Flipkart Plus Zone
              </MenuItem>
              <MenuItem icon={<BsFillBoxSeamFill />}>Orders</MenuItem>
              <MenuItem icon={<CiHeart />}>Wishlist</MenuItem>
              <MenuItem icon={<FaGift />}>Rewards</MenuItem>
              <MenuItem icon={<MdOutlineCardGiftcard />}>Gift Cards</MenuItem>
            </MenuList>
          </Menu>
        </ChakraProvider>
        <button className="flex items-center justify-center gap-3">
          {" "}
          <IoCartOutline className="text-2xl" /> Cart
        </button>
        <button className="flex items-center justify-center gap-3">
          {" "}
          <AiOutlineShop className="text-2xl" /> Become a Seller
        </button>
      </div>
    </nav>
  );
};

export default Header;
