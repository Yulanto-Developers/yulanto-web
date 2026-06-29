export interface TeamSkillDT {
    title: string;
    value: number;
}

export interface TeamSocialLinksDT {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
    behance?: string;
}

export interface TeamItemDT {
    id: number;
    image: string;
    name: string;
    role: string;

    // optional old field
    animation?: string;

    // details page data
    bio?: string;
    location?: string;
    email?: string;
    phone?: string;
    website?: string;

    age?: number;
    gender?: string;

    qualification?: string;
    experience_years?: string;

    social_links?: TeamSocialLinksDT;

    experiences?: string[];

    skills?: TeamSkillDT[];
}