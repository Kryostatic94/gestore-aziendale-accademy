export interface Developer {
  id?: string;
  name: string;
  surname: string;
  skills: Skill[],
  dateOfBirth: Date,
}

interface Skill {
  skill: string;
}
