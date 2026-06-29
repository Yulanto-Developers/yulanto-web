
export interface ContactLocation {
  id:number;
  city: string;
  email: string;
  phone: string;
  image: string;
  mapLink: string;
  speed?: string;
  isActive?: boolean;
  extraClass?: string;
};

export interface ContactUsFormValuesDt {
  name: string;
  email: string;
  website?: string;
  message: string;
};

export interface ContactFormValuesDt {
  email: string;
  name: string;
  phone: string;
  company?: string;
  budget?: string;
  message: string;
};

export interface OfficeLocationDt  {
  id: number;
  city: string;
  address: string[];
  phone: string;
  email: string;
  directionsLink: string;
};

export interface  contactMeFormValuesDT {
    name: string;
    email: string;
    website?: string;
    message: string;
    interest: string[];
};
