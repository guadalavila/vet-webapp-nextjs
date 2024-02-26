import { Client } from './Client';
import { Pathology } from './Pathology';
import { UserVet } from './User';

export enum GenderPet {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum SpeciePet {
  Canine = 'canine',
  Feline = 'feline',
  Equine = 'equine',
  Birds = 'bird',
  Rabbit = 'rabbit',
  Porcine = 'porcine',
  Ferret = 'ferret',
  Insect = 'insect',
  Rodent = 'rodent',
  Other = 'other',
}

export type Pet = {
  _id: string;
  createdBy: UserVet | string;
  vetId: string;
  client: {
    _id: string;
    name: string;
    lastName: string;
  };
  name: string;
  chip?: string;
  gender: GenderPet;
  specie: SpeciePet;
  breed?: string;
  color?: string;
  size: string;
  age?: number;
  sterilized: boolean;
  pathologies?: string[] | Pathology[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
};
