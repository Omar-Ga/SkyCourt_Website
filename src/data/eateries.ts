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
        imageUrl: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.kfc.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.kfc.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.kfc.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.kfc.detail4"
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
        imageUrl: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.pizza_hut.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.pizza_hut.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.pizza_hut.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.pizza_hut.detail4"
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
        imageUrl: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hardees.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hardees.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hardees.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hardees.detail4"
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
        imageUrl: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.feterty.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.feterty.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.feterty.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.feterty.detail4"
      }
    ]
  },
  {
    id: "hans",
    name: "Hans",
    logoUrl: "/brands/hans edited.webp",
    phone: "+20-123-456-7894",
    details: [
      {
        imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hans.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hans.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hans.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.hans.detail4"
      }
    ]
  },
  {
    id: "blaban",
    name: "Blaban",
    logoUrl: "/brands/blaban edited.webp",
    phone: "+20-123-456-7895",
    details: [
      {
        imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.blaban.detail1"
      },
      {
        imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.blaban.detail2"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.blaban.detail3"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=800",
        descriptionKey: "eateries.blaban.detail4"
      }
    ]
  }
];
