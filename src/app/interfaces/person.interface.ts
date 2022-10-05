import { departmentInterface } from "./department.interface";

export interface PersonInterface {
  id?: number;
  name: string;
  department: departmentInterface;
  performance: number;
  wellness: number;
  monthsWorking: number;
  fav?: boolean
}
