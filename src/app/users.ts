export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function getUsers(): Promise<User[]> {
  return [
    {
      id: 11,
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      website: "johndoe.com",
      company: {
        name: "Doe Enterprises",
        catchPhrase: "Innovative solutions for the future",
        bs: "transform cutting-edge technologies",
      },
    },
    {
      id: 12,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      website: "janesmith.com",
      company: {
        name: "Smith Co.",
        catchPhrase: "Simplifying complex problems",
        bs: "optimize scalable solutions",
      },
    },
    {
      id: 13,
      name: "Michael Johnson",
      username: "michaeljohnson",
      email: "michael.johnson@example.com",
      phone: "555-123-4567",
      website: "michaeljohnson.com",
      company: {
        name: "Johnson Corp.",
        catchPhrase: "Driving innovation forward",
        bs: "leverage emerging technologies",
      },
    },
    {
      id: 14,
      name: "Emily Davis",
      username: "emilydavis",
      email: "emily.davis@example.com",
      phone: "789-012-3456",
      website: "emilydavis.com",
      company: {
        name: "Davis Industries",
        catchPhrase: "Creating a better tomorrow",
        bs: "disrupt traditional industries",
      },
    },
    {
      id: 15,
      name: "David Wilson",
      username: "davidwilson",
      email: "david.wilson@example.com",
      phone: "321-654-0987",
      website: "davidwilson.com",
      company: {
        name: "Wilson Solutions",
        catchPhrase: "Empowering businesses to succeed",
        bs: "drive digital transformation",
      },
    },
    {
      id: 16,
      name: "Sarah Thompson",
      username: "sarahthompson",
      email: "sarah.thompson@example.com",
      phone: "987-321-6540",
      website: "sarahthompson.com",
      company: {
        name: "Thompson Enterprises",
        catchPhrase: "Innovating for a better future",
        bs: "revolutionize industries",
      },
    },
    {
      id: 17,
      name: "Christopher Martinez",
      username: "christophermartinez",
      email: "christopher.martinez@example.com",
      phone: "456-789-0123",
      website: "christophermartinez.com",
      company: {
        name: "Martinez Co.",
        catchPhrase: "Transforming the way we work",
        bs: "optimize business processes",
      },
    },
    {
      id: 18,
      name: "Olivia Anderson",
      username: "oliviaanderson",
      email: "olivia.anderson@example.com",
      phone: "654-098-3217",
      website: "oliviaanderson.com",
      company: {
        name: "Anderson Solutions",
        catchPhrase: "Driving innovation through collaboration",
        bs: "empower teams to succeed",
      },
    },
    {
      id: 19,
      name: "Daniel Wilson",
      username: "danielwilson",
      email: "daniel.wilson@example.com",
      phone: "012-345-6789",
      website: "danielwilson.com",
      company: {
        name: "Wilson Enterprises",
        catchPhrase: "Building a better future together",
        bs: "innovate for sustainable growth",
      },
    },
    {
      id: 20,
      name: "Sophia Thompson",
      username: "sophiathompson",
      email: "sophia.thompson@example.com",
      phone: "789-012-3456",
      website: "sophiathompson.com",
      company: {
        name: "Thompson Corp.",
        catchPhrase: "Driving digital transformation",
        bs: "leverage data analytics",
      },
    },
    {
      id: 21,
      name: "Liam Johnson",
      username: "liamjohnson",
      email: "liam.johnson@example.com",
      phone: "555-555-5555",
      website: "liamjohnson.com",
      company: {
        name: "Johnson Co.",
        catchPhrase: "Innovating for a better tomorrow",
        bs: "drive technological advancements",
      },
    },
    {
      id: 22,
      name: "Emma Davis",
      username: "emmadavis",
      email: "emma.davis@example.com",
      phone: "111-111-1111",
      website: "emmadavis.com",
      company: {
        name: "Davis Corp.",
        catchPhrase: "Transforming industries through innovation",
        bs: "optimize business operations",
      },
    },
    {
      id: 23,
      name: "Noah Wilson",
      username: "noahwilson",
      email: "noah.wilson@example.com",
      phone: "222-222-2222",
      website: "noahwilson.com",
      company: {
        name: "Wilson Co.",
        catchPhrase: "Driving digital revolution",
        bs: "leverage emerging technologies",
      },
    },
    {
      id: 24,
      name: "Olivia Johnson",
      username: "oliviajohnson",
      email: "olivia.johnson@example.com",
      phone: "333-333-3333",
      website: "oliviajohnson.com",
      company: {
        name: "Johnson Enterprises",
        catchPhrase: "Empowering businesses to thrive",
        bs: "innovate for sustainable growth",
      },
    },
    {
      id: 25,
      name: "Liam Smith",
      username: "liamsmith",
      email: "liam.smith@example.com",
      phone: "444-444-4444",
      website: "liamsmith.com",
      company: {
        name: "Smith Corp.",
        catchPhrase: "Simplifying complex problems",
        bs: "optimize scalable solutions",
      },
    },
    {
      id: 26,
      name: "Emma Wilson",
      username: "emmawilson",
      email: "emma.wilson@example.com",
      phone: "666-666-6666",
      website: "emmawilson.com",
      company: {
        name: "Wilson Solutions",
        catchPhrase: "Driving innovation forward",
        bs: "leverage emerging technologies",
      },
    },
    {
      id: 27,
      name: "Noah Davis",
      username: "noahdavis",
      email: "noah.davis@example.com",
      phone: "777-777-7777",
      website: "noahdavis.com",
      company: {
        name: "Davis Industries",
        catchPhrase: "Creating a better tomorrow",
        bs: "disrupt traditional industries",
      },
    },
    {
      id: 28,
      name: "Olivia Smith",
      username: "oliviasmith",
      email: "olivia.smith@example.com",
      phone: "888-888-8888",
      website: "oliviasmith.com",
      company: {
        name: "Smith Enterprises",
        catchPhrase: "Innovating for a better future",
        bs: "revolutionize industries",
      },
    },
    {
      id: 29,
      name: "Liam Davis",
      username: "liamdavis",
      email: "liam.davis@example.com",
      phone: "999-999-9999",
      website: "liamdavis.com",
      company: {
        name: "Davis Co.",
        catchPhrase: "Transforming the way we work",
        bs: "optimize business processes",
      },
    },
    {
      id: 30,
      name: "Emma Smith",
      username: "emmasmith",
      email: "emma.smith@example.com",
      phone: "000-000-0000",
      website: "emmasmith.com",
      company: {
        name: "Smith Solutions",
        catchPhrase: "Driving innovation through collaboration",
        bs: "empower teams to succeed",
      },
    },
  ];
}
