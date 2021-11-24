export interface SkillSet {
    skillName: string;
    rating: number;
}

export interface User {
    id: string;
    name: string;
    userName: string;
    role: string;
    address: string;
    mobile: string;
    email: string;
    password: string;
    skillSet: SkillSet[];
}