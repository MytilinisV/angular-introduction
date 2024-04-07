import exp from "constants";

export interface Person {
    givenName: string;
    sirName: string;
    age: number;
    email: string;
    address: string;
}

export interface EPerson {
    givenName: string;
    sirName: string;
    age: string;
    email: string;
    education: string;
}

export const ManyPerson: EPerson[] = [
    {
      "givenName": "Henry",
      "sirName": "Hernandez",
      "age": "66",
      "email": "h_l_hernandez@ymail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Amelia",
      "sirName": "Miller",
      "age": "75",
      "email": "a.m.miller@outlook.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Henry",
      "sirName": "Reed",
      "age": "59",
      "email": "hareed@aol.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Ashley",
      "sirName": "Ward",
      "age": "22",
      "email": "ashleysueward@hotmail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Erin",
      "sirName": "Baker",
      "age": "37",
      "email": "erin_baker@live.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Charles",
      "sirName": "Lee",
      "age": "73",
      "email": "charleslee@ymail.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Lauren",
      "sirName": "Walker",
      "age": "74",
      "email": "laurenelizabethwalker@live.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Erin",
      "sirName": "Morris",
      "age": "50",
      "email": "e.m@outlook.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Oliver",
      "sirName": "Thomas",
      "age": "30",
      "email": "oliver.scott.thomas@aol.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Elizabeth",
      "sirName": "Bell",
      "age": "30",
      "email": "elizabeth_bell@rocketmail.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Heather",
      "sirName": "Reed",
      "age": "41",
      "email": "heather.dawn@live.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Jose",
      "sirName": "Cooper",
      "age": "58",
      "email": "j.r.cooper@rocketmail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Amanda",
      "sirName": "Rivera",
      "age": "44",
      "email": "a.s.rivera@aol.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Olivia",
      "sirName": "Nelson",
      "age": "68",
      "email": "o_m_nelson19@gmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Brandon",
      "sirName": "Young",
      "age": "50",
      "email": "b.j.young@outlook.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Ava",
      "sirName": "Jenkins",
      "age": "53",
      "email": "ava@live.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Kelsey",
      "sirName": "Kelly",
      "age": "40",
      "email": "kelseykelly@outlook.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Daniel",
      "sirName": "Cooper",
      "age": "45",
      "email": "daniel.e.cooper@rocketmail.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Adam",
      "sirName": "Russell",
      "age": "41",
      "email": "adamdrussell@rocketmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Charles",
      "sirName": "Cox",
      "age": "21",
      "email": "charles.matthew.cox@yahoo.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Jasmine",
      "sirName": "Sanders",
      "age": "37",
      "email": "jasminesanders@aol.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Samantha",
      "sirName": "Jones",
      "age": "50",
      "email": "samantham@live.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Joseph",
      "sirName": "Thompson",
      "age": "39",
      "email": "josephfthompson@live.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Sofia",
      "sirName": "Barnes",
      "age": "24",
      "email": "sbarnes@live.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Natalie",
      "sirName": "Cooper",
      "age": "41",
      "email": "n.cooper84@rocketmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Jonathan",
      "sirName": "Collins",
      "age": "20",
      "email": "jonathan@gmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Oliver",
      "sirName": "Roberts",
      "age": "63",
      "email": "o_r_roberts@outlook.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Joshua",
      "sirName": "Carter",
      "age": "59",
      "email": "joshuarichardcarter@outlook.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Benjamin",
      "sirName": "Ross",
      "age": "72",
      "email": "benjamin_francis_ross@gmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Abigail",
      "sirName": "Cooper",
      "age": "24",
      "email": "abigailanncooper@live.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Grace",
      "sirName": "Collins",
      "age": "46",
      "email": "g_collins@outlook.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "James",
      "sirName": "Henderson",
      "age": "32",
      "email": "j_s_henderson@rocketmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Charlotte",
      "sirName": "Young",
      "age": "55",
      "email": "charlotte_l_young@aol.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "David",
      "sirName": "Kelly",
      "age": "32",
      "email": "dkelly33@gmail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Nicholas",
      "sirName": "Murphy",
      "age": "18",
      "email": "nmurphy33@live.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Amber",
      "sirName": "Green",
      "age": "51",
      "email": "amber_m_green@live.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Henry",
      "sirName": "Scott",
      "age": "47",
      "email": "henry.scott19@yahoo.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Maria",
      "sirName": "Clark",
      "age": "20",
      "email": "mclark@ymail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Jose",
      "sirName": "Sanchez",
      "age": "54",
      "email": "jose.t11@yahoo.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Maria",
      "sirName": "Roberts",
      "age": "23",
      "email": "maria.michelle.roberts@hotmail.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Nicole",
      "sirName": "Williams",
      "age": "39",
      "email": "n.williams@hotmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Isaac",
      "sirName": "Flores",
      "age": "27",
      "email": "isaac_a75@ymail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Alexander",
      "sirName": "Hayes",
      "age": "64",
      "email": "alexanderroberthayes@hotmail.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "William",
      "sirName": "Harris",
      "age": "57",
      "email": "william_charles_harris@hotmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Laura",
      "sirName": "Powell",
      "age": "47",
      "email": "l.i.powell@yahoo.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Brandon",
      "sirName": "Sanchez",
      "age": "18",
      "email": "b_j_sanchez@outlook.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Allison",
      "sirName": "Washington",
      "age": "47",
      "email": "a.m.washington@yahoo.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Erin",
      "sirName": "Torres",
      "age": "36",
      "email": "erin.torres@ymail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Nathan",
      "sirName": "Barnes",
      "age": "56",
      "email": "n.barnes@rocketmail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Henry",
      "sirName": "Lewis",
      "age": "60",
      "email": "henry46@ymail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Tyler",
      "sirName": "Roberts",
      "age": "21",
      "email": "t_roberts@rocketmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Brittany",
      "sirName": "Sanders",
      "age": "30",
      "email": "brittany.i.sanders@outlook.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Julian",
      "sirName": "Gray",
      "age": "47",
      "email": "juliananthonygray@hotmail.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Nicholas",
      "sirName": "Hill",
      "age": "47",
      "email": "nicholas@ymail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Oliver",
      "sirName": "Clark",
      "age": "41",
      "email": "o_clark@rocketmail.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Brian",
      "sirName": "Hill",
      "age": "59",
      "email": "brian.joseph@outlook.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Aaron",
      "sirName": "Powell",
      "age": "39",
      "email": "aaron_powell@ymail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Lauren",
      "sirName": "Washington",
      "age": "61",
      "email": "laurenmarywashington@gmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "David",
      "sirName": "Jackson",
      "age": "31",
      "email": "djackson47@gmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Tyler",
      "sirName": "Rivera",
      "age": "62",
      "email": "t_rivera@yahoo.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Stephen",
      "sirName": "Adams",
      "age": "45",
      "email": "s_r_adams@hotmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Charles",
      "sirName": "Bell",
      "age": "71",
      "email": "c.bell@hotmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Grace",
      "sirName": "Davis",
      "age": "62",
      "email": "g.m.davis@aol.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Mateo",
      "sirName": "Davis",
      "age": "65",
      "email": "mateo.a54@live.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Joshua",
      "sirName": "Rodriguez",
      "age": "35",
      "email": "jarodriguez@rocketmail.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Anna",
      "sirName": "Perez",
      "age": "49",
      "email": "annasueperez46@outlook.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Oliver",
      "sirName": "Young",
      "age": "67",
      "email": "o.a.young@hotmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Samantha",
      "sirName": "Rogers",
      "age": "35",
      "email": "s_rogers@live.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Theodore",
      "sirName": "Wright",
      "age": "47",
      "email": "t_wright@hotmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Anna",
      "sirName": "Barnes",
      "age": "32",
      "email": "anna_barnes@hotmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Anna",
      "sirName": "Watson",
      "age": "23",
      "email": "a_watson@ymail.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Anna",
      "sirName": "Roberts",
      "age": "66",
      "email": "anna_grace_roberts@hotmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Ava",
      "sirName": "Clark",
      "age": "62",
      "email": "avarclark@aol.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Theodore",
      "sirName": "King",
      "age": "50",
      "email": "t_a_king@rocketmail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Kelsey",
      "sirName": "Thompson",
      "age": "72",
      "email": "kthompson@ymail.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Elizabeth",
      "sirName": "Walker",
      "age": "54",
      "email": "ewalker@rocketmail.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Brianna",
      "sirName": "Stewart",
      "age": "63",
      "email": "brianna_irene27@live.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Owen",
      "sirName": "Hill",
      "age": "65",
      "email": "o.w.hill@outlook.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Owen",
      "sirName": "Allen",
      "age": "19",
      "email": "owen@rocketmail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Austin",
      "sirName": "Evans",
      "age": "22",
      "email": "a_g_evans@live.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Jack",
      "sirName": "Hughes",
      "age": "59",
      "email": "jack_j_hughes1@yahoo.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Adam",
      "sirName": "Morgan",
      "age": "27",
      "email": "a_morgan@live.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Amelia",
      "sirName": "Ross",
      "age": "33",
      "email": "ameliaroseross@aol.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Chelsea",
      "sirName": "Carter",
      "age": "46",
      "email": "chelsea_lou_carter@outlook.com",
      "education": "Some college, no degree"
    },
    {
      "givenName": "Samuel",
      "sirName": "Williams",
      "age": "51",
      "email": "sm@ymail.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Andrew",
      "sirName": "Sanders",
      "age": "38",
      "email": "andrew.j.sanders@ymail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "William",
      "sirName": "Morgan",
      "age": "29",
      "email": "william.robert.morgan@ymail.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Sean",
      "sirName": "Hernandez",
      "age": "36",
      "email": "shernandez@aol.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Gabriel",
      "sirName": "Phillips",
      "age": "29",
      "email": "g.phillips@gmail.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Emily",
      "sirName": "Anderson",
      "age": "60",
      "email": "emilyireneanderson24@yahoo.com",
      "education": "Associate degree"
    },
    {
      "givenName": "Kevin",
      "sirName": "Lee",
      "age": "62",
      "email": "kevin_lee@aol.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Brittany",
      "sirName": "Powell",
      "age": "26",
      "email": "b_a_powell@rocketmail.com",
      "education": "Doctoral degree"
    },
    {
      "givenName": "Austin",
      "sirName": "Jackson",
      "age": "58",
      "email": "austin.jackson@yahoo.com",
      "education": "Bachelor’s degree"
    },
    {
      "givenName": "Adam",
      "sirName": "Anderson",
      "age": "35",
      "email": "a_a_anderson@aol.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Dylan",
      "sirName": "Lewis",
      "age": "65",
      "email": "d_j78@gmail.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Brittany",
      "sirName": "Collins",
      "age": "45",
      "email": "brittany.kay.collins@hotmail.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Isaac",
      "sirName": "Phillips",
      "age": "28",
      "email": "isaacjoseph@outlook.com",
      "education": "Less than high school"
    },
    {
      "givenName": "Sarah",
      "sirName": "Kelly",
      "age": "33",
      "email": "sarah.kelly@yahoo.com",
      "education": "Master’s degree"
    },
    {
      "givenName": "Grace",
      "sirName": "Hayes",
      "age": "40",
      "email": "gracehayes@yahoo.com",
      "education": "High school diploma or equivalent"
    },
    {
      "givenName": "Heather",
      "sirName": "Scott",
      "age": "61",
      "email": "h_scott@rocketmail.com",
      "education": "Doctoral degree"
    }
  ]