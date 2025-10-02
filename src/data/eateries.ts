export interface EateryDetail {
  imageUrl: string;
  descriptionKey: string;
}

export interface Eatery {
  id: string;
  name: string;
  logoUrl: string;
  phone: string;
  details: EateryDetail[];
}

export const eateries: Eatery[] = [
  {
    id: "kfc",
    name: "KFC",
    logoUrl: "/brands/KFC edited.webp",
    phone: "+20-123-456-7890",
    details: [
      {
        imageUrl: "/eateries/kfc/item1.webp",
        descriptionKey: "eateries.kfc.detail1"
      },
      {
        imageUrl: "/eateries/kfc/item2.webp",
        descriptionKey: "eateries.kfc.detail2"
      },
      {
        imageUrl: "/eateries/kfc/item3.webp",
        descriptionKey: "eateries.kfc.detail3"
      }
    ]
  },
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    logoUrl: "/brands/pizza hut edited.webp",
    phone: "+20-123-456-7891",
    details: [
      {
        imageUrl: "/eateries/pizza-hut/item1.webp",
        descriptionKey: "eateries.pizza_hut.detail1"
      },
      {
        imageUrl: "/eateries/pizza-hut/item2.webp",
        descriptionKey: "eateries.pizza_hut.detail2"
      },
      {
        imageUrl: "/eateries/pizza-hut/item3.webp",
        descriptionKey: "eateries.pizza_hut.detail3"
      }
    ]
  },
  {
    id: "hardees",
    name: "Hardees",
    logoUrl: "/brands/hardees edited.webp",
    phone: "+20-123-456-7892",
    details: [
      {
        imageUrl: "/eateries/hardees/item1.webp",
        descriptionKey: "eateries.hardees.detail1"
      },
      {
        imageUrl: "/eateries/hardees/item2.webp",
        descriptionKey: "eateries.hardees.detail2"
      },
      {
        imageUrl: "/eateries/hardees/item3.webp",
        descriptionKey: "eateries.hardees.detail3"
      }
    ]
  },
  {
    id: "feterty",
    name: "Feterty",
    logoUrl: "/brands/feterty edited.webp",
    phone: "+20-123-456-7893",
    details: [
      {
        imageUrl: "/eateries/feterty/item1.webp",
        descriptionKey: "eateries.feterty.detail1"
      },
      {
        imageUrl: "/eateries/feterty/item2.webp",
        descriptionKey: "eateries.feterty.detail2"
      },
      {
        imageUrl: "/eateries/feterty/item3.webp",
        descriptionKey: "eateries.feterty.detail3"
      }
    ]
  }
];
