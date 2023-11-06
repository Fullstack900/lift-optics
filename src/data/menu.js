import {
  MenuFilled,
  downloadIcon,
  gridIcon,
  listFilled,
  replaceIcon,
  uploadIcon,
} from "../assets";

export const menuItems = [
  {
    name: "Customers",
    options: false,
  },
  {
    name: "Database",
    options: true,
    items: [
      {
        name: "Frame",
        color: "#f0f0f0",
      },
      {
        name: "Lens",
      },
      {
        name: "Coating",
      },
    ],
  },
  {
    name: "Mapping",
    options: false,
  },
  {
    name: "Users",
    options: false,
  },
];

export const buttonsData = [
  {
    buttonIcon: gridIcon,
    buttonText: "Columns",
  },
  {
    buttonIcon: listFilled,
    buttonText: "Filter",
  },
  {
    buttonIcon: MenuFilled,
    buttonText: "Density",
  },
  {
    buttonIcon: replaceIcon,
    buttonText: "Replace",
  },
  {
    buttonIcon: uploadIcon,
    buttonText: "Upload",
  },
  {
    buttonIcon: downloadIcon,
    buttonText: "Download",
  },
];
