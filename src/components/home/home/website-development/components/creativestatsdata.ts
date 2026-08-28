export interface FunFact {
  id: number;
  value: number;
  suffix: string;
  label: string;
  delay: string;
}

const FUNFACTS = [
	{
		id: 1,
		value: 150,
		suffix: "+",
		label: "Dynamic Websites",
		delay: ".3",
	},
	{
		id: 2,
		value: 100,
		suffix: "+",
		label: "Active Clients",
		delay: ".5",
	},
	{
		id: 3,
		value: 80,
		suffix: "+",
		label: "Chennai Clients",
		delay: ".7",
	},
	{
		id: 4,
		value: 100,
		suffix: "%",
		label: "Client Satisfaction",
		delay: ".8",
	},
];

export default FUNFACTS;